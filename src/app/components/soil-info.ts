import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Soil } from '../services/soil';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-soil-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-20">
      <!-- Section Header -->
      <div class="border-b border-stone-200 pb-5 space-y-2">
        <div class="flex items-center gap-2 text-xs text-stone-500">
          <button (click)="soilService.setActiveTab('home')" class="hover:text-stone-900 cursor-pointer">
            {{ soilService.t().home }}
          </button>
          <span>/</span>
          <span class="text-stone-900 font-medium">{{ soilService.t().soilInfo }}</span>
        </div>

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-stone-900">
              {{ soilService.t().soilInfo }}
            </h1>
            <p class="text-xs sm:text-sm text-stone-500 mt-1 max-w-2xl leading-relaxed">
              {{ soilService.language() === 'ta'
                ? 'மண்ணின் முதன்மை ஊட்டச்சத்துக்கள், கார அமிலத் தன்மை மற்றும் நுண்ணூட்டச் சத்துக்களின் அளவீட்டு வழிகாட்டி.'
                : 'Scientific definitions, agricultural significance, critical benchmarks, and remedial field actions explained in simple terms.' }}
            </p>
          </div>

          <!-- Category Filter Tabs (Interactive Filter Controls) -->
          <div class="flex items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200/80 shrink-0">
            <button
              type="button"
              (click)="soilService.setParamCategory('all')"
              class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              [class.bg-white]="soilService.selectedParamCategory() === 'all'"
              [class.text-stone-900]="soilService.selectedParamCategory() === 'all'"
              [class.shadow-xs]="soilService.selectedParamCategory() === 'all'"
              [class.text-stone-600]="soilService.selectedParamCategory() !== 'all'"
            >
              {{ soilService.t().allCategories }}
            </button>

            <button
              type="button"
              (click)="soilService.setParamCategory('primary')"
              class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              [class.bg-white]="soilService.selectedParamCategory() === 'primary'"
              [class.text-stone-900]="soilService.selectedParamCategory() === 'primary'"
              [class.shadow-xs]="soilService.selectedParamCategory() === 'primary'"
              [class.text-stone-600]="soilService.selectedParamCategory() !== 'primary'"
            >
              {{ soilService.t().primaryNutrientsTab }}
            </button>

            <button
              type="button"
              (click)="soilService.setParamCategory('properties')"
              class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              [class.bg-white]="soilService.selectedParamCategory() === 'properties'"
              [class.text-stone-900]="soilService.selectedParamCategory() === 'properties'"
              [class.shadow-xs]="soilService.selectedParamCategory() === 'properties'"
              [class.text-stone-600]="soilService.selectedParamCategory() !== 'properties'"
            >
              {{ soilService.t().propertiesTab }}
            </button>

            <button
              type="button"
              (click)="soilService.setParamCategory('secondary_micro')"
              class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              [class.bg-white]="soilService.selectedParamCategory() === 'secondary_micro'"
              [class.text-stone-900]="soilService.selectedParamCategory() === 'secondary_micro'"
              [class.shadow-xs]="soilService.selectedParamCategory() === 'secondary_micro'"
              [class.text-stone-600]="soilService.selectedParamCategory() !== 'secondary_micro'"
            >
              {{ soilService.t().micronutrientsTab }}
            </button>
          </div>
        </div>
      </div>

      <!-- Parameters Grid / Accordions -->
      <div class="space-y-6">
        @for (param of soilService.filteredParameters(); track param.id) {
          <div class="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-5">
            <!-- Header row of the parameter -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold flex items-center justify-center font-mono text-sm">
                  {{ param.symbol }}
                </span>
                <div>
                  <h2 class="text-xl font-bold text-stone-900">
                    {{ soilService.language() === 'ta' ? param.nameTa : param.nameEn }}
                  </h2>
                  <div class="text-xs text-stone-500 font-medium">
                    {{ soilService.language() === 'ta' ? 'அளவீட்டு அலகு:' : 'Standard Unit:' }}
                    <span class="font-mono text-stone-700 font-semibold">{{ param.unit }}</span>
                  </div>
                </div>
              </div>

              <!-- Category Badge -->
              <span class="text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 font-medium self-start sm:self-auto">
                @switch (param.category) {
                  @case ('primary') { {{ soilService.t().primaryNutrients }} }
                  @case ('properties') { {{ soilService.t().soilProperties }} }
                  @case ('secondary_micro') { {{ soilService.t().secondaryMicro }} }
                }
              </span>
            </div>

            <!-- Two-Column Explanation: What it measures & Why it matters -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="p-4 rounded-xl bg-stone-50/70 border border-stone-200/70 space-y-1.5">
                <div class="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                  <mat-icon class="!text-[16px] text-stone-400">straighten</mat-icon>
                  <span>{{ soilService.t().whatItMeasures }}</span>
                </div>
                <p class="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {{ soilService.language() === 'ta' ? param.whatItMeasuresTa : param.whatItMeasuresEn }}
                </p>
              </div>

              <div class="p-4 rounded-xl bg-emerald-50/40 border border-emerald-100 space-y-1.5">
                <div class="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                  <mat-icon class="!text-[16px] text-emerald-700">spa</mat-icon>
                  <span>{{ soilService.t().whyItMatters }}</span>
                </div>
                <p class="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {{ soilService.language() === 'ta' ? param.whyItMattersTa : param.whyItMattersEn }}
                </p>
              </div>
            </div>

            <!-- Diagnostic Benchmarks Table -->
            <div class="space-y-2 pt-2">
              <span class="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                {{ soilService.t().referenceBenchmarks }}
              </span>

              <div class="overflow-x-auto rounded-xl border border-stone-200">
                <table class="w-full text-left text-xs">
                  <thead class="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th class="px-4 py-3">{{ soilService.t().status }}</th>
                      <th class="px-4 py-3">{{ soilService.t().range }}</th>
                      <th class="px-4 py-3">{{ soilService.t().fieldAction }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-stone-100">
                    @for (b of (soilService.language() === 'ta' ? param.benchmarkRangesTa : param.benchmarkRangesEn); track b.status) {
                      <tr class="hover:bg-stone-50/50 transition-colors">
                        <td class="px-4 py-3 font-semibold text-stone-900 whitespace-nowrap">
                          {{ b.status }}
                        </td>
                        <td class="px-4 py-3 font-mono font-medium text-stone-700 tabular-nums whitespace-nowrap">
                          {{ b.range }}
                        </td>
                        <td class="px-4 py-3 text-stone-600 leading-normal">
                          {{ b.note }}
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Quick Exploration CTA -->
      <div class="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 class="text-base font-bold text-stone-900">
            {{ soilService.language() === 'ta' ? 'உங்கள் மாவட்டத்தின் நிலவரத்தைக் காண விருப்பமா?' : 'Ready to see these values in action?' }}
          </h3>
          <p class="text-xs text-stone-600 mt-0.5">
            {{ soilService.language() === 'ta'
              ? 'மாவட்டவாரியான ஆய்வக புள்ளிவிவரங்களை மாவட்ட ஆய்வியில் உடனே பாருங்கள்.'
              : 'Browse real aggregates and sample distributions across all 38 districts.' }}
          </p>
        </div>

        <button
          type="button"
          (click)="soilService.setActiveTab('districts')"
          class="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors shrink-0 cursor-pointer"
        >
          <mat-icon class="!text-[16px]">travel_explore</mat-icon>
          <span>{{ soilService.t().exploreDistricts }}</span>
        </button>
      </div>
    </div>
  `
})
export class SoilInfo {
  readonly soilService = inject(Soil);
}
