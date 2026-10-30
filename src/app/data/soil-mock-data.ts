import { SoilDistributionItem, SoilCompositionItem, SoilParameter, DistrictData } from '../models/soil-data.model';

export const TN_SOIL_DISTRIBUTION: SoilDistributionItem[] = [
  {
    id: 'red',
    nameEn: 'Red Soil',
    nameTa: 'செம்மண்',
    percentage: 39.34,
    color: '#DC2626',
    badgeBg: '#FEF2F2',
    badgeBorder: '#FCA5A5',
    descriptionEn: 'The most widespread soil order in Tamil Nadu (Alfisol/Inceptisol), rich in iron oxides giving its characteristic red color. Generally porous and friable with moderate water retention.',
    descriptionTa: 'தமிழ்நாட்டில் மிகவும் பரவலாகக் காணப்படும் மண் வகை (39.34%). இரும்பு ஆக்சைடு மிகுதியாக உள்ளதால் செந்நிறம் பெறுகிறது. நல்ல வடிகால் அமைப்பு கொண்டது.',
    keyDistrictsEn: ['Madurai', 'Dindigul', 'Sivaganga', 'Pudukkottai', 'Salem', 'Tiruchirappalli'],
    keyDistrictsTa: ['மதுரை', 'திண்டுக்கல்', 'சிவகங்கை', 'புதுக்கோட்டை', 'சேலம்', 'திருச்சிராப்பள்ளி'],
    suitableCropsEn: ['Millets', 'Groundnut', 'Pulses', 'Cotton', 'Tobacco', 'Horticultural fruits'],
    suitableCropsTa: ['சிறு தானியங்கள்', 'நிலக்கடலை', 'பருப்பு வகைகள்', 'பருத்தி', 'தோட்டக்கலைப் பயிர்கள்']
  },
  {
    id: 'brown',
    nameEn: 'Brown Soil',
    nameTa: 'பழுப்பு மண்',
    percentage: 37.89,
    color: '#B45309',
    badgeBg: '#FFFBEB',
    badgeBorder: '#FCD34D',
    descriptionEn: 'Formed under sub-humid conditions with moderate organic matter content. Excellent for diversified cereal cultivation, commercial fruit orchards, and highland spices.',
    descriptionTa: 'மிதமான ஈரப்பதக் காலநிலை மற்றும் கரிமச்சத்து நிறைந்த மண் வகை. பயிர் சாகுபடிக்கு உகந்த நில அமைப்பைக் கொண்டது.',
    keyDistrictsEn: ['Coimbatore', 'Erode', 'Tiruppur', 'Dharmapuri', 'Krishnagiri', 'Vellore'],
    keyDistrictsTa: ['கோயம்புத்தூர்', 'ஈரோடு', 'திருப்பூர்', 'தருமபுரி', 'கிருஷ்ணகிரி', 'வேலூர்'],
    suitableCropsEn: ['Maize', 'Sugarcane', 'Turmeric', 'Coconut', 'Vegetables', 'Flowers'],
    suitableCropsTa: ['மக்காச்சோளம்', 'கரும்பு', 'மஞ்சள்', 'தென்னை', 'காய்கறிகள்', 'மலர்கள்']
  },
  {
    id: 'black',
    nameEn: 'Black Soil',
    nameTa: 'கரிசல் மண்',
    percentage: 16.38,
    color: '#334155',
    badgeBg: '#F8FAFC',
    badgeBorder: '#CBD5E1',
    descriptionEn: 'Vertisols known for high clay content, deep swelling and shrink characteristics, excellent moisture retention. Highly fertile and famously renowned as cotton soil (Regur).',
    descriptionTa: 'களிமண் தன்மை மற்றும் ஈரப்பதத்தைத் தக்கவைத்துக்கொள்ளும் ஆற்றல் மிக்க மண். பருத்தி, சோளம் சாகுபடிக்கு உலகப் புகழ்பெற்றது.',
    keyDistrictsEn: ['Thoothukudi', 'Virudhunagar', 'Tirunelveli', 'Ramanathapuram', 'Perambalur'],
    keyDistrictsTa: ['தூத்துக்குடி', 'விருதுநகர்', 'திருநெல்வேலி', 'இராமநாதபுரம்', 'பெரம்பலூர்'],
    suitableCropsEn: ['Cotton', 'Sunflower', 'Sorghum', 'Bengal gram', 'Chillies', 'Coriander'],
    suitableCropsTa: ['பருத்தி', 'சூரியகாந்தி', 'சோளம்', 'கொண்டைக்கடலை', 'மிளகாய்', 'கொத்தமல்லி']
  },
  {
    id: 'grey',
    nameEn: 'Grey Soil',
    nameTa: 'சாம்பல் மண்',
    percentage: 3.50,
    color: '#64748B',
    badgeBg: '#F1F5F9',
    badgeBorder: '#94A3B8',
    descriptionEn: 'Found predominantly in depressions and wetland rice tracts with moderate salinity and seasonal waterlogging characteristics.',
    descriptionTa: 'தாழ்வான பகுதிகள் மற்றும் ஈரநில நெல் வயல் பகுதிகளில் காணப்படும் சாம்பல் நிற மண் வகை.',
    keyDistrictsEn: ['Kancheepuram', 'Chengalpattu', 'Tiruvallur', 'Villupuram'],
    keyDistrictsTa: ['காஞ்சிபுரம்', 'செங்கல்பட்டு', 'திருவள்ளூர்', 'விழுப்புரம்'],
    suitableCropsEn: ['Paddy', 'Fodder grass', 'Salt-tolerant pulses'],
    suitableCropsTa: ['நெல்', 'தீவனப் பயிர்கள்', 'பயறு வகைகள்']
  },
  {
    id: 'mixed',
    nameEn: 'Mixed Soil',
    nameTa: 'கலப்பு மண்',
    percentage: 2.03,
    color: '#0D9488',
    badgeBg: '#F0FDFA',
    badgeBorder: '#5EEAD4',
    descriptionEn: 'Transitional soil complex presenting alternating layers of gravelly loam, clay, and sedimentary deposits along pediments.',
    descriptionTa: 'பல்வேறு மண் வகைகளின் கலவையைக் கொண்ட இடைநிலை மண் வகை.',
    keyDistrictsEn: ['The Nilgiris', 'Theni', 'Dindigul (hills)', 'Tenkasi'],
    keyDistrictsTa: ['நீலகிரி', 'தேனி', 'திண்டுக்கல் மலைப்பகுதி', 'தென்காசி'],
    suitableCropsEn: ['Tea', 'Coffee', 'Pepper', 'Hill vegetables', 'Cardamom'],
    suitableCropsTa: ['தேயிலை', 'காபி', 'மிளகு', 'மலைக் காய்கறிகள்', 'ஏலக்காய்']
  },
  {
    id: 'alluvial',
    nameEn: 'Alluvial Soil',
    nameTa: 'வண்டல் மண்',
    percentage: 0.86,
    color: '#059669',
    badgeBg: '#ECFDF5',
    badgeBorder: '#6EE7B7',
    descriptionEn: 'Deposited by the Cauvery and Tamirabarani river basins. Highly fertile, loamy to silty clay texture, ideal for intensive paddy and multi-crop delta farming.',
    descriptionTa: 'காவிரி மற்றும் தாமிரபரணி படுகைகளில் படியும் அதிக வளமுடைய வண்டல் மண். டெல்டா நெல் விவசாயத்தின் முதுகெலும்பு.',
    keyDistrictsEn: ['Thanjavur', 'Thiruvarur', 'Nagapattinam', 'Mayiladuthurai', 'Cuddalore'],
    keyDistrictsTa: ['தஞ்சாவூர்', 'திருவாரூர்', 'நாகப்பட்டினம்', 'மயிலாடுதுறை', 'கடலூர்'],
    suitableCropsEn: ['Paddy (Kuruvai & Samba)', 'Banana', 'Sugarcane', 'Black gram', 'Sesame'],
    suitableCropsTa: ['நெல் (குறுவை, சம்பா)', 'வாழை', 'கரும்பு', 'உளுந்து', 'எள்']
  }
];

