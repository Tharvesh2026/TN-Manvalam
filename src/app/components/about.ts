import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Soil } from '../services/soil';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-20">
      <!-- Header -->
      <div class="border-b border-stone-200 pb-5 space-y-2">
        <div class="flex items-center gap-2 text-xs text-stone-500">
          <button (click)="soilService.setActiveTab('home')" class="hover:text-stone-900 cursor-pointer">
            {{ soilService.t().home }}
          </button>
          <span>/</span>
          <span class="text-stone-900 font-medium">{{ soilService.t().about }}</span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          {{ soilService.t().about }}
        </h1>
        <p class="text-sm sm:text-base text-stone-600 leading-relaxed">
          {{ soilService.language() === 'ta'
            ? 'மண்வளம் முன்மாதிரி தளத்தின் நோக்கம், தரவு வழிமுறைகள் மற்றும் விவசாயிகளுக்கான வழிகாட்டுதல்கள்.'
            : 'A modern, transparent redesign prototype bridging open soil data and sustainable agricultural practices across Tamil Nadu.' }}
        </p>
      </div>

      <!-- Core Narrative Columns -->
      <div class="space-y-8 text-stone-700 leading-relaxed">
        <!-- 1. What is Mannvalam -->
        <section class="space-y-3">
          <h2 class="text-xl font-bold text-stone-900 flex items-center gap-2">
            <mat-icon class="text-emerald-800 !text-[20px]">public</mat-icon>
            <span>{{ soilService.language() === 'ta' ? 'மண்வளம் என்றால் என்ன?' : 'What is Mannvalam?' }}</span>
          </h2>
          <p class="text-sm sm:text-base">
            {{ soilService.language() === 'ta'
              ? 'மண்வளம் என்பது தமிழ்நாடு அரசின் வேளாண்மை மற்றும் உழவர் நலத்துறையின் மண் ஆய்வு முடிவுகள் மற்றும் புவியியல் தகவல்களை எளிதாகப் புரிந்துகொள்ள உருவாக்கப்பட்ட தகவல் முயற்சியாகும். இந்த முன்மாதிரி மறுவடிவமைப்பு, பழமையான அரசு வலைத்தள முறைகளை மாற்றி, விவசாயிகள், மாணவர்கள், வேளாண் ஆராய்ச்சியாளர்கள் மற்றும் பொதுமக்கள் எளிதில் பயன்படுத்தும் வகையில் நவீனமாக வடிவமைக்கப்பட்டுள்ளது.'
              : 'Mannvalam is an open soil information portal inspired by the Department of Agriculture & Farmers Welfare, Government of Tamil Nadu. This modern redesign transforms institutional soil testing data into an intuitive, accessible, and fast interface tailored for farmers, agricultural students, agronomists, and researchers.' }}
          </p>
        </section>

        <!-- 2. Why Soil Information Matters -->
        <section class="space-y-3">
          <h2 class="text-xl font-bold text-stone-900 flex items-center gap-2">
            <mat-icon class="text-emerald-800 !text-[20px]">spa</mat-icon>
            <span>{{ soilService.language() === 'ta' ? 'மண் தகவல் ஏன் அவசியம்?' : 'Why Soil Information Matters' }}</span>
          </h2>
          <p class="text-sm sm:text-base">
            {{ soilService.language() === 'ta'
              ? 'மண் என்பது வெறுமனே பயிர் நிலைநிறுத்தும் தளம் மட்டுமல்ல; அது நுண்ணுயிர்கள் மற்றும் சத்துக்கள் நிறைந்த ஒரு உயிருள்ள உலகம். தழை, மணி, சாம்பல் சத்துக்கள் மற்றும் கார அமிலத் தன்மை (pH) பற்றிய விழிப்புணர்வு இல்லாத போது விவசாயிகள் தேவையற்ற கூடுதல் உரங்களை இட்டு செலவையும் மண்ணின் வளத்தையும் இழக்கின்றனர். மண் தகவல்களை அறிவது சமச்சீர் உரமிடுதல் மற்றும் செலவு குறைப்புக்கு அடித்தளமாகும்.'
              : 'Soil is a living, complex ecosystem rather than inert dirt. Over-application of synthetic fertilizers without scientific testing degrades soil biology, induces nutrient locking, and burdens farmers financially. Transparent access to regional soil parameters enables balanced fertilization, preserves groundwater tables, and protects land fertility for generations.' }}
          </p>
        </section>

        <!-- 3. Historical vs Current Testing Distinction -->
        <section class="space-y-3">
          <h2 class="text-xl font-bold text-stone-900 flex items-center gap-2">
            <mat-icon class="text-emerald-800 !text-[20px]">history_edu</mat-icon>
            <span>{{ soilService.language() === 'ta' ? 'வரலாற்றுத் தரவுகளும் நடப்பு நிலவரமும்' : 'Historical Data vs. Current Soil Conditions' }}</span>
          </h2>
          <p class="text-sm sm:text-base">
            {{ soilService.language() === 'ta'
              ? 'இத்தளத்தில் காட்டப்படும் தகவல்கள் பல்வேறு மாவட்டங்களில் நடத்தப்பட்ட மாதிரி மண் பரிசோதனை ஆய்வகப் பதிவுகளின் தொகுப்பாகும். பயிர் சுழற்சி, வெள்ளம், வறட்சி மற்றும் தொடர் உரமிடுதல் காரணமாக ஒவ்வொரு விவசாய நிலத்தின் தற்போதைய தன்மைகள் மாறுபடக்கூடும். எனவே, இந்த புள்ளிவிவரங்களை தனிப்பட்ட விவசாயியின் உடனடி கள முடிவுகளுக்கு மாற்றாகக் கருதக்கூடாது.'
              : 'All regional distributions and block values shown in this prototype represent aggregated statistical averages from previous laboratory testing cycles. Real-world soil conditions continually evolve with crop rotation, rainfall, irrigation water chemistry, and continuous management. District aggregates must never be substituted for an individualized land test.' }}
          </p>
        </section>

        <!-- 4. Official Notice & Disclaimer Box -->
        <div class="p-6 rounded-2xl bg-amber-50/80 border border-amber-300/80 space-y-3">
          <div class="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <mat-icon class="!text-[20px] text-amber-800">warning</mat-icon>
            <span>{{ soilService.t().disclaimerTitle }}</span>
          </div>

          <p class="text-sm text-amber-950 font-medium leading-relaxed">
            "{{ soilService.t().disclaimerText }}"
          </p>

          <p class="text-xs text-stone-600 italic pt-2 border-t border-amber-200">
            {{ soilService.t().independentNotice }}
          </p>
        </div>

        <!-- 5. How to Obtain a Physical Soil Test -->
        <section class="space-y-4">
          <h2 class="text-xl font-bold text-stone-900">
            {{ soilService.language() === 'ta' ? 'புதிய மண் பரிசோதனை பெறுவது எப்படி?' : 'How Farmers Can Obtain a Free/Subsidized Soil Test' }}
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
              <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center font-mono">1</span>
              <h3 class="font-bold text-stone-900">
                {{ soilService.language() === 'ta' ? 'மாதிரி சேகரிப்பு' : 'Field Soil Sampling' }}
              </h3>
              <p class="text-stone-500">
                {{ soilService.language() === 'ta'
                  ? 'பயிர் அறுவடைக்குப் பின் நிலத்தில் ஆங்கில எழுத்து "V" வடிவில் 15 செ.மீ ஆழத்தில் மாதிரி சேகரித்து நிழலில் உலர்த்தவும்.'
                  : 'Collect 10-15 sub-samples across the field in a zig-zag V-shape (0-15 cm depth), mix thoroughly, and shade-dry.' }}
              </p>
            </div>

            <div class="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
              <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center font-mono">2</span>
              <h3 class="font-bold text-stone-900">
                {{ soilService.language() === 'ta' ? 'அருகிலுள்ள ஆய்வகம்' : 'Submit at STL Lab' }}
              </h3>
              <p class="text-stone-500">
                {{ soilService.language() === 'ta'
                  ? 'வட்டார வேளாண்மை விரிவாக்க மையம் (AEC) அல்லது நடமாடும் மண் பரிசோதனை ஆய்வகத்தில் ஒப்படைக்கவும்.'
                  : 'Submit sample to the nearest Agricultural Extension Centre (AEC) or district Soil Testing Laboratory (STL).' }}
              </p>
            </div>

            <div class="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
              <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center font-mono">3</span>
              <h3 class="font-bold text-stone-900">
                {{ soilService.language() === 'ta' ? 'மண் வள அட்டை' : 'Soil Health Card' }}
              </h3>
              <p class="text-stone-500">
                {{ soilService.language() === 'ta'
                  ? '12 சத்துக்களின் அளவீடு மற்றும் உங்கள் நிலத்திற்கான தனிப்பயன் உரப் பரிந்துரையுடன் கூடிய அட்டை பெறலாம்.'
                  : 'Receive your official Soil Health Card containing 12 parameter ratings and custom fertilizer schedules.' }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `
})
export class About {
  readonly soilService = inject(Soil);
}
