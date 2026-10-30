import { DistrictMasterRecord } from '../models/api-contracts.model';

export const TN_ALL_38_DISTRICTS: DistrictMasterRecord[] = [
  {
    districtId: 610,
    svgClickId: 30,
    nameEn: 'Ariyalur',
    nameTa: 'அரியலூர்',
    slug: 'ariyalur',
    code: 'TN-ARI',
    headquartersEn: 'Ariyalur',
    headquartersTa: 'அரியலூர்',
    agroZoneEn: 'Cauvery Delta & North Eastern Zone',
    agroZoneTa: 'காவிரி டெல்டா மற்றும் வடகிழக்கு மண்டலம்',
    rainfallMm: 954,
    totalBlocks: 6,
    totalVillages: 195,
    majorSoilTypesEn: ['Red Sandy Loam', 'Black Soil', 'Calcareous Sedimentary Loam'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'கரிசல் மண்', 'சுண்ணாம்பு படிவு மண்'],
    majorCropsEn: ['Cashew', 'Sugarcane', 'Groundnut', 'Paddy', 'Cotton'],
    majorCropsTa: ['முந்திரி', 'கரும்பு', 'நிலக்கடலை', 'நெல்', 'பருத்தி'],
    overviewEn: 'Rich in mineral limestone formations and marine fossil beds, Ariyalur is famed for commercial cashew plantations, sugarcane belts, and ceramic-grade clays.',
    overviewTa: 'சுண்ணாம்புக்கல் படிமங்கள் மற்றும் கடலடி தொல்லுயிர் எச்சங்கள் நிறைந்த அரியலூர், முந்திரி மற்றும் கரும்பு சாகுபடிக்கு புகழ்பெற்றது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 52, color: '#DC2626' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 33, color: '#334155' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 15, color: '#059669' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 100, medium: 0, high: 0 },
      phosphorus: { low: 4, medium: 78, high: 18 },
      potassium: { low: 4, medium: 96, high: 0 },
      organicCarbon: { low: 58, medium: 36, high: 6 },
      phDistribution: { acidic: 0, neutral: 100, alkaline: 0 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 16, sufficient: 84 },
      boron: { deficient: 34, sufficient: 66 },
      samplesAnalyzed: 46160
    },
    blocks: [
      {
        blockId: 'ariyalur-block',
        blockLookupId: 61001,
        nameEn: 'Ariyalur',
        nameTa: 'அரியலூர்',
        villageCount: 38,
        majorSoilTypesEn: ['Red Sandy Loam', 'Calcareous Loam'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'சுண்ணாம்பு மண்'],
        cropsEn: ['Cashew', 'Groundnut', 'Maize'],
        cropsTa: ['முந்திரி', 'நிலக்கடலை', 'மக்காச்சோளம்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.4,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.48,
          ecValue: 0.28
        }
      },
      {
        blockId: 'jayankondam',
        blockLookupId: 61002,
        nameEn: 'Jayankondam',
        nameTa: 'ஜெயங்கொண்டம்',
        villageCount: 35,
        majorSoilTypesEn: ['Red Loam', 'Clayey Alluvium'],
        majorSoilTypesTa: ['செம்மண்', 'களிமண் வண்டல்'],
        cropsEn: ['Paddy', 'Cashew', 'Sugarcane'],
        cropsTa: ['நெல்', 'முந்திரி', 'கரும்பு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.52,
          ecValue: 0.32
        }
      },
      {
        blockId: 'sendurai',
        blockLookupId: 61003,
        nameEn: 'Sendurai',
        nameTa: 'செந்துறை',
        villageCount: 29,
        majorSoilTypesEn: ['Black Soil', 'Calcareous Loam'],
        majorSoilTypesTa: ['கரிசல் மண்', 'சுண்ணாம்பு சரளை'],
        cropsEn: ['Cotton', 'Maize', 'Pulses'],
        cropsTa: ['பருத்தி', 'மக்காச்சோளம்', 'பயறு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.8,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.44,
          ecValue: 0.38
        }
      },
      {
        blockId: 'andimadam',
        blockLookupId: 61004,
        nameEn: 'Andimadam',
        nameTa: 'ஆண்டிமடம்',
        villageCount: 31,
        majorSoilTypesEn: ['Red Sandy Soil', 'Lateritic Loam'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'செம்பொறை மண்'],
        cropsEn: ['Cashew', 'Tapioca', 'Groundnut'],
        cropsTa: ['முந்திரி', 'மரவள்ளி', 'நிலக்கடலை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 6.9,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.42,
          ecValue: 0.22
        }
      },
      {
        blockId: 'thirumanur',
        blockLookupId: 61005,
        nameEn: 'Thirumanur',
        nameTa: 'திருமானூர்',
        villageCount: 36,
        majorSoilTypesEn: ['Alluvial Clay Loam', 'Coleroon Basin Silt'],
        majorSoilTypesTa: ['வண்டல் களிமண்', 'கொள்ளிட படுகை வண்டல்'],
        cropsEn: ['Paddy', 'Sugarcane', 'Banana'],
        cropsTa: ['நெல்', 'கரும்பு', 'வாழை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'High',
          potassiumStatus: 'Medium',
          phValue: 7.3,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.61,
          ecValue: 0.35
        }
      },
      {
        blockId: 't-palur',
        blockLookupId: 61006,
        nameEn: 'T. Palur',
        nameTa: 'தா.பழூர்',
        villageCount: 26,
        majorSoilTypesEn: ['Delta Alluvium', 'Red Sandy Loam'],
        majorSoilTypesTa: ['டெல்டா வண்டல்', 'மணல் செம்மண்'],
        cropsEn: ['Paddy', 'Pulses', 'Gingelly'],
        cropsTa: ['நெல்', 'பயறு', 'எள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.55,
          ecValue: 0.29
        }
      }
    ]
  },
  {
    districtId: 730,
    svgClickId: 35,
    nameEn: 'Chengalpattu',
    nameTa: 'செங்கல்பட்டு',
    slug: 'chengalpattu',
    code: 'TN-CGL',
    headquartersEn: 'Chengalpattu',
    headquartersTa: 'செங்கல்பட்டு',
    agroZoneEn: 'North Eastern Agro-Climatic Zone',
    agroZoneTa: 'வடகிழக்கு வேளாண் மண்டலம்',
    rainfallMm: 1210,
    totalBlocks: 8,
    totalVillages: 636,
    majorSoilTypesEn: ['Red Sandy Loam', 'Coastal Alluvium', 'Clay Loam'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'கடற்கரை வண்டல்', 'களிமண்'],
    majorCropsEn: ['Paddy', 'Groundnut', 'Watermelon', 'Vegetables', 'Flowers'],
    majorCropsTa: ['நெல்', 'நிலக்கடலை', 'தர்பூசணி', 'காய்கறிகள்', 'மலர்கள்'],
    overviewEn: 'Flanked by the Coromandel coast and Palar river basin, Chengalpattu has coastal alluvial plains and red loams supplying fresh horticulture and paddy.',
    overviewTa: 'பாலாற்று படுகை மற்றும் வங்காள விரிகுடா கடற்கரையை எல்லையாகக் கொண்ட செங்கல்பட்டு, தோட்டக்கலை மற்றும் நெல் சாகுபடியில் சிறந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 48, color: '#DC2626' },
      { soilNameEn: 'Coastal Alluvium', soilNameTa: 'கடற்கரை வண்டல்', percentage: 32, color: '#059669' },
      { soilNameEn: 'Clay / Grey Soil', soilNameTa: 'களிமண் / சாம்பல்', percentage: 20, color: '#64748B' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 72, medium: 22, high: 6 },
      phosphorus: { low: 26, medium: 48, high: 26 },
      potassium: { low: 18, medium: 52, high: 30 },
      organicCarbon: { low: 54, medium: 38, high: 8 },
      phDistribution: { acidic: 10, neutral: 78, alkaline: 12 },
      zinc: { deficient: 44, sufficient: 56 },
      iron: { deficient: 18, sufficient: 82 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 18450
    },
    blocks: [
      {
        blockId: 'chengalpattu-block',
        nameEn: 'Chengalpattu',
        nameTa: 'செங்கல்பட்டு',
        villageCount: 64,
        majorSoilTypesEn: ['Red Sandy Loam', 'Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'களிமண்'],
        cropsEn: ['Paddy', 'Vegetables', 'Groundnut'],
        cropsTa: ['நெல்', 'காய்கறிகள்', 'நிலக்கடலை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.51,
          ecValue: 0.36
        }
      },
      {
        blockId: 'maduranthakam',
        nameEn: 'Maduranthakam',
        nameTa: 'மதுராந்தகம்',
        villageCount: 110,
        majorSoilTypesEn: ['Deep Clay Loam', 'Alluvial Silt'],
        majorSoilTypesTa: ['ஆழ் களிமண்', 'வண்டல்'],
        cropsEn: ['Paddy', 'Sugarcane', 'Pulses'],
        cropsTa: ['நெல்', 'கரும்பு', 'பயறு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.3,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.58,
          ecValue: 0.38
        }
      },
      {
        blockId: 'thiruporur',
        nameEn: 'Thiruporur',
        nameTa: 'திருப்போரூர்',
        villageCount: 52,
        majorSoilTypesEn: ['Coastal Sandy Loam', 'Red Soil'],
        majorSoilTypesTa: ['கடற்கரை மணல் மண்', 'செம்மண்'],
        cropsEn: ['Groundnut', 'Watermelon', 'Casuarina'],
        cropsTa: ['நிலக்கடலை', 'தர்பூசணி', 'சவுக்கு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 6.8,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.44,
          ecValue: 0.42
        }
      }
    ]
  },
  {
    districtId: 568,
    svgClickId: 32,
    nameEn: 'Chennai',
    nameTa: 'சென்னை',
    slug: 'chennai',
    code: 'TN-CHE',
    headquartersEn: 'Chennai',
    headquartersTa: 'சென்னை',
    agroZoneEn: 'North Eastern Coastal Urban Zone',
    agroZoneTa: 'வடகிழக்கு கடற்கரை நகர்ப்புற மண்டலம்',
    rainfallMm: 1400,
    totalBlocks: 1,
    totalVillages: 0,
    majorSoilTypesEn: ['Coastal Marine Sand', 'Alluvial Clay', 'Urban Fill'],
    majorSoilTypesTa: ['கடற்கரை மணல்', 'வண்டல் களிமண்', 'நகர்ப்புற மண்'],
    majorCropsEn: ['Urban Horticulture', 'Terrace Gardens', 'Floriculture'],
    majorCropsTa: ['நகர்ப்புற தோட்டக்கலை', 'மாடித்தோட்டம்', 'மலர்கள்'],
    overviewEn: 'State capital and metropolitan district on the Bay of Bengal, primarily non-arable with urban rooftop organic farming, estuarine marshes, and soil lab headquarters.',
    overviewTa: 'தமிழ்நாட்டின் தலைநகரம்; கடற்கரை உவர் மணல் மற்றும் கூவம்-அடையாறு முகத்துவாரப் பகுதிகளைக் கொண்ட நகர்ப்புற பகுதி.',
    soilDistribution: [
      { soilNameEn: 'Coastal Marine Sand', soilNameTa: 'கடற்கரை மணல்', percentage: 65, color: '#64748B' },
      { soilNameEn: 'Alluvial Marine Clay', soilNameTa: 'முகத்துவார களிமண்', percentage: 35, color: '#059669' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 80, medium: 18, high: 2 },
      phosphorus: { low: 30, medium: 50, high: 20 },
      potassium: { low: 20, medium: 60, high: 20 },
      organicCarbon: { low: 65, medium: 28, high: 7 },
      phDistribution: { acidic: 5, neutral: 75, alkaline: 20 },
      zinc: { deficient: 50, sufficient: 50 },
      iron: { deficient: 25, sufficient: 75 },
      boron: { deficient: 40, sufficient: 60 },
      samplesAnalyzed: 3420
    },
    blocks: [
      {
        blockId: 'chennai-central',
        nameEn: 'Chennai Urban',
        nameTa: 'சென்னை நகர்ப்புறம்',
        villageCount: 0,
        majorSoilTypesEn: ['Coastal Sand', 'Urban Fill'],
        majorSoilTypesTa: ['கடற்கரை மணல்', 'நகர்ப்புற மண்'],
        cropsEn: ['Terrace Vegetable Gardens', 'Ornamental Nursery'],
        cropsTa: ['மாடித்தோட்டம்', 'அலங்கார மலர் நாற்றுப்பண்ணை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.6,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.38,
          ecValue: 0.85
        }
      }
    ]
  },
  {
    districtId: 569,
    svgClickId: 11,
    nameEn: 'Coimbatore',
    nameTa: 'கோயம்புத்தூர்',
    slug: 'coimbatore',
    code: 'TN-CBE',
    headquartersEn: 'Coimbatore',
    headquartersTa: 'கோயம்புத்தூர்',
    agroZoneEn: 'Western Agro-Climatic Zone',
    agroZoneTa: 'மேற்கு வேளாண் மண்டலம்',
    rainfallMm: 657,
    totalBlocks: 12,
    totalVillages: 482,
    majorSoilTypesEn: ['Brown Soil', 'Red Loamy Soil', 'Black Calcareous'],
    majorSoilTypesTa: ['பழுப்பு மண்', 'செம்மண் சரளை', 'சுண்ணாம்பு கரிசல் மண்'],
    majorCropsEn: ['Maize', 'Cotton', 'Vegetables', 'Coconut', 'Sorghum', 'Banana'],
    majorCropsTa: ['மக்காச்சோளம்', 'பருத்தி', 'காய்கறிகள்', 'தென்னை', 'சோளம்', 'வாழை'],
    overviewEn: 'Nestled on the rainshadow pediments of the Western Ghats with deep red and brown soils, advanced micro-irrigation, and robust market-oriented horticulture.',
    overviewTa: 'மேற்குத் தொடர்ச்சி மலையடிவாரத்தில் அமைந்துள்ள கோயம்புத்தூர், நுண்ணீர்ப் பாசனம் மற்றும் பணப்பயிர் சாகுபடியில் முன்னோடி மாவட்டமாகும்.',
    soilDistribution: [
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 52, color: '#B45309' },
      { soilNameEn: 'Red Loam', soilNameTa: 'செம்மண்', percentage: 33, color: '#DC2626' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 15, color: '#334155' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 54, medium: 38, high: 8 },
      phosphorus: { low: 18, medium: 46, high: 36 },
      potassium: { low: 8, medium: 44, high: 48 },
      organicCarbon: { low: 42, medium: 46, high: 12 },
      phDistribution: { acidic: 6, neutral: 71, alkaline: 23 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 28, sufficient: 72 },
      boron: { deficient: 33, sufficient: 67 },
      samplesAnalyzed: 18240
    },
    blocks: [
      {
        blockId: 'pollachi-north',
        nameEn: 'Pollachi North',
        nameTa: 'பொள்ளாச்சி வடக்கு',
        villageCount: 49,
        majorSoilTypesEn: ['Brown Soil', 'Red Gravelly Loam'],
        majorSoilTypesTa: ['பழுப்பு மண்', 'செம்மண் சரளை'],
        cropsEn: ['Coconut', 'Cocoa', 'Nutmeg', 'Vegetables'],
        cropsTa: ['தென்னை', 'கோகோ', 'ஜாதிக்காய்', 'காய்கறிகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.72,
          ecValue: 0.32
        }
      },
      {
        blockId: 'pollachi-south',
        nameEn: 'Pollachi South',
        nameTa: 'பொள்ளாச்சி தெற்கு',
        villageCount: 44,
        majorSoilTypesEn: ['Deep Brown Loam', 'Red Clay'],
        majorSoilTypesTa: ['ஆழ் பழுப்பு மண்', 'சிவப்பு களிமண்'],
        cropsEn: ['Coconut', 'Banana', 'Fodder grass'],
        cropsTa: ['தென்னை', 'வாழை', 'தீவனப் பயிர்கள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 6.9,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.68,
          ecValue: 0.28
        }
      },
      {
        blockId: 'thondamuthur',
        nameEn: 'Thondamuthur',
        nameTa: 'தொண்டாமுத்தூர்',
        villageCount: 38,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Foothill Soil'],
        majorSoilTypesTa: ['செம்மண்', 'மலையடிவார பழுப்பு மண்'],
        cropsEn: ['Tomato', 'Small Onion', 'Banana', 'Arecanut'],
        cropsTa: ['தக்காளி', 'சின்ன வெங்காயம்', 'வாழை', 'பாக்கு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'High',
          potassiumStatus: 'Medium',
          phValue: 7.5,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.54,
          ecValue: 0.38
        }
      },
      {
        blockId: 'sulur',
        nameEn: 'Sulur',
        nameTa: 'சூலூர்',
        villageCount: 41,
        majorSoilTypesEn: ['Black Calcareous Loam', 'Gravelly Red'],
        majorSoilTypesTa: ['கரிசல் மண்', 'சரளை செம்மண்'],
        cropsEn: ['Maize', 'Cotton', 'Millets'],
        cropsTa: ['மக்காச்சோளம்', 'பருத்தி', 'சிறு தானியங்கள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 8.1,
          phCategory: 'Alkaline',
          organicCarbonPercent: 0.46,
          ecValue: 0.65
        }
      }
    ]
  },
  {
    districtId: 570,
    svgClickId: 4,
    nameEn: 'Cuddalore',
    nameTa: 'கடலூர்',
    slug: 'cuddalore',
    code: 'TN-CUD',
    headquartersEn: 'Cuddalore',
    headquartersTa: 'கடலூர்',
    agroZoneEn: 'North Eastern & Delta Margin Zone',
    agroZoneTa: 'வடகிழக்கு மற்றும் டெல்டா விளிம்பு மண்டலம்',
    rainfallMm: 1238,
    totalBlocks: 14,
    totalVillages: 896,
    majorSoilTypesEn: ['Coastal Alluvium', 'Red Sandy Loam', 'Clay Loam'],
    majorSoilTypesTa: ['கடற்கரை வண்டல்', 'மணல் செம்மண்', 'களிமண்'],
    majorCropsEn: ['Paddy', 'Sugarcane', 'Cashew', 'Groundnut', 'Jackfruit (Panruti)'],
    majorCropsTa: ['நெல்', 'கரும்பு', 'முந்திரி', 'நிலக்கடலை', 'பண்ருட்டி பலா'],
    overviewEn: 'Enriched by the Gadilam and Pennaiyar rivers, Cuddalore features fertile delta clay soils and the famous red lateritic jackfruit/cashew tract of Panruti.',
    overviewTa: 'கெடிலம் மற்றும் பெண்ணையாறு படுகையால் வளம்பெறும் கடலூர், பண்ருட்டி பலா, முந்திரி மற்றும் செழுமையான நெல் வயல்களைக் கொண்டது.',
    soilDistribution: [
      { soilNameEn: 'Red Loam', soilNameTa: 'செம்மண்', percentage: 46, color: '#DC2626' },
      { soilNameEn: 'Coastal Alluvium', soilNameTa: 'கடற்கரை வண்டல்', percentage: 38, color: '#059669' },
      { soilNameEn: 'Black / Clay', soilNameTa: 'கரிசல் / களிமண்', percentage: 16, color: '#334155' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 68, medium: 26, high: 6 },
      phosphorus: { low: 22, medium: 50, high: 28 },
      potassium: { low: 14, medium: 52, high: 34 },
      organicCarbon: { low: 50, medium: 42, high: 8 },
      phDistribution: { acidic: 11, neutral: 77, alkaline: 12 },
      zinc: { deficient: 41, sufficient: 59 },
      iron: { deficient: 20, sufficient: 80 },
      boron: { deficient: 33, sufficient: 67 },
      samplesAnalyzed: 21890
    },
    blocks: [
      {
        blockId: 'panruti',
        nameEn: 'Panruti',
        nameTa: 'பண்ருட்டி',
        villageCount: 42,
        majorSoilTypesEn: ['Deep Red Laterite Loam', 'Sand'],
        majorSoilTypesTa: ['ஆழ் செம்மண்', 'மணல்'],
        cropsEn: ['Jackfruit', 'Cashew', 'Tapioca'],
        cropsTa: ['பலாப்பழம்', 'முந்திரி', 'மரவள்ளி'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 6.7,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.52,
          ecValue: 0.24
        }
      },
      {
        blockId: 'chidambaram',
        nameEn: 'Chidambaram',
        nameTa: 'சிதம்பரம்',
        villageCount: 56,
        majorSoilTypesEn: ['Deep Alluvial Silt', 'Clay Loam'],
        majorSoilTypesTa: ['ஆழ் வண்டல்', 'களிமண்'],
        cropsEn: ['Paddy', 'Pulses', 'Sugarcane'],
        cropsTa: ['நெல்', 'பயறு', 'கரும்பு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.3,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.62,
          ecValue: 0.45
        }
      }
    ]
  },
  {
    districtId: 571,
    svgClickId: 12,
    nameEn: 'Dharmapuri',
    nameTa: 'தருமபுரி',
    slug: 'dharmapuri',
    code: 'TN-DPI',
    headquartersEn: 'Dharmapuri',
    headquartersTa: 'தருமபுரி',
    agroZoneEn: 'North Western Zone',
    agroZoneTa: 'வடமேற்கு மண்டலம்',
    rainfallMm: 853,
    totalBlocks: 8,
    totalVillages: 512,
    majorSoilTypesEn: ['Red Sandy Loam', 'Brown Forest Soil', 'Black Clay Pockets'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு வனமண்', 'கரிசல் சிறுபகுதிகள்'],
    majorCropsEn: ['Ragi (Finger Millet)', 'Mango', 'Tomato', 'Sugarcane', 'Tamarind'],
    majorCropsTa: ['கேழ்வரகு (ராகி)', 'மாம்பழம்', 'தக்காளி', 'கரும்பு', 'புளி'],
    overviewEn: 'Undulating terrain with predominantly red sandy loams and high permeability, making it the capital of finger millet (Ragi) cultivation and high-grade mango orchards.',
    overviewTa: 'ஏற்ற இறக்கமான நில அமைப்பும் செம்மண் வளமும் கொண்ட தருமபுரி, கேழ்வரகு மற்றும் மாம்பழ சாகுபடியில் முதன்மை வகிக்கிறது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 67, color: '#DC2626' },
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 24, color: '#B45309' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 9, color: '#334155' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 65, medium: 28, high: 7 },
      phosphorus: { low: 20, medium: 52, high: 28 },
      potassium: { low: 18, medium: 54, high: 28 },
      organicCarbon: { low: 51, medium: 41, high: 8 },
      phDistribution: { acidic: 18, neutral: 74, alkaline: 8 },
      zinc: { deficient: 48, sufficient: 52 },
      iron: { deficient: 19, sufficient: 81 },
      boron: { deficient: 38, sufficient: 62 },
      samplesAnalyzed: 11200
    },
    blocks: [
      {
        blockId: 'dharmapuri-block',
        nameEn: 'Dharmapuri',
        nameTa: 'தருமபுரி',
        villageCount: 62,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam'],
        majorSoilTypesTa: ['செம்மண்', 'பழுப்பு மண்'],
        cropsEn: ['Ragi', 'Mango', 'Tomato'],
        cropsTa: ['ராகி', 'மாம்பழம்', 'தக்காளி'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 6.8,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.52,
          ecValue: 0.25
        }
      },
      {
        blockId: 'pennagaram',
        nameEn: 'Pennagaram',
        nameTa: 'பென்னாகரம்',
        villageCount: 54,
        majorSoilTypesEn: ['Gravelly Red Soil', 'Loamy Sand'],
        majorSoilTypesTa: ['சரளை செம்மண்', 'மணற்பாங்கான மண்'],
        cropsEn: ['Ragi', 'Horsegram', 'Castor'],
        cropsTa: ['ராகி', 'கொள்ளு', 'ஆமணக்கு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 6.5,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.41,
          ecValue: 0.18
        }
      }
    ]
  },
  {
    districtId: 572,
    svgClickId: 22,
    nameEn: 'Dindigul',
    nameTa: 'திண்டுக்கல்',
    slug: 'dindigul',
    code: 'TN-DGL',
    headquartersEn: 'Dindigul',
    headquartersTa: 'திண்டுக்கல்',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    rainfallMm: 836,
    totalBlocks: 14,
    totalVillages: 358,
    majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam', 'Hilly Peat (Kodaikanal)'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு மண்', 'மலை மட்கு மண்'],
    majorCropsEn: ['Vegetables', 'Flowers', 'Small Onion', 'Coffee (Sirumalai)', 'Garlic'],
    majorCropsTa: ['காய்கறிகள்', 'மலர்கள்', 'சின்ன வெங்காயம்', 'சிறுமலை காபி', 'கொடைக்கானல் பூண்டு'],
    overviewEn: 'Encompassing the plains and Kodaikanal / Sirumalai hills, renowned for GI-tagged Kodaikanal garlic, small onion hubs, and multi-tier floriculture.',
    overviewTa: 'கொடைக்கானல் மலை மற்றும் சிறுமலைத் தொடர்களை உள்ளடக்கிய திண்டுக்கல், மலைப்பூண்டு, பூக்கள் மற்றும் காய்கறிகளுக்குப் பெயர் பெற்றது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 58, color: '#DC2626' },
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 26, color: '#B45309' },
      { soilNameEn: 'Hilly / Peat', soilNameTa: 'மலை மட்கு மண்', percentage: 16, color: '#0D9488' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 64, medium: 28, high: 8 },
      phosphorus: { low: 24, medium: 46, high: 30 },
      potassium: { low: 14, medium: 50, high: 36 },
      organicCarbon: { low: 48, medium: 42, high: 10 },
      phDistribution: { acidic: 15, neutral: 72, alkaline: 13 },
      zinc: { deficient: 46, sufficient: 54 },
      iron: { deficient: 22, sufficient: 78 },
      boron: { deficient: 37, sufficient: 63 },
      samplesAnalyzed: 16420
    },
    blocks: [
      {
        blockId: 'kodaikanal',
        nameEn: 'Kodaikanal',
        nameTa: 'கொடைக்கானல்',
        villageCount: 16,
        majorSoilTypesEn: ['High Altitude Hill Peat', 'Acidic Laterite'],
        majorSoilTypesTa: ['மலை மட்கு மண்', 'செம்பொறை'],
        cropsEn: ['Garlic', 'Plums', 'Pear', 'Carrot'],
        cropsTa: ['பூண்டு', 'பிளம்ஸ்', 'பேரிக்காய்', 'கேரட்'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 5.5,
          phCategory: 'Acidic',
          organicCarbonPercent: 1.18,
          ecValue: 0.16
        }
      },
      {
        blockId: 'oddanchatram',
        nameEn: 'Oddanchatram',
        nameTa: 'ஒட்டன்சத்திரம்',
        villageCount: 32,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam'],
        majorSoilTypesTa: ['செம்மண்', 'பழுப்பு மண்'],
        cropsEn: ['Drumstick', 'Chilli', 'Tomato', 'Small Onion'],
        cropsTa: ['முருங்கை', 'மிளகாய்', 'தக்காளி', 'சின்ன வெங்காயம்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 7.4,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.54,
          ecValue: 0.35
        }
      }
    ]
  },
  {
    districtId: 573,
    svgClickId: 10,
    nameEn: 'Erode',
    nameTa: 'ஈரோடு',
    slug: 'erode',
    code: 'TN-ERD',
    headquartersEn: 'Erode',
    headquartersTa: 'ஈரோடு',
    agroZoneEn: 'Western Agro-Climatic Zone',
    agroZoneTa: 'மேற்கு வேளாண் மண்டலம்',
    rainfallMm: 712,
    totalBlocks: 14,
    totalVillages: 375,
    majorSoilTypesEn: ['Brown Soil', 'Red Loamy Soil', 'Bhavani Alluvial'],
    majorSoilTypesTa: ['பழுப்பு மண்', 'செம்மண்', 'பவானி வண்டல் மண்'],
    majorCropsEn: ['Turmeric (Manjal)', 'Sugarcane', 'Paddy', 'Banana', 'Tapioca'],
    majorCropsTa: ['மஞ்சள் (ஈரோடு மஞ்சள்)', 'கரும்பு', 'நெல்', 'வாழை', 'மரவள்ளி'],
    overviewEn: 'The Yellow City of India, blessed by the Bhavani and Cauvery river convergence; well-drained brown loams nourish world-famous GI-tagged Erode turmeric.',
    overviewTa: 'பவானி மற்றும் காவிரி நதிகள் பாயும் மஞ்சள் மாநகரம்; வளமான பழுப்பு மற்றும் செம்மண் சர்வதேச புகழ்பெற்ற ஈரோடு மஞ்சள் சாகுபடிக்கு ஏற்றது.',
    soilDistribution: [
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 56, color: '#B45309' },
      { soilNameEn: 'Red Loam', soilNameTa: 'செம்மண்', percentage: 32, color: '#DC2626' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 12, color: '#059669' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 58, medium: 34, high: 8 },
      phosphorus: { low: 16, medium: 48, high: 36 },
      potassium: { low: 10, medium: 46, high: 44 },
      organicCarbon: { low: 44, medium: 46, high: 10 },
      phDistribution: { acidic: 8, neutral: 76, alkaline: 16 },
      zinc: { deficient: 39, sufficient: 61 },
      iron: { deficient: 21, sufficient: 79 },
      boron: { deficient: 32, sufficient: 68 },
      samplesAnalyzed: 19800
    },
    blocks: [
      {
        blockId: 'gobichettipalayam',
        nameEn: 'Gobichettipalayam',
        nameTa: 'கோபிசெட்டிபாளையம்',
        villageCount: 36,
        majorSoilTypesEn: ['Bhavani Alluvial Loam', 'Brown Clay Loam'],
        majorSoilTypesTa: ['பவானி வண்டல்', 'பழுப்பு களிமண்'],
        cropsEn: ['Paddy', 'Sugarcane', 'Turmeric', 'Banana'],
        cropsTa: ['நெல்', 'கரும்பு', 'மஞ்சள்', 'வாழை'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.68,
          ecValue: 0.30
        }
      },
      {
        blockId: 'anthiyur',
        nameEn: 'Anthiyur',
        nameTa: 'அந்தியூர்',
        villageCount: 28,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam'],
        majorSoilTypesTa: ['செம்மண்', 'பழுப்பு மண்'],
        cropsEn: ['Tapioca', 'Groundnut', 'Millets'],
        cropsTa: ['மரவள்ளி', 'நிலக்கடலை', 'சிறு தானியங்கள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 6.9,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.49,
          ecValue: 0.25
        }
      }
    ]
  },
  {
    districtId: 729,
    svgClickId: 38,
    nameEn: 'Kallakurichi',
    nameTa: 'கள்ளக்குறிச்சி',
    slug: 'kallakurichi',
    code: 'TN-KLK',
    headquartersEn: 'Kallakurichi',
    headquartersTa: 'கள்ளக்குறிச்சி',
    agroZoneEn: 'North Western & North Eastern Foothill Zone',
    agroZoneTa: 'வடமேற்கு மற்றும் வடகிழக்கு மலையடிவார மண்டலம்',
    rainfallMm: 1070,
    totalBlocks: 9,
    totalVillages: 572,
    majorSoilTypesEn: ['Red Sandy Loam', 'Black Soil', 'Manimukthar Alluvium'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'கரிசல் மண்', 'மணிமுத்தாறு வண்டல்'],
    majorCropsEn: ['Paddy', 'Sugarcane', 'Groundnut', 'Maize', 'Tapioca'],
    majorCropsTa: ['நெல்', 'கரும்பு', 'நிலக்கடலை', 'மக்காச்சோளம்', 'மரவள்ளி'],
    overviewEn: 'Sheltered beneath the Kalrayan hills and Manimukthar river basin, known for expansive paddy fields, sugar factories, and high-yield maize cultivation.',
    overviewTa: 'கல்வராயன் மலையடிவாரம் மற்றும் மணிமுத்தாறு படுகையில் அமைந்த கள்ளக்குறிச்சி, கரும்பு மற்றும் நெல் சாகுபடியில் சிறந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 58, color: '#DC2626' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 24, color: '#334155' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 18, color: '#059669' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 67, medium: 27, high: 6 },
      phosphorus: { low: 23, medium: 51, high: 26 },
      potassium: { low: 13, medium: 53, high: 34 },
      organicCarbon: { low: 51, medium: 41, high: 8 },
      phDistribution: { acidic: 11, neutral: 75, alkaline: 14 },
      zinc: { deficient: 43, sufficient: 57 },
      iron: { deficient: 22, sufficient: 78 },
      boron: { deficient: 35, sufficient: 65 },
      samplesAnalyzed: 15300
    },
    blocks: [
      {
        blockId: 'kallakurichi-block',
        nameEn: 'Kallakurichi',
        nameTa: 'கள்ளக்குறிச்சி',
        villageCount: 48,
        majorSoilTypesEn: ['Red Sandy Loam', 'Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'களிமண்'],
        cropsEn: ['Sugarcane', 'Paddy', 'Maize'],
        cropsTa: ['கரும்பு', 'நெல்', 'மக்காச்சோளம்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.50,
          ecValue: 0.28
        }
      },
      {
        blockId: 'kalrayan-hills',
        nameEn: 'Kalrayan Hills',
        nameTa: 'கல்வராயன் மலை',
        villageCount: 42,
        majorSoilTypesEn: ['Hill Forest Loam', 'Gravelly Red'],
        majorSoilTypesTa: ['வன மண்', 'சரளை செம்மண்'],
        cropsEn: ['Ragi', 'Millets', 'Pepper'],
        cropsTa: ['ராகி', 'தினை வகைகள்', 'மிளகு'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 6.2,
          phCategory: 'Acidic',
          organicCarbonPercent: 0.85,
          ecValue: 0.18
        }
      }
    ]
  },
  {
    districtId: 574,
    svgClickId: 2,
    nameEn: 'Kanchipuram',
    nameTa: 'காஞ்சிபுரம்',
    slug: 'kanchipuram',
    code: 'TN-KCH',
    headquartersEn: 'Kanchipuram',
    headquartersTa: 'காஞ்சிபுரம்',
    agroZoneEn: 'North Eastern Agro-Climatic Zone',
    agroZoneTa: 'வடகிழக்கு வேளாண் மண்டலம்',
    rainfallMm: 1205,
    totalBlocks: 5,
    totalVillages: 488,
    majorSoilTypesEn: ['Red Sandy Soil', 'Alluvial Clay Loam', 'Grey Soil'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'வண்டல் களிமண்', 'சாம்பல் மண்'],
    majorCropsEn: ['Paddy', 'Groundnut', 'Sugarcane', 'Watermelon', 'Jasmine'],
    majorCropsTa: ['நெல்', 'நிலக்கடலை', 'கரும்பு', 'தர்பூசணி', 'மல்லிகை'],
    overviewEn: 'The City of Thousand Temples and silk weavers, irrigated by the Palar river with traditional eri (lake) wetland irrigation systems and fertile red loams.',
    overviewTa: 'பாலாறு மற்றும் ஏரிப் பாசனங்களை முதன்மையாகக் கொண்ட காஞ்சிபுரம், பாரம்பரிய நெல் மற்றும் மலர் சாகுபடியில் சிறந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 51, color: '#DC2626' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 31, color: '#059669' },
      { soilNameEn: 'Grey / Clay', soilNameTa: 'சாம்பல் மண்', percentage: 18, color: '#64748B' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 70, medium: 24, high: 6 },
      phosphorus: { low: 25, medium: 49, high: 26 },
      potassium: { low: 16, medium: 52, high: 32 },
      organicCarbon: { low: 53, medium: 39, high: 8 },
      phDistribution: { acidic: 9, neutral: 78, alkaline: 13 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 20, sufficient: 80 },
      boron: { deficient: 35, sufficient: 65 },
      samplesAnalyzed: 14200
    },
    blocks: [
      {
        blockId: 'kanchipuram-block',
        nameEn: 'Kanchipuram',
        nameTa: 'காஞ்சிபுரம்',
        villageCount: 62,
        majorSoilTypesEn: ['Red Sandy Loam', 'Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'களிமண்'],
        cropsEn: ['Paddy', 'Groundnut', 'Vegetables'],
        cropsTa: ['நெல்', 'நிலக்கடலை', 'காய்கறிகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.50,
          ecValue: 0.34
        }
      },
      {
        blockId: 'sriperumbudur',
        nameEn: 'Sriperumbudur',
        nameTa: 'ஸ்ரீபெரும்புதூர்',
        villageCount: 74,
        majorSoilTypesEn: ['Red Gravelly Soil', 'Clay Loam'],
        majorSoilTypesTa: ['சரளை செம்மண்', 'களிமண்'],
        cropsEn: ['Paddy', 'Horticulture', 'Green Fodder'],
        cropsTa: ['நெல்', 'தோட்டக்கலை', 'தீவனம்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.0,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.46,
          ecValue: 0.31
        }
      }
    ]
  },
  {
    districtId: 575,
    svgClickId: 29,
    nameEn: 'Kanniyakumari',
    nameTa: 'கன்னியாகுமரி',
    slug: 'kanniyakumari',
    code: 'TN-KKI',
    headquartersEn: 'Nagercoil',
    headquartersTa: 'நாகர்கோவில்',
    agroZoneEn: 'High Rainfall Zone',
    agroZoneTa: 'அதிக மழைப்பொழிவு மண்டலம்',
    rainfallMm: 1465,
    totalBlocks: 9,
    totalVillages: 154,
    majorSoilTypesEn: ['Laterite Soil', 'Red Loam', 'Coastal Marine Sands'],
    majorSoilTypesTa: ['செம்பொறை மண்', 'செம்மண்', 'கடற்கரை மணல்'],
    majorCropsEn: ['Rubber', 'Banana (Matti & Red Banana)', 'Coconut', 'Paddy', 'Clove'],
    majorCropsTa: ['ரப்பர்', 'வாழை (மட்டி, செவ்வாழை)', 'தென்னை', 'நெல்', 'கிராம்பு'],
    overviewEn: 'The southernmost tip where two monsoons converge. Characterized by deep, well-drained acidic lateritic soils supporting lush tropical plantation rubber, coconut, and GI-tagged Matti bananas.',
    overviewTa: 'இரு பருவமழைகளின் பயனையும் பெறும் கன்னியாகுமரி மாவட்டம், செம்பொறை மண் வளமும் புவிசார் குறியீடு பெற்ற மட்டி வாழை மற்றும் ரப்பர் சாகுபடியும் கொண்டது.',
    soilDistribution: [
      { soilNameEn: 'Laterite Soil', soilNameTa: 'செம்பொறை மண்', percentage: 68, color: '#B45309' },
      { soilNameEn: 'Red Loamy Soil', soilNameTa: 'செம்மண்', percentage: 22, color: '#DC2626' },
      { soilNameEn: 'Coastal Sandy', soilNameTa: 'கடற்கரை மணல்', percentage: 10, color: '#64748B' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 35, medium: 45, high: 20 },
      phosphorus: { low: 48, medium: 34, high: 18 },
      potassium: { low: 22, medium: 48, high: 30 },
      organicCarbon: { low: 22, medium: 48, high: 30 },
      phDistribution: { acidic: 76, neutral: 21, alkaline: 3 },
      zinc: { deficient: 34, sufficient: 66 },
      iron: { deficient: 10, sufficient: 90 },
      boron: { deficient: 42, sufficient: 58 },
      samplesAnalyzed: 10180
    },
    blocks: [
      {
        blockId: 'thovalai',
        nameEn: 'Thovalai',
        nameTa: 'தோவாளை',
        villageCount: 18,
        majorSoilTypesEn: ['Red Loam', 'Alluvial Channel'],
        majorSoilTypesTa: ['செம்மண்', 'பாசன வண்டல்'],
        cropsEn: ['Flowers (Pitchi & Jasmine)', 'Paddy', 'Banana'],
        cropsTa: ['மலர்கள் (பிச்சி, மல்லி)', 'நெல்', 'வாழை'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 6.2,
          phCategory: 'Acidic',
          organicCarbonPercent: 0.68,
          ecValue: 0.22
        }
      },
      {
        blockId: 'thiruvattar',
        nameEn: 'Thiruvattar',
        nameTa: 'திருவட்டார்',
        villageCount: 21,
        majorSoilTypesEn: ['Deep Acidic Laterite', 'Gravelly Clay'],
        majorSoilTypesTa: ['ஆழ் அமில செம்பொறை', 'சரளை களிமண்'],
        cropsEn: ['Natural Rubber', 'Pineapple', 'Pepper', 'Matti Banana'],
        cropsTa: ['இயற்கை ரப்பர்', 'அன்னாசி', 'மிளகு', 'மட்டி வாழை'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 5.3,
          phCategory: 'Acidic',
          organicCarbonPercent: 0.89,
          ecValue: 0.15
        }
      }
    ]
  },
  {
    districtId: 576,
    svgClickId: 15,
    nameEn: 'Karur',
    nameTa: 'கரூர்',
    slug: 'karur',
    code: 'TN-KRR',
    headquartersEn: 'Karur',
    headquartersTa: 'கரூர்',
    agroZoneEn: 'Western & Cauvery Basin Zone',
    agroZoneTa: 'மேற்கு மற்றும் காவிரி படுகை மண்டலம்',
    rainfallMm: 652,
    totalBlocks: 8,
    totalVillages: 203,
    majorSoilTypesEn: ['Red Sandy Loam', 'Black Soil', 'Amaravathi / Cauvery Alluvium'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'கரிசல் மண்', 'அமராவதி-காவிரி வண்டல்'],
    majorCropsEn: ['Banana', 'Moringa (Muringai)', 'Paddy', 'Sugarcane', 'Millets'],
    majorCropsTa: ['வாழை', 'முருங்கை', 'நெல்', 'கரும்பு', 'சிறு தானியங்கள்'],
    overviewEn: 'Situated where the Amaravathi river joins the Cauvery; alluvial banks foster intensive banana and commercial drumstick (Moringa) farming.',
    overviewTa: 'காவிரி மற்றும் அமராவதி ஆறுகள் சங்கமிக்கும் கரூர், வாழை மற்றும் முருங்கை சாகுபடிக்கு புகழ்பெற்றது.',
    soilDistribution: [
      { soilNameEn: 'Red Loam', soilNameTa: 'செம்மண்', percentage: 53, color: '#DC2626' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 28, color: '#334155' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 19, color: '#059669' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 66, medium: 28, high: 6 },
      phosphorus: { low: 20, medium: 52, high: 28 },
      potassium: { low: 12, medium: 50, high: 38 },
      organicCarbon: { low: 52, medium: 40, high: 8 },
      phDistribution: { acidic: 6, neutral: 78, alkaline: 16 },
      zinc: { deficient: 44, sufficient: 56 },
      iron: { deficient: 22, sufficient: 78 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 12900
    },
    blocks: [
      {
        blockId: 'karur-block',
        nameEn: 'Karur',
        nameTa: 'கரூர்',
        villageCount: 28,
        majorSoilTypesEn: ['Alluvial Loam', 'Red Soil'],
        majorSoilTypesTa: ['வண்டல் மண்', 'செம்மண்'],
        cropsEn: ['Banana', 'Sugarcane', 'Paddy'],
        cropsTa: ['வாழை', 'கரும்பு', 'நெல்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 7.4,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.58,
          ecValue: 0.35
        }
      },
      {
        blockId: 'aravakurichi',
        nameEn: 'Aravakurichi',
        nameTa: 'அரவக்குறிச்சி',
        villageCount: 24,
        majorSoilTypesEn: ['Red Sandy Soil', 'Black Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'கரிசல் மண்'],
        cropsEn: ['Moringa', 'Millets', 'Chillies'],
        cropsTa: ['முருங்கை', 'சிறு தானியங்கள்', 'மிளகாய்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.8,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.44,
          ecValue: 0.42
        }
      }
    ]
  },
  {
    districtId: 577,
    svgClickId: 13,
    nameEn: 'Krishnagiri',
    nameTa: 'கிருஷ்ணகிரி',
    slug: 'krishnagiri',
    code: 'TN-KGI',
    headquartersEn: 'Krishnagiri',
    headquartersTa: 'கிருஷ்ணகிரி',
    agroZoneEn: 'North Western Zone',
    agroZoneTa: 'வடமேற்கு மண்டலம்',
    rainfallMm: 830,
    totalBlocks: 10,
    totalVillages: 636,
    majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam', 'Forest Mountain Loam'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு மண்', 'வன மலை மண்'],
    majorCropsEn: ['Mango (Totapuri, Alphonso)', 'Ragi', 'Roses (Hosur)', 'Tomato', 'Capsicum'],
    majorCropsTa: ['மாம்பழம் (தோத்தாபுரி, அல்போன்சா)', 'ராகி', 'ஓசூர் ரோஜா', 'தக்காளி', 'குடைமிளகாய்'],
    overviewEn: 'The Mango capital of Tamil Nadu and international polyhouse floriculture hub in Hosur, blessed by plateau microclimates and permeable red soils.',
    overviewTa: 'தமிழ்நாட்டின் மாம்பழத் தலைநகரம் மற்றும் ஓசூர் ரோஜா மலர் ஏற்றுமதி மையம்; மேட்டுநில தட்பவெப்பம் மற்றும் செம்மண் வளம் கொண்டது.',
    soilDistribution: [
      { soilNameEn: 'Red Loam', soilNameTa: 'செம்மண்', percentage: 66, color: '#DC2626' },
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 22, color: '#B45309' },
      { soilNameEn: 'Hill / Forest', soilNameTa: 'மலை / வன மண்', percentage: 12, color: '#0D9488' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 61, medium: 31, high: 8 },
      phosphorus: { low: 18, medium: 52, high: 30 },
      potassium: { low: 14, medium: 54, high: 32 },
      organicCarbon: { low: 48, medium: 42, high: 10 },
      phDistribution: { acidic: 16, neutral: 74, alkaline: 10 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 18, sufficient: 82 },
      boron: { deficient: 35, sufficient: 65 },
      samplesAnalyzed: 17200
    },
    blocks: [
      {
        blockId: 'hosur',
        nameEn: 'Hosur',
        nameTa: 'ஓசூர்',
        villageCount: 65,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Mountain Soil'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு மண்'],
        cropsEn: ['Cut Roses', 'Carnations', 'Exotic Vegetables'],
        cropsTa: ['ரோஜா மலர்கள்', 'கார்னேஷன்', 'வெளிநாட்டு காய்கறிகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 6.6,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.65,
          ecValue: 0.28
        }
      },
      {
        blockId: 'krishnagiri-block',
        nameEn: 'Krishnagiri',
        nameTa: 'கிருஷ்ணகிரி',
        villageCount: 72,
        majorSoilTypesEn: ['Red Sandy Soil', 'Gravelly Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'சரளை களிமண்'],
        cropsEn: ['Mango', 'Ragi', 'Tomato'],
        cropsTa: ['மாம்பழம்', 'ராகி', 'தக்காளி'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 6.8,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.52,
          ecValue: 0.22
        }
      }
    ]
  },
  {
    districtId: 578,
    svgClickId: 21,
    nameEn: 'Madurai',
    nameTa: 'மதுரை',
    slug: 'madurai',
    code: 'TN-MDU',
    headquartersEn: 'Madurai',
    headquartersTa: 'மதுரை',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    rainfallMm: 840,
    totalBlocks: 13,
    totalVillages: 665,
    majorSoilTypesEn: ['Red Sandy Loam', 'Black Cotton Soil', 'Alluvial Vaigai Basin'],
    majorSoilTypesTa: ['செம்மண் மணல் சரளை', 'கரிசல் மண்', 'வைகைப் படுகை வண்டல்'],
    majorCropsEn: ['Paddy', 'Jasmine (Malligai)', 'Millets', 'Pulses', 'Cotton'],
    majorCropsTa: ['நெல்', 'மல்லிகை', 'சிறு தானியங்கள்', 'பயறு வகைகள்', 'பருத்தி'],
    overviewEn: 'Enriched by the historic Vaigai basin, Madurai features predominant red soils in northern tracts and deep black soil in southern pockets, famed for fragrance horticulture.',
    overviewTa: 'வைகை நதிப் படுகையால் செழுமை பெற்ற மதுரை மாவட்டம், செம்மண் மற்றும் கரிசல் மண் கலவையோடு வாசனை மலர் சாகுபடிக்கு பெயர் பெற்றது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 56, color: '#DC2626' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 32, color: '#334155' },
      { soilNameEn: 'Alluvial', soilNameTa: 'வண்டல் மண்', percentage: 12, color: '#059669' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 68, medium: 26, high: 6 },
      phosphorus: { low: 24, medium: 48, high: 28 },
      potassium: { low: 16, medium: 50, high: 34 },
      organicCarbon: { low: 56, medium: 36, high: 8 },
      phDistribution: { acidic: 8, neutral: 68, alkaline: 24 },
      zinc: { deficient: 46, sufficient: 54 },
      iron: { deficient: 22, sufficient: 78 },
      boron: { deficient: 35, sufficient: 65 },
      samplesAnalyzed: 15410
    },
    blocks: [
      {
        blockId: 'vadipatti',
        nameEn: 'Vadipatti',
        nameTa: 'வாடிப்பட்டி',
        villageCount: 46,
        majorSoilTypesEn: ['Red Loam', 'Vaigai Silt'],
        majorSoilTypesTa: ['செம்மண்', 'வைகை வண்டல்'],
        cropsEn: ['Paddy', 'Banana', 'Sugarcane'],
        cropsTa: ['நெல்', 'வாழை', 'கரும்பு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.3,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.55,
          ecValue: 0.38
        }
      },
      {
        blockId: 'thiruparankundram',
        nameEn: 'Thiruparankundram',
        nameTa: 'திருப்பரங்குன்றம்',
        villageCount: 52,
        majorSoilTypesEn: ['Red Sandy Loam', 'Mixed Loam'],
        majorSoilTypesTa: ['செம்மண்', 'கலப்பு மண்'],
        cropsEn: ['Jasmine (Malligai)', 'Vegetables', 'Paddy'],
        cropsTa: ['மதுரை மல்லிகை', 'காய்கறிகள்', 'நெல்'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'High',
          potassiumStatus: 'Medium',
          phValue: 7.4,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.61,
          ecValue: 0.45
        }
      }
    ]
  },
  {
    districtId: 735,
    svgClickId: 39,
    nameEn: 'Mayiladuthurai',
    nameTa: 'மயிலாடுதுறை',
    slug: 'mayiladuthurai',
    code: 'TN-MYD',
    headquartersEn: 'Mayiladuthurai',
    headquartersTa: 'மயிலாடுதுறை',
    agroZoneEn: 'Cauvery Delta Agro-Climatic Zone',
    agroZoneTa: 'காவிரி டெல்டா வேளாண் மண்டலம்',
    rainfallMm: 1280,
    totalBlocks: 5,
    totalVillages: 287,
    majorSoilTypesEn: ['Cauvery Alluvial Silt', 'Coastal Marine Loam', 'Clay'],
    majorSoilTypesTa: ['காவிரி வண்டல் மண்', 'கடற்கரை வண்டல்', 'களிமண்'],
    majorCropsEn: ['Paddy (Double Crop)', 'Black Gram', 'Green Gram', 'Sugarcane', 'Coconut'],
    majorCropsTa: ['நெல் (இருபோகம்)', 'உளுந்து', 'பச்சைப்பயறு', 'கரும்பு', 'தென்னை'],
    overviewEn: 'The tail-end delta district intersected by the Cauvery, Kollidam, and Veerachozhan rivers, producing rich paddy yields and delta pulses.',
    overviewTa: 'காவிரி மற்றும் கொள்ளிடத்தின் கடைமடை டெல்டா மாவட்டம்; வளமான வண்டல் மண் மற்றும் நெல், பயறு சாகுபடிக்கு உகந்தது.',
    soilDistribution: [
      { soilNameEn: 'Alluvial Soil', soilNameTa: 'வண்டல் மண்', percentage: 72, color: '#059669' },
      { soilNameEn: 'Coastal Marine Loam', soilNameTa: 'கடற்கரை வண்டல்', percentage: 18, color: '#64748B' },
      { soilNameEn: 'Clay / Mixed', soilNameTa: 'களிமண்', percentage: 10, color: '#0D9488' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 62, medium: 30, high: 8 },
      phosphorus: { low: 22, medium: 52, high: 26 },
      potassium: { low: 14, medium: 50, high: 36 },
      organicCarbon: { low: 46, medium: 44, high: 10 },
      phDistribution: { acidic: 8, neutral: 76, alkaline: 16 },
      zinc: { deficient: 40, sufficient: 60 },
      iron: { deficient: 14, sufficient: 86 },
      boron: { deficient: 30, sufficient: 70 },
      samplesAnalyzed: 14600
    },
    blocks: [
      {
        blockId: 'mayiladuthurai-block',
        nameEn: 'Mayiladuthurai',
        nameTa: 'மயிலாடுதுறை',
        villageCount: 65,
        majorSoilTypesEn: ['Deep Delta Alluvium', 'Clay Loam'],
        majorSoilTypesTa: ['டெல்டா வண்டல்', 'களிமண்'],
        cropsEn: ['Paddy', 'Pulses', 'Banana'],
        cropsTa: ['நெல்', 'பயறு', 'வாழை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.3,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.64,
          ecValue: 0.38
        }
      },
      {
        blockId: 'sirkazhi',
        nameEn: 'Sirkazhi',
        nameTa: 'சீர்காழி',
        villageCount: 72,
        majorSoilTypesEn: ['Coastal Alluvium', 'Clay Silt'],
        majorSoilTypesTa: ['கடற்கரை வண்டல்', 'களிமண்'],
        cropsEn: ['Paddy', 'Gingelly', 'Coconut'],
        cropsTa: ['நெல்', 'எள்', 'தென்னை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.5,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.58,
          ecValue: 0.48
        }
      }
    ]
  },
  {
    districtId: 579,
    svgClickId: 19,
    nameEn: 'Nagapattinam',
    nameTa: 'நாகப்பட்டினம்',
    slug: 'nagapattinam',
    code: 'TN-NGP',
    headquartersEn: 'Nagapattinam',
    headquartersTa: 'நாகப்பட்டினம்',
    agroZoneEn: 'Cauvery Delta & Coastal Zone',
    agroZoneTa: 'காவிரி டெல்டா மற்றும் கடற்கரை மண்டலம்',
    rainfallMm: 1340,
    totalBlocks: 6,
    totalVillages: 193,
    majorSoilTypesEn: ['Coastal Alluvium', 'Saline Clay', 'Delta Silt'],
    majorSoilTypesTa: ['கடற்கரை வண்டல்', 'உவர் களிமண்', 'டெல்டா வண்டல்'],
    majorCropsEn: ['Paddy', 'Black Gram', 'Casuarina', 'Coconut', 'Groundnut'],
    majorCropsTa: ['நெல்', 'உளுந்து', 'சவுக்கு', 'தென்னை', 'நிலக்கடலை'],
    overviewEn: 'Coastal delta district on the Bay of Bengal with deep alluvial soils and coastal salt-tolerant tracts supporting delta rice-fallow pulse cropping systems.',
    overviewTa: 'வங்காள விரிகுடா கடற்கரையில் அமைந்துள்ள நாகப்பட்டினம், நெல்லுக்குப் பின் உளுந்து சாகுபடிக்கு உகந்த டெல்டா வண்டல் மண் கொண்டது.',
    soilDistribution: [
      { soilNameEn: 'Alluvial Delta Soil', soilNameTa: 'டெல்டா வண்டல் மண்', percentage: 60, color: '#059669' },
      { soilNameEn: 'Coastal Saline Sand', soilNameTa: 'கடற்கரை உவர் மண்', percentage: 28, color: '#64748B' },
      { soilNameEn: 'Clay Soil', soilNameTa: 'களிமண்', percentage: 12, color: '#334155' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 68, medium: 26, high: 6 },
      phosphorus: { low: 26, medium: 50, high: 24 },
      potassium: { low: 12, medium: 48, high: 40 },
      organicCarbon: { low: 48, medium: 42, high: 10 },
      phDistribution: { acidic: 6, neutral: 72, alkaline: 22 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 16, sufficient: 84 },
      boron: { deficient: 32, sufficient: 68 },
      samplesAnalyzed: 12800
    },
    blocks: [
      {
        blockId: 'nagapattinam-block',
        nameEn: 'Nagapattinam',
        nameTa: 'நாகப்பட்டினம்',
        villageCount: 34,
        majorSoilTypesEn: ['Coastal Alluvium', 'Saline Silt'],
        majorSoilTypesTa: ['கடற்கரை வண்டல்', 'உவர் மண்'],
        cropsEn: ['Paddy', 'Casuarina', 'Coconut'],
        cropsTa: ['நெல்', 'சவுக்கு', 'தென்னை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.7,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.54,
          ecValue: 0.68
        }
      },
      {
        blockId: 'kilvelur',
        nameEn: 'Kilvelur',
        nameTa: 'கீழ்வேளூர்',
        villageCount: 42,
        majorSoilTypesEn: ['Deep Delta Alluvial Loam', 'Clay'],
        majorSoilTypesTa: ['ஆழ் டெல்டா வண்டல்', 'களிமண்'],
        cropsEn: ['Paddy', 'Black Gram', 'Sesame'],
        cropsTa: ['நெல்', 'உளுந்து', 'எள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.60,
          ecValue: 0.42
        }
      }
    ]
  },
  {
    districtId: 580,
    svgClickId: 8,
    nameEn: 'Namakkal',
    nameTa: 'நாமக்கல்',
    slug: 'namakkal',
    code: 'TN-NMK',
    headquartersEn: 'Namakkal',
    headquartersTa: 'நாமக்கல்',
    agroZoneEn: 'North Western Agro-Climatic Zone',
    agroZoneTa: 'வடமேற்கு வேளாண் மண்டலம்',
    rainfallMm: 780,
    totalBlocks: 15,
    totalVillages: 391,
    majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam', 'Kolli Hills Mountain Soil'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு மண்', 'கொல்லிமலை வன மண்'],
    majorCropsEn: ['Poultry Feed Maize', 'Tapioca', 'Groundnut', 'Pepper (Kolli Hills)', 'Paddy'],
    majorCropsTa: ['மக்காச்சோளம்', 'மரவள்ளி', 'நிலக்கடலை', 'கொல்லிமலை மிளகு', 'நெல்'],
    overviewEn: 'The Egg City and transport hub, crowned by the medicinal Kolli Hills; well-drained red gravelly loams power maize, sago tapioca, and organic spices.',
    overviewTa: 'முட்டை நகரம் மற்றும் மூலிகைகள் நிறைந்த கொல்லிமலையைக் கொண்ட நாமக்கல், மரவள்ளி, மக்காச்சோளம் மற்றும் மிளகு சாகுபடியில் முதன்மை பெற்றது.',
    soilDistribution: [
      { soilNameEn: 'Red Loam', soilNameTa: 'செம்மண்', percentage: 64, color: '#DC2626' },
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 24, color: '#B45309' },
      { soilNameEn: 'Hilly Forest Soil', soilNameTa: 'மலை வன மண்', percentage: 12, color: '#0D9488' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 62, medium: 30, high: 8 },
      phosphorus: { low: 18, medium: 50, high: 32 },
      potassium: { low: 14, medium: 50, high: 36 },
      organicCarbon: { low: 46, medium: 44, high: 10 },
      phDistribution: { acidic: 12, neutral: 75, alkaline: 13 },
      zinc: { deficient: 40, sufficient: 60 },
      iron: { deficient: 18, sufficient: 82 },
      boron: { deficient: 34, sufficient: 66 },
      samplesAnalyzed: 16800
    },
    blocks: [
      {
        blockId: 'kolli-hills',
        nameEn: 'Kolli Hills',
        nameTa: 'கொல்லிமலை',
        villageCount: 24,
        majorSoilTypesEn: ['Hill Humus Laterite', 'Forest Loam'],
        majorSoilTypesTa: ['மலை மட்கு செம்பொறை', 'வன மண்'],
        cropsEn: ['Black Pepper', 'Coffee', 'Pineapple', 'Cardamom'],
        cropsTa: ['கருப்பு மிளகு', 'காபி', 'அன்னாசி', 'ஏலக்காய்'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Low',
          potassiumStatus: 'High',
          phValue: 5.6,
          phCategory: 'Acidic',
          organicCarbonPercent: 1.10,
          ecValue: 0.18
        }
      },
      {
        blockId: 'tiruchengode',
        nameEn: 'Tiruchengode',
        nameTa: 'திருச்செங்கோடு',
        villageCount: 38,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Clay Loam'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு களிமண்'],
        cropsEn: ['Tapioca', 'Groundnut', 'Maize'],
        cropsTa: ['மரவள்ளி', 'நிலக்கடலை', 'மக்காச்சோளம்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.50,
          ecValue: 0.28
        }
      }
    ]
  },
  {
    districtId: 581,
    svgClickId: 16,
    nameEn: 'Perambalur',
    nameTa: 'பெரம்பலூர்',
    slug: 'perambalur',
    code: 'TN-PBL',
    headquartersEn: 'Perambalur',
    headquartersTa: 'பெரம்பலூர்',
    agroZoneEn: 'Cauvery Basin Margin Zone',
    agroZoneTa: 'காவிரி படுகை விளிம்பு மண்டலம்',
    rainfallMm: 908,
    totalBlocks: 4,
    totalVillages: 152,
    majorSoilTypesEn: ['Deep Black Cotton Soil', 'Red Sandy Loam', 'Calcareous Clay'],
    majorSoilTypesTa: ['ஆழ் கரிசல் மண்', 'மணல் செம்மண்', 'சுண்ணாம்பு களிமண்'],
    majorCropsEn: ['Small Onion (Chinna Vengayam)', 'Maize', 'Cotton', 'Sugarcane'],
    majorCropsTa: ['சின்ன வெங்காயம்', 'மக்காச்சோளம்', 'பருத்தி', 'கரும்பு'],
    overviewEn: 'The small onion bowl of Tamil Nadu, blessed with highly fertile moisture-retentive black cotton soils producing high-grade shallots and maize.',
    overviewTa: 'தமிழ்நாட்டின் சின்ன வெங்காயக் களஞ்சியம் எனப் போற்றப்படும் பெரம்பலூர், வளமான கரிசல் மண் மற்றும் மக்காச்சோள சாகுபடிக்கு உகந்தது.',
    soilDistribution: [
      { soilNameEn: 'Black Cotton Soil', soilNameTa: 'கரிசல் மண்', percentage: 58, color: '#334155' },
      { soilNameEn: 'Red Sandy Loam', soilNameTa: 'செம்மண்', percentage: 30, color: '#DC2626' },
      { soilNameEn: 'Calcareous Clay', soilNameTa: 'சுண்ணாம்பு மண்', percentage: 12, color: '#B45309' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 72, medium: 23, high: 5 },
      phosphorus: { low: 28, medium: 48, high: 24 },
      potassium: { low: 8, medium: 42, high: 50 },
      organicCarbon: { low: 54, medium: 38, high: 8 },
      phDistribution: { acidic: 2, neutral: 64, alkaline: 34 },
      zinc: { deficient: 48, sufficient: 52 },
      iron: { deficient: 28, sufficient: 72 },
      boron: { deficient: 38, sufficient: 62 },
      samplesAnalyzed: 11400
    },
    blocks: [
      {
        blockId: 'veppanthattai',
        nameEn: 'Veppanthattai',
        nameTa: 'வேப்பந்தட்டை',
        villageCount: 38,
        majorSoilTypesEn: ['Black Cotton Soil', 'Clay'],
        majorSoilTypesTa: ['கரிசல் மண்', 'களிமண்'],
        cropsEn: ['Small Onion', 'Maize', 'Cotton'],
        cropsTa: ['சின்ன வெங்காயம்', 'மக்காச்சோளம்', 'பருத்தி'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 8.2,
          phCategory: 'Alkaline',
          organicCarbonPercent: 0.52,
          ecValue: 0.65
        }
      },
      {
        blockId: 'perambalur-block',
        nameEn: 'Perambalur',
        nameTa: 'பெரம்பலூர்',
        villageCount: 42,
        majorSoilTypesEn: ['Red Sandy Loam', 'Black Soil'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'கரிசல் மண்'],
        cropsEn: ['Maize', 'Onion', 'Sugarcane'],
        cropsTa: ['மக்காச்சோளம்', 'வெங்காயம்', 'கரும்பு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.6,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.48,
          ecValue: 0.35
        }
      }
    ]
  },
  {
    districtId: 582,
    svgClickId: 20,
    nameEn: 'Pudukkottai',
    nameTa: 'புதுக்கோட்டை',
    slug: 'pudukkottai',
    code: 'TN-PDK',
    headquartersEn: 'Pudukkottai',
    headquartersTa: 'புதுக்கோட்டை',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    rainfallMm: 921,
    totalBlocks: 13,
    totalVillages: 763,
    majorSoilTypesEn: ['Red Lateritic Soil', 'Coastal Alluvial Loam', 'Clay'],
    majorSoilTypesTa: ['செம்மண் செம்பொறை', 'கடற்கரை வண்டல்', 'களிமண்'],
    majorCropsEn: ['Paddy', 'Groundnut', 'Cashew', 'Maize', 'Coconut'],
    majorCropsTa: ['நெல்', 'நிலக்கடலை', 'முந்திரி', 'மக்காச்சோளம்', 'தென்னை'],
    overviewEn: 'Historic princely state featuring red lateritic crusts, extensive rainfed tank cascades (Kulam), and coastal cashew/coconut tracts.',
    overviewTa: 'வரலாற்றுச் சிறப்புமிக்க புதுக்கோட்டை, செம்மண் செம்பொறை நிலப்பரப்பு, ஏரி பாசனம் மற்றும் முந்திரி, நிலக்கடலை சாகுபடிக்கு உகந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Lateritic Soil', soilNameTa: 'செம்மண்', percentage: 62, color: '#DC2626' },
      { soilNameEn: 'Coastal Marine Loam', soilNameTa: 'கடற்கரை வண்டல்', percentage: 22, color: '#059669' },
      { soilNameEn: 'Clay Soil', soilNameTa: 'களிமண்', percentage: 16, color: '#334155' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 66, medium: 28, high: 6 },
      phosphorus: { low: 24, medium: 50, high: 26 },
      potassium: { low: 18, medium: 52, high: 30 },
      organicCarbon: { low: 52, medium: 40, high: 8 },
      phDistribution: { acidic: 16, neutral: 72, alkaline: 12 },
      zinc: { deficient: 44, sufficient: 56 },
      iron: { deficient: 20, sufficient: 80 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 17400
    },
    blocks: [
      {
        blockId: 'aranthangi',
        nameEn: 'Aranthangi',
        nameTa: 'அறந்தாங்கி',
        villageCount: 68,
        majorSoilTypesEn: ['Coastal Alluvium', 'Red Sandy Loam'],
        majorSoilTypesTa: ['கடற்கரை வண்டல்', 'மணல் செம்மண்'],
        cropsEn: ['Paddy', 'Coconut', 'Groundnut'],
        cropsTa: ['நெல்', 'தென்னை', 'நிலக்கடலை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.0,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.54,
          ecValue: 0.38
        }
      },
      {
        blockId: 'gandharvakottai',
        nameEn: 'Gandharvakottai',
        nameTa: 'கந்தர்வக்கோட்டை',
        villageCount: 44,
        majorSoilTypesEn: ['Red Sandy Loam', 'Lateritic Loam'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'செம்பொறை'],
        cropsEn: ['Cashew', 'Groundnut', 'Maize'],
        cropsTa: ['முந்திரி', 'நிலக்கடலை', 'மக்காச்சோளம்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 6.6,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.45,
          ecValue: 0.22
        }
      }
    ]
  },
  {
    districtId: 583,
    svgClickId: 25,
    nameEn: 'Ramanathapuram',
    nameTa: 'இராமநாதபுரம்',
    slug: 'ramanathapuram',
    code: 'TN-RMD',
    headquartersEn: 'Ramanathapuram',
    headquartersTa: 'இராமநாதபுரம்',
    agroZoneEn: 'Southern Coastal Agro-Climatic Zone',
    agroZoneTa: 'தென் கடற்கரை வேளாண் மண்டலம்',
    rainfallMm: 825,
    totalBlocks: 11,
    totalVillages: 429,
    majorSoilTypesEn: ['Coastal Saline Soil', 'Deep Black Soil', 'Red Sandy Loam'],
    majorSoilTypesTa: ['கடற்கரை உவர் மண்', 'ஆழ் கரிசல் மண்', 'மணல் செம்மண்'],
    majorCropsEn: ['Mundu Chilli (Ramanathapuram Gundu)', 'Paddy', 'Cotton', 'Coriander', 'Palmyra'],
    majorCropsTa: ['ராமநாதபுரம் குண்டு மிளகாய்', 'நெல்', 'பருத்தி', 'கொத்தமல்லி', 'பனை'],
    overviewEn: 'Island-fringed coastal dryland renowned for the GI-tagged Ramanathapuram Mundu Chilli, rainfed tank systems, and salt-resilient farming.',
    overviewTa: 'புவிசார் குறியீடு பெற்ற குண்டு மிளகாய், கரிசல் மண் மற்றும் கடற்கரை உவர் நிலப்பரப்பைக் கொண்ட தென் கடலோர மாவட்டம்.',
    soilDistribution: [
      { soilNameEn: 'Coastal Saline / Sand', soilNameTa: 'கடற்கரை உவர் மண்', percentage: 48, color: '#64748B' },
      { soilNameEn: 'Black Cotton Soil', soilNameTa: 'கரிசல் மண்', percentage: 34, color: '#334155' },
      { soilNameEn: 'Red Sandy Loam', soilNameTa: 'செம்மண்', percentage: 18, color: '#DC2626' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 74, medium: 22, high: 4 },
      phosphorus: { low: 30, medium: 46, high: 24 },
      potassium: { low: 8, medium: 44, high: 48 },
      organicCarbon: { low: 62, medium: 32, high: 6 },
      phDistribution: { acidic: 2, neutral: 54, alkaline: 44 },
      zinc: { deficient: 52, sufficient: 48 },
      iron: { deficient: 32, sufficient: 68 },
      boron: { deficient: 40, sufficient: 60 },
      samplesAnalyzed: 13500
    },
    blocks: [
      {
        blockId: 'mudukulathur',
        nameEn: 'Mudukulathur',
        nameTa: 'முதுகுளத்தூர்',
        villageCount: 46,
        majorSoilTypesEn: ['Black Cotton Soil', 'Clay'],
        majorSoilTypesTa: ['கரிசல் மண்', 'களிமண்'],
        cropsEn: ['Mundu Chilli', 'Cotton', 'Sorghum'],
        cropsTa: ['குண்டு மிளகாய்', 'பருத்தி', 'சோளம்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'High',
          phValue: 8.3,
          phCategory: 'Alkaline',
          organicCarbonPercent: 0.44,
          ecValue: 0.78
        }
      },
      {
        blockId: 'rameshwaram',
        nameEn: 'Rameswaram',
        nameTa: 'இராமேஸ்வரம்',
        villageCount: 12,
        majorSoilTypesEn: ['Coastal Sand', 'Saline Loam'],
        majorSoilTypesTa: ['கடற்கரை மணல்', 'உவர் மண்'],
        cropsEn: ['Coconut', 'Casuarina', 'Palmyra'],
        cropsTa: ['தென்னை', 'சவுக்கு', 'பனை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 8.1,
          phCategory: 'Alkaline',
          organicCarbonPercent: 0.35,
          ecValue: 1.15
        }
      }
    ]
  },
  {
    districtId: 731,
    svgClickId: 36,
    nameEn: 'Ranipet',
    nameTa: 'இராணிப்பேட்டை',
    slug: 'ranipet',
    code: 'TN-RPT',
    headquartersEn: 'Ranipet',
    headquartersTa: 'இராணிப்பேட்டை',
    agroZoneEn: 'North Eastern Agro-Climatic Zone',
    agroZoneTa: 'வடகிழக்கு வேளாண் மண்டலம்',
    rainfallMm: 980,
    totalBlocks: 7,
    totalVillages: 330,
    majorSoilTypesEn: ['Red Sandy Loam', 'Palar Alluvial Loam', 'Clay'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'பாலாறு வண்டல்', 'களிமண்'],
    majorCropsEn: ['Paddy', 'Groundnut', 'Sugarcane', 'Banana', 'Vegetables'],
    majorCropsTa: ['நெல்', 'நிலக்கடலை', 'கரும்பு', 'வாழை', 'காய்கறிகள்'],
    overviewEn: 'Bisected by the Palar river; fertile alluvial tracts in Kaveripakkam and Nemili support rich paddy and cash crop farming.',
    overviewTa: 'பாலாற்றின் கரையில் அமைந்துள்ள இராணிப்பேட்டை, காவேரிப்பாக்கம் மற்றும் நெமிலி பகுதிகளில் வளமான நெல் சாகுபடி கொண்டது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 55, color: '#DC2626' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 30, color: '#059669' },
      { soilNameEn: 'Clay / Grey', soilNameTa: 'களிமண்', percentage: 15, color: '#64748B' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 68, medium: 26, high: 6 },
      phosphorus: { low: 22, medium: 52, high: 26 },
      potassium: { low: 14, medium: 50, high: 36 },
      organicCarbon: { low: 52, medium: 40, high: 8 },
      phDistribution: { acidic: 8, neutral: 76, alkaline: 16 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 20, sufficient: 80 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 13900
    },
    blocks: [
      {
        blockId: 'kaveripakkam',
        nameEn: 'Kaveripakkam',
        nameTa: 'காவேரிப்பாக்கம்',
        villageCount: 52,
        majorSoilTypesEn: ['Alluvial Silt', 'Red Loam'],
        majorSoilTypesTa: ['வண்டல்', 'செம்மண்'],
        cropsEn: ['Paddy', 'Sugarcane', 'Groundnut'],
        cropsTa: ['நெல்', 'கரும்பு', 'நிலக்கடலை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.56,
          ecValue: 0.32
        }
      },
      {
        blockId: 'arrakonam',
        nameEn: 'Arakkonam',
        nameTa: 'அரக்கோணம்',
        villageCount: 64,
        majorSoilTypesEn: ['Red Sandy Loam', 'Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'களிமண்'],
        cropsEn: ['Paddy', 'Groundnut', 'Vegetables'],
        cropsTa: ['நெல்', 'நிலக்கடலை', 'காய்கறிகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.48,
          ecValue: 0.28
        }
      }
    ]
  },
  {
    districtId: 584,
    svgClickId: 9,
    nameEn: 'Salem',
    nameTa: 'சேலம்',
    slug: 'salem',
    code: 'TN-SLM',
    headquartersEn: 'Salem',
    headquartersTa: 'சேலம்',
    agroZoneEn: 'North Western Zone',
    agroZoneTa: 'வடமேற்கு மண்டலம்',
    rainfallMm: 864,
    totalBlocks: 20,
    totalVillages: 648,
    majorSoilTypesEn: ['Red Insitu Soil', 'Brown Sandy Loam', 'Black Soil'],
    majorSoilTypesTa: ['சிவப்பு உள்ளூர் மண்', 'பழுப்பு மணல் சரளை', 'கரிசல் மண்'],
    majorCropsEn: ['Mango', 'Tapioca (Sago)', 'Turmeric', 'Paddy', 'Groundnut'],
    majorCropsTa: ['மாம்பழம்', 'மரவள்ளிக்கிழங்கு (ஜவ்வரிசி)', 'மஞ்சள்', 'நெல்', 'நிலக்கடலை'],
    overviewEn: 'Surrounded by the Shevaroy and Kalrayan hills, Salem has rich mineral-bearing red soils ideal for tapioca, commercial malgova mangoes, and coffee on high terraces.',
    overviewTa: 'சேர்வராயன் மலை அடிவாரத்தில் அமைந்துள்ள சேலம், ஜவ்வரிசி மரவள்ளி மற்றும் சேலம் மாம்பழ சாகுபடிக்கு சர்வதேச புகழ்பெற்றது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 62, color: '#DC2626' },
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 26, color: '#B45309' },
      { soilNameEn: 'Black / Clay', soilNameTa: 'கரிசல் மண்', percentage: 12, color: '#334155' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 64, medium: 29, high: 7 },
      phosphorus: { low: 22, medium: 49, high: 29 },
      potassium: { low: 15, medium: 51, high: 34 },
      organicCarbon: { low: 49, medium: 43, high: 8 },
      phDistribution: { acidic: 14, neutral: 74, alkaline: 12 },
      zinc: { deficient: 45, sufficient: 55 },
      iron: { deficient: 20, sufficient: 80 },
      boron: { deficient: 37, sufficient: 63 },
      samplesAnalyzed: 19400
    },
    blocks: [
      {
        blockId: 'attur',
        nameEn: 'Attur',
        nameTa: 'ஆத்தூர்',
        villageCount: 42,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு மண்'],
        cropsEn: ['Tapioca', 'Paddy', 'Maize'],
        cropsTa: ['மரவள்ளி', 'நெல்', 'மக்காச்சோளம்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 6.9,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.48,
          ecValue: 0.29
        }
      },
      {
        blockId: 'yercaud',
        nameEn: 'Yercaud',
        nameTa: 'ஏற்காடு',
        villageCount: 67,
        majorSoilTypesEn: ['Lateritic Mountain Humus', 'Red Forest Soil'],
        majorSoilTypesTa: ['மலை செம்பொறை மட்கு', 'சிவப்பு வனமண்'],
        cropsEn: ['Coffee', 'Pepper', 'Orange', 'Cardamom'],
        cropsTa: ['காபி', 'மிளகு', 'ஆரஞ்சு', 'ஏலக்காய்'],
        soilHealthSummary: {
          nitrogenStatus: 'High',
          phosphorusStatus: 'Low',
          potassiumStatus: 'High',
          phValue: 5.7,
          phCategory: 'Acidic',
          organicCarbonPercent: 1.12,
          ecValue: 0.16
        }
      }
    ]
  },
  {
    districtId: 585,
    svgClickId: 24,
    nameEn: 'Sivaganga',
    nameTa: 'சிவகங்கை',
    slug: 'sivaganga',
    code: 'TN-SVG',
    headquartersEn: 'Sivaganga',
    headquartersTa: 'சிவகங்கை',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    rainfallMm: 890,
    totalBlocks: 12,
    totalVillages: 521,
    majorSoilTypesEn: ['Red Sandy Loam', 'Lateritic Gravel', 'Black Clay'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'செம்பொறை சரளை', 'கரிசல் மண்'],
    majorCropsEn: ['Paddy', 'Groundnut', 'Sugarcane', 'Cotton', 'Gingelly'],
    majorCropsTa: ['நெல்', 'நிலக்கடலை', 'கரும்பு', 'பருத்தி', 'எள்'],
    overviewEn: 'Heart of the Chettinad region characterized by tank systems (Kanmoi) and expansive red lateritic loams ideal for groundnut and pulses.',
    overviewTa: 'செட்டிநாட்டுப் பாரம்பரியம் மற்றும் கண்மாய் பாசனங்களைக் கொண்ட சிவகங்கை, செம்மண் நிலக்கடலை மற்றும் நெல் சாகுபடிக்கு உகந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 65, color: '#DC2626' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 22, color: '#334155' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 13, color: '#059669' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 70, medium: 24, high: 6 },
      phosphorus: { low: 26, medium: 48, high: 26 },
      potassium: { low: 16, medium: 50, high: 34 },
      organicCarbon: { low: 56, medium: 36, high: 8 },
      phDistribution: { acidic: 14, neutral: 74, alkaline: 12 },
      zinc: { deficient: 46, sufficient: 54 },
      iron: { deficient: 22, sufficient: 78 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 14800
    },
    blocks: [
      {
        blockId: 'karaikudi',
        nameEn: 'Karaikudi',
        nameTa: 'காரைக்குடி',
        villageCount: 48,
        majorSoilTypesEn: ['Red Sandy Loam', 'Laterite'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'செம்பொறை'],
        cropsEn: ['Groundnut', 'Paddy', 'Pulses'],
        cropsTa: ['நிலக்கடலை', 'நெல்', 'பயறு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 6.8,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.46,
          ecValue: 0.24
        }
      },
      {
        blockId: 'sivaganga-block',
        nameEn: 'Sivaganga',
        nameTa: 'சிவகங்கை',
        villageCount: 52,
        majorSoilTypesEn: ['Red Sandy Loam', 'Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'களிமண்'],
        cropsEn: ['Paddy', 'Sugarcane', 'Cotton'],
        cropsTa: ['நெல்', 'கரும்பு', 'பருத்தி'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.48,
          ecValue: 0.32
        }
      }
    ]
  },
  {
    districtId: 733,
    svgClickId: 34,
    nameEn: 'Tenkasi',
    nameTa: 'தென்காசி',
    slug: 'tenkasi',
    code: 'TN-TKS',
    headquartersEn: 'Tenkasi',
    headquartersTa: 'தென்காசி',
    agroZoneEn: 'Southern Foothill Agro-Climatic Zone',
    agroZoneTa: 'தென் மலையடிவார வேளாண் மண்டலம்',
    rainfallMm: 985,
    totalBlocks: 10,
    totalVillages: 246,
    majorSoilTypesEn: ['Red Sandy Loam', 'Black Soil', 'Foothill Humus'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'கரிசல் மண்', 'மலையடிவார மட்கு'],
    majorCropsEn: ['Paddy', 'Banana', 'Mango (Sengottai)', 'Spices (Courtallam)', 'Pulses'],
    majorCropsTa: ['நெல்', 'வாழை', 'செங்கோட்டை மாம்பழம்', 'குற்றால வாசனைப் பயிர்கள்', 'பயறு'],
    overviewEn: 'Cradled against the Western Ghats waterfalls and Courtallam hills; red loams and perennial hill streams support multi-crop horticulture and rich paddy.',
    overviewTa: 'குற்றால அருவிகள் மற்றும் மேற்குத் தொடர்ச்சி மலையடிவாரத்தில் அமைந்த தென்காசி, வாழை, நெல் மற்றும் மாம்பழ சாகுபடிக்கு உகந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Loam', soilNameTa: 'செம்மண்', percentage: 54, color: '#DC2626' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 32, color: '#334155' },
      { soilNameEn: 'Hill Humus Loam', soilNameTa: 'மலை மட்கு மண்', percentage: 14, color: '#0D9488' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 58, medium: 34, high: 8 },
      phosphorus: { low: 22, medium: 52, high: 26 },
      potassium: { low: 10, medium: 46, high: 44 },
      organicCarbon: { low: 44, medium: 46, high: 10 },
      phDistribution: { acidic: 14, neutral: 74, alkaline: 12 },
      zinc: { deficient: 38, sufficient: 62 },
      iron: { deficient: 16, sufficient: 84 },
      boron: { deficient: 32, sufficient: 68 },
      samplesAnalyzed: 14200
    },
    blocks: [
      {
        blockId: 'sengottai',
        nameEn: 'Sengottai',
        nameTa: 'செங்கோட்டை',
        villageCount: 22,
        majorSoilTypesEn: ['Hill Red Loam', 'Alluvial Silt'],
        majorSoilTypesTa: ['மலை செம்மண்', 'வண்டல்'],
        cropsEn: ['Mango', 'Spices', 'Banana'],
        cropsTa: ['மாம்பழம்', 'மசாலா பயிர்கள்', 'வாழை'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 6.6,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.72,
          ecValue: 0.22
        }
      },
      {
        blockId: 'sankarankovil',
        nameEn: 'Sankarankovil',
        nameTa: 'சங்கரன்கோவில்',
        villageCount: 42,
        majorSoilTypesEn: ['Black Cotton Soil', 'Clay'],
        majorSoilTypesTa: ['கரிசல் மண்', 'களிமண்'],
        cropsEn: ['Cotton', 'Chillies', 'Sorghum'],
        cropsTa: ['பருத்தி', 'மிளகாய்', 'சோளம்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'High',
          phValue: 8.2,
          phCategory: 'Alkaline',
          organicCarbonPercent: 0.48,
          ecValue: 0.62
        }
      }
    ]
  },
  {
    districtId: 586,
    svgClickId: 17,
    nameEn: 'Thanjavur',
    nameTa: 'தஞ்சாவூர்',
    slug: 'thanjavur',
    code: 'TN-THJ',
    headquartersEn: 'Thanjavur',
    headquartersTa: 'தஞ்சாவூர்',
    agroZoneEn: 'Cauvery Delta Zone',
    agroZoneTa: 'காவிரி டெல்டா மண்டலம்',
    rainfallMm: 980,
    totalBlocks: 14,
    totalVillages: 906,
    majorSoilTypesEn: ['Alluvial Soil (Delta)', 'Red Loam', 'Sandy Coastal'],
    majorSoilTypesTa: ['டெல்டா வண்டல் மண்', 'செம்மண் சரளை', 'மணற்பாங்கான கடற்கரை மண்'],
    majorCropsEn: ['Paddy (Kuruvai, Samba)', 'Black Gram', 'Banana', 'Coconut', 'Sugarcane'],
    majorCropsTa: ['நெல் (குறுவை, சம்பா)', 'உளுந்து', 'வாழை', 'தென்னை', 'கரும்பு'],
    overviewEn: 'The historic Granary of South India, blessed by the fertile sediment deposits of the Cauvery River system with extensive canal networks and alluvial clay loams.',
    overviewTa: 'தென்னிந்தியாவின் நெற்களஞ்சியம் எனப் போற்றப்படும் தஞ்சாவூர், காவிரி ஆற்றின் வளமான வண்டல் மண் மற்றும் விரிவான பாசனக் கால்வாய்களைக் கொண்டது.',
    soilDistribution: [
      { soilNameEn: 'Alluvial Soil', soilNameTa: 'வண்டல் மண்', percentage: 58, color: '#059669' },
      { soilNameEn: 'Red Loamy Soil', soilNameTa: 'செம்மண்', percentage: 26, color: '#DC2626' },
      { soilNameEn: 'Clay / Mixed', soilNameTa: 'களிமண் / கலப்பு', percentage: 16, color: '#0D9488' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 62, medium: 31, high: 7 },
      phosphorus: { low: 22, medium: 54, high: 24 },
      potassium: { low: 14, medium: 52, high: 34 },
      organicCarbon: { low: 48, medium: 42, high: 10 },
      phDistribution: { acidic: 12, neutral: 74, alkaline: 14 },
      zinc: { deficient: 38, sufficient: 62 },
      iron: { deficient: 12, sufficient: 88 },
      boron: { deficient: 29, sufficient: 71 },
      samplesAnalyzed: 14820
    },
    blocks: [
      {
        blockId: 'thanjavur-block',
        nameEn: 'Thanjavur',
        nameTa: 'தஞ்சாவூர்',
        villageCount: 68,
        majorSoilTypesEn: ['Alluvial Loam', 'Red Sandy Loam'],
        majorSoilTypesTa: ['வண்டல் செம்மண்', 'மணல் கலந்த செம்மண்'],
        cropsEn: ['Paddy', 'Banana', 'Pulses'],
        cropsTa: ['நெல்', 'வாழை', 'பயறு வகைகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.58,
          ecValue: 0.35
        }
      },
      {
        blockId: 'kumbakonam',
        nameEn: 'Kumbakonam',
        nameTa: 'கும்பகோணம்',
        villageCount: 74,
        majorSoilTypesEn: ['Deep Alluvial Silt', 'Clay Loam'],
        majorSoilTypesTa: ['ஆழ் வண்டல் வண்டல் மண்', 'களிமண்'],
        cropsEn: ['Paddy (Double crop)', 'Sugarcane', 'Betel Vine'],
        cropsTa: ['நெல் (இருபோகம்)', 'கரும்பு', 'வெற்றிலை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.4,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.65,
          ecValue: 0.42
        }
      }
    ]
  },
  {
    districtId: 588,
    svgClickId: 23,
    nameEn: 'Theni',
    nameTa: 'தேனி',
    slug: 'theni',
    code: 'TN-THN',
    headquartersEn: 'Theni',
    headquartersTa: 'தேனி',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    rainfallMm: 830,
    totalBlocks: 8,
    totalVillages: 113,
    majorSoilTypesEn: ['Red Sandy Loam', 'Alluvial Mullaiperiyar Loam', 'Black Soil'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'முல்லைப் பெரியாறு வண்டல்', 'கரிசல் மண்'],
    majorCropsEn: ['Banana (Grand Naine)', 'Grapes (Cumbum Valley)', 'Cardamom', 'Vegetables', 'Cotton'],
    majorCropsTa: ['வாழை', 'கம்பம் பள்ளத்தாக்கு திராட்சை', 'ஏலக்காய்', 'காய்கறிகள்', 'பருத்தி'],
    overviewEn: 'The Cumbum Valley paradise nourished by the Mullaiperiyar River; climate and alluvial soils produce year-round GI-tagged Panneer grapes and commercial bananas.',
    overviewTa: 'முல்லைப் பெரியாறு பாசனத்தால் வளம்பெறும் கம்பம் பள்ளத்தாக்கு; புவிசார் குறியீடு பெற்ற பன்னீர் திராட்சை மற்றும் வாழை சாகுபடிக்கு உகந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 56, color: '#DC2626' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 26, color: '#059669' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 18, color: '#334155' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 56, medium: 36, high: 8 },
      phosphorus: { low: 18, medium: 50, high: 32 },
      potassium: { low: 10, medium: 48, high: 42 },
      organicCarbon: { low: 42, medium: 46, high: 12 },
      phDistribution: { acidic: 10, neutral: 78, alkaline: 12 },
      zinc: { deficient: 36, sufficient: 64 },
      iron: { deficient: 18, sufficient: 82 },
      boron: { deficient: 30, sufficient: 70 },
      samplesAnalyzed: 11600
    },
    blocks: [
      {
        blockId: 'cumbum',
        nameEn: 'Cumbum',
        nameTa: 'கம்பம்',
        villageCount: 16,
        majorSoilTypesEn: ['Deep Alluvial Valley Loam', 'Red Soil'],
        majorSoilTypesTa: ['பள்ளத்தாக்கு வண்டல்', 'செம்மண்'],
        cropsEn: ['Panneer Grapes', 'Banana', 'Paddy'],
        cropsTa: ['பன்னீர் திராட்சை', 'வாழை', 'நெல்'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 7.0,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.70,
          ecValue: 0.28
        }
      },
      {
        blockId: 'periyakulam',
        nameEn: 'Periyakulam',
        nameTa: 'பெரியகுளம்',
        villageCount: 22,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு மண்'],
        cropsEn: ['Mango', 'Vegetables', 'Citrus'],
        cropsTa: ['மாம்பழம்', 'காய்கறிகள்', 'எலுமிச்சை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.52,
          ecValue: 0.25
        }
      }
    ]
  },
  {
    districtId: 587,
    svgClickId: 31,
    nameEn: 'The Nilgiris',
    nameTa: 'நீலகிரி',
    slug: 'the-nilgiris',
    code: 'TN-NIL',
    headquartersEn: 'Udhagamandalam (Ooty)',
    headquartersTa: 'உதகமண்டலம் (ஊட்டி)',
    agroZoneEn: 'High Altitude & Hilly Zone',
    agroZoneTa: 'உயர் மலை மண்டலம்',
    rainfallMm: 1780,
    totalBlocks: 4,
    totalVillages: 88,
    majorSoilTypesEn: ['Laterite / Mixed Hill Soil', 'Peaty Organic Soils', 'Red Forest Loam'],
    majorSoilTypesTa: ['செம்பொறை / கலப்பு மலைமண்', 'கரிம மட்கு மண்', 'செந்நிற வனமண்'],
    majorCropsEn: ['Tea', 'Potato', 'Carrot', 'Cabbage', 'Garlic', 'Coffee'],
    majorCropsTa: ['தேயிலை', 'உருளைக்கிழங்கு', 'கேரட்', 'முட்டைக்கோஸ்', 'பூண்டு', 'காபி'],
    overviewEn: 'Elevated montane agro-ecosystem characterized by highly acidic lateritic soils with high organic matter, steep slope terraces, and high-value temperate crops.',
    overviewTa: 'அதிக மழைப்பொழிவு, அமிலத்தன்மை கொண்ட செம்பொறை மண் மற்றும் அதிக கரிமச்சத்தைக் கொண்ட மலைப்பயிர் மண்டலம்.',
    soilDistribution: [
      { soilNameEn: 'Laterite / Hill Soil', soilNameTa: 'செம்பொறை மலைமண்', percentage: 74, color: '#0D9488' },
      { soilNameEn: 'Red Forest Soil', soilNameTa: 'சிவப்பு வனமண்', percentage: 18, color: '#DC2626' },
      { soilNameEn: 'Peat / Organic Bog', soilNameTa: 'கரிம மட்கு மண்', percentage: 8, color: '#15803D' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 22, medium: 48, high: 30 },
      phosphorus: { low: 44, medium: 36, high: 20 },
      potassium: { low: 18, medium: 46, high: 36 },
      organicCarbon: { low: 8, medium: 28, high: 64 },
      phDistribution: { acidic: 82, neutral: 17, alkaline: 1 },
      zinc: { deficient: 32, sufficient: 68 },
      iron: { deficient: 8, sufficient: 92 },
      boron: { deficient: 46, sufficient: 54 },
      samplesAnalyzed: 8940
    },
    blocks: [
      {
        blockId: 'ooty-block',
        nameEn: 'Udhagamandalam',
        nameTa: 'உதகமண்டலம்',
        villageCount: 22,
        majorSoilTypesEn: ['Acidic Laterite', 'Peaty Loam'],
        majorSoilTypesTa: ['அமில செம்பொறை', 'மட்கு மண்'],
        cropsEn: ['Potato', 'Carrot', 'Tea'],
        cropsTa: ['உருளைக்கிழங்கு', 'கேரட்', 'தேயிலை'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 5.2,
          phCategory: 'Acidic',
          organicCarbonPercent: 1.25,
          ecValue: 0.18
        }
      },
      {
        blockId: 'coonoor',
        nameEn: 'Coonoor',
        nameTa: 'குன்னூர்',
        villageCount: 24,
        majorSoilTypesEn: ['Lateritic Clay Loam', 'Forest Humus'],
        majorSoilTypesTa: ['செம்பொறை களிமண்', 'வன மட்கு'],
        cropsEn: ['Tea', 'Fruit orchards (Plum, Peach)', 'Coffee'],
        cropsTa: ['தேயிலை', 'பழத்தோட்டம் (பிளம்ஸ், பீச்)', 'காபி'],
        soilHealthSummary: {
          nitrogenStatus: 'High',
          phosphorusStatus: 'Low',
          potassiumStatus: 'High',
          phValue: 5.4,
          phCategory: 'Acidic',
          organicCarbonPercent: 1.15,
          ecValue: 0.22
        }
      }
    ]
  },
  {
    districtId: 589,
    svgClickId: 3,
    nameEn: 'Tiruvallur',
    nameTa: 'திருவள்ளூர்',
    slug: 'tiruvallur',
    code: 'TN-TLR',
    headquartersEn: 'Tiruvallur',
    headquartersTa: 'திருவள்ளூர்',
    agroZoneEn: 'North Eastern Agro-Climatic Zone',
    agroZoneTa: 'வடகிழக்கு வேளாண் மண்டலம்',
    rainfallMm: 1104,
    totalBlocks: 14,
    totalVillages: 635,
    majorSoilTypesEn: ['Red Sandy Loam', 'Coastal Alluvium', 'Clayey Soil'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'கடற்கரை வண்டல்', 'களிமண்'],
    majorCropsEn: ['Paddy', 'Groundnut', 'Sugarcane', 'Watermelon', 'Mango'],
    majorCropsTa: ['நெல்', 'நிலக்கடலை', 'கரும்பு', 'தர்பூசணி', 'மாம்பழம்'],
    overviewEn: 'Irrigated by the Kosasthalaiyar and Arani rivers; prominent rice bowl of northern Tamil Nadu with high-yielding groundnut and horticulture.',
    overviewTa: 'கொசஸ்தலை மற்றும் ஆரணி நதிகளால் வளம் பெறும் திருவள்ளூர், நெல் மற்றும் நிலக்கடலை சாகுபடியில் சிறந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 54, color: '#DC2626' },
      { soilNameEn: 'Coastal / Alluvial', soilNameTa: 'கடற்கரை வண்டல்', percentage: 28, color: '#059669' },
      { soilNameEn: 'Clay / Grey', soilNameTa: 'சாம்பல் மண்', percentage: 18, color: '#64748B' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 70, medium: 24, high: 6 },
      phosphorus: { low: 24, medium: 50, high: 26 },
      potassium: { low: 14, medium: 52, high: 34 },
      organicCarbon: { low: 52, medium: 40, high: 8 },
      phDistribution: { acidic: 8, neutral: 78, alkaline: 14 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 20, sufficient: 80 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 16500
    },
    blocks: [
      {
        blockId: 'tiruvallur-block',
        nameEn: 'Tiruvallur',
        nameTa: 'திருவள்ளூர்',
        villageCount: 52,
        majorSoilTypesEn: ['Red Sandy Loam', 'Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'களிமண்'],
        cropsEn: ['Paddy', 'Groundnut', 'Vegetables'],
        cropsTa: ['நெல்', 'நிலக்கடலை', 'காய்கறிகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.51,
          ecValue: 0.32
        }
      },
      {
        blockId: 'ponneri',
        nameEn: 'Ponneri',
        nameTa: 'பொன்னேரி',
        villageCount: 68,
        majorSoilTypesEn: ['Coastal Alluvium', 'Saline Silt'],
        majorSoilTypesTa: ['கடற்கரை வண்டல்', 'உவர் மண்'],
        cropsEn: ['Paddy', 'Watermelon', 'Pulses'],
        cropsTa: ['நெல்', 'தர்பூசணி', 'பயறு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.6,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.55,
          ecValue: 0.52
        }
      }
    ]
  },
  {
    districtId: 590,
    svgClickId: 18,
    nameEn: 'Tiruvarur',
    nameTa: 'திருவாரூர்',
    slug: 'tiruvarur',
    code: 'TN-TVR',
    headquartersEn: 'Tiruvarur',
    headquartersTa: 'திருவாரூர்',
    agroZoneEn: 'Cauvery Delta Agro-Climatic Zone',
    agroZoneTa: 'காவிரி டெல்டா வேளாண் மண்டலம்',
    rainfallMm: 1120,
    totalBlocks: 10,
    totalVillages: 573,
    majorSoilTypesEn: ['Deep Delta Alluvial Clay', 'River Silt', 'Coastal Alluvium'],
    majorSoilTypesTa: ['ஆழ் டெல்டா வண்டல் களிமண்', 'ஆற்று வண்டல்', 'கடற்கரை வண்டல்'],
    majorCropsEn: ['Paddy (Samba & Thaladi)', 'Black Gram', 'Green Gram', 'Cotton', 'Coconut'],
    majorCropsTa: ['நெல் (சம்பா, தாளடி)', 'உளுந்து', 'பச்சைப்பயறு', 'பருத்தி', 'தென்னை'],
    overviewEn: 'The core delta granary with rich alluvial clay deposits, canal networks, and premier production of post-harvest delta pulses.',
    overviewTa: 'காவிரி டெல்டாவின் மையப் பகுதி; செழுமையான வண்டல் களிமண் மற்றும் நெல், உளுந்து சாகுபடிக்கு புகழ்பெற்றது.',
    soilDistribution: [
      { soilNameEn: 'Alluvial Clay', soilNameTa: 'வண்டல் களிமண்', percentage: 76, color: '#059669' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் சரளை', percentage: 16, color: '#0D9488' },
      { soilNameEn: 'Coastal Sand / Clay', soilNameTa: 'கடற்கரை மண்', percentage: 8, color: '#64748B' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 64, medium: 28, high: 8 },
      phosphorus: { low: 20, medium: 54, high: 26 },
      potassium: { low: 10, medium: 48, high: 42 },
      organicCarbon: { low: 46, medium: 44, high: 10 },
      phDistribution: { acidic: 6, neutral: 78, alkaline: 16 },
      zinc: { deficient: 40, sufficient: 60 },
      iron: { deficient: 14, sufficient: 86 },
      boron: { deficient: 28, sufficient: 72 },
      samplesAnalyzed: 15900
    },
    blocks: [
      {
        blockId: 'mannargudi',
        nameEn: 'Mannargudi',
        nameTa: 'மன்னார்குடி',
        villageCount: 68,
        majorSoilTypesEn: ['Deep Delta Alluvium', 'Clay'],
        majorSoilTypesTa: ['டெல்டா வண்டல்', 'களிமண்'],
        cropsEn: ['Paddy', 'Pulses', 'Sugarcane'],
        cropsTa: ['நெல்', 'பயறு வகைகள்', 'கரும்பு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.65,
          ecValue: 0.36
        }
      },
      {
        blockId: 'tiruvarur-block',
        nameEn: 'Tiruvarur',
        nameTa: 'திருவாரூர்',
        villageCount: 54,
        majorSoilTypesEn: ['Delta Silt', 'Clay Loam'],
        majorSoilTypesTa: ['டெல்டா வண்டல்', 'களிமண்'],
        cropsEn: ['Paddy', 'Black Gram', 'Banana'],
        cropsTa: ['நெல்', 'உளுந்து', 'வாழை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.3,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.62,
          ecValue: 0.34
        }
      }
    ]
  },
  {
    districtId: 591,
    svgClickId: 14,
    nameEn: 'Tiruchirappalli',
    nameTa: 'திருச்சிராப்பள்ளி',
    slug: 'tiruchirappalli',
    code: 'TN-TRZ',
    headquartersEn: 'Tiruchirappalli',
    headquartersTa: 'திருச்சிராப்பள்ளி',
    agroZoneEn: 'Cauvery Delta & Central Zone',
    agroZoneTa: 'காவிரி டெல்டா மற்றும் மத்திய மண்டலம்',
    rainfallMm: 818,
    totalBlocks: 14,
    totalVillages: 507,
    majorSoilTypesEn: ['Alluvial Loam', 'Red Sandy Soil', 'Black Clay'],
    majorSoilTypesTa: ['வண்டல் மண்', 'செம்மண்', 'கரிசல் மண்'],
    majorCropsEn: ['Paddy', 'Banana (Cavendish & Poovan)', 'Sugarcane', 'Cotton', 'Pulses'],
    majorCropsTa: ['நெல்', 'வாழை (பூவன், ரோபஸ்டா)', 'கரும்பு', 'பருத்தி', 'பயறு'],
    overviewEn: 'The central hub of Tamil Nadu bisected by the Cauvery and Coleroon rivers, featuring fertile alluvial delta soil in the east and undulating red soils in the west.',
    overviewTa: 'காவிரி மற்றும் கொள்ளிடம் ஆறுகளால் வளம்பெறும் திருச்சி, கிழக்கு பகுதியில் செழுமையான வண்டல் மண்ணும், மேற்கில் செம்மண்ணும் கொண்ட மாவட்டம்.',
    soilDistribution: [
      { soilNameEn: 'Alluvial Soil', soilNameTa: 'வண்டல் மண்', percentage: 46, color: '#059669' },
      { soilNameEn: 'Red Loam', soilNameTa: 'செம்மண்', percentage: 38, color: '#DC2626' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 16, color: '#334155' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 60, medium: 32, high: 8 },
      phosphorus: { low: 20, medium: 50, high: 30 },
      potassium: { low: 12, medium: 48, high: 40 },
      organicCarbon: { low: 46, medium: 44, high: 10 },
      phDistribution: { acidic: 8, neutral: 78, alkaline: 14 },
      zinc: { deficient: 40, sufficient: 60 },
      iron: { deficient: 18, sufficient: 82 },
      boron: { deficient: 31, sufficient: 69 },
      samplesAnalyzed: 16200
    },
    blocks: [
      {
        blockId: 'lalgudi',
        nameEn: 'Lalgudi',
        nameTa: 'லால்குடி',
        villageCount: 45,
        majorSoilTypesEn: ['Alluvial Loam', 'Clayey Silt'],
        majorSoilTypesTa: ['வண்டல் களிமண்', 'ஆற்று வண்டல்'],
        cropsEn: ['Paddy', 'Banana', 'Sugarcane'],
        cropsTa: ['நெல்', 'வாழை', 'கரும்பு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.62,
          ecValue: 0.38
        }
      },
      {
        blockId: 'manachanallur',
        nameEn: 'Manachanallur',
        nameTa: 'மண்ணச்சநல்லூர்',
        villageCount: 38,
        majorSoilTypesEn: ['Delta Alluvium', 'Red Sandy Soil'],
        majorSoilTypesTa: ['டெல்டா வண்டல்', 'செம்மண்'],
        cropsEn: ['Paddy (Ponni rice hub)', 'Banana', 'Vegetables'],
        cropsTa: ['பொன்னி நெல்', 'வாழை', 'காய்கறிகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.58,
          ecValue: 0.32
        }
      }
    ]
  },
  {
    districtId: 592,
    svgClickId: 27,
    nameEn: 'Tirunelveli',
    nameTa: 'திருநெல்வேலி',
    slug: 'tirunelveli',
    code: 'TN-TNV',
    headquartersEn: 'Tirunelveli',
    headquartersTa: 'திருநெல்வேலி',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    rainfallMm: 814,
    totalBlocks: 9,
    totalVillages: 375,
    majorSoilTypesEn: ['Tamirabarani Alluvial Loam', 'Deep Black Soil', 'Red Loam'],
    majorSoilTypesTa: ['தாமிரபரணி வண்டல்', 'ஆழ் கரிசல் மண்', 'செம்மண்'],
    majorCropsEn: ['Paddy', 'Banana (Nendran, Sevvazhai)', 'Cotton', 'Pulses', 'Gingelly'],
    majorCropsTa: ['நெல்', 'வாழை (நேந்திரன், செவ்வாழை)', 'பருத்தி', 'பயறு', 'எள்'],
    overviewEn: 'Nourished by the perennial Tamirabarani river basin; world-famous for riverine paddy, riverbank banana groves, and rainfed black-soil cotton tracts.',
    overviewTa: 'வற்றாத ஜீவநதியான தாமிரபரணி பாயும் திருநெல்வேலி, இருபோக நெல் மற்றும் வாழை சாகுபடிக்கு உகந்த வண்டல் மண் கொண்டது.',
    soilDistribution: [
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 48, color: '#059669' },
      { soilNameEn: 'Black Cotton Soil', soilNameTa: 'கரிசல் மண்', percentage: 34, color: '#334155' },
      { soilNameEn: 'Red Sandy Loam', soilNameTa: 'செம்மண்', percentage: 18, color: '#DC2626' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 62, medium: 32, high: 6 },
      phosphorus: { low: 22, medium: 52, high: 26 },
      potassium: { low: 10, medium: 46, high: 44 },
      organicCarbon: { low: 48, medium: 44, high: 8 },
      phDistribution: { acidic: 6, neutral: 76, alkaline: 18 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 18, sufficient: 82 },
      boron: { deficient: 34, sufficient: 66 },
      samplesAnalyzed: 16100
    },
    blocks: [
      {
        blockId: 'ambasamudram',
        nameEn: 'Ambasamudram',
        nameTa: 'அம்பாசமுத்திரம்',
        villageCount: 42,
        majorSoilTypesEn: ['Tamirabarani Alluvium', 'Red Sandy Soil'],
        majorSoilTypesTa: ['தாமிரபரணி வண்டல்', 'செம்மண்'],
        cropsEn: ['Paddy', 'Banana', 'Vegetables'],
        cropsTa: ['நெல்', 'வாழை', 'காய்கறிகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.65,
          ecValue: 0.32
        }
      },
      {
        blockId: 'palayamkottai',
        nameEn: 'Palayamkottai',
        nameTa: 'பாளையங்கோட்டை',
        villageCount: 38,
        majorSoilTypesEn: ['River Alluvium', 'Clay Loam'],
        majorSoilTypesTa: ['ஆற்று வண்டல்', 'களிமண்'],
        cropsEn: ['Paddy', 'Cotton', 'Pulses'],
        cropsTa: ['நெல்', 'பருத்தி', 'பயறு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.3,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.58,
          ecValue: 0.38
        }
      }
    ]
  },
  {
    districtId: 732,
    svgClickId: 37,
    nameEn: 'Tirupathur',
    nameTa: 'திருப்பத்தூர்',
    slug: 'tirupathur',
    code: 'TN-TPT',
    headquartersEn: 'Tirupathur',
    headquartersTa: 'திருப்பத்தூர்',
    agroZoneEn: 'North Western Agro-Climatic Zone',
    agroZoneTa: 'வடமேற்கு வேளாண் மண்டலம்',
    rainfallMm: 920,
    totalBlocks: 6,
    totalVillages: 198,
    majorSoilTypesEn: ['Red Sandy Loam', 'Yelagiri Hill Forest Loam', 'Brown Soil'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'ஏலகிரி வன மண்', 'பழுப்பு மண்'],
    majorCropsEn: ['Paddy', 'Groundnut', 'Mango', 'Sugarcane', 'Yelagiri Fruits'],
    majorCropsTa: ['நெல்', 'நிலக்கடலை', 'மாம்பழம்', 'கரும்பு', 'ஏலகிரி பழங்கள்'],
    overviewEn: 'Enclosed by the Yelagiri and Jawadhu hill ranges; red loams and mountain slopes support fruit orchards, jackfruit, and robust grain farming.',
    overviewTa: 'ஏலகிரி மற்றும் ஜவ்வாது மலைகளால் சூழப்பட்ட திருப்பத்தூர், மாம்பழம், நிலக்கடலை மற்றும் பழத்தோட்ட சாகுபடிக்கு உகந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 60, color: '#DC2626' },
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 25, color: '#B45309' },
      { soilNameEn: 'Hill / Forest', soilNameTa: 'மலை வன மண்', percentage: 15, color: '#0D9488' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 66, medium: 28, high: 6 },
      phosphorus: { low: 22, medium: 52, high: 26 },
      potassium: { low: 14, medium: 52, high: 34 },
      organicCarbon: { low: 50, medium: 42, high: 8 },
      phDistribution: { acidic: 12, neutral: 76, alkaline: 12 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 20, sufficient: 80 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 11800
    },
    blocks: [
      {
        blockId: 'tirupathur-block',
        nameEn: 'Tirupathur',
        nameTa: 'திருப்பத்தூர்',
        villageCount: 42,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு மண்'],
        cropsEn: ['Paddy', 'Groundnut', 'Sugarcane'],
        cropsTa: ['நெல்', 'நிலக்கடலை', 'கரும்பு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.0,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.50,
          ecValue: 0.28
        }
      },
      {
        blockId: 'yelagiri-hills',
        nameEn: 'Jolarpet (Yelagiri)',
        nameTa: 'ஜோலார்பேட்டை (ஏலகிரி)',
        villageCount: 36,
        majorSoilTypesEn: ['Hill Forest Loam', 'Lateritic Loam'],
        majorSoilTypesTa: ['மலை வன மண்', 'செம்பொறை'],
        cropsEn: ['Jackfruit', 'Plums', 'Vegetables'],
        cropsTa: ['பலாப்பழம்', 'பிளம்ஸ்', 'காய்கறிகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Low',
          potassiumStatus: 'High',
          phValue: 6.3,
          phCategory: 'Acidic',
          organicCarbonPercent: 0.88,
          ecValue: 0.19
        }
      }
    ]
  },
  {
    districtId: 634,
    svgClickId: 33,
    nameEn: 'Tiruppur',
    nameTa: 'திருப்பூர்',
    slug: 'tiruppur',
    code: 'TN-TPR',
    headquartersEn: 'Tiruppur',
    headquartersTa: 'திருப்பூர்',
    agroZoneEn: 'Western Agro-Climatic Zone',
    agroZoneTa: 'மேற்கு வேளாண் மண்டலம்',
    rainfallMm: 605,
    totalBlocks: 13,
    totalVillages: 350,
    majorSoilTypesEn: ['Red Sandy Loam', 'Black Soil', 'Calcareous Loam'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'கரிசல் மண்', 'சுண்ணாம்பு சரளை'],
    majorCropsEn: ['Maize', 'Coconut (Kangeyam)', 'Sorghum', 'Vegetables', 'Cotton'],
    majorCropsTa: ['மக்காச்சோளம்', 'காங்கேயம் தென்னை (கொப்பரை)', 'சோளம்', 'காய்கறிகள்', 'பருத்தி'],
    overviewEn: 'Renowned for dryland grain resilience, Kangeyam cattle heritage, and commercial copra/coconut processing on red and black calcareous loams.',
    overviewTa: 'காங்கேயம் காளைகள், கொப்பரைத் தென்னை மற்றும் மானாவாரி மக்காச்சோளம் சாகுபடிக்கு உகந்த மேற்கு மண்டல மாவட்டம்.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 52, color: '#DC2626' },
      { soilNameEn: 'Black Soil', soilNameTa: 'கரிசல் மண்', percentage: 32, color: '#334155' },
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 16, color: '#B45309' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 60, medium: 32, high: 8 },
      phosphorus: { low: 18, medium: 48, high: 34 },
      potassium: { low: 8, medium: 44, high: 48 },
      organicCarbon: { low: 46, medium: 44, high: 10 },
      phDistribution: { acidic: 4, neutral: 70, alkaline: 26 },
      zinc: { deficient: 44, sufficient: 56 },
      iron: { deficient: 26, sufficient: 74 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 17500
    },
    blocks: [
      {
        blockId: 'kangeyam',
        nameEn: 'Kangeyam',
        nameTa: 'காங்கேயம்',
        villageCount: 44,
        majorSoilTypesEn: ['Red Sandy Loam', 'Calcareous Loam'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'சுண்ணாம்பு மண்'],
        cropsEn: ['Coconut (Copra)', 'Maize', 'Horsegram'],
        cropsTa: ['தென்னை (கொப்பரை)', 'மக்காச்சோளம்', 'கொள்ளு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.8,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.48,
          ecValue: 0.42
        }
      },
      {
        blockId: 'udumalaipettai',
        nameEn: 'Udumalaipettai',
        nameTa: 'உடுமலைப்பேட்டை',
        villageCount: 38,
        majorSoilTypesEn: ['Deep Black Soil', 'Brown Loam'],
        majorSoilTypesTa: ['ஆழ் கரிசல் மண்', 'பழுப்பு மண்'],
        cropsEn: ['Maize', 'Vegetables', 'Coconut'],
        cropsTa: ['மக்காச்சோளம்', 'காய்கறிகள்', 'தென்னை'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 7.5,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.62,
          ecValue: 0.35
        }
      }
    ]
  },
  {
    districtId: 593,
    svgClickId: 7,
    nameEn: 'Tiruvannamalai',
    nameTa: 'திருவண்ணாமலை',
    slug: 'tiruvannamalai',
    code: 'TN-TVM',
    headquartersEn: 'Tiruvannamalai',
    headquartersTa: 'திருவண்ணாமலை',
    agroZoneEn: 'North Eastern Agro-Climatic Zone',
    agroZoneTa: 'வடகிழக்கு வேளாண் மண்டலம்',
    rainfallMm: 1040,
    totalBlocks: 18,
    totalVillages: 860,
    majorSoilTypesEn: ['Red Sandy Loam', 'Jawadhu Mountain Loam', 'Clay'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'ஜவ்வாது மலை மண்', 'களிமண்'],
    majorCropsEn: ['Paddy', 'Groundnut', 'Sugarcane', 'Millets (Samai)', 'Banana'],
    majorCropsTa: ['நெல்', 'நிலக்கடலை', 'கரும்பு', 'சாமை', 'வாழை'],
    overviewEn: 'Spiritual and agricultural center at the foot of Annamalai and Jawadhu hills; largest producer of groundnut and minor millets with tank and well irrigation.',
    overviewTa: 'அண்ணாமலை மற்றும் ஜவ்வாது மலையடிவாரத்தில் அமைந்த திருவண்ணாமலை, நிலக்கடலை மற்றும் சிறுதானிய உற்பத்தியில் முதன்மை மாவட்டம்.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 68, color: '#DC2626' },
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 20, color: '#B45309' },
      { soilNameEn: 'Hill / Forest', soilNameTa: 'மலை வன மண்', percentage: 12, color: '#0D9488' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 68, medium: 26, high: 6 },
      phosphorus: { low: 24, medium: 50, high: 26 },
      potassium: { low: 16, medium: 52, high: 32 },
      organicCarbon: { low: 52, medium: 40, high: 8 },
      phDistribution: { acidic: 12, neutral: 76, alkaline: 12 },
      zinc: { deficient: 44, sufficient: 56 },
      iron: { deficient: 20, sufficient: 80 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 23400
    },
    blocks: [
      {
        blockId: 'tiruvannamalai-block',
        nameEn: 'Tiruvannamalai',
        nameTa: 'திருவண்ணாமலை',
        villageCount: 65,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு களிமண்'],
        cropsEn: ['Groundnut', 'Paddy', 'Sugarcane'],
        cropsTa: ['நிலக்கடலை', 'நெல்', 'கரும்பு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 6.9,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.48,
          ecValue: 0.28
        }
      },
      {
        blockId: 'polur',
        nameEn: 'Polur',
        nameTa: 'போளூர்',
        villageCount: 58,
        majorSoilTypesEn: ['Deep Red Loam', 'Alluvial Channel'],
        majorSoilTypesTa: ['ஆழ் செம்மண்', 'வண்டல்'],
        cropsEn: ['Paddy', 'Groundnut', 'Banana'],
        cropsTa: ['நெல்', 'நிலக்கடலை', 'வாழை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.54,
          ecValue: 0.32
        }
      }
    ]
  },
  {
    districtId: 594,
    svgClickId: 28,
    nameEn: 'Thoothukudi',
    nameTa: 'தூத்துக்குடி',
    slug: 'thoothukudi',
    code: 'TN-TKD',
    headquartersEn: 'Thoothukudi',
    headquartersTa: 'தூத்துக்குடி',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    rainfallMm: 662,
    totalBlocks: 12,
    totalVillages: 468,
    majorSoilTypesEn: ['Deep Black Soil (Vertisol)', 'Red Loam', 'Saline Coastal Sands'],
    majorSoilTypesTa: ['ஆழ் கரிசல் மண்', 'செம்மண்', 'உவர் கடற்கரை மணல்'],
    majorCropsEn: ['Cotton', 'Chillies', 'Green Gram', 'Sunflower', 'Onion', 'Palmyra'],
    majorCropsTa: ['பருத்தி', 'மிளகாய்', 'பாசிப்பயறு', 'சூரியகாந்தி', 'வெங்காயம்', 'பனை'],
    overviewEn: 'Renowned for prime black cotton soil tracts (Karisal Kaadu) in Kovilpatti and Ottapidaram with high moisture-retentive clays supporting resilient rainfed crops.',
    overviewTa: 'கோவில்பட்டி மற்றும் ஓட்டப்பிடாரம் பகுதிகளின் கரிசல் காடுகள் மற்றும் பனை வளம் நிறைந்த தட்பவெப்ப மாவட்டம்.',
    soilDistribution: [
      { soilNameEn: 'Black Cotton Soil', soilNameTa: 'கரிசல் மண்', percentage: 61, color: '#334155' },
      { soilNameEn: 'Red Loamy', soilNameTa: 'செம்மண்', percentage: 27, color: '#DC2626' },
      { soilNameEn: 'Coastal Sandy/Saline', soilNameTa: 'கடற்கரை உவர் மண்', percentage: 12, color: '#64748B' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 71, medium: 24, high: 5 },
      phosphorus: { low: 31, medium: 47, high: 22 },
      potassium: { low: 6, medium: 38, high: 56 },
      organicCarbon: { low: 59, medium: 34, high: 7 },
      phDistribution: { acidic: 2, neutral: 52, alkaline: 46 },
      zinc: { deficient: 52, sufficient: 48 },
      iron: { deficient: 34, sufficient: 66 },
      boron: { deficient: 41, sufficient: 59 },
      samplesAnalyzed: 12430
    },
    blocks: [
      {
        blockId: 'kovilpatti',
        nameEn: 'Kovilpatti',
        nameTa: 'கோவில்பட்டி',
        villageCount: 56,
        majorSoilTypesEn: ['Deep Black Cotton Soil', 'Clay Loam'],
        majorSoilTypesTa: ['கரிசல் மண்', 'களிமண்'],
        cropsEn: ['Cotton', 'Bengal Gram', 'Sorghum', 'Chillies'],
        cropsTa: ['பருத்தி', 'கொண்டைக்கடலை', 'சோளம்', 'மிளகாய்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 8.3,
          phCategory: 'Alkaline',
          organicCarbonPercent: 0.51,
          ecValue: 0.68
        }
      },
      {
        blockId: 'srivaikuntam',
        nameEn: 'Srivaikuntam',
        nameTa: 'ஸ்ரீவைகுண்டம்',
        villageCount: 42,
        majorSoilTypesEn: ['Tamirabarani Alluvium', 'Red Sandy Soil'],
        majorSoilTypesTa: ['தாமிரபரணி வண்டல்', 'செம்மண்'],
        cropsEn: ['Paddy', 'Banana', 'Betel Vine'],
        cropsTa: ['நெல்', 'வாழை', 'வெற்றிலை'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'High',
          potassiumStatus: 'Medium',
          phValue: 7.2,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.64,
          ecValue: 0.36
        }
      }
    ]
  },
  {
    districtId: 595,
    svgClickId: 6,
    nameEn: 'Vellore',
    nameTa: 'வேலூர்',
    slug: 'vellore',
    code: 'TN-VEL',
    headquartersEn: 'Vellore',
    headquartersTa: 'வேலூர்',
    agroZoneEn: 'North Eastern Agro-Climatic Zone',
    agroZoneTa: 'வடகிழக்கு வேளாண் மண்டலம்',
    rainfallMm: 995,
    totalBlocks: 7,
    totalVillages: 247,
    majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam', 'Palar Basin Alluvium'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு மண்', 'பாலாறு வண்டல்'],
    majorCropsEn: ['Paddy', 'Sugarcane', 'Groundnut', 'Banana', 'Vegetables'],
    majorCropsTa: ['நெல்', 'கரும்பு', 'நிலக்கடலை', 'வாழை', 'காய்கறிகள்'],
    overviewEn: 'Historic Fort City on the banks of the Palar river; agricultural valleys cultivate high-yield paddy, sugarcane, and market vegetables.',
    overviewTa: 'பாலாற்றின் கரையில் அமைந்துள்ள வரலாற்றுச் சிறப்புமிக்க வேலூர், நெல், கரும்பு மற்றும் நிலக்கடலை சாகுபடியில் சிறந்தது.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 58, color: '#DC2626' },
      { soilNameEn: 'Brown Soil', soilNameTa: 'பழுப்பு மண்', percentage: 26, color: '#B45309' },
      { soilNameEn: 'Alluvial Loam', soilNameTa: 'வண்டல் மண்', percentage: 16, color: '#059669' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 66, medium: 28, high: 6 },
      phosphorus: { low: 22, medium: 52, high: 26 },
      potassium: { low: 14, medium: 50, high: 36 },
      organicCarbon: { low: 50, medium: 42, high: 8 },
      phDistribution: { acidic: 10, neutral: 76, alkaline: 14 },
      zinc: { deficient: 42, sufficient: 58 },
      iron: { deficient: 20, sufficient: 80 },
      boron: { deficient: 35, sufficient: 65 },
      samplesAnalyzed: 14200
    },
    blocks: [
      {
        blockId: 'vellore-block',
        nameEn: 'Vellore',
        nameTa: 'வேலூர்',
        villageCount: 36,
        majorSoilTypesEn: ['Red Sandy Loam', 'Brown Loam'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு மண்'],
        cropsEn: ['Paddy', 'Sugarcane', 'Groundnut'],
        cropsTa: ['நெல்', 'கரும்பு', 'நிலக்கடலை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.52,
          ecValue: 0.30
        }
      },
      {
        blockId: 'anaicut',
        nameEn: 'Anaicut',
        nameTa: 'அணைக்கட்டு',
        villageCount: 42,
        majorSoilTypesEn: ['Palar Alluvium', 'Red Loam'],
        majorSoilTypesTa: ['பாலாறு வண்டல்', 'செம்மண்'],
        cropsEn: ['Banana', 'Sugarcane', 'Paddy'],
        cropsTa: ['வாழை', 'கரும்பு', 'நெல்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 7.3,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.58,
          ecValue: 0.34
        }
      }
    ]
  },
  {
    districtId: 596,
    svgClickId: 5,
    nameEn: 'Villupuram',
    nameTa: 'விழுப்புரம்',
    slug: 'villupuram',
    code: 'TN-VPM',
    headquartersEn: 'Villupuram',
    headquartersTa: 'விழுப்புரம்',
    agroZoneEn: 'North Eastern Zone',
    agroZoneTa: 'வடகிழக்கு மண்டலம்',
    rainfallMm: 1046,
    totalBlocks: 13,
    totalVillages: 693,
    majorSoilTypesEn: ['Red Sandy Loam', 'Grey Soil', 'Black Clay Loam'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'சாம்பல் மண்', 'கரிசல் களிமண்'],
    majorCropsEn: ['Sugarcane', 'Groundnut', 'Paddy', 'Casuarina', 'Tapioca'],
    majorCropsTa: ['கரும்பு', 'நிலக்கடலை', 'நெல்', 'சவுக்கு', 'மரவள்ளிக்கிழங்கு'],
    overviewEn: 'Extensive agricultural heartland in northern Tamil Nadu, with red sandy loams fostering premier groundnut production and sugar mills supported by the Thenpennai river basin.',
    overviewTa: 'தென்பெண்ணை ஆற்றுப் படுகையில் அமைந்த விழுப்புரம், நிலக்கடலை மற்றும் கரும்பு சாகுபடியில் முதன்மை வகிக்கும் மாவட்டமாகும்.',
    soilDistribution: [
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 54, color: '#DC2626' },
      { soilNameEn: 'Grey Soil', soilNameTa: 'சாம்பல் மண்', percentage: 24, color: '#64748B' },
      { soilNameEn: 'Black / Clay', soilNameTa: 'கரிசல் / களிமண்', percentage: 22, color: '#334155' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 66, medium: 28, high: 6 },
      phosphorus: { low: 26, medium: 50, high: 24 },
      potassium: { low: 12, medium: 52, high: 36 },
      organicCarbon: { low: 52, medium: 40, high: 8 },
      phDistribution: { acidic: 9, neutral: 76, alkaline: 15 },
      zinc: { deficient: 44, sufficient: 56 },
      iron: { deficient: 25, sufficient: 75 },
      boron: { deficient: 36, sufficient: 64 },
      samplesAnalyzed: 14100
    },
    blocks: [
      {
        blockId: 'villupuram-block',
        nameEn: 'Villupuram',
        nameTa: 'விழுப்புரம்',
        villageCount: 65,
        majorSoilTypesEn: ['Red Sandy Loam', 'Grey Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'சாம்பல் களிமண்'],
        cropsEn: ['Sugarcane', 'Paddy', 'Groundnut'],
        cropsTa: ['கரும்பு', 'நெல்', 'நிலக்கடலை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.1,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.49,
          ecValue: 0.32
        }
      },
      {
        blockId: 'vikravandi',
        nameEn: 'Vikravandi',
        nameTa: 'விக்கிரவாண்டி',
        villageCount: 58,
        majorSoilTypesEn: ['Deep Red Loam', 'Loamy Sand'],
        majorSoilTypesTa: ['ஆழ் செம்மண்', 'மணற்பாங்கான மண்'],
        cropsEn: ['Groundnut', 'Sugarcane', 'Tapioca'],
        cropsTa: ['நிலக்கடலை', 'கரும்பு', 'மரவள்ளி'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'High',
          potassiumStatus: 'Medium',
          phValue: 6.8,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.46,
          ecValue: 0.26
        }
      }
    ]
  },
  {
    districtId: 597,
    svgClickId: 26,
    nameEn: 'Virudhunagar',
    nameTa: 'விருதுநகர்',
    slug: 'virudhunagar',
    code: 'TN-VDN',
    headquartersEn: 'Virudhunagar',
    headquartersTa: 'விருதுநகர்',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    rainfallMm: 812,
    totalBlocks: 11,
    totalVillages: 600,
    majorSoilTypesEn: ['Deep Black Cotton Soil', 'Red Sandy Loam', 'Clay Loam'],
    majorSoilTypesTa: ['ஆழ் கரிசல் மண்', 'மணல் செம்மண்', 'களிமண்'],
    majorCropsEn: ['Cotton', 'Chillies', 'Maize', 'Millets', 'Pulses (Black Gram)'],
    majorCropsTa: ['பருத்தி', 'மிளகாய்', 'மக்காச்சோளம்', 'சிறு தானியங்கள்', 'உளுந்து'],
    overviewEn: 'Prime Karisal (black soil) territory and commercial grain processing hub; excellent moisture retention supports rainfed cotton, red chillies, and pulses.',
    overviewTa: 'கரிசல் மண் பூமி மற்றும் வர்த்தக நகரம்; பருத்தி, மிளகாய் மற்றும் உளுந்து சாகுபடியில் தென் மாவட்டங்களின் முன்னோடி.',
    soilDistribution: [
      { soilNameEn: 'Black Cotton Soil', soilNameTa: 'கரிசல் மண்', percentage: 64, color: '#334155' },
      { soilNameEn: 'Red Soil', soilNameTa: 'செம்மண்', percentage: 26, color: '#DC2626' },
      { soilNameEn: 'Clay / Loam', soilNameTa: 'களிமண்', percentage: 10, color: '#059669' }
    ],
    aggregateNutrientStatus: {
      nitrogen: { low: 72, medium: 23, high: 5 },
      phosphorus: { low: 28, medium: 48, high: 24 },
      potassium: { low: 8, medium: 40, high: 52 },
      organicCarbon: { low: 58, medium: 35, high: 7 },
      phDistribution: { acidic: 2, neutral: 58, alkaline: 40 },
      zinc: { deficient: 50, sufficient: 50 },
      iron: { deficient: 30, sufficient: 70 },
      boron: { deficient: 38, sufficient: 62 },
      samplesAnalyzed: 14900
    },
    blocks: [
      {
        blockId: 'rajapalayam',
        nameEn: 'Rajapalayam',
        nameTa: 'ராஜபாளையம்',
        villageCount: 36,
        majorSoilTypesEn: ['Foothill Red Loam', 'Black Soil'],
        majorSoilTypesTa: ['மலையடிவார செம்மண்', 'கரிசல் மண்'],
        cropsEn: ['Mango', 'Cotton', 'Paddy'],
        cropsTa: ['மாம்பழம்', 'பருத்தி', 'நெல்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'High',
          phValue: 7.4,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.58,
          ecValue: 0.32
        }
      },
      {
        blockId: 'sattur',
        nameEn: 'Sattur',
        nameTa: 'சாத்தூர்',
        villageCount: 48,
        majorSoilTypesEn: ['Deep Black Cotton Soil', 'Clay'],
        majorSoilTypesTa: ['ஆழ் கரிசல் மண்', 'களிமண்'],
        cropsEn: ['Chillies', 'Cotton', 'Pulses'],
        cropsTa: ['மிளகாய்', 'பருத்தி', 'பயறு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'High',
          phValue: 8.3,
          phCategory: 'Alkaline',
          organicCarbonPercent: 0.46,
          ecValue: 0.72
        }
      }
    ]
  }
];
