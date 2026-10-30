import { Router, Request, Response } from 'express';
import { TN_ALL_38_DISTRICTS } from '../data/all-districts-master';
import { SOIL_PARAMETERS } from '../data/soil-mock-data';
import {
  apiCache,
  CACHE_TTL,
  API_SOURCE_META,
  normalizeDistrictSoilResponse,
  normalizeBlockRecord,
  fetchAdapter
} from '../services/api-cache.service';
import { ApiSuccessResponse, ApiErrorResponse, DistrictMasterRecord } from '../models/api-contracts.model';

export const apiRouter = Router();

// Middleware: CORS & Content-Type for all API routes
apiRouter.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }
  next();
});

// Helper response wrappers
function sendSuccess<T>(res: Response, data: T, cached = true, total?: number, status = 200) {
  const payload: ApiSuccessResponse<T> = {
    success: true,
    data,
    meta: {
      source: API_SOURCE_META.name,
      lastUpdated: API_SOURCE_META.lastSuccessfulSync,
      cached,
      ...(total !== undefined ? { total } : {})
    }
  };
  return res.status(status).json(payload);
}

function sendError(res: Response, status: number, code: string, message: string, details?: unknown) {
  const payload: ApiErrorResponse = {
    success: false,
    error: {
      code,
      message,
      ...(details ? { details } : {})
    }
  };
  return res.status(status).json(payload);
}

// ----------------------------------------------------
// 1. Health & Status Endpoints
// ----------------------------------------------------

apiRouter.get('/v1/health', (req: Request, res: Response) => {
  return sendSuccess(res, {
    status: 'UP',
    version: '1.0.0',
    environment: 'production-serverless',
    timestamp: new Date().toISOString()
  }, false);
});

apiRouter.get('/v1/meta/status', (req: Request, res: Response) => {
  return sendSuccess(res, {
    cacheEntries: apiCache.size(),
    lastRefresh: API_SOURCE_META.lastSuccessfulSync,
    sourceHealth: {
      officialPortal: 'AVAILABLE',
      districtSoilEndpoint: 'AVAILABLE',
      fetchPhpAdapter: fetchAdapter.getAdapterStatus()
    }
  }, false);
});

apiRouter.get('/v1/meta/source', (req: Request, res: Response) => {
  return sendSuccess(res, {
    source: API_SOURCE_META.name,
    officialPortals: {
      english: API_SOURCE_META.portalEn,
      tamil: API_SOURCE_META.portalTa
    },
    disclaimer: API_SOURCE_META.disclaimer,
    independentNotice: API_SOURCE_META.independentNotice,
    attribution: 'Government of Tamil Nadu - Department of Agriculture & Farmers Welfare'
  }, true);
});

// ----------------------------------------------------
// 2. Districts Endpoints
// ----------------------------------------------------

/**
 * GET /api/v1/districts/search?q={query}
 * Note: Must come before /:districtId to prevent conflict!
 */
apiRouter.get('/v1/districts/search', (req: Request, res: Response) => {
  const query = String(req.query['q'] || '').toLowerCase().trim();
  if (!query) {
    return sendError(res, 400, 'INVALID_QUERY', 'Search query parameter "q" is required.');
  }

  const matches = TN_ALL_38_DISTRICTS.filter((d: DistrictMasterRecord) =>
    d.nameEn.toLowerCase().includes(query) ||
    d.nameTa.toLowerCase().includes(query) ||
    d.headquartersEn.toLowerCase().includes(query) ||
    d.headquartersTa.toLowerCase().includes(query) ||
    d.code.toLowerCase().includes(query) ||
    d.slug.toLowerCase().includes(query)
  );

  return sendSuccess(res, matches, true, matches.length);
});

/**
 * GET /api/v1/districts
 * Return all 38 districts with master information
 */
apiRouter.get('/v1/districts', (req: Request, res: Response) => {
  const cacheKey = 'all_districts';
  const cached = apiCache.get<typeof TN_ALL_38_DISTRICTS>(cacheKey);

  if (cached) {
    return sendSuccess(res, cached.data, true, cached.data.length);
  }

  apiCache.set(cacheKey, TN_ALL_38_DISTRICTS, CACHE_TTL.DISTRICT_MASTER);
  return sendSuccess(res, TN_ALL_38_DISTRICTS, false, TN_ALL_38_DISTRICTS.length);
});

/**
 * GET /api/v1/districts/:districtId
 * Return district details by districtId (e.g. 610) or slug (e.g. ariyalur)
 */
apiRouter.get('/v1/districts/:districtId', (req: Request, res: Response) => {
  const param = String(req.params['districtId'] || '');
  const districtIdNum = Number(param);

  const district = TN_ALL_38_DISTRICTS.find(
    (d: DistrictMasterRecord) => (!isNaN(districtIdNum) && d.districtId === districtIdNum) || d.slug === param.toLowerCase()
  );

  if (!district) {
    return sendError(res, 404, 'DISTRICT_NOT_FOUND', `District with ID or slug "${param}" was not found.`);
  }

  return sendSuccess(res, district, true);
});

// ----------------------------------------------------
// 3. District Soil Information
// ----------------------------------------------------

/**
 * GET /api/v1/districts/:districtId/soil-summary
 * Retrieve and normalize district soil statistics
 */
