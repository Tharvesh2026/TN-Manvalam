import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Soil } from '../services/soil';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-district-explorer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-20">
      <!-- Breadcrumb & Header -->
      <div class="space-y-2 border-b border-stone-200 pb-5">
        <div class="flex items-center gap-2 text-xs text-stone-500">
          <button (click)="soilService.setActiveTab('home')" class="hover:text-stone-900 cursor-pointer">
            {{ soilService.t().home }}
          </button>
          <span>/</span>
          <span class="text-stone-900 font-medium">{{ soilService.t().districts }}</span>
          @if (soilService.currentDistrict(); as district) {
            <span>/</span>
            <span class="text-emerald-800 font-semibold">
              {{ soilService.language() === 'ta' ? district.nameTa : district.nameEn }}
            </span>
          }
        </div>

        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-stone-900">
              {{ soilService.t().districts }}
            </h1>
            <p class="text-xs sm:text-sm text-stone-500 mt-0.5">
              {{ soilService.language() === 'ta'
                ? 'தமிழ்நாட்டின் மாவட்ட அளவிலான மண் பண்புகள், வேளாண் காலநிலை மற்றும் வட்டார விவரங்களை ஆராயுங்கள்.'
                : 'Explore district-level pedological characteristics, agro-climatic zones, and administrative blocks.' }}
            </p>
          </div>

          <!-- Quick Return if viewing district -->
          @if (soilService.selectedDistrictId()) {
            <button
              (click)="soilService.selectDistrict(null)"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 bg-white text-xs font-semibold text-stone-700 hover:bg-stone-50 cursor-pointer self-start md:self-auto"
            >
              <mat-icon class="!text-[16px]">arrow_back</mat-icon>
              <span>{{ soilService.t().backToDistricts }}</span>
            </button>
          }
        </div>
      </div>

      <!-- VIEW A: DISTRICT DIRECTORY & SEARCH (When no district is selected) -->
      @if (!soilService.selectedDistrictId()) {
        <div class="space-y-8">
          <!-- Search & Filter Controls -->
          <div class="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <!-- Search Bar -->
              <div class="md:col-span-6 relative">
                <mat-icon class="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 !text-[20px]">search</mat-icon>
                <input
                  type="text"
                  [value]="soilService.searchQuery()"
                  (input)="onSearchInput($event)"
                  [placeholder]="soilService.t().searchPlaceholder"
                  class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                />
                @if (soilService.searchQuery()) {
                  <button
                    (click)="soilService.setSearchQuery('')"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  >
                    <mat-icon class="!text-[18px]">close</mat-icon>
                  </button>
                }
              </div>

              <!-- Agro-Zone Filter -->
              <div class="md:col-span-3">
                <select
                  [value]="soilService.selectedAgroZone()"
                  (change)="onZoneChange($event)"
                  class="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 cursor-pointer"
                >
                  <option value="all">
                    {{ soilService.language() === 'ta' ? 'அனைத்து வேளாண் மண்டலங்கள்' : 'All Agro Zones' }}
                  </option>
                  @for (zone of soilService.agroZones(); track zone) {
                    <option [value]="zone">{{ zone }}</option>
                  }
                </select>
              </div>

              <!-- Soil Order Filter -->
              <div class="md:col-span-3">
                <select
                  [value]="soilService.selectedSoilType()"
                  (change)="onSoilChange($event)"
                  class="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 cursor-pointer"
                >
                  <option value="all">
                    {{ soilService.language() === 'ta' ? 'அனைத்து மண் வகைகள்' : 'All Soil Categories' }}
                  </option>
                  <option value="Red">Red Soil / செம்மண்</option>
                  <option value="Brown">Brown Soil / பழுப்பு மண்</option>
                  <option value="Black">Black Soil / கரிசல் மண்</option>
                  <option value="Alluvial">Alluvial / வண்டல் மண்</option>
                  <option value="Laterite">Laterite / செம்பொறை மண்</option>
                </select>
              </div>
            </div>

            <!-- Active Filter Badges / Summary -->
            <div class="flex items-center justify-between text-xs text-stone-500 pt-1">
              <span>
                {{ soilService.filteredDistricts().length }}
                {{ soilService.language() === 'ta' ? 'மாவட்டங்கள் உள்ளன' : 'districts matching criteria' }}
              </span>
              @if (soilService.searchQuery() || soilService.selectedAgroZone() !== 'all' || soilService.selectedSoilType() !== 'all') {
                <button
                  (click)="soilService.resetFilters()"
                  class="text-emerald-800 hover:text-emerald-900 font-semibold cursor-pointer"
                >
                  {{ soilService.language() === 'ta' ? 'வடிகட்டிகளை மீட்டமை' : 'Reset filters' }}
                </button>
              }
            </div>
          </div>

          <!-- District Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            @for (district of soilService.filteredDistricts(); track district.districtId) {
              <button
                type="button"
                (click)="soilService.selectDistrict(district.districtId)"
                class="w-full text-left group bg-white p-5 rounded-2xl border border-stone-200 hover:border-emerald-700 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                      {{ district.code }}
                    </span>
                    <span class="text-xs font-medium text-stone-500">
                      {{ district.totalBlocks }} {{ soilService.t().blocksCount }} · {{ district.totalVillages }} {{ soilService.t().villagesCount }}
                    </span>
                  </div>

                  <div>
                    <h2 class="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {{ soilService.language() === 'ta' ? district.nameTa : district.nameEn }}
                    </h2>
                    <p class="text-xs text-stone-500 font-medium mt-0.5">
                      {{ soilService.language() === 'ta' ? district.agroZoneTa : district.agroZoneEn }}
                    </p>
                  </div>

                  <!-- Major Soil Types -->
                  <div class="space-y-1">
                    <span class="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                      {{ soilService.t().soilTypes }}
                    </span>
                    <div class="flex flex-wrap gap-1.5">
                      @for (soil of (soilService.language() === 'ta' ? district.majorSoilTypesTa : district.majorSoilTypesEn); track soil) {
                        <span class="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md">
                          {{ soil }}
                        </span>
                      }
                    </div>
                  </div>

                  <!-- Major Crops -->
                  <div class="space-y-1">
                    <span class="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                      {{ soilService.t().crops }}
                    </span>
                    <p class="text-xs text-stone-600 line-clamp-1">
                      {{ (soilService.language() === 'ta' ? district.majorCropsTa : district.majorCropsEn).join(', ') }}
                    </p>
                  </div>
                </div>

                <div class="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800 group-hover:text-emerald-900 w-full">
                  <span>{{ soilService.t().viewDistrictDetails }}</span>
                  <mat-icon class="!text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</mat-icon>
                </div>
              </button>
            }
          </div>
        </div>
      }

      <!-- VIEW B: DISTRICT DETAIL DASHBOARD (When district is selected) -->
      @if (soilService.currentDistrict(); as d) {
        <div class="space-y-10">
          <!-- District Header Card -->
          <div class="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div class="space-y-3 max-w-3xl">
                <div class="flex items-center gap-2 text-xs font-mono font-bold text-stone-500">
                  <span>{{ d.code }}</span>
                  <span>·</span>
                  <span>{{ soilService.language() === 'ta' ? d.headquartersTa : d.headquartersEn }}</span>
                  <span>·</span>
                  <span class="text-emerald-800 font-semibold">{{ soilService.language() === 'ta' ? d.agroZoneTa : d.agroZoneEn }}</span>
                </div>

                <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                  {{ soilService.language() === 'ta' ? d.nameTa : d.nameEn }}
                </h2>

                <p class="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {{ soilService.language() === 'ta' ? d.overviewTa : d.overviewEn }}
                </p>
              </div>

              <!-- District Quick Stats Card -->
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200/80 shrink-0">
                <div class="p-2">
                  <div class="text-xs text-stone-500 font-medium">{{ soilService.t().blocksCount }}</div>
                  <div class="text-xl font-bold text-stone-900 tabular-nums">{{ d.totalBlocks }}</div>
                </div>
                <div class="p-2">
                  <div class="text-xs text-stone-500 font-medium">{{ soilService.t().villagesCount }}</div>
                  <div class="text-xl font-bold text-stone-900 tabular-nums">{{ d.totalVillages }}</div>
                </div>
                <div class="p-2 col-span-2 sm:col-span-1">
                  <div class="text-xs text-stone-500 font-medium">{{ soilService.t().rainfall }}</div>
                  <div class="text-xl font-bold text-stone-900 tabular-nums">{{ d.rainfallMm }} mm</div>
                </div>
              </div>
            </div>

            <!-- District Soil Composition Breakdown -->
            <div class="pt-6 border-t border-stone-200 space-y-3">
              <h3 class="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                {{ soilService.t().soilDistributionInDistrict }}
              </h3>
              <!-- Multi-color bar -->
              <div class="w-full h-4 rounded-lg overflow-hidden flex bg-stone-100 shadow-inner">
                @for (s of d.soilDistribution; track s.soilNameEn) {
                  <div
                    [style.width.%]="s.percentage"
                    [style.backgroundColor]="s.color"
                    class="h-full relative group cursor-pointer"
                    [title]="(soilService.language() === 'ta' ? s.soilNameTa : s.soilNameEn) + ': ' + s.percentage + '%'"
                  ></div>
                }
              </div>
              <div class="flex flex-wrap gap-4 text-xs">
                @for (s of d.soilDistribution; track s.soilNameEn) {
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full" [style.backgroundColor]="s.color"></span>
                    <span class="font-medium text-stone-800">{{ soilService.language() === 'ta' ? s.soilNameTa : s.soilNameEn }}:</span>
                    <span class="font-bold text-stone-900 tabular-nums">{{ s.percentage }}%</span>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Section 8: Soil Health Dashboard (Primary Nutrients, Properties, Micronutrients) -->
          <div class="space-y-6">
            <div class="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 class="text-xl font-bold text-stone-900">
                  {{ soilService.t().nutrientStatusTitle }}
                </h3>
                <p class="text-xs text-stone-500">
                  {{ soilService.t().aggregateNotice }} ({{ d.aggregateNutrientStatus.samplesAnalyzed.toLocaleString() }} {{ soilService.t().samplesCount }})
                </p>
              </div>
              <span class="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-md self-start sm:self-auto">
                {{ soilService.language() === 'ta' ? 'மாவட்ட சராசரி அளவுகள்' : 'Aggregated District Registry' }}
              </span>
            </div>

            <!-- Dashboard Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Primary Nutrients (N, P, K) -->
              <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-5">
                <div class="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <mat-icon class="text-emerald-700 !text-[18px]">grain</mat-icon>
                    <span>{{ soilService.t().primaryNutrients }}</span>
                  </h4>
                </div>

                <!-- Nitrogen -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-stone-800">
                      {{ soilService.language() === 'ta' ? 'தழைச்சத்து (Nitrogen - N)' : 'Nitrogen (N)' }}
                    </span>
                  </div>
                  <div class="grid grid-cols-3 gap-1 text-[11px] text-center">
                    <div class="p-2 rounded bg-amber-50 text-amber-900 border border-amber-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.nitrogen.low }}%</div>
                      <div class="text-[10px] text-amber-700">{{ soilService.t().low }}</div>
                    </div>
                    <div class="p-2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.nitrogen.medium }}%</div>
                      <div class="text-[10px] text-emerald-700">{{ soilService.t().medium }}</div>
                    </div>
                    <div class="p-2 rounded bg-blue-50 text-blue-900 border border-blue-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.nitrogen.high }}%</div>
                      <div class="text-[10px] text-blue-700">{{ soilService.t().high }}</div>
                    </div>
                  </div>
                </div>

                <!-- Phosphorus -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-stone-800">
                      {{ soilService.language() === 'ta' ? 'மணிச்சத்து (Phosphorus - P)' : 'Phosphorus (P)' }}
                    </span>
                  </div>
                  <div class="grid grid-cols-3 gap-1 text-[11px] text-center">
                    <div class="p-2 rounded bg-amber-50 text-amber-900 border border-amber-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.phosphorus.low }}%</div>
                      <div class="text-[10px] text-amber-700">{{ soilService.t().low }}</div>
                    </div>
                    <div class="p-2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.phosphorus.medium }}%</div>
                      <div class="text-[10px] text-emerald-700">{{ soilService.t().medium }}</div>
                    </div>
                    <div class="p-2 rounded bg-blue-50 text-blue-900 border border-blue-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.phosphorus.high }}%</div>
                      <div class="text-[10px] text-blue-700">{{ soilService.t().high }}</div>
                    </div>
                  </div>
                </div>

                <!-- Potassium -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-stone-800">
                      {{ soilService.language() === 'ta' ? 'சாம்பல் சத்து (Potassium - K)' : 'Potassium (K)' }}
                    </span>
                  </div>
                  <div class="grid grid-cols-3 gap-1 text-[11px] text-center">
                    <div class="p-2 rounded bg-amber-50 text-amber-900 border border-amber-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.potassium.low }}%</div>
                      <div class="text-[10px] text-amber-700">{{ soilService.t().low }}</div>
                    </div>
                    <div class="p-2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.potassium.medium }}%</div>
                      <div class="text-[10px] text-emerald-700">{{ soilService.t().medium }}</div>
                    </div>
                    <div class="p-2 rounded bg-blue-50 text-blue-900 border border-blue-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.potassium.high }}%</div>
                      <div class="text-[10px] text-blue-700">{{ soilService.t().high }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Soil Properties (pH, Organic Carbon) -->
              <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-5">
                <div class="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <mat-icon class="text-emerald-700 !text-[18px]">biotech</mat-icon>
                    <span>{{ soilService.t().soilProperties }}</span>
                  </h4>
                </div>

                <!-- pH Distribution -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-stone-800">
                      {{ soilService.language() === 'ta' ? 'கார அமில நிலை (pH Status)' : 'Soil Reaction (pH)' }}
                    </span>
                  </div>
                  <div class="grid grid-cols-3 gap-1 text-[11px] text-center">
                    <div class="p-2 rounded bg-rose-50 text-rose-900 border border-rose-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.phDistribution.acidic }}%</div>
                      <div class="text-[10px] text-rose-700">{{ soilService.t().acidic }}</div>
                    </div>
                    <div class="p-2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.phDistribution.neutral }}%</div>
                      <div class="text-[10px] text-emerald-700">{{ soilService.t().neutral }}</div>
                    </div>
                    <div class="p-2 rounded bg-amber-50 text-amber-900 border border-amber-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.phDistribution.alkaline }}%</div>
                      <div class="text-[10px] text-amber-700">{{ soilService.t().alkaline }}</div>
                    </div>
                  </div>
                </div>

                <!-- Organic Carbon -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-stone-800">
                      {{ soilService.language() === 'ta' ? 'கரிமக் கார்பன் (Organic Carbon)' : 'Organic Carbon (OC)' }}
                    </span>
                  </div>
                  <div class="grid grid-cols-3 gap-1 text-[11px] text-center">
                    <div class="p-2 rounded bg-amber-50 text-amber-900 border border-amber-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.organicCarbon.low }}%</div>
                      <div class="text-[10px] text-amber-700">{{ soilService.t().low }} (< 0.5%)</div>
                    </div>
                    <div class="p-2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.organicCarbon.medium }}%</div>
                      <div class="text-[10px] text-emerald-700">{{ soilService.t().medium }}</div>
                    </div>
                    <div class="p-2 rounded bg-blue-50 text-blue-900 border border-blue-200">
                      <div class="font-bold tabular-nums text-sm">{{ d.aggregateNutrientStatus.organicCarbon.high }}%</div>
                      <div class="text-[10px] text-blue-700">{{ soilService.t().high }} (> 0.75%)</div>
                    </div>
                  </div>
                </div>

                <!-- Electrical Conductivity Note -->
                <div class="p-3 bg-stone-50 rounded-xl border border-stone-200/70 text-xs text-stone-600">
                  <span class="font-semibold text-stone-800">
                    {{ soilService.language() === 'ta' ? 'உவர்தன்மை (EC):' : 'Salinity / EC Index:' }}
                  </span>
                  <span>
                    {{ soilService.language() === 'ta'
                      ? ' 92% மாதிரிகள் இயல்பான வரம்பில் (< 1.0 dS/m) உள்ளன.'
                      : ' Over 90% of tested soils show healthy non-saline status (< 1.0 dS/m).' }}
                  </span>
                </div>
              </div>

              <!-- Micronutrients (Zinc, Iron, Boron) -->
              <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-5">
                <div class="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <mat-icon class="text-emerald-700 !text-[18px]">scatter_plot</mat-icon>
                    <span>{{ soilService.t().secondaryMicro }}</span>
                  </h4>
                </div>

                <!-- Zinc -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-stone-800">
                      {{ soilService.language() === 'ta' ? 'துத்தநாகம் (Zinc - Zn)' : 'Zinc (Zn)' }}
                    </span>
                    <span class="text-[11px] text-stone-500">
                      {{ d.aggregateNutrientStatus.zinc.deficient }}% {{ soilService.t().deficient }}
                    </span>
                  </div>
                  <div class="w-full h-3 rounded-md bg-stone-100 flex overflow-hidden">
                    <div class="h-full bg-rose-400" [style.width.%]="d.aggregateNutrientStatus.zinc.deficient"></div>
                    <div class="h-full bg-emerald-500" [style.width.%]="d.aggregateNutrientStatus.zinc.sufficient"></div>
                  </div>
                  <div class="flex justify-between text-[10px] text-stone-500">
                    <span>{{ d.aggregateNutrientStatus.zinc.deficient }}% {{ soilService.t().deficient }}</span>
                    <span>{{ d.aggregateNutrientStatus.zinc.sufficient }}% {{ soilService.t().sufficient }}</span>
                  </div>
                </div>

                <!-- Iron -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-stone-800">
                      {{ soilService.language() === 'ta' ? 'இரும்புச்சத்து (Iron - Fe)' : 'Iron (Fe)' }}
                    </span>
                    <span class="text-[11px] text-stone-500">
                      {{ d.aggregateNutrientStatus.iron.deficient }}% {{ soilService.t().deficient }}
                    </span>
                  </div>
                  <div class="w-full h-3 rounded-md bg-stone-100 flex overflow-hidden">
                    <div class="h-full bg-rose-400" [style.width.%]="d.aggregateNutrientStatus.iron.deficient"></div>
                    <div class="h-full bg-emerald-500" [style.width.%]="d.aggregateNutrientStatus.iron.sufficient"></div>
                  </div>
                  <div class="flex justify-between text-[10px] text-stone-500">
                    <span>{{ d.aggregateNutrientStatus.iron.deficient }}% {{ soilService.t().deficient }}</span>
                    <span>{{ d.aggregateNutrientStatus.iron.sufficient }}% {{ soilService.t().sufficient }}</span>
                  </div>
                </div>

                <!-- Boron -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-stone-800">
                      {{ soilService.language() === 'ta' ? 'போரான் (Boron - B)' : 'Boron (B)' }}
                    </span>
                    <span class="text-[11px] text-stone-500">
                      {{ d.aggregateNutrientStatus.boron.deficient }}% {{ soilService.t().deficient }}
                    </span>
                  </div>
                  <div class="w-full h-3 rounded-md bg-stone-100 flex overflow-hidden">
                    <div class="h-full bg-rose-400" [style.width.%]="d.aggregateNutrientStatus.boron.deficient"></div>
                    <div class="h-full bg-emerald-500" [style.width.%]="d.aggregateNutrientStatus.boron.sufficient"></div>
                  </div>
                  <div class="flex justify-between text-[10px] text-stone-500">
                    <span>{{ d.aggregateNutrientStatus.boron.deficient }}% {{ soilService.t().deficient }}</span>
                    <span>{{ d.aggregateNutrientStatus.boron.sufficient }}% {{ soilService.t().sufficient }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 7: Administrative Blocks Explorer -->
          <div class="space-y-6 pt-4">
            <div class="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 class="text-xl font-bold text-stone-900">
                  {{ soilService.t().blocksInDistrict }} {{ soilService.language() === 'ta' ? d.nameTa : d.nameEn }}
                </h3>
                <p class="text-xs text-stone-500">
                  {{ soilService.t().selectBlockPrompt }}
                </p>
              </div>
              <span class="text-xs font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded">
                {{ d.blocks.length }} {{ soilService.t().blocksCount }}
              </span>
            </div>

            <!-- Block Pills / Selector Bar -->
            <div class="flex flex-wrap gap-2">
              @for (b of d.blocks; track b.blockId) {
                <button
                  type="button"
                  (click)="soilService.selectBlock(b.blockId)"
                  class="px-4 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer whitespace-nowrap"
                  [class.bg-emerald-800]="soilService.selectedBlockId() === b.blockId"
                  [class.text-white]="soilService.selectedBlockId() === b.blockId"
                  [class.border-emerald-800]="soilService.selectedBlockId() === b.blockId"
                  [class.shadow-xs]="soilService.selectedBlockId() === b.blockId"
                  [class.bg-white]="soilService.selectedBlockId() !== b.blockId"
                  [class.text-stone-700]="soilService.selectedBlockId() !== b.blockId"
                  [class.border-stone-300]="soilService.selectedBlockId() !== b.blockId"
                  [class.hover:border-stone-400]="soilService.selectedBlockId() !== b.blockId"
                >
                  {{ soilService.language() === 'ta' ? b.nameTa : b.nameEn }} ({{ b.villageCount }} {{ soilService.t().villagesCount }})
                </button>
              }
            </div>

            <!-- Active Block Detail View -->
            @if (soilService.currentBlock(); as block) {
              <div class="bg-stone-50 border border-stone-300 rounded-2xl p-6 space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <div class="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                      {{ soilService.t().blockExplorerTitle }}
                    </div>
                    <h4 class="text-2xl font-bold text-stone-900 mt-1">
                      {{ soilService.language() === 'ta' ? block.nameTa : block.nameEn }}
                    </h4>
                    <p class="text-xs text-stone-500 mt-0.5">
                      {{ soilService.language() === 'ta' ? d.nameTa + ' மாவட்டம்' : d.nameEn + ' District' }} ·
                      {{ block.villageCount }} {{ soilService.t().villagesCount }} ·
                      {{ soilService.language() === 'ta' ? d.agroZoneTa : d.agroZoneEn }}
                    </p>
                  </div>

                  <span class="text-xs font-medium text-stone-500 bg-white px-3 py-1.5 rounded-md border border-stone-200 self-start">
                    {{ soilService.language() === 'ta' ? 'மாதிரி வட்டாரக் குறியீடு' : 'Sample Block Metrics' }}
                  </span>
                </div>

                <!-- Block Traits & Agricultural Details -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                    <span class="text-xs font-bold text-stone-700 uppercase tracking-wider">
                      {{ soilService.t().soilTypes }}
                    </span>
                    <div class="flex flex-wrap gap-1.5">
                      @for (st of (soilService.language() === 'ta' ? block.majorSoilTypesTa : block.majorSoilTypesEn); track st) {
                        <span class="text-xs bg-stone-100 text-stone-800 px-2 py-0.5 rounded">
                          {{ st }}
                        </span>
                      }
                    </div>
                  </div>

                  <div class="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                    <span class="text-xs font-bold text-stone-700 uppercase tracking-wider">
                      {{ soilService.t().crops }}
                    </span>
                    <p class="text-xs text-stone-700 font-medium">
                      {{ (soilService.language() === 'ta' ? block.cropsTa : block.cropsEn).join(', ') }}
                    </p>
                  </div>
                </div>

                <!-- Block Health Summary Parameters -->
                <div class="bg-white p-4 rounded-xl border border-stone-200 space-y-3">
                  <div class="text-xs font-bold text-stone-800 uppercase tracking-wider">
                    {{ soilService.language() === 'ta' ? 'வட்டார மாதிரி ஆய்வக முடிவுகள்' : 'Representative Soil Test Indicators' }}
                  </div>

                  <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-center">
                    <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <div class="text-xs text-stone-500 font-medium">Nitrogen (N)</div>
                      <div class="font-bold text-stone-900 text-sm mt-0.5" [class.text-amber-700]="block.soilHealthSummary.nitrogenStatus === 'Low'">
                        {{ block.soilHealthSummary.nitrogenStatus }}
                      </div>
                    </div>
                    <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <div class="text-xs text-stone-500 font-medium">Phosphorus (P)</div>
                      <div class="font-bold text-stone-900 text-sm mt-0.5">
                        {{ block.soilHealthSummary.phosphorusStatus }}
                      </div>
                    </div>
                    <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <div class="text-xs text-stone-500 font-medium">Potassium (K)</div>
                      <div class="font-bold text-stone-900 text-sm mt-0.5">
                        {{ block.soilHealthSummary.potassiumStatus }}
                      </div>
                    </div>
                    <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <div class="text-xs text-stone-500 font-medium">pH Level</div>
                      <div class="font-bold text-stone-900 text-sm mt-0.5 tabular-nums">
                        {{ block.soilHealthSummary.phValue }} ({{ block.soilHealthSummary.phCategory }})
                      </div>
                    </div>
                    <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <div class="text-xs text-stone-500 font-medium">Organic Carbon</div>
                      <div class="font-bold text-stone-900 text-sm mt-0.5 tabular-nums">
                        {{ block.soilHealthSummary.organicCarbonPercent }}%
                      </div>
                    </div>
                    <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <div class="text-xs text-stone-500 font-medium">EC (Salinity)</div>
                      <div class="font-bold text-stone-900 text-sm mt-0.5 tabular-nums">
                        {{ block.soilHealthSummary.ecValue }} dS/m
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } @else {
              <!-- Prompt when no block clicked yet -->
              <div class="p-6 rounded-xl border border-dashed border-stone-300 text-center text-xs text-stone-500 bg-white">
                <mat-icon class="text-stone-400 mb-1">touch_app</mat-icon>
                <p>{{ soilService.t().selectBlockPrompt }}</p>
              </div>
            }
          </div>

          <!-- Bottom Return Action -->
          <div class="pt-6 border-t border-stone-200 flex justify-between items-center">
            <button
              (click)="soilService.selectDistrict(null)"
              class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-stone-300 bg-white hover:bg-stone-50 cursor-pointer"
            >
              <mat-icon class="!text-[16px]">arrow_back</mat-icon>
              <span>{{ soilService.t().backToDistricts }}</span>
            </button>

            <button
              (click)="soilService.setActiveTab('soil-info')"
              class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 cursor-pointer"
            >
              <span>{{ soilService.t().soilInfo }}</span>
              <mat-icon class="!text-[16px]">arrow_forward</mat-icon>
            </button>
          </div>
        </div>
      }
    </div>
  `
})
export class DistrictExplorer {
  readonly soilService = inject(Soil);

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.soilService.setSearchQuery(input.value);
  }

  onZoneChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.soilService.setAgroZone(select.value);
  }

  onSoilChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.soilService.setSoilType(select.value);
  }
}
