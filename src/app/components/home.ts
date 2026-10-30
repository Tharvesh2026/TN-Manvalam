import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Soil } from '../services/soil';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="space-y-16 pb-20">
      <!-- 1. Hero Section -->
      <section class="relative pt-12 pb-16 lg:pt-16 lg:pb-20 bg-linear-to-b from-[#f4f1ea]/80 to-transparent border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div class="lg:col-span-7 space-y-6">
              <!-- Unboxed metadata kicker -->
              <div class="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-widest">
                <span>{{ soilService.language() === 'ta' ? 'தமிழ்நாடு வேளாண்மை மற்றும் உழவர் நலத்துறை' : 'Department of Agriculture & Farmers Welfare' }}</span>
                <span aria-hidden="true">·</span>
                <span>{{ soilService.language() === 'ta' ? 'மண் தகவல் தளம்' : 'Soil Pedology Portal' }}</span>
              </div>

              <!-- Refined Display Headline (text-wrap: balance) -->
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight [text-wrap:balance]">
                {{ soilService.t().heroTitle }}
              </h1>

              <!-- Refined Body Description -->
              <p class="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
                {{ soilService.t().heroSubtitle }}
              </p>

              <!-- Primary / Secondary CTAs -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  (click)="soilService.setActiveTab('districts')"
                  class="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <mat-icon class="!text-[18px] !w-4.5 !h-4.5 leading-none">travel_explore</mat-icon>
                  <span>{{ soilService.t().exploreDistricts }}</span>
                </button>

                <button
                  type="button"
                  (click)="soilService.setActiveTab('soil-info')"
                  class="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer whitespace-nowrap"
                >
                  <mat-icon class="!text-[18px] !w-4.5 !h-4.5 leading-none text-stone-500">science</mat-icon>
                  <span>{{ soilService.t().exploreSoilInfo }}</span>
                </button>
              </div>

              <!-- Key Platform Indicators (Clean unboxed metrics) -->
              <div class="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div class="text-2xl sm:text-3xl font-bold text-stone-900 tabular-nums">38</div>
                  <div class="text-xs text-stone-500 mt-0.5">
                    {{ soilService.language() === 'ta' ? 'மாவட்டங்கள்' : 'Districts Covered' }}
                  </div>
                </div>
                <div>
                  <div class="text-2xl sm:text-3xl font-bold text-stone-900 tabular-nums">388+</div>
                  <div class="text-xs text-stone-500 mt-0.5">
                    {{ soilService.language() === 'ta' ? 'வேளாண் வட்டாரங்கள்' : 'Agri Blocks' }}
                  </div>
                </div>
                <div>
                  <div class="text-2xl sm:text-3xl font-bold text-emerald-800 tabular-nums">1.2M+</div>
                  <div class="text-xs text-stone-500 mt-0.5">
                    {{ soilService.language() === 'ta' ? 'ஆய்வக மாதிரிகள்' : 'Samples Cataloged' }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Official Map Image Showcase -->
            <div class="lg:col-span-5">
              <div class="bg-white p-3 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden group">
                <div class="relative bg-stone-50 rounded-xl overflow-hidden aspect-4/3 flex items-center justify-center">
                  <!-- Official Map Image -->
                  <img
                    src="https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/tnmap.jpg"
                    alt="Tamil Nadu Soil Map & Agro-Pedological Distribution"
                    class="w-full h-full object-contain p-2 hover:scale-[1.02] transition-transform duration-300"
                    referrerpolicy="no-referrer"
                    (error)="handleMapError($event)"
                  />
                </div>
                <div class="p-3 bg-stone-50/70 rounded-lg mt-3 flex items-center justify-between text-xs text-stone-600">
                  <span class="font-medium">
                    {{ soilService.language() === 'ta' ? 'அதிகாரப்பூர்வ தமிழ்நாடு மண் வரைபடம்' : 'Tamil Nadu Soil Order & Distribution Map' }}
                  </span>
                  <span class="text-stone-400">TNAU / Agri Dept</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Tamil Nadu Soil Distribution Overview -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
            <div class="space-y-1">
              <div class="text-xs font-semibold text-emerald-800 uppercase tracking-widest">
                {{ soilService.language() === 'ta' ? 'மாநில மண் பரவல்' : 'Pedological Overview' }}
              </div>
              <h2 class="text-2xl sm:text-3xl font-bold text-stone-900">
                {{ soilService.t().stateOverviewTitle }}
              </h2>
            </div>
            <p class="text-sm text-stone-600 max-w-xl">
              {{ soilService.t().stateOverviewDesc }}
            </p>
          </div>

          <!-- Distribution Visual Breakdown Bar -->
          <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <h3 class="text-sm font-semibold uppercase tracking-wider text-stone-700">
                {{ soilService.t().distributionChartTitle }}
              </h3>
              <span class="text-xs text-stone-500">
                {{ soilService.language() === 'ta' ? 'மொத்த நிலப்பரப்பு: ~130,060 ச.கி.மீ' : 'Total Geographical Area: ~130,060 sq. km' }}
              </span>
            </div>

            <!-- Proportional Stacked Bar with tooltips -->
            <div class="w-full h-7 rounded-lg overflow-hidden flex bg-stone-100 shadow-inner p-0.5">
              @for (item of soilService.soilDistributions(); track item.id) {
                <div
                  [style.width.%]="item.percentage"
                  [style.backgroundColor]="item.color"
                  class="h-full relative group transition-all duration-300 hover:opacity-90 first:rounded-l-md last:rounded-r-md cursor-pointer"
                  [title]="(soilService.language() === 'ta' ? item.nameTa : item.nameEn) + ': ' + item.percentage + '%'"
                ></div>
              }
            </div>

            <!-- Soil Categories Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
              @for (item of soilService.soilDistributions(); track item.id) {
                <div class="p-3 rounded-xl border border-stone-100 bg-stone-50/60 hover:bg-white hover:border-stone-300 transition-colors">
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="w-3 h-3 rounded-sm shrink-0" [style.backgroundColor]="item.color"></span>
                    <span class="text-xs font-semibold text-stone-800 truncate">
                      {{ soilService.language() === 'ta' ? item.nameTa : item.nameEn }}
                    </span>
                  </div>
                  <div class="text-xl font-bold text-stone-900 tabular-nums">
                    {{ item.percentage }}%
                  </div>
                  <div class="text-[11px] text-stone-500 mt-1 line-clamp-2">
                    {{ soilService.language() === 'ta' ? item.descriptionTa : item.descriptionEn }}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Soil Composition Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-5 space-y-4">
              <div class="text-xs font-semibold text-emerald-800 uppercase tracking-widest">
                {{ soilService.language() === 'ta' ? 'அடிப்படை இயற்பியல் விகிதம்' : 'Soil Physics & Biology' }}
              </div>
              <h2 class="text-2xl font-bold text-stone-900">
                {{ soilService.t().compositionTitle }}
              </h2>
              <p class="text-sm text-stone-600 leading-relaxed">
                {{ soilService.t().compositionDesc }}
              </p>

              <!-- Clean Callout / Notice -->
              <div class="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1">
                <span class="font-semibold text-stone-900">
                  {{ soilService.language() === 'ta' ? 'கரிமச்சத்தின் மகத்துவம்:' : 'The Organic 5% Principle:' }}
                </span>
                <p>
                  {{ soilService.language() === 'ta'
                    ? 'வெறும் 5% இருக்கும் மட்கிய கரிமப் பொருட்களே மண்ணின் நீர் பிடிப்புத் திறனையும், நுண்ணுயிர் பெருக்கத்தையும் தீர்மானிக்கிறது.'
                    : 'While organic matter accounts for only 5% of ideal soil volume, it commands over 80% of microbial life, water retention, and nutrient buffering capacity.' }}
                </p>
              </div>
            </div>

            <!-- Visual Composition Representation -->
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              @for (comp of soilService.soilCompositions(); track comp.id) {
                <div class="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white transition-all space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="w-3.5 h-3.5 rounded-full" [style.backgroundColor]="comp.color"></span>
                      <h3 class="text-sm font-bold text-stone-900">
                        {{ soilService.language() === 'ta' ? comp.nameTa : comp.nameEn }}
                      </h3>
                    </div>
                    <span class="text-base font-extrabold tabular-nums" [style.color]="comp.color">
                      {{ comp.percentage }}%
                    </span>
                  </div>

                  <div class="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      class="h-full rounded-full transition-all duration-500"
                      [style.width.%]="comp.percentage"
                      [style.backgroundColor]="comp.color"
                    ></div>
                  </div>

                  <p class="text-xs text-stone-500 leading-normal">
                    {{ soilService.language() === 'ta' ? comp.roleTa : comp.roleEn }}
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Quick District Directory & Search Teaser -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <div class="text-xs font-semibold text-emerald-800 uppercase tracking-widest">
                {{ soilService.language() === 'ta' ? 'மாவட்ட விவரக்குறிப்பு' : 'District Soil Explorer' }}
              </div>
              <h2 class="text-2xl font-bold text-stone-900">
                {{ soilService.t().exploreByDistrictTitle }}
              </h2>
            </div>

            <button
              type="button"
              (click)="soilService.setActiveTab('districts')"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-900 cursor-pointer"
            >
              <span>{{ soilService.language() === 'ta' ? 'அனைத்து மாவட்டங்களையும் காண்க' : 'View all 38 districts' }}</span>
              <mat-icon class="!text-[16px]">arrow_forward</mat-icon>
            </button>
          </div>

          <!-- Featured Districts Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            @for (district of soilService.allDistricts().slice(0, 8); track district.districtId) {
              <button
                type="button"
                (click)="soilService.selectDistrict(district.districtId)"
                class="w-full text-left group bg-white p-5 rounded-xl border border-stone-200 hover:border-emerald-700/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono text-stone-400 font-semibold">{{ district.code }}</span>
                    <span class="text-xs text-stone-500 font-medium">
                      {{ district.totalBlocks }} {{ soilService.t().blocksCount }}
                    </span>
                  </div>

                  <div>
                    <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {{ soilService.language() === 'ta' ? district.nameTa : district.nameEn }}
                    </h3>
                    <p class="text-xs text-stone-500 mt-0.5">
                      {{ soilService.language() === 'ta' ? district.agroZoneTa : district.agroZoneEn }}
                    </p>
                  </div>

                  <!-- Major soil badges -->
                  <div class="space-y-1">
                    <span class="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                      {{ soilService.t().soilTypes }}
                    </span>
                    <div class="text-xs text-stone-700 font-medium truncate">
                      {{ (soilService.language() === 'ta' ? district.majorSoilTypesTa : district.majorSoilTypesEn).join(' · ') }}
                    </div>
                  </div>
                </div>

                <div class="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800 group-hover:text-emerald-900 w-full">
                  <span>{{ soilService.t().viewDistrictDetails }}</span>
                  <mat-icon class="!text-[16px] group-hover:translate-x-1 transition-transform">chevron_right</mat-icon>
                </div>
              </button>
            }
          </div>
        </div>
      </section>

      <!-- 5. Clear Official Disclaimer Banner -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4 text-xs sm:text-sm text-stone-700">
          <mat-icon class="text-amber-700 shrink-0 mt-0.5">info</mat-icon>
          <div class="space-y-1">
            <div class="font-bold text-stone-900">
              {{ soilService.t().disclaimerTitle }}
            </div>
            <p class="leading-relaxed text-stone-600">
              {{ soilService.t().disclaimerText }}
            </p>
            <p class="text-stone-500 italic text-xs pt-1">
              {{ soilService.t().independentNotice }}
            </p>
          </div>
        </div>
      </section>
    </div>
  `
})
export class Home {
  readonly soilService = inject(Soil);

  handleMapError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.src = 'https://picsum.photos/seed/tamilnadu-soil/800/600';
    }
  }
}