export const SOIL_COMPOSITION: SoilCompositionItem[] = [
  {
    id: 'mineral',
    nameEn: 'Mineral Matter',
    nameTa: 'கனிமப் பொருட்கள்',
    percentage: 45,
    color: '#78350F',
    roleEn: 'Sand, silt, and clay particles derived from parent rocks supplying structural matrix and essential inorganic elements.',
    roleTa: 'பாறைகள் சிதைந்து உண்டாகும் மணல், வண்டல், களிமண் துகள்கள் மற்றும் அத்தியாவசிய கனிமங்கள்.'
  },
  {
    id: 'water',
    nameEn: 'Soil Water',
    nameTa: 'மண் ஈரப்பதம் / நீர்',
    percentage: 25,
    color: '#0284C7',
    roleEn: 'Soil solution containing dissolved nutrients essential for root absorption and microbial metabolic activity.',
    roleTa: 'வேர்கள் எளிதில் உறிஞ்சும் கரைந்த சத்துக்களுடன் கூடிய ஈரப்பதம்.'
  },
  {
    id: 'air',
    nameEn: 'Soil Air',
    nameTa: 'மண் காற்று (வாயு)',
    percentage: 25,
    color: '#0D9488',
    roleEn: 'Gases in pore spaces providing oxygen for root respiration and beneficial aerobic bacteria.',
    roleTa: 'மண் துளைகளில் உள்ள ஆக்ஸிஜன் மற்றும் வாயுக்கள், வேர் சுவாசம் மற்றும் நுண்ணுயிரிகளுக்கு உதவுகிறது.'
  },
  {
    id: 'organic',
    nameEn: 'Organic Matter',
    nameTa: 'கரிமப் பொருட்கள் (மட்கு)',
    percentage: 5,
    color: '#15803D',
    roleEn: 'Humus, decomposing plant and animal residues improving soil structure, cation exchange, and water capacity.',
    roleTa: 'தாவர, விலங்கின எச்சங்கள் மற்றும் மட்கிய கரிமச்சத்து, மண்ணின் வளத்தை உயர்த்துகிறது.'
  }
];

