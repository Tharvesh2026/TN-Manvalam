export interface DistrictMasterRecord {
  districtId: number;
  svgClickId: number;
  nameEn: string;
  nameTa: string;
  slug: string;
  code: string;
  headquartersEn: string;
  headquartersTa: string;
  agroZoneEn: string;
  agroZoneTa: string;
  rainfallMm: number;
  totalBlocks: number;
  totalVillages: number;
  majorSoilTypesEn: string[];
  majorSoilTypesTa: string[];
  majorCropsEn: string[];
  majorCropsTa: string[];
  overviewEn: string;
  overviewTa: string;
  soilDistribution: {
    soilNameEn: string;
    soilNameTa: string;
    percentage: number;
    color: string;
  }[];
  aggregateNutrientStatus: {
    nitrogen: { low: number; medium: number; high: number };
    phosphorus: { low: number; medium: number; high: number };
    potassium: { low: number; medium: number; high: number };
    organicCarbon: { low: number; medium: number; high: number };
    phDistribution: { acidic: number; neutral: number; alkaline: number };
    zinc: { deficient: number; sufficient: number };
    iron: { deficient: number; sufficient: number };
    boron: { deficient: number; sufficient: number };
    samplesAnalyzed: number;
  };
  blocks: {
    blockId: string;
    blockLookupId?: number;
    nameEn: string;
    nameTa: string;
    villageCount: number;
    majorSoilTypesEn: string[];
    majorSoilTypesTa: string[];
    cropsEn: string[];
    cropsTa: string[];
    soilHealthSummary: {
      nitrogenStatus: 'Low' | 'Medium' | 'High';
      phosphorusStatus: 'Low' | 'Medium' | 'High';
      potassiumStatus: 'Low' | 'Medium' | 'High';
      phValue: number;
      phCategory: 'Acidic' | 'Neutral' | 'Alkaline';
      organicCarbonPercent: number;
      ecValue: number;
    };
  }[];
}

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  meta: {
    source: string;
    lastUpdated: string | null;
    cached: boolean;
    total?: number;
  };
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface RawDistrictSoilSource {
  total?: number;
  n_low?: number;
  n_med?: number;
  n_high?: number;
  p_low?: number;
  p_med?: number;
  p_high?: number;
  k_low?: number;
  k_med?: number;
  k_high?: number;
  ph_acidic?: number;
  ph_neutal?: number;
  ph_neutral?: number;
  ph_alkaline?: number;
  oc_low?: number;
  oc_med?: number;
  oc_high?: number;
  ec_low?: number;
  ec_med?: number;
  ec_high?: number;
  S_deficient?: number;
  S_sufficient?: number;
  zn_deficient?: number;
  zn_sufficient?: number;
  fe_deficient?: number;
  fe_sufficient?: number;
  cu_deficient?: number;
  cu_sufficient?: number;
  mn_deficient?: number;
  mn_sufficient?: number;
  b_deficient?: number;
  b_sufficient?: number;
  [key: string]: unknown;
}

export interface RawBlockSource {
  masterDistrict_id?: number | string;
  tamilName?: string;
  do_code?: string;
  blockDistrict_id?: number | string;
  Block_Code?: string | number;
  village_count?: number | string;
  District_Name?: string;
  Block_Name?: string;
  Crops_grown?: string;
  zone_id?: number | string;
  zone?: string;
  zone_tamil?: string;
  soils?: string;
  soils_tamil?: string;
  [key: string]: unknown;
}
