import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Soil } from '../services/soil';
import { MatIconModule } from '@angular/material/icon';

interface EndpointSpec {
  method: 'GET' | 'POST';
  path: string;
  summaryEn: string;
  summaryTa: string;
  category: 'Districts' | 'Soil Data' | 'Blocks' | 'Map' | 'Meta';
  descriptionEn: string;
  descriptionTa: string;
  sampleResponse: string;
}

@Component({
  selector: 'app-api-docs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-24">
      <!-- Header -->
      <div class="border-b border-stone-200 pb-6 space-y-3">
        <div class="flex items-center gap-2 text-xs text-stone-500">
          <button (click)="soilService.setActiveTab('home')" class="hover:text-stone-900 cursor-pointer">
            {{ soilService.t().home }}
          </button>
          <span>/</span>
          <span class="text-stone-900 font-medium">API Documentation</span>
        </div>

        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest">
              <span>REST / JSON v1.0.0</span>
              <span>·</span>
              <span>Serverless Architecture</span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
              Project Mannvalam API
            </h1>
            <p class="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed mt-1">
              {{ soilService.language() === 'ta'
                ? 'தமிழ்நாடு மண் தகவல்களைப் பாதுகாப்பாகவும் வேகமாகவும் வழங்கும் தற்சார்பு ஏபிஐ தளம். 38 மாவட்டங்கள், வட்டாரத் தரவுகள் மற்றும் மண் சத்து புள்ளிவிவரங்களுக்கான முழுமையான ஆவணம்.'
                : 'Independent serverless API that collects, organizes, caches, and serves normalized soil information from the official Tamil Nadu Mannvalam system.' }}
            </p>
          </div>

          <!-- Quick Test / Live API Status Badge -->
          <div class="bg-white p-3 rounded-xl border border-stone-200 shadow-2xs space-y-1.5 self-start md:self-auto shrink-0">
            <div class="flex items-center gap-2 text-xs text-stone-600">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="font-bold text-stone-900">API Status: Operational</span>
            </div>
            <div class="text-[11px] text-stone-500 font-mono">
              Base URL: <span class="bg-stone-100 px-1 py-0.5 rounded text-stone-800">/api/v1</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Architectural & Security Principles -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <mat-icon class="!text-[18px]">security</mat-icon>
            <span>Air-Gapped Source Isolation</span>
          </div>
          <p class="text-xs text-stone-600 leading-relaxed">
            Frontends and mobile apps communicate exclusively with this normalized API. Upstream government source endpoints are protected behind timeout guards and memory caches.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <mat-icon class="!text-[18px]">memory</mat-icon>
            <span>Tiered In-Memory Caching</span>
          </div>
          <p class="text-xs text-stone-600 leading-relaxed">
            District master records are cached for 24 hours and soil health statistics for 12 hours. If external sources experience downtime, previously cached data is gracefully preserved.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <mat-icon class="!text-[18px]">verified</mat-icon>
            <span>Strict ID Separation</span>
          </div>
          <p class="text-xs text-stone-600 leading-relaxed">
            Maintains strict separation between <code class="text-stone-800 font-mono">districtId</code> (soil endpoint), <code class="text-stone-800 font-mono">svgClickId</code> (map path), and <code class="text-stone-800 font-mono">blockLookupId</code>.
          </p>
        </div>
      </div>

      <!-- Filter by Category -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-stone-200 text-xs">
        @for (cat of categories; track cat) {
          <button
            type="button"
            (click)="selectedCategory.set(cat)"
            class="px-3 py-1.5 font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            [class.bg-emerald-800]="selectedCategory() === cat"
            [class.text-white]="selectedCategory() === cat"
            [class.text-stone-600]="selectedCategory() !== cat"
            [class.hover:bg-stone-100]="selectedCategory() !== cat"
          >
            {{ cat }}
          </button>
        }
      </div>

      <!-- Endpoint List -->
      <div class="space-y-6">
        @for (ep of filteredEndpoints(); track ep.path) {
          <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
            <!-- Endpoint Header Row -->
            <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 bg-stone-50/50">
              <div class="flex items-center gap-3 flex-wrap">
                <span
                  class="px-2.5 py-1 text-xs font-mono font-bold rounded-md"
                  [class.bg-emerald-100]="ep.method === 'GET'"
                  [class.text-emerald-900]="ep.method === 'GET'"
                  [class.bg-blue-100]="ep.method === 'POST'"
                  [class.text-blue-900]="ep.method === 'POST'"
                >
                  {{ ep.method }}
                </span>
                <span class="font-mono text-sm sm:text-base font-bold text-stone-900">
                  {{ ep.path }}
                </span>
              </div>

              <!-- Live Test Link (Opens in browser) -->
              @if (ep.method === 'GET') {
                <a
                  [href]="ep.path"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-900 bg-white px-3 py-1.5 rounded-lg border border-stone-200 shadow-2xs self-start sm:self-auto cursor-pointer"
                >
                  <span>Execute GET</span>
                  <mat-icon class="!text-[14px]">open_in_new</mat-icon>
                </a>
              }
            </div>

            <!-- Endpoint Description & Response Preview -->
            <div class="p-5 sm:p-6 space-y-4">
              <p class="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {{ soilService.language() === 'ta' ? ep.descriptionTa : ep.descriptionEn }}
              </p>

              <!-- JSON Sample Box -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-[11px] text-stone-500 font-mono">
                  <span>Standard JSON Response Format (200 OK)</span>
                  <span class="text-emerald-700">application/json</span>
                </div>
                <div class="bg-stone-900 text-stone-100 p-4 rounded-xl text-xs font-mono overflow-x-auto max-h-64 shadow-inner">
                  <pre class="whitespace-pre"><code>{{ ep.sampleResponse }}</code></pre>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Investigation Note for fetch.php (Section 8 requirement) -->
      <div class="p-6 rounded-2xl bg-amber-50 border border-amber-300 space-y-3">
        <div class="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <mat-icon class="text-amber-800 !text-[20px]">policy</mat-icon>
          <span>Upstream Endpoint Quarantine & fetch.php Protocol</span>
        </div>
        <p class="text-xs text-amber-950 leading-relaxed">
          As required by the specification, the <code class="font-mono bg-amber-100 px-1 py-0.5 rounded text-amber-900">fetch.php</code> endpoint remains quarantined in an isolated adapter (<code class="font-mono">MannvalamFetchAdapter</code>). It is strictly disabled until its exact HTTP method, payload schema, and session cookie requirements have been confirmed via live browser network inspection.
        </p>
      </div>
    </div>
  `
})
export class ApiDocs {
  readonly soilService = inject(Soil);
  readonly selectedCategory = signal<string>('All');
  readonly categories = ['All', 'Districts', 'Soil Data', 'Blocks', 'Map', 'Meta'];

  readonly endpoints: EndpointSpec[] = [
    {
      method: 'GET',
      path: '/api/v1/districts',
      summaryEn: 'Retrieve all 38 Tamil Nadu districts',
      summaryTa: 'தமிழ்நாட்டின் 38 மாவட்டங்களின் விவரங்கள்',
      category: 'Districts',
      descriptionEn: 'Returns complete master list of all 38 districts in Tamil Nadu, including official district IDs, SVG map click IDs, agro-climatic zones, and major soil orders.',
      descriptionTa: 'தமிழ்நாட்டின் 38 மாவட்டங்களின் அதிகாரப்பூர்வ மாவட்ட எண், எஸ்விஜி வரைபட எண் மற்றும் வேளாண் மண்டல விவரங்கள்.',
      sampleResponse: `{\n  "success": true,\n  "data": [\n    {\n      "districtId": 610,\n      "svgClickId": 30,\n      "nameEn": "Ariyalur",\n      "nameTa": "அரியலூர்",\n      "slug": "ariyalur",\n      "code": "TN-ARI",\n      "agroZoneEn": "Cauvery Delta & North Eastern Zone",\n      "totalBlocks": 6,\n      "totalVillages": 195\n    }\n    // ... 37 more districts\n  ],\n  "meta": {\n    "source": "Tamil Nadu Mannvalam",\n    "lastUpdated": "2026-10-29T22:30:00.000Z",\n    "cached": true,\n    "total": 38\n  }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/districts/610',
      summaryEn: 'Retrieve single district details by ID or slug',
      summaryTa: 'மாவட்ட எண் அல்லது பெயர் கொண்டு விவரங்களைப் பெறுக',
      category: 'Districts',
      descriptionEn: 'Retrieves complete profile for a single district using its official districtId (e.g. 610) or canonical slug (e.g. "ariyalur", "thanjavur").',
      descriptionTa: 'அதிகாரப்பூர்வ மாவட்ட எண் அல்லது ஆங்கிலப் பெயர் கொண்டு குறிப்பிட்ட மாவட்டத்தின் முழு விவரங்களைப் பெறலாம்.',
      sampleResponse: `{\n  "success": true,\n  "data": {\n    "districtId": 610,\n    "svgClickId": 30,\n    "nameEn": "Ariyalur",\n    "nameTa": "அரியலூர்",\n    "code": "TN-ARI",\n    "headquartersEn": "Ariyalur",\n    "rainfallMm": 954,\n    "totalBlocks": 6,\n    "majorSoilTypesEn": ["Red Sandy Loam", "Black Soil"],\n    "majorCropsEn": ["Cashew", "Sugarcane", "Groundnut"]\n  },\n  "meta": { "source": "Tamil Nadu Mannvalam", "cached": true }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/districts/search?q=ariyalur',
      summaryEn: 'Search districts by English or Tamil query',
      summaryTa: 'தமிழ் அல்லது ஆங்கிலத்தில் மாவட்டங்களைத் தேடுக',
      category: 'Districts',
      descriptionEn: 'Performs bilingual search matching against district English names, Tamil names, headquarters, and district codes.',
      descriptionTa: 'தமிழ் மற்றும் ஆங்கிலப் பெயர்கள் மூலம் மாவட்டங்களை விரைவாகத் தேடும் வசதி.',
      sampleResponse: `{\n  "success": true,\n  "data": [\n    {\n      "districtId": 610,\n      "nameEn": "Ariyalur",\n      "nameTa": "அரியலூர்",\n      "headquartersEn": "Ariyalur"\n    }\n  ],\n  "meta": { "source": "Tamil Nadu Mannvalam", "cached": true, "total": 1 }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/districts/610/soil-summary',
      summaryEn: 'Retrieve normalized district soil statistics',
      summaryTa: 'மாவட்ட அளவிலான ஒருங்கிணைந்த மண் சத்து புள்ளிவிவரங்கள்',
      category: 'Soil Data',
      descriptionEn: 'Normalizes district soil statistics with full preservation of raw upstream fields (n_low, p_med, ph_neutral, etc.), organizing them into structured macronutrient, property, and micronutrient objects.',
      descriptionTa: 'மண்ணின் தழை, மணி, சாம்பல் மற்றும் pH உள்ளிட்ட பண்புகளை சீரான JSON வடிவில் வழங்குகிறது.',
      sampleResponse: `{\n  "success": true,\n  "data": {\n    "district": { "id": 610, "name": "Ariyalur", "nameTamil": "அரியலூர்" },\n    "totalSamples": 46160,\n    "nutrients": {\n      "nitrogen": { "low": 46160, "medium": 0, "high": 0 },\n      "phosphorus": { "low": 1804, "medium": 35979, "high": 8377 },\n      "potassium": { "low": 1742, "medium": 43995, "high": 0 }\n    },\n    "soilProperties": {\n      "ph": { "acidic": 0, "neutral": 46160, "alkaline": 0 },\n      "organicCarbon": { "low": 26772, "medium": 16617, "high": 2771 }\n    },\n    "micronutrients": {\n      "zinc": { "deficient": 19387, "sufficient": 26773 },\n      "iron": { "deficient": 7385, "sufficient": 38775 },\n      "boron": { "deficient": 15694, "sufficient": 30466 }\n    },\n    "source": {\n      "name": "Tamil Nadu Mannvalam",\n      "type": "district_aggregate"\n    }\n  },\n  "meta": { "source": "Tamil Nadu Mannvalam", "cached": true }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/districts/610/soil-parameters',
      summaryEn: 'Return soil parameter classifications & guidelines',
      summaryTa: 'மண் பரிசோதனை அளவீடுகளின் வரையறைகள்',
      category: 'Soil Data',
      descriptionEn: 'Returns official standard benchmark ranges, testing methods, and diagnostic significance for N, P, K, pH, EC, OC, Zn, Fe, and B.',
      descriptionTa: 'அனைத்து ஊட்டச்சத்துக்களுக்கான அளவு வரம்புகள் மற்றும் களப் பரிந்துரைகள்.',
      sampleResponse: `{\n  "success": true,\n  "data": {\n    "districtId": 610,\n    "parameters": [\n      {\n        "symbol": "N",\n        "nameEn": "Available Nitrogen",\n        "unit": "kg/ha",\n        "benchmarkRangesEn": [\n          { "status": "Low", "range": "< 280 kg/ha" },\n          { "status": "Medium", "range": "280 - 450 kg/ha" },\n          { "status": "High", "range": "> 450 kg/ha" }\n        ]\n      }\n    ]\n  }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/districts/610/blocks',
      summaryEn: 'Return administrative blocks for selected district',
      summaryTa: 'தேர்ந்தெடுக்கப்பட்ட மாவட்டத்தின் வட்டாரங்கள்',
      category: 'Blocks',
      descriptionEn: 'Returns all verified administrative blocks for the district with village counts, dominant soil types, and cultivated crops.',
      descriptionTa: 'மாவட்டத்தின் வட்டாரங்கள், கிராமங்களின் எண்ணிக்கை மற்றும் விளையும் பயிர்கள்.',
      sampleResponse: `{\n  "success": true,\n  "data": [\n    {\n      "blockId": "ariyalur-block",\n      "blockLookupId": 61001,\n      "districtId": 610,\n      "name": "Ariyalur",\n      "nameTamil": "அரியலூர்",\n      "villageCount": 38,\n      "cropsGrown": ["Cashew", "Groundnut", "Maize"],\n      "soilHealthSummary": {\n        "nitrogenStatus": "Low",\n        "phValue": 7.4\n      }\n    }\n  ],\n  "meta": { "total": 6, "cached": true }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/blocks/ariyalur-block',
      summaryEn: 'Return individual block details',
      summaryTa: 'குறிப்பிட்ட வட்டாரத்தின் முழு விவரக்குறிப்பு',
      category: 'Blocks',
      descriptionEn: 'Lookup individual block information by unique blockId or blockLookupId across Tamil Nadu.',
      descriptionTa: 'வட்டார அடையாள எண் கொண்டு வட்டாரத்தின் மண் வளக் குறிப்பைப் பெறலாம்.',
      sampleResponse: `{\n  "success": true,\n  "data": {\n    "blockId": "ariyalur-block",\n    "districtName": "Ariyalur",\n    "name": "Ariyalur",\n    "nameTamil": "அரியலூர்",\n    "villageCount": 38,\n    "majorSoilTypes": ["Red Sandy Loam", "Calcareous Loam"]\n  }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/map/districts',
      summaryEn: 'Return SVG click IDs & map metadata',
      summaryTa: 'எஸ்விஜி வரைபட அடையாள எண்கள் மற்றும் விவரங்கள்',
      category: 'Map',
      descriptionEn: 'Provides all 38 SVG click IDs (changeListName) linked to their districtId for vector map interactivity and geospatial routing.',
      descriptionTa: 'வரைபடத்தின் 38 மாவட்டங்களுக்கான எஸ்விஜி அடையாள எண்கள்.',
      sampleResponse: `{\n  "success": true,\n  "data": [\n    { "districtId": 610, "svgClickId": 30, "name": "Ariyalur", "nameTamil": "அரியலூர்" },\n    { "districtId": 580, "svgClickId": 8, "name": "Namakkal", "nameTamil": "நாமக்கல்" }\n  ],\n  "meta": { "total": 38, "cached": true }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/map/assets',
      summaryEn: 'Return official map & logo asset references',
      summaryTa: 'அதிகாரப்பூர்வ வரைபடம் மற்றும் லோகோ முகவரிகள்',
      category: 'Map',
      descriptionEn: 'Delivers official Government portal graphic references for tnmap.jpg, English logo, and Tamil logo with verified mime-types.',
      descriptionTa: 'அதிகாரப்பூர்வ வரைபடம் மற்றும் சின்னங்களின் இணைய முகவரிகள்.',
      sampleResponse: `{\n  "success": true,\n  "data": {\n    "districtMap": { "url": "https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/tnmap.jpg" },\n    "logos": {\n      "english": { "url": "https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/Group_english.svg" },\n      "tamil": { "url": "https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/footer_tamil.svg" }\n    }\n  }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/meta/source',
      summaryEn: 'Return source attribution & disclaimer',
      summaryTa: 'மூல ஆதார விவரங்கள் மற்றும் பொறுப்புத் துறப்பு',
      category: 'Meta',
      descriptionEn: 'Provides data source attribution, official Government portals, and mandatory laboratory testing disclaimer.',
      descriptionTa: 'அரசுத் தகவல் மூலம் மற்றும் அதிகாரப்பூர்வ பொறுப்புத் துறப்பு.',
      sampleResponse: `{\n  "success": true,\n  "data": {\n    "source": "Tamil Nadu Mannvalam",\n    "disclaimer": "Soil health information is based on previously conducted soil laboratory tests. Soil conditions may change over time.",\n    "attribution": "Government of Tamil Nadu - Department of Agriculture & Farmers Welfare"\n  }\n}`
    },
    {
      method: 'GET',
      path: '/api/v1/health',
      summaryEn: 'Return serverless API health probe',
      summaryTa: 'ஏபிஐ சேவை நலன் மற்றும் நிலை',
      category: 'Meta',
      descriptionEn: 'Liveness and readiness check for serverless deployments.',
      descriptionTa: 'சேவையின் தற்போதைய செயல்பாட்டு நிலை.',
      sampleResponse: `{\n  "success": true,\n  "data": {\n    "status": "UP",\n    "version": "1.0.0",\n    "environment": "production-serverless"\n  }\n}`
    }
  ];

  filteredEndpoints() {
    const cat = this.selectedCategory();
    if (cat === 'All') return this.endpoints;
    return this.endpoints.filter((ep) => ep.category === cat);
  }
}