export const SOIL_PARAMETERS: SoilParameter[] = [
  {
    id: 'nitrogen',
    nameEn: 'Available Nitrogen',
    nameTa: 'கிடைக்கக்கூடிய தழைச்சத்து',
    symbol: 'N',
    category: 'primary',
    unit: 'kg/ha',
    whatItMeasuresEn: 'Measures readily mineralizable nitrogen available in the root zone for plant uptake.',
    whatItMeasuresTa: 'வேர் மண்டலத்தில் பயிர்கள் உடனடியாக எடுத்துக்கொள்ளக்கூடிய தழைச்சத்தின் அளவு.',
    whyItMattersEn: 'Essential for vegetative canopy growth, leaf expansion, chlorophyll formation, and protein synthesis.',
    whyItMattersTa: 'பயிர்களின் தழை வளர்ச்சி, பச்சை நிறம் (பச்சையம்) உருவாக்கம் மற்றும் புரத உற்பத்திக்கு இன்றியமையாதது.',
    benchmarkRangesEn: [
      { status: 'Low', range: '< 280 kg/ha', note: 'Apply organic manures and split chemical urea/fertilizer.' },
      { status: 'Medium', range: '280 - 450 kg/ha', note: 'Maintain balanced application as per crop schedule.' },
      { status: 'High', range: '> 450 kg/ha', note: 'Reduce top-dressing to prevent excessive lodging and pests.' }
    ],
    benchmarkRangesTa: [
      { status: 'குறைவு', range: '< 280 கி.கி/ஹெ', note: 'கரிம எரு மற்றும் யூரியா உரம் பிரித்து இடவும்.' },
      { status: 'நடுத்தரம்', range: '280 - 450 கி.கி/ஹெ', note: 'பரிந்துரைக்கப்பட்ட சமச்சீர் உரமிடுதலைத் தொடரவும்.' },
      { status: 'அதிகம்', range: '> 450 கி.கி/ஹெ', note: 'பூச்சித் தாக்குதலைத் தவிர்க்க கூடுதல் தழைச்சத்தைக் குறைக்கவும்.' }
    ]
  },
  {
    id: 'phosphorus',
    nameEn: 'Available Phosphorus',
    nameTa: 'கிடைக்கக்கூடிய மணிச்சத்து',
    symbol: 'P',
    category: 'primary',
    unit: 'kg/ha',
    whatItMeasuresEn: 'Measures plant-absorbable orthophosphate anions in soil extract (Olsen/Bray method).',
    whatItMeasuresTa: 'மண்ணில் பயிர்கள் கிரகிக்கும் பாஸ்பரஸ் (மணிச்சத்து) சத்து இருப்பு.',
    whyItMattersEn: 'Drives deep root architecture development, early vigor, flowering, seed setting, and energy transfer (ATP).',
    whyItMattersTa: 'ஆழமான வேர் வளர்ச்சி, பூ பூத்தல், விதை முதிர்ச்சி மற்றும் பயிர் வளர்ச்சி ஆற்றலுக்கு அவசியம்.',
    benchmarkRangesEn: [
      { status: 'Low', range: '< 11 kg/ha', note: 'Incorporate DAP or SSP along with mycorrhizal biofertilizers.' },
      { status: 'Medium', range: '11 - 22 kg/ha', note: 'Optimal for field crops under standard basal dressing.' },
      { status: 'High', range: '> 22 kg/ha', note: 'Skip basal phosphate to avoid zinc/iron fixation.' }
    ],
    benchmarkRangesTa: [
      { status: 'குறைவு', range: '< 11 கி.கி/ஹெ', note: 'டி.ஏ.பி அல்லது சூப்பர் பாஸ்பேட் உயிர் உரங்களுடன் இடவும்.' },
      { status: 'நடுத்தரம்', range: '11 - 22 கி.கி/ஹெ', note: 'பயிர்களுக்குத் தேவையான உகந்த நிலை.' },
      { status: 'அதிகம்', range: '> 22 கி.கி/ஹெ', note: 'நுண்ணூட்டச் சத்து முடக்கத்தைத் தவிர்க்க மணிச்சத்தை குறைக்கவும்.' }
    ]
  },
  {
    id: 'potassium',
    nameEn: 'Available Potassium',
    nameTa: 'கிடைக்கக்கூடிய சாம்பல் சத்து',
    symbol: 'K',
    category: 'primary',
    unit: 'kg/ha',
    whatItMeasuresEn: 'Exchangeable potassium ions held on clay surfaces and in soil solution.',
    whatItMeasuresTa: 'மண்ணில் பயிர்களுக்குக் கிடைக்கக்கூடிய பொட்டாசியம் (சாம்பல் சத்து) அளவு.',
    whyItMattersEn: 'Regulates stomatal opening, drought endurance, pest resistance, grain filling, and fruit sweetness.',
    whyItMattersTa: 'வறட்சி தாங்கும் திறன், பூச்சி-நோய் எதிர்ப்பு, தானிய எடை மற்றும் சுவையை அதிகரிக்கிறது.',
    benchmarkRangesEn: [
      { status: 'Low', range: '< 118 kg/ha', note: 'Apply MOP (Muriate of Potash) in 2 splits.' },
      { status: 'Medium', range: '118 - 280 kg/ha', note: 'Ideal range for most Tamil Nadu soil tracts.' },
      { status: 'High', range: '> 280 kg/ha', note: 'Sufficient reserves; standard maintenance dose only.' }
    ],
    benchmarkRangesTa: [
      { status: 'குறைவு', range: '< 118 கி.கி/ஹெ', note: 'பொட்டாஷ் உரம் பிரித்து இட வேண்டும்.' },
      { status: 'நடுத்தரம்', range: '118 - 280 கி.கி/ஹெ', note: 'பெரும்பாலான நிலங்களுக்கு ஏற்ற உகந்த அளவு.' },
      { status: 'அதிகம்', range: '> 280 கி.கி/ஹெ', note: 'போதுமான கையிருப்பு உள்ளது; பராமரிப்பு அளவு போதுமானது.' }
    ]
  },
  {
    id: 'ph',
    nameEn: 'Soil Reaction (pH)',
    nameTa: 'மண் கார அமில நிலை (pH)',
    symbol: 'pH',
    category: 'properties',
    unit: '-',
    whatItMeasuresEn: 'Negative log of hydrogen ion activity, indicating acidity or alkalinity of the soil.',
    whatItMeasuresTa: 'மண்ணின் அமிலத்தன்மை அல்லது காரத்தன்மையின் அளவு.',
    whyItMattersEn: 'Dictates the solubility and bioavailability of all macro and micronutrients, plus beneficial microbe health.',
    whyItMattersTa: 'அனைத்து ஊட்டச்சத்துக்களும் பயிர்களுக்குக் கிடைப்பதை நிர்ணயிக்கும் தலையாய காரணி.',
    benchmarkRangesEn: [
      { status: 'Acidic', range: '< 6.5', note: 'Apply agricultural lime or dolomite to raise pH.' },
      { status: 'Neutral', range: '6.5 - 7.8', note: 'Ideal range for maximum nutrient availability.' },
      { status: 'Alkaline', range: '> 7.8', note: 'Apply gypsum and green manure crops (Daincha) to reclaim.' }
    ],
    benchmarkRangesTa: [
      { status: 'அமிலம்', range: '< 6.5', note: 'விவசாய சுண்ணாம்பு அல்லது டோலமைட் இடவும்.' },
      { status: 'நடுநிலை', range: '6.5 - 7.8', note: 'அனைத்து பயிர்களுக்கும் உகந்த மிகச்சிறந்த கார அமில நிலை.' },
      { status: 'காரம்', range: '> 7.8', note: 'ஜிப்சம் மற்றும் தக்கைப்பூண்டு போன்ற பசுந்தாள் உரம் இடவும்.' }
    ]
  },
  {
    id: 'ec',
    nameEn: 'Electrical Conductivity (EC)',
    nameTa: 'மின் கடத்து திறன் (உவர்தன்மை)',
    symbol: 'EC',
    category: 'properties',
    unit: 'dS/m',
    whatItMeasuresEn: 'Concentration of soluble salts in soil paste or 1:2.5 soil water suspension.',
    whatItMeasuresTa: 'மண்ணில் கரைந்துள்ள உப்புகளின் செறிவு (உவர்தன்மை).',
    whyItMattersEn: 'High salinity restricts osmotic water intake by roots, causing leaf scorch and seedling mortality.',
    whyItMattersTa: 'அதிக உப்புத்தன்மை பயிர்கள் வேர் மூலம் நீர் உறிஞ்சுவதைத் தடுத்து கருகச் செய்யும்.',
    benchmarkRangesEn: [
      { status: 'Normal / Non-saline', range: '< 1.0 dS/m', note: 'Safe for all normal and sensitive crops.' },
      { status: 'Critical / Moderate', range: '1.0 - 2.0 dS/m', note: 'Requires good leaching with quality canal irrigation.' },
      { status: 'Injurious / Saline', range: '> 2.0 dS/m', note: 'Sub-surface drainage and salt-tolerant varieties required.' }
    ],
    benchmarkRangesTa: [
      { status: 'இயல்பு / உப்பற்றது', range: '< 1.0 dS/m', note: 'அனைத்து வகை பயிர்களுக்கும் பாதுகாப்பானது.' },
      { status: 'மிதமான உவர்ப்பு', range: '1.0 - 2.0 dS/m', note: 'நல்ல வடிகால் மற்றும் தூய நீர் பாய்ச்சல் தேவை.' },
      { status: 'அதிக உவர்ப்பு', range: '> 2.0 dS/m', note: 'உவர் தாங்கும் பயிர் ரகங்கள் மற்றும் வடிகால் அவசியம்.' }
    ]
  },
  {
    id: 'oc',
    nameEn: 'Organic Carbon (OC)',
    nameTa: 'கரிமக் கார்பன் (மட்கு அளவு)',
    symbol: 'OC',
    category: 'properties',
    unit: '%',
    whatItMeasuresEn: 'Percentage of decomposed organic carbon matter in topsoil horizon.',
    whatItMeasuresTa: 'மேல்மண்ணில் உள்ள மட்கிய இயற்கை கரிமக் கூட்டுப் பொருட்களின் விழுக்காடு.',
    whyItMattersEn: 'The life engine of soil: fuels earthworms, mycorrhiza, enhances moisture reservoir and cation exchange.',
    whyItMattersTa: 'மண்ணின் உயிராற்றல்: நுண்ணுயிர் பெருக்கம், மண் இளகுதன்மை மற்றும் நீர் பிடிப்புக்கு ஆதாரம்.',
    benchmarkRangesEn: [
      { status: 'Low', range: '< 0.50 %', note: 'Apply farmyard manure (FYM), compost, and practice crop residue recycling.' },
      { status: 'Medium', range: '0.50 - 0.75 %', note: 'Acceptable level in tropical climates; continue organic inputs.' },
      { status: 'High', range: '> 0.75 %', note: 'Excellent biological fertility and water retention capacity.' }
    ],
    benchmarkRangesTa: [
      { status: 'குறைவு', range: '< 0.50 %', note: 'தொழுவுரம், மண்புழு உரம் மற்றும் பயிர்க்கழிவு சுழற்சி தேவை.' },
      { status: 'நடுத்தரம்', range: '0.50 - 0.75 %', note: 'வெப்பமண்டலப் பகுதிக்கு ஏற்ற நடுத்தர நிலை.' },
      { status: 'உயர் வளம்', range: '> 0.75 %', note: 'மண்ணின் மிகச் சிறந்த உயிரியல் வள நிலை.' }
    ]
  },
  {
    id: 'zinc',
    nameEn: 'Available Zinc',
    nameTa: 'துத்தநாகம் (ஜிங்க்)',
    symbol: 'Zn',
    category: 'secondary_micro',
    unit: 'mg/kg (ppm)',
    whatItMeasuresEn: 'DTPA-extractable available zinc in soil.',
    whatItMeasuresTa: 'பயிர்களுக்குக் கிடைக்கக்கூடிய துத்தநாக நுண்ணூட்டச் சத்து.',
    whyItMattersEn: 'Controls auxin hormone synthesis, enzyme activation, and internode elongation (prevents Khaira disease).',
    whyItMattersTa: 'வளர்ச்சி ஹார்மோன் தூண்டுதல் மற்றும் குருத்து வெளுத்தல் நோயைத் தடுக்க உதவுகிறது.',
    benchmarkRangesEn: [
      { status: 'Deficient', range: '< 1.2 mg/kg', note: 'Apply 25 kg/ha Zinc Sulphate as basal or foliar spray.' },
      { status: 'Sufficient', range: '>= 1.2 mg/kg', note: 'Adequate for normal crop cycles.' }
    ],
    benchmarkRangesTa: [
      { status: 'பற்றாக்குறை', range: '< 1.2 மி.கி/கி.கி', note: 'ஹெக்டேருக்கு 25 கி.கி துத்தநாக சல்பேட் இடவும்.' },
      { status: 'போதுமானது', range: '>= 1.2 மி.கி/கி.கி', note: 'பயிர்களுக்குத் தேவையான அளவில் உள்ளது.' }
    ]
  },
  {
    id: 'iron',
    nameEn: 'Available Iron',
    nameTa: 'இரும்புச் சத்து',
    symbol: 'Fe',
    category: 'secondary_micro',
    unit: 'mg/kg (ppm)',
    whatItMeasuresEn: 'DTPA-extractable ferrous/ferric iron ions.',
    whatItMeasuresTa: 'மண்ணில் உள்ள பயிர்கள் ஏற்கும் இரும்புச்சத்து அளவு.',
    whyItMattersEn: 'Catalyst for chlorophyll synthesis and electron transfer in respiration; deficiency shows as interveinal chlorosis.',
    whyItMattersTa: 'பச்சைய உற்பத்தி மற்றும் சுவாசித்தல் செயல்முறைகளுக்கு இன்றியமையாதது.',
    benchmarkRangesEn: [
      { status: 'Deficient', range: '< 3.7 mg/kg (Calcareous) / < 6.3 mg/kg', note: 'Apply Ferrous Sulphate with organic compost.' },
      { status: 'Sufficient', range: '>= 6.3 mg/kg', note: 'Plentiful in red and laterite tracts.' }
    ],
    benchmarkRangesTa: [
      { status: 'பற்றாக்குறை', range: '< 6.3 மி.கி/கி.கி', note: 'அன்னபேதி (பெரஸ் சல்பேட்) உரத்தை மட்கிய எருவுடன் இடவும்.' },
      { status: 'போதுமானது', range: '>= 6.3 மி.கி/கி.கி', note: 'மண்ணில் போதுமான அளவில் உள்ளது.' }
    ]
  },
  {
    id: 'boron',
    nameEn: 'Available Boron',
    nameTa: 'போரான்',
    symbol: 'B',
    category: 'secondary_micro',
    unit: 'mg/kg (ppm)',
    whatItMeasuresEn: 'Hot-water soluble boron in soil.',
    whatItMeasuresTa: 'சூடான நீரில் கரையக்கூடிய போரான் சத்தின் அளவு.',
    whyItMattersEn: 'Essential for pollen germination, pollen tube elongation, fruit set, and sugar translocation.',
    whyItMattersTa: 'மகரந்தச் சேர்க்கை, பூ உதிர்வதைத் தடுத்தல் மற்றும் காய் பிடிப்பதற்கு மிகவும் முக்கியமானது.',
    benchmarkRangesEn: [
      { status: 'Deficient', range: '< 0.5 mg/kg', note: 'Apply Borax (10 kg/ha) or foliar 0.2% Solubor at flowering.' },
      { status: 'Sufficient', range: '>= 0.5 mg/kg', note: 'Adequate for normal pollination and fruit set.' }
    ],
    benchmarkRangesTa: [
      { status: 'பற்றாக்குறை', range: '< 0.5 மி.கி/கி.கி', note: 'போராக்ஸ் உரம் (10 கி.கி/ஹெ) அல்லது இலைவழித் தெளிப்பு செய்யவும்.' },
      { status: 'போதுமானது', range: '>= 0.5 மி.கி/கி.கி', note: 'பூத்தல் மற்றும் காய் பிடிப்பிற்குப் போதுமானது.' }
    ]
  }
];

