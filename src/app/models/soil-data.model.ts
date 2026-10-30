export type Language = 'en' | 'ta';

export interface SoilDistributionItem {
  id: string;
  nameEn: string;
  nameTa: string;
  percentage: number;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  descriptionEn: string;
  descriptionTa: string;
  keyDistrictsEn: string[];
  keyDistrictsTa: string[];
  suitableCropsEn: string[];
  suitableCropsTa: string[];
}

export interface SoilCompositionItem {
  id: string;
  nameEn: string;
  nameTa: string;
  percentage: number;
  color: string;
  roleEn: string;
  roleTa: string;
}

export interface SoilParameter {
  id: string;
  nameEn: string;
  nameTa: string;
  symbol: string;
  category: 'primary' | 'properties' | 'secondary_micro';
  unit: string;
  whatItMeasuresEn: string;
  whatItMeasuresTa: string;
  whyItMattersEn: string;
  whyItMattersTa: string;
  benchmarkRangesEn: { status: string; range: string; note: string }[];
  benchmarkRangesTa: { status: string; range: string; note: string }[];
}

export interface BlockData {
  id: string;
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
}

export interface DistrictData {
  id: string;
  code: string;
  nameEn: string;
  nameTa: string;
  agroZoneEn: string;
  agroZoneTa: string;
  headquartersEn: string;
  headquartersTa: string;
  totalBlocks: number;
  totalVillages: number;
  majorSoilTypesEn: string[];
  majorSoilTypesTa: string[];
  majorCropsEn: string[];
  majorCropsTa: string[];
  rainfallMm: number;
  overviewEn: string;
  overviewTa: string;
  blocks: BlockData[];
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
}
