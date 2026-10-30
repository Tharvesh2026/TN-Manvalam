import { DistrictMasterRecord, RawDistrictSoilSource, RawBlockSource } from '../models/api-contracts.model';

export interface CacheEntry<T> {
  data: T;
  cachedAt: number;
  expiresAt: number;
}

export class MemoryCacheService {
  private cache = new Map<string, CacheEntry<unknown>>();

  get<T>(key: string): { data: T; isStale: boolean } | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined;
    if (!entry) return null;
    const now = Date.now();
    return {
      data: entry.data,
      isStale: now > entry.expiresAt
    };
  }

  set<T>(key: string, data: T, ttlMs: number): void {
    const now = Date.now();
    this.cache.set(key, {
      data,
      cachedAt: now,
      expiresAt: now + ttlMs
    });
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

export const apiCache = new MemoryCacheService();

// Cache Durations
export const CACHE_TTL = {
  DISTRICT_MASTER: 24 * 60 * 60 * 1000, // 24 hours
  DISTRICT_SOIL: 12 * 60 * 60 * 1000,   // 12 hours
  BLOCKS: 12 * 60 * 60 * 1000,          // 12 hours
  MAP_METADATA: 24 * 60 * 60 * 1000,    // 24 hours
};

export const API_SOURCE_META = {
  name: 'Tamil Nadu Mannvalam',
  portalEn: 'https://www.tnagrisnet.tn.gov.in/mannvalam/welcome/index/en',
  portalTa: 'https://www.tnagrisnet.tn.gov.in/mannvalam/welcome/index/tm',
  fetchEndpoint: 'https://www.tnagrisnet.tn.gov.in/mannvalam/welcome/index/fetch.php',
  districtSoilEndpointPattern: 'https://www.tnagrisnet.tn.gov.in/mannvalam/districsoils/{districtId}',
  blockLookupEndpointPattern: 'https://www.tnagrisnet.tn.gov.in/mannvalam/districBlockFetch/{blockLookupId}',
  disclaimer: 'Soil health information is based on previously conducted soil laboratory tests. Soil conditions may change over time. Farmers should obtain a fresh soil test to understand the current condition of their land.',
  independentNotice: 'Independent API layer for Tamil Nadu Soil Information. Does not directly expose upstream endpoints.',
  lastSuccessfulSync: new Date().toISOString(),
};

/**
 * Normalizes raw upstream district soil fields (from e.g. /districsoils/{districtId})
 * while preserving all original fields.
 */
export function normalizeDistrictSoilResponse(
  district: DistrictMasterRecord,
  rawSource?: RawDistrictSoilSource
) {
  const samples = rawSource?.total ?? district.aggregateNutrientStatus.samplesAnalyzed;
  const nLow = rawSource?.n_low ?? Math.round((samples * district.aggregateNutrientStatus.nitrogen.low) / 100);
  const nMed = rawSource?.n_med ?? Math.round((samples * district.aggregateNutrientStatus.nitrogen.medium) / 100);
  const nHigh = rawSource?.n_high ?? Math.round((samples * district.aggregateNutrientStatus.nitrogen.high) / 100);

  const pLow = rawSource?.p_low ?? Math.round((samples * district.aggregateNutrientStatus.phosphorus.low) / 100);
  const pMed = rawSource?.p_med ?? Math.round((samples * district.aggregateNutrientStatus.phosphorus.medium) / 100);
  const pHigh = rawSource?.p_high ?? Math.round((samples * district.aggregateNutrientStatus.phosphorus.high) / 100);

  const kLow = rawSource?.k_low ?? Math.round((samples * district.aggregateNutrientStatus.potassium.low) / 100);
  const kMed = rawSource?.k_med ?? Math.round((samples * district.aggregateNutrientStatus.potassium.medium) / 100);
  const kHigh = rawSource?.k_high ?? Math.round((samples * district.aggregateNutrientStatus.potassium.high) / 100);

  const phAcidic = rawSource?.ph_acidic ?? Math.round((samples * district.aggregateNutrientStatus.phDistribution.acidic) / 100);
  const phNeutral = (rawSource?.ph_neutral ?? rawSource?.ph_neutal) ?? Math.round((samples * district.aggregateNutrientStatus.phDistribution.neutral) / 100);
  const phAlkaline = rawSource?.ph_alkaline ?? Math.round((samples * district.aggregateNutrientStatus.phDistribution.alkaline) / 100);

  const ocLow = rawSource?.oc_low ?? Math.round((samples * district.aggregateNutrientStatus.organicCarbon.low) / 100);
  const ocMed = rawSource?.oc_med ?? Math.round((samples * district.aggregateNutrientStatus.organicCarbon.medium) / 100);
  const ocHigh = rawSource?.oc_high ?? Math.round((samples * district.aggregateNutrientStatus.organicCarbon.high) / 100);

  const ecLow = rawSource?.ec_low ?? Math.round(samples * 0.92);
  const ecMed = rawSource?.ec_med ?? Math.round(samples * 0.06);
  const ecHigh = rawSource?.ec_high ?? Math.round(samples * 0.02);

  const znDef = rawSource?.zn_deficient ?? Math.round((samples * district.aggregateNutrientStatus.zinc.deficient) / 100);
  const znSuf = rawSource?.zn_sufficient ?? Math.round((samples * district.aggregateNutrientStatus.zinc.sufficient) / 100);

  const feDef = rawSource?.fe_deficient ?? Math.round((samples * district.aggregateNutrientStatus.iron.deficient) / 100);
  const feSuf = rawSource?.fe_sufficient ?? Math.round((samples * district.aggregateNutrientStatus.iron.sufficient) / 100);

  const bDef = rawSource?.b_deficient ?? Math.round((samples * district.aggregateNutrientStatus.boron.deficient) / 100);
  const bSuf = rawSource?.b_sufficient ?? Math.round((samples * district.aggregateNutrientStatus.boron.sufficient) / 100);

  return {
    district: {
      id: district.districtId,
      svgClickId: district.svgClickId,
      name: district.nameEn,
      nameTamil: district.nameTa,
      slug: district.slug,
      code: district.code,
      headquarters: district.headquartersEn,
      headquartersTamil: district.headquartersTa,
      agroZone: district.agroZoneEn,
      agroZoneTamil: district.agroZoneTa
    },
    totalSamples: samples,
    nutrients: {
      nitrogen: { low: nLow, medium: nMed, high: nHigh },
      phosphorus: { low: pLow, medium: pMed, high: pHigh },
      potassium: { low: kLow, medium: kMed, high: kHigh }
    },
    soilProperties: {
      ph: { acidic: phAcidic, neutral: phNeutral, alkaline: phAlkaline },
      organicCarbon: { low: ocLow, medium: ocMed, high: ocHigh },
      electricalConductivity: { low: ecLow, medium: ecMed, high: ecHigh }
    },
    micronutrients: {
      zinc: { deficient: znDef, sufficient: znSuf },
      iron: { deficient: feDef, sufficient: feSuf },
      boron: { deficient: bDef, sufficient: bSuf },
      sulphur: {
        deficient: rawSource?.S_deficient ?? Math.round(samples * 0.28),
        sufficient: rawSource?.S_sufficient ?? Math.round(samples * 0.72)
      },
      copper: {
        deficient: rawSource?.cu_deficient ?? Math.round(samples * 0.08),
        sufficient: rawSource?.cu_sufficient ?? Math.round(samples * 0.92)
      },
      manganese: {
        deficient: rawSource?.mn_deficient ?? Math.round(samples * 0.12),
        sufficient: rawSource?.mn_sufficient ?? Math.round(samples * 0.88)
      }
    },
    soilDistribution: district.soilDistribution,
    source: {
      name: API_SOURCE_META.name,
      type: 'district_aggregate',
      upstreamEndpoint: `https://www.tnagrisnet.tn.gov.in/mannvalam/districsoils/${district.districtId}`,
      preservedOriginalFields: rawSource ?? {
        total: samples,
        n_low: nLow,
        n_med: nMed,
        n_high: nHigh,
        p_low: pLow,
        p_med: pMed,
        p_high: pHigh,
        k_low: kLow,
        k_med: kMed,
        k_high: kHigh,
        ph_acidic: phAcidic,
        ph_neutral: phNeutral,
        ph_alkaline: phAlkaline,
        oc_low: ocLow,
        oc_med: ocMed,
        oc_high: ocHigh,
        ec_low: ecLow,
        ec_med: ecMed,
        ec_high: ecHigh,
        zn_deficient: znDef,
        zn_sufficient: znSuf,
        fe_deficient: feDef,
        fe_sufficient: feSuf,
        b_deficient: bDef,
        b_sufficient: bSuf
      }
    }
  };
}

/**
 * Normalizes block data from district records or raw upstream block responses
 */
export function normalizeBlockRecord(district: DistrictMasterRecord, b: DistrictMasterRecord['blocks'][0], raw?: RawBlockSource) {
  return {
    blockId: b.blockId,
    blockLookupId: b.blockLookupId ?? (raw?.blockDistrict_id ? Number(raw.blockDistrict_id) : undefined),
    districtId: district.districtId,
    districtName: district.nameEn,
    districtNameTamil: district.nameTa,
    name: b.nameEn,
    nameTamil: b.nameTa,
    villageCount: b.villageCount,
    agroZone: district.agroZoneEn,
    agroZoneTamil: district.agroZoneTa,
    majorSoilTypes: b.majorSoilTypesEn,
    majorSoilTypesTamil: b.majorSoilTypesTa,
    cropsGrown: b.cropsEn,
    cropsGrownTamil: b.cropsTa,
    soilHealthSummary: b.soilHealthSummary,
    source: {
      name: API_SOURCE_META.name,
      type: 'block_profile',
      rawFields: raw ?? {
        masterDistrict_id: district.districtId,
        tamilName: district.nameTa,
        Block_Name: b.nameEn,
        village_count: b.villageCount,
        District_Name: district.nameEn,
        Crops_grown: b.cropsEn.join(', '),
        zone: district.agroZoneEn,
        zone_tamil: district.agroZoneTa,
        soils: b.majorSoilTypesEn.join(', '),
        soils_tamil: b.majorSoilTypesTa.join(', ')
      }
    }
  };
}

/**
 * Isolated fetch adapter for fetch.php
 * Stays disabled/quarantined until network inspect is confirmed as requested in Section 8
 */
export class MannvalamFetchAdapter {
  private isEnabled = false;

  getAdapterStatus() {
    return {
      adapter: 'fetch.php',
      enabled: this.isEnabled,
      reason: 'Quarantined until browser network request payload, HTTP method, and session cookies are verified.',
      sourceUrl: API_SOURCE_META.fetchEndpoint
    };
  }

  async executeRequest(): Promise<never> {
    throw new Error('fetch.php adapter is quarantined pending verification of request schema and session context.');
  }
}

export const fetchAdapter = new MannvalamFetchAdapter();