export const TN_DISTRICTS: DistrictData[] = [
  {
    id: 'thanjavur',
    code: 'TN-THJ',
    nameEn: 'Thanjavur',
    nameTa: 'தஞ்சாவூர்',
    agroZoneEn: 'Cauvery Delta Zone',
    agroZoneTa: 'காவிரி டெல்டா மண்டலம்',
    headquartersEn: 'Thanjavur',
    headquartersTa: 'தஞ்சாவூர்',
    totalBlocks: 14,
    totalVillages: 906,
    majorSoilTypesEn: ['Alluvial Soil (Delta)', 'Red Loam', 'Sandy Coastal'],
    majorSoilTypesTa: ['டெல்டா வண்டல் மண்', 'செம்மண் சரளை', 'மணற்பாங்கான கடற்கரை மண்'],
    majorCropsEn: ['Paddy (Kuruvai, Samba)', 'Black Gram', 'Banana', 'Coconut', 'Sugarcane'],
    majorCropsTa: ['நெல் (குறுவை, சம்பா)', 'உளுந்து', 'வாழை', 'தென்னை', 'கரும்பு'],
    rainfallMm: 980,
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
        id: 'thanjavur-block',
        nameEn: 'Thanjavur Block',
        nameTa: 'தஞ்சாவூர் ஒன்றியம்',
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
        id: 'kumbakonam',
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
      },
      {
        id: 'papanasam',
        nameEn: 'Papanasam',
        nameTa: 'பாபநாசம்',
        villageCount: 62,
        majorSoilTypesEn: ['Alluvial Clay', 'River Silts'],
        majorSoilTypesTa: ['வண்டல் களிமண்', 'ஆற்று வண்டல்'],
        cropsEn: ['Paddy', 'Cotton', 'Banana'],
        cropsTa: ['நெல்', 'பருத்தி', 'வாழை'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'High',
          potassiumStatus: 'Medium',
          phValue: 6.9,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.62,
          ecValue: 0.28
        }
      },
      {
        id: 'pattukkottai',
        nameEn: 'Pattukkottai',
        nameTa: 'பட்டுக்கோட்டை',
        villageCount: 78,
        majorSoilTypesEn: ['Red Sandy Loam', 'Coastal Alluvial'],
        majorSoilTypesTa: ['செம்மண்', 'கடற்கரை வண்டல்'],
        cropsEn: ['Coconut', 'Groundnut', 'Paddy'],
        cropsTa: ['தென்னை', 'நிலக்கடலை', 'நெல்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 6.6,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.44,
          ecValue: 0.31
        }
      },
      {
        id: 'orathanadu',
        nameEn: 'Orathanadu',
        nameTa: 'ஒரத்தநாடு',
        villageCount: 81,
        majorSoilTypesEn: ['Red Sandy Clay', 'Loamy Alluvial'],
        majorSoilTypesTa: ['சிவப்பு களிமண்', 'வண்டல்'],
        cropsEn: ['Paddy', 'Pulses', 'Oilseeds'],
        cropsTa: ['நெல்', 'பயறு', 'எண்ணெய்வித்துகள்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 6.8,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.52,
          ecValue: 0.25
        }
      }
    ]
  },
  {
    id: 'coimbatore',
    code: 'TN-CBE',
    nameEn: 'Coimbatore',
    nameTa: 'கோயம்புத்தூர்',
    agroZoneEn: 'Western Agro-Climatic Zone',
    agroZoneTa: 'மேற்கு வேளாண் மண்டலம்',
    headquartersEn: 'Coimbatore',
    headquartersTa: 'கோயம்புத்தூர்',
    totalBlocks: 12,
    totalVillages: 482,
    majorSoilTypesEn: ['Brown Soil', 'Red Loamy Soil', 'Black Calcareous'],
    majorSoilTypesTa: ['பழுப்பு மண்', 'செம்மண் சரளை', 'சுண்ணாம்பு கரிசல் மண்'],
    majorCropsEn: ['Maize', 'Cotton', 'Vegetables', 'Coconut', 'Sorghum', 'Banana'],
    majorCropsTa: ['மக்காச்சோளம்', 'பருத்தி', 'காய்கறிகள்', 'தென்னை', 'சோளம்', 'வாழை'],
    rainfallMm: 657,
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
        id: 'pollachi-north',
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
        id: 'pollachi-south',
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
        id: 'thondamuthur',
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
        id: 'sulur',
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
    id: 'madurai',
    code: 'TN-MDU',
    nameEn: 'Madurai',
    nameTa: 'மதுரை',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    headquartersEn: 'Madurai',
    headquartersTa: 'மதுரை',
    totalBlocks: 13,
    totalVillages: 665,
    majorSoilTypesEn: ['Red Sandy Loam', 'Black Cotton Soil', 'Alluvial Vaigai Basin'],
    majorSoilTypesTa: ['செம்மண் மணல் சரளை', 'கரிசல் மண்', 'வைகைப் படுகை வண்டல்'],
    majorCropsEn: ['Paddy', 'Jasmine (Malligai)', 'Millets', 'Pulses', 'Cotton'],
    majorCropsTa: ['நெல்', 'மல்லிகை', 'சிறு தானியங்கள்', 'பயறு வகைகள்', 'பருத்தி'],
    rainfallMm: 840,
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
        id: 'vadipatti',
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
        id: 'melur',
        nameEn: 'Melur',
        nameTa: 'மேலூர்',
        villageCount: 65,
        majorSoilTypesEn: ['Red Sandy Soil', 'Gravelly Clay'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'சரளை மண்'],
        cropsEn: ['Paddy', 'Groundnut', 'Pulses'],
        cropsTa: ['நெல்', 'நிலக்கடலை', 'பயறு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'Medium',
          phValue: 6.7,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.42,
          ecValue: 0.22
        }
      },
      {
        id: 'thiruparankundram',
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
      },
      {
        id: 'kallikudi',
        nameEn: 'Kallikudi',
        nameTa: 'கள்ளிகுடி',
        villageCount: 48,
        majorSoilTypesEn: ['Deep Black Cotton Soil', 'Clay'],
        majorSoilTypesTa: ['கரிசல் மண்', 'களிமண்'],
        cropsEn: ['Cotton', 'Sorghum', 'Pulses'],
        cropsTa: ['பருத்தி', 'சோளம்', 'பயறு'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'High',
          phValue: 8.2,
          phCategory: 'Alkaline',
          organicCarbonPercent: 0.48,
          ecValue: 0.72
        }
      }
    ]
  },
  {
    id: 'thoothukudi',
    code: 'TN-TKD',
    nameEn: 'Thoothukudi',
    nameTa: 'தூத்துக்குடி',
    agroZoneEn: 'Southern Agro-Climatic Zone',
    agroZoneTa: 'தென் மண்டலம்',
    headquartersEn: 'Thoothukudi',
    headquartersTa: 'தூத்துக்குடி',
    totalBlocks: 12,
    totalVillages: 468,
    majorSoilTypesEn: ['Deep Black Soil (Vertisol)', 'Red Loam', 'Saline Coastal Sands'],
    majorSoilTypesTa: ['ஆழ் கரிசல் மண்', 'செம்மண்', 'உவர் கடற்கரை மணல்'],
    majorCropsEn: ['Cotton', 'Chillies', 'Green Gram', 'Sunflower', 'Onion', 'Palmyra'],
    majorCropsTa: ['பருத்தி', 'மிளகாய்', 'பாசிப்பயறு', 'சூரியகாந்தி', 'வெங்காயம்', 'பனை'],
    rainfallMm: 662,
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
        id: 'kovilpatti',
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
        id: 'srivaikuntam',
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
      },
      {
        id: 'ottapidaram',
        nameEn: 'Ottapidaram',
        nameTa: 'ஓட்டப்பிடாரம்',
        villageCount: 64,
        majorSoilTypesEn: ['Black Clay Soil', 'Gravelly Loam'],
        majorSoilTypesTa: ['கரிசல் மண்', 'சரளை மண்'],
        cropsEn: ['Cotton', 'Green Gram', 'Chillies'],
        cropsTa: ['பருத்தி', 'பச்சைப்பயறு', 'மிளகாய்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'Low',
          potassiumStatus: 'High',
          phValue: 8.4,
          phCategory: 'Alkaline',
          organicCarbonPercent: 0.45,
          ecValue: 0.78
        }
      }
    ]
  },
  {
    id: 'dharmapuri',
    code: 'TN-DPI',
    nameEn: 'Dharmapuri',
    nameTa: 'தருமபுரி',
    agroZoneEn: 'North Western Zone',
    agroZoneTa: 'வடமேற்கு மண்டலம்',
    headquartersEn: 'Dharmapuri',
    headquartersTa: 'தருமபுரி',
    totalBlocks: 8,
    totalVillages: 512,
    majorSoilTypesEn: ['Red Sandy Loam', 'Brown Forest Soil', 'Black Clay Pockets'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'பழுப்பு வனமண்', 'கரிசல் சிறுபகுதிகள்'],
    majorCropsEn: ['Ragi (Finger Millet)', 'Mango', 'Tomato', 'Sugarcane', 'Tamarind'],
    majorCropsTa: ['கேழ்வரகு (ராகி)', 'மாம்பழம்', 'தக்காளி', 'கரும்பு', 'புளி'],
    rainfallMm: 853,
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
        id: 'dharmapuri-block',
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
        id: 'pennagaram',
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
      },
      {
        id: 'palacode',
        nameEn: 'Palacode',
        nameTa: 'பாலக்கோடு',
        villageCount: 68,
        majorSoilTypesEn: ['Red Loam', 'Brown Clay Loam'],
        majorSoilTypesTa: ['செம்மண்', 'பழுப்பு களிமண்'],
        cropsEn: ['Tomato', 'Sugarcane', 'Paddy'],
        cropsTa: ['தக்காளி', 'கரும்பு', 'நெல்'],
        soilHealthSummary: {
          nitrogenStatus: 'Low',
          phosphorusStatus: 'High',
          potassiumStatus: 'Medium',
          phValue: 7.0,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.56,
          ecValue: 0.32
        }
      }
    ]
  },
  {
    id: 'nilgiris',
    code: 'TN-NIL',
    nameEn: 'The Nilgiris',
    nameTa: 'நீலகிரி',
    agroZoneEn: 'High Altitude & Hilly Zone',
    agroZoneTa: 'உயர் மலை மண்டலம்',
    headquartersEn: 'Udhagamandalam (Ooty)',
    headquartersTa: 'உதகமண்டலம் (ஊட்டி)',
    totalBlocks: 4,
    totalVillages: 88,
    majorSoilTypesEn: ['Laterite / Mixed Hill Soil', 'Peaty Organic Soils', 'Red Forest Loam'],
    majorSoilTypesTa: ['செம்பொறை / கலப்பு மலைமண்', 'கரிம மட்கு மண்', 'செந்நிற வனமண்'],
    majorCropsEn: ['Tea', 'Potato', 'Carrot', 'Cabbage', 'Garlic', 'Coffee'],
    majorCropsTa: ['தேயிலை', 'உருளைக்கிழங்கு', 'கேரட்', 'முட்டைக்கோஸ்', 'பூண்டு', 'காபி'],
    rainfallMm: 1780,
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
        id: 'ooty-block',
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
        id: 'coonoor',
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
      },
      {
        id: 'kotagiri',
        nameEn: 'Kotagiri',
        nameTa: 'கோத்தகிரி',
        villageCount: 23,
        majorSoilTypesEn: ['Laterite', 'Red Mountain Soil'],
        majorSoilTypesTa: ['செம்பொறை', 'சிவப்பு மலைமண்'],
        cropsEn: ['Tea', 'Hill vegetables', 'Spices'],
        cropsTa: ['தேயிலை', 'மலைக்காய்கறிகள்', 'மசாலா'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 5.6,
          phCategory: 'Acidic',
          organicCarbonPercent: 1.05,
          ecValue: 0.19
        }
      },
      {
        id: 'gudalur',
        nameEn: 'Gudalur',
        nameTa: 'கூடலூர்',
        villageCount: 19,
        majorSoilTypesEn: ['Humus-rich Clay', 'Alluvial valley wash'],
        majorSoilTypesTa: ['மட்கு களிமண்', 'பள்ளத்தாக்கு வண்டல்'],
        cropsEn: ['Paddy', 'Ginger', 'Pepper', 'Cardamom'],
        cropsTa: ['நெல்', 'இஞ்சி', 'மிளகு', 'ஏலக்காய்'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 5.9,
          phCategory: 'Acidic',
          organicCarbonPercent: 0.98,
          ecValue: 0.24
        }
      }
    ]
  },
  {
    id: 'villupuram',
    code: 'TN-VPM',
    nameEn: 'Villupuram',
    nameTa: 'விழுப்புரம்',
    agroZoneEn: 'North Eastern Zone',
    agroZoneTa: 'வடகிழக்கு மண்டலம்',
    headquartersEn: 'Villupuram',
    headquartersTa: 'விழுப்புரம்',
    totalBlocks: 13,
    totalVillages: 693,
    majorSoilTypesEn: ['Red Sandy Loam', 'Grey Soil', 'Black Clay Loam'],
    majorSoilTypesTa: ['மணல் செம்மண்', 'சாம்பல் மண்', 'கரிசல் களிமண்'],
    majorCropsEn: ['Sugarcane', 'Groundnut', 'Paddy', 'Casuarina', 'Tapioca'],
    majorCropsTa: ['கரும்பு', 'நிலக்கடலை', 'நெல்', 'சவுக்கு', 'மரவள்ளிக்கிழங்கு'],
    rainfallMm: 1046,
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
        id: 'villupuram-block',
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
        id: 'vikravandi',
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
      },
      {
        id: 'kandamangalam',
        nameEn: 'Kandamangalam',
        nameTa: 'கண்டமங்கலம்',
        villageCount: 52,
        majorSoilTypesEn: ['Alluvial Clay Loam', 'Grey Soil'],
        majorSoilTypesTa: ['வண்டல் களிமண்', 'சாம்பல் மண்'],
        cropsEn: ['Paddy', 'Banana', 'Pulses'],
        cropsTa: ['நெல்', 'வாழை', 'பயறு'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'Medium',
          potassiumStatus: 'Medium',
          phValue: 7.3,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.58,
          ecValue: 0.35
        }
      }
    ]
  },
  {
    id: 'tiruchirappalli',
    code: 'TN-TRZ',
    nameEn: 'Tiruchirappalli',
    nameTa: 'திருச்சிராப்பள்ளி',
    agroZoneEn: 'Cauvery Delta & Central Zone',
    agroZoneTa: 'காவிரி டெல்டா மற்றும் மத்திய மண்டலம்',
    headquartersEn: 'Tiruchirappalli',
    headquartersTa: 'திருச்சிராப்பள்ளி',
    totalBlocks: 14,
    totalVillages: 507,
    majorSoilTypesEn: ['Alluvial Loam', 'Red Sandy Soil', 'Black Clay'],
    majorSoilTypesTa: ['வண்டல் மண்', 'செம்மண்', 'கரிசல் மண்'],
    majorCropsEn: ['Paddy', 'Banana (Cavendish & Poovan)', 'Sugarcane', 'Cotton', 'Pulses'],
    majorCropsTa: ['நெல்', 'வாழை (பூவன், ரோபஸ்டா)', 'கரும்பு', 'பருத்தி', 'பயறு'],
    rainfallMm: 818,
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
        id: 'lalgudi',
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
        id: 'manachanallur',
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
      },
      {
        id: 'thottiyam',
        nameEn: 'Thottiyam',
        nameTa: 'தொட்டியம்',
        villageCount: 32,
        majorSoilTypesEn: ['Red Sandy Loam', 'River Alluvial'],
        majorSoilTypesTa: ['மணல் செம்மண்', 'ஆற்று வண்டல்'],
        cropsEn: ['Banana', 'Betel Vine', 'Tapioca'],
        cropsTa: ['வாழை', 'வெற்றிலை', 'மரவள்ளிக்கிழங்கு'],
        soilHealthSummary: {
          nitrogenStatus: 'Medium',
          phosphorusStatus: 'High',
          potassiumStatus: 'High',
          phValue: 7.4,
          phCategory: 'Neutral',
          organicCarbonPercent: 0.60,
          ecValue: 0.40
        }
      }
    ]
  },
  {
    id: 'salem',
    code: 'TN-SLM',
    nameEn: 'Salem',
    nameTa: 'சேலம்',
    agroZoneEn: 'North Western Zone',
    agroZoneTa: 'வடமேற்கு மண்டலம்',
    headquartersEn: 'Salem',
    headquartersTa: 'சேலம்',
    totalBlocks: 20,
    totalVillages: 648,
    majorSoilTypesEn: ['Red Insitu Soil', 'Brown Sandy Loam', 'Black Soil'],
    majorSoilTypesTa: ['சிவப்பு உள்ளூர் மண்', 'பழுப்பு மணல் சரளை', 'கரிசல் மண்'],
    majorCropsEn: ['Mango', 'Tapioca (Sago)', 'Turmeric', 'Paddy', 'Groundnut'],
    majorCropsTa: ['மாம்பழம்', 'மரவள்ளிக்கிழங்கு (ஜவ்வரிசி)', 'மஞ்சள்', 'நெல்', 'நிலக்கடலை'],
    rainfallMm: 864,
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
        id: 'attur',
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
        id: 'yercaud',
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
    id: 'kanyakumari',
    code: 'TN-KKI',
    nameEn: 'Kanniyakumari',
    nameTa: 'கன்னியாகுமரி',
    agroZoneEn: 'High Rainfall Zone',
    agroZoneTa: 'அதிக மழைப்பொழிவு மண்டலம்',
    headquartersEn: 'Nagercoil',
    headquartersTa: 'நாகர்கோவில்',
    totalBlocks: 9,
    totalVillages: 154,
    majorSoilTypesEn: ['Laterite Soil', 'Red Loam', 'Coastal Marine Sands'],
    majorSoilTypesTa: ['செம்பொறை மண்', 'செம்மண்', 'கடற்கரை மணல்'],
    majorCropsEn: ['Rubber', 'Banana (Matti & Red Banana)', 'Coconut', 'Paddy', 'Clove'],
    majorCropsTa: ['ரப்பர்', 'வாழை (மட்டி, செவ்வாழை)', 'தென்னை', 'நெல்', 'கிராம்பு'],
    rainfallMm: 1465,
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
        id: 'thovalai',
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
        id: 'thiruvattar',
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
  }
];