apiRouter.get('/v1/districts/:districtId/soil-summary', (req: Request, res: Response) => {
  const param = String(req.params['districtId'] || '');
  const districtIdNum = Number(param);

  const district = TN_ALL_38_DISTRICTS.find(
    (d: DistrictMasterRecord) => (!isNaN(districtIdNum) && d.districtId === districtIdNum) || d.slug === param.toLowerCase()
  );

  if (!district) {
    return sendError(res, 404, 'DISTRICT_NOT_FOUND', `District "${param}" was not found.`);
  }

  const cacheKey = `soil_summary_${district.districtId}`;
  const cached = apiCache.get(cacheKey);

  if (cached) {
    return sendSuccess(res, cached.data, true);
  }

  const normalized = normalizeDistrictSoilResponse(district);
  apiCache.set(cacheKey, normalized, CACHE_TTL.DISTRICT_SOIL);
  return sendSuccess(res, normalized, false);
});

/**
 * GET /api/v1/districts/:districtId/soil-parameters
 * Return available soil parameter classifications and benchmarks
 */
apiRouter.get('/v1/districts/:districtId/soil-parameters', (req: Request, res: Response) => {
  const param = String(req.params['districtId'] || '');
  const districtIdNum = Number(param);

  const district = TN_ALL_38_DISTRICTS.find(
    (d: DistrictMasterRecord) => (!isNaN(districtIdNum) && d.districtId === districtIdNum) || d.slug === param.toLowerCase()
  );

  if (!district) {
    return sendError(res, 404, 'DISTRICT_NOT_FOUND', `District "${param}" was not found.`);
  }

  return sendSuccess(res, {
    districtId: district.districtId,
    districtName: district.nameEn,
    districtNameTamil: district.nameTa,
    parameters: SOIL_PARAMETERS
  }, true);
});

// ----------------------------------------------------
// 4. Blocks Endpoints
// ----------------------------------------------------

/**
 * GET /api/v1/districts/:districtId/blocks
 * Return available blocks for selected district
 */
apiRouter.get('/v1/districts/:districtId/blocks', (req: Request, res: Response) => {
  const param = String(req.params['districtId'] || '');
  const districtIdNum = Number(param);

  const district = TN_ALL_38_DISTRICTS.find(
    (d: DistrictMasterRecord) => (!isNaN(districtIdNum) && d.districtId === districtIdNum) || d.slug === param.toLowerCase()
  );

  if (!district) {
    return sendError(res, 404, 'DISTRICT_NOT_FOUND', `District "${param}" was not found.`);
  }

  const cacheKey = `district_blocks_${district.districtId}`;
  const cached = apiCache.get(cacheKey);

  if (cached) {
    return sendSuccess(res, cached.data, true, (cached.data as unknown[]).length);
  }

  const normalizedBlocks = district.blocks.map((b) => normalizeBlockRecord(district, b));
  apiCache.set(cacheKey, normalizedBlocks, CACHE_TTL.BLOCKS);
  return sendSuccess(res, normalizedBlocks, false, normalizedBlocks.length);
});

/**
 * GET /api/v1/blocks/:blockId
 * Return individual block details across any district
 */
apiRouter.get('/v1/blocks/:blockId', (req: Request, res: Response) => {
  const blockIdParam = String(req.params['blockId'] || '');

  for (const d of TN_ALL_38_DISTRICTS) {
    const blockMatch = d.blocks.find(
      (b) => b.blockId === blockIdParam || (b.blockLookupId && b.blockLookupId.toString() === blockIdParam)
    );
    if (blockMatch) {
      const normalized = normalizeBlockRecord(d, blockMatch);
      return sendSuccess(res, normalized, true);
    }
  }

  return sendError(res, 404, 'BLOCK_NOT_FOUND', `Block with identifier "${blockIdParam}" was not found.`);
});

// ----------------------------------------------------
// 5. Map & Asset Endpoints
// ----------------------------------------------------

/**
 * GET /api/v1/map/districts
 * Return district names, district IDs, SVG click IDs, and map coordinates metadata
 */
apiRouter.get('/v1/map/districts', (req: Request, res: Response) => {
  const mapData = TN_ALL_38_DISTRICTS.map((d: DistrictMasterRecord) => ({
    districtId: d.districtId,
    svgClickId: d.svgClickId,
    name: d.nameEn,
    nameTamil: d.nameTa,
    slug: d.slug,
    code: d.code,
    agroZone: d.agroZoneEn,
    totalBlocks: d.totalBlocks,
    headquarters: d.headquartersEn
  }));

  return sendSuccess(res, mapData, true, mapData.length);
});

/**
 * GET /api/v1/map/assets
 * Return official map and logo asset references
 */
apiRouter.get('/v1/map/assets', (req: Request, res: Response) => {
  return sendSuccess(res, {
    districtMap: {
      url: 'https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/tnmap.jpg',
      description: 'Official Tamil Nadu District & Soil Order Distribution Map',
      format: 'image/jpeg'
    },
    logos: {
      english: {
        url: 'https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/Group_english.svg',
        description: 'Mannvalam Official English Logo Banner',
        format: 'image/svg+xml'
      },
      tamil: {
        url: 'https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/footer_tamil.svg',
        description: 'Mannvalam Official Tamil Logo Banner',
        format: 'image/svg+xml'
      }
    }
  }, true);
});

// ----------------------------------------------------
// 6. Manual Cache Management & Refresh (Admin / Cron)
// ----------------------------------------------------

apiRouter.post('/v1/meta/refresh', (req: Request, res: Response) => {
  // Clear cache and re-initialize
  apiCache.clear();
  API_SOURCE_META.lastSuccessfulSync = new Date().toISOString();

  return sendSuccess(res, {
    message: 'API Cache successfully cleared and refreshed.',
    refreshedDistricts: TN_ALL_38_DISTRICTS.length,
    timestamp: API_SOURCE_META.lastSuccessfulSync
  }, false);
});
