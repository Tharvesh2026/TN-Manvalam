import { Injectable, signal, computed } from '@angular/core';
import {
  Language,
  SoilDistributionItem,
  SoilCompositionItem,
  SoilParameter
} from '../models/soil-data.model';
import {
  TN_SOIL_DISTRIBUTION,
  SOIL_COMPOSITION,
  SOIL_PARAMETERS,
  UI_TRANSLATIONS
} from '../data/soil-mock-data';
import { TN_ALL_38_DISTRICTS } from '../data/all-districts-master';
import { DistrictMasterRecord } from '../models/api-contracts.model';

@Injectable({
  providedIn: 'root'
})
export class Soil {
  // Current language
  readonly language = signal<Language>('en');

  // Active view / page tab
  readonly activeTab = signal<'home' | 'districts' | 'soil-info' | 'about' | 'api-docs'>('home');

  // District explorer filters and selection
  readonly searchQuery = signal<string>('');
  readonly selectedAgroZone = signal<string>('all');
  readonly selectedSoilType = signal<string>('all');
  readonly selectedDistrictId = signal<number | string | null>(null);
  readonly selectedBlockId = signal<string | null>(null);

  // Parameter guide category filter
  readonly selectedParamCategory = signal<'all' | 'primary' | 'properties' | 'secondary_micro'>('all');

  // Translations
  readonly t = computed(() => UI_TRANSLATIONS[this.language()]);

  // Static data references
  readonly soilDistributions = signal<SoilDistributionItem[]>(TN_SOIL_DISTRIBUTION);
  readonly soilCompositions = signal<SoilCompositionItem[]>(SOIL_COMPOSITION);
  readonly soilParameters = signal<SoilParameter[]>(SOIL_PARAMETERS);
  readonly allDistricts = signal<DistrictMasterRecord[]>(TN_ALL_38_DISTRICTS);

  // Available unique agro zones for filter
  readonly agroZones = computed(() => {
    const lang = this.language();
    const set = new Set<string>();
    for (const d of this.allDistricts()) {
      set.add(lang === 'en' ? d.agroZoneEn : d.agroZoneTa);
    }
    return Array.from(set);
  });

  // Filtered districts
  readonly filteredDistricts = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const zone = this.selectedAgroZone();
    const soil = this.selectedSoilType();
    const lang = this.language();

    return this.allDistricts().filter((d) => {
      // Search matching
      const matchesName =
        !q ||
        d.nameEn.toLowerCase().includes(q) ||
        d.nameTa.toLowerCase().includes(q) ||
        d.headquartersEn.toLowerCase().includes(q) ||
        d.headquartersTa.toLowerCase().includes(q);

      // Zone matching
      const zoneName = lang === 'en' ? d.agroZoneEn : d.agroZoneTa;
      const matchesZone = zone === 'all' || zoneName === zone;

      // Soil type matching
      const soils = lang === 'en' ? d.majorSoilTypesEn : d.majorSoilTypesTa;
      const matchesSoil = soil === 'all' || soils.some(s => s.toLowerCase().includes(soil.toLowerCase()));

      return matchesName && matchesZone && matchesSoil;
    });
  });

  // Currently selected district object
  readonly currentDistrict = computed(() => {
    const id = this.selectedDistrictId();
    if (!id) return null;
    return this.allDistricts().find((d) => d.districtId === id || d.slug === id || d.districtId.toString() === id.toString()) || null;
  });

  // Currently selected block object
  readonly currentBlock = computed(() => {
    const district = this.currentDistrict();
    const blockId = this.selectedBlockId();
    if (!district || !blockId) return null;
    return district.blocks.find((b) => b.blockId === blockId) || null;
  });

  // Filtered parameters in Soil Info
  readonly filteredParameters = computed(() => {
    const cat = this.selectedParamCategory();
    if (cat === 'all') return this.soilParameters();
    return this.soilParameters().filter(p => p.category === cat);
  });

  // Toggle language
  toggleLanguage() {
    this.language.update((prev) => (prev === 'en' ? 'ta' : 'en'));
  }

  setLanguage(lang: Language) {
    this.language.set(lang);
  }

  setActiveTab(tab: 'home' | 'districts' | 'soil-info' | 'about' | 'api-docs') {
    this.activeTab.set(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectDistrict(districtId: number | string | null) {
    this.selectedDistrictId.set(districtId);
    this.selectedBlockId.set(null); // Reset block on district change
    if (districtId) {
      this.activeTab.set('districts');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  selectBlock(blockId: string | null) {
    this.selectedBlockId.set(blockId);
  }

  setSearchQuery(query: string) {
    this.searchQuery.set(query);
  }

  setAgroZone(zone: string) {
    this.selectedAgroZone.set(zone);
  }

  setSoilType(soil: string) {
    this.selectedSoilType.set(soil);
  }

  setParamCategory(cat: 'all' | 'primary' | 'properties' | 'secondary_micro') {
    this.selectedParamCategory.set(cat);
  }

  resetFilters() {
    this.searchQuery.set('');
    this.selectedAgroZone.set('all');
    this.selectedSoilType.set('all');
  }
}