export const UI_TRANSLATIONS = {
  en: {
    siteTitle: 'Mannvalam',
    siteSubtitle: 'Tamil Nadu Soil Information Platform',
    home: 'Home',
    districts: 'Districts',
    soilInfo: 'Soil Guide',
    about: 'About',
    switchLanguage: 'தமிழ்',
    heroTitle: 'Understand Your Soil. Explore Tamil Nadu.',
    heroSubtitle: 'Explore soil characteristics, nutrient information, agricultural regions, and district-level soil data across Tamil Nadu.',
    exploreDistricts: 'Explore Districts',
    exploreSoilInfo: 'Explore Soil Guide',
    stateOverviewTitle: 'Tamil Nadu Soil Distribution & Orders',
    stateOverviewDesc: 'Explore how different soil categories span the geographical landscape of Tamil Nadu, based on state agro-pedological survey records.',
    distributionChartTitle: 'Statewide Soil Distribution Breakdown',
    compositionTitle: 'General Soil Composition',
    compositionDesc: 'Soil is a vital living ecosystem comprising balanced proportions of solid minerals, water, pore air, and nourishing organic humus.',
    exploreByDistrictTitle: 'Explore Soil Data by District',
    exploreByDistrictDesc: 'Search or select any Tamil Nadu district below to explore localized soil types, agro-climatic zones, and block-level health profiles.',
    searchPlaceholder: 'Search district by name (e.g. Thanjavur, Coimbatore)...',
    blocksCount: 'Blocks',
    villagesCount: 'Villages',
    viewDistrictDetails: 'View District Profile',
    samplesCount: 'Soil Samples Analyzed',
    sampleDataNotice: 'Sample Prototype Data: Demonstrates platform functionality. For operational farm decisions, obtain an updated physical soil laboratory test.',
    soilTypes: 'Major Soil Types',
    crops: 'Cultivated Crops',
    agroZone: 'Agro-Climatic Zone',
    rainfall: 'Annual Rainfall',
    headquarters: 'Headquarters',
    districtOverview: 'District Overview',
    soilDistributionInDistrict: 'District Soil Composition',
    nutrientStatusTitle: 'Aggregate Soil Nutrient & Chemical Status',
    aggregateNotice: 'District-level statistical distribution based on laboratory records. This is NOT an individual farmer report.',
    primaryNutrients: 'Primary Nutrients (Macronutrients)',
    soilProperties: 'Key Soil Properties',
    secondaryMicro: 'Secondary & Micronutrients',
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    acidic: 'Acidic',
    neutral: 'Neutral',
    alkaline: 'Alkaline',
    deficient: 'Deficient',
    sufficient: 'Sufficient',
    blocksInDistrict: 'Administrative Blocks in',
    blockExplorerTitle: 'Block Soil Profile',
    selectBlockPrompt: 'Select a block below to view its specific soil traits and sample health indicators.',
    whatItMeasures: 'What it measures',
    whyItMatters: 'Why it matters',
    referenceBenchmarks: 'Diagnostic Benchmarks & Field Notes',
    status: 'Status',
    range: 'Range',
    fieldAction: 'Recommended Field Action',
    disclaimerTitle: 'Official Soil Testing Notice & Disclaimer',
    disclaimerText: 'Soil health information is based on previously conducted soil laboratory tests. Soil conditions may change over time. Farmers should obtain a fresh soil test to understand the current condition of their land.',
    independentNotice: 'This is an independent redesign prototype and is not an official Government of Tamil Nadu application or service.',
    learnMore: 'Learn More',
    backToDistricts: 'Back to District Directory',
    allCategories: 'All Categories',
    primaryNutrientsTab: 'Primary (N-P-K)',
    propertiesTab: 'Soil Properties (pH, EC, OC)',
    micronutrientsTab: 'Micronutrients (Zn, Fe, B)',
    apiDocs: 'Developer APIs'
  },
  ta: {
    siteTitle: 'மண்வளம்',
    siteSubtitle: 'தமிழ்நாடு மண் தகவல் தளம்',
    home: 'முகப்பு',
    districts: 'மாவட்டங்கள்',
    soilInfo: 'மண் வழிகாட்டி',
    about: 'பற்றி',
    switchLanguage: 'English',
    heroTitle: 'உங்கள் மண்ணை அறிவோம். தமிழ்நாட்டை வளம் செய்வோம்.',
    heroSubtitle: 'தமிழ்நாட்டின் மண் பண்புகள், சத்து விவரங்கள், வேளாண் மண்டலங்கள் மற்றும் மாவட்ட அளவிலான மண் தகவல்களை எளிதாக ஆராயுங்கள்.',
    exploreDistricts: 'மாவட்டங்களை ஆராய்க',
    exploreSoilInfo: 'மண் தகவல்களைப் பார்க்க',
    stateOverviewTitle: 'தமிழ்நாடு மண் பரவல் மற்றும் வகைகள்',
    stateOverviewDesc: 'தமிழ்நாட்டின் நிலப்பரப்பில் காணப்படும் பல்வேறு வகையான மண்களின் பரவல் மற்றும் வேளாண் முக்கியத்துவத்தை அறியுங்கள்.',
    distributionChartTitle: 'மாநில மண் பரவல் விழுக்காடு',
    compositionTitle: 'மண்ணின் பொதுவான உட்கூறுகள்',
    compositionDesc: 'மண் என்பது கனிமப் பொருட்கள், நீர், காற்று மற்றும் மட்கிய கரிமச்சத்து ஆகியவை சரிவிகிதத்தில் கலந்த ஒரு உயிருள்ள அமைப்பாகும்.',
    exploreByDistrictTitle: 'மாவட்ட வாரியாக மண் தகவல்களைத் தேடுக',
    exploreByDistrictDesc: 'உங்கள் மாவட்டத்தைத் தேர்ந்தெடுத்து அங்குள்ள மண் வகைகள், வேளாண் மண்டலம் மற்றும் வட்டார அளவிலான மண் வளத்தை அறிந்திடுங்கள்.',
    searchPlaceholder: 'மாவட்டத்தின் பெயரைத் தேடுக (எ.கா. தஞ்சாவூர், கோயம்புத்தூர்)...',
    blocksCount: 'வட்டாரங்கள்',
    villagesCount: 'வருவாய் கிராமங்கள்',
    viewDistrictDetails: 'மாவட்ட விவரங்களைக் காண்க',
    samplesCount: 'பகுப்பாய்வு செய்யப்பட்ட மண் மாதிரிகள்',
    sampleDataNotice: 'முன்மாதிரி மாதிரி தரவு: தளத்தின் செயல்பாட்டை விளக்குவதற்காக மட்டுமே. நிலத்திற்கான முடிவுகளுக்கு நேரடி மண் பரிசோதனை மேற்கொள்க.',
    soilTypes: 'முக்கிய மண் வகைகள்',
    crops: 'விளையும் முக்கிய பயிர்கள்',
    agroZone: 'வேளாண் காலநிலை மண்டலம்',
    rainfall: 'சராசரி ஆண்டு மழைப்பொழிவு',
    headquarters: 'மாவட்டத் தலைநகரம்',
    districtOverview: 'மாவட்ட வேளாண் சுருக்கம்',
    soilDistributionInDistrict: 'மாவட்ட மண் பரப்பளவு விகிதம்',
    nutrientStatusTitle: 'ஒட்டுமொத்த மண் ஊட்டச்சத்து & வேதியியல் நிலை',
    aggregateNotice: 'ஆய்வகப் பதிவுகளின் அடிப்படையிலான மாவட்ட அளவிலான புள்ளிவிவரம். இது தனிப்பட்ட விவசாயியின் மண் வள அட்டை அல்ல.',
    primaryNutrients: 'முதன்மை ஊட்டச்சத்துக்கள் (தழை, மணி, சாம்பல்)',
    soilProperties: 'மண்ணின் வேதியியல் பண்புகள்',
    secondaryMicro: 'நுண்ணூட்டச் சத்துக்கள் (துத்தநாகம், இரும்பு, போரான்)',
    low: 'குறைவு',
    medium: 'நடுத்தரம்',
    high: 'அதிகம்',
    acidic: 'அமிலம்',
    neutral: 'நடுநிலை',
    alkaline: 'காரம்',
    deficient: 'பற்றாக்குறை',
    sufficient: 'போதுமானது',
    blocksInDistrict: 'வட்டாரங்கள் - ',
    blockExplorerTitle: 'வட்டார மண் விவரக் குறிப்பு',
    selectBlockPrompt: 'குறிப்பிட்ட வட்டாரத்தைத் தேர்ந்தெடுத்து அதன் மண் சத்து நிலவரங்களைப் பார்வையிடுங்கள்.',
    whatItMeasures: 'அளவிடும் பண்பு',
    whyItMatters: 'இதன் முக்கியத்துவம்',
    referenceBenchmarks: 'வகைப்பாடு மற்றும் களப் பரிந்துரைகள்',
    status: 'நிலை',
    range: 'அளவு வரம்பு',
    fieldAction: 'பரிந்துரைக்கப்படும் கள நடவடிக்கை',
    disclaimerTitle: 'மண் பரிசோதனை அறிவிப்பு மற்றும் பொறுப்புத் துறப்பு',
    disclaimerText: 'மண் வளத் தகவல்கள் முந்தைய மண் ஆய்வகப் பரிசோதனைகளின் அடிப்படையில் அமைந்தவை. காலப்போக்கில் மண் நிலவரங்கள் மாறக்கூடும். விவசாயிகள் தங்களது நிலத்தின் தற்போதைய நிலையை அறிய புதிய மண் பரிசோதனை செய்துகொள்ளுமாறு அறிவுறுத்தப்படுகிறார்கள்.',
    independentNotice: 'இது ஒரு நவீன முன்மாதிரி மறுவடிவமைப்பே தவிர, தமிழ்நாடு அரசின் உத்தியோகபூர்வ சேவை அல்ல.',
    learnMore: 'மேலும் அறிக',
    backToDistricts: 'மாவட்டப் பட்டியலுக்குத் திரும்ப',
    allCategories: 'அனைத்து சத்துக்கள்',
    primaryNutrientsTab: 'முதன்மை ஊட்டச்சத்துக்கள்',
    propertiesTab: 'மண் பண்புகள் (pH, EC, OC)',
    micronutrientsTab: 'நுண்ணூட்டச் சத்துக்கள்',
    apiDocs: 'டெவலப்பர் ஏபிஐ'
  }
};
