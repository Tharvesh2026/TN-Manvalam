import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Soil } from '../services/soil';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <footer class="bg-stone-900 text-stone-300 border-t border-stone-800 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Col 1: Identity -->
          <div class="space-y-4 md:col-span-2">
            <div class="flex items-center gap-3">
              <!-- Official Mannvalam Tamil Logo in dark footer -->
              <div class="bg-white/90 p-2 rounded-lg inline-block">
                <img
                  src="https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/footer_tamil.svg"
                  alt="Mannvalam Logo"
                  class="h-8 w-auto object-contain"
                  referrerpolicy="no-referrer"
                />
              </div>
              <span class="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                {{ soilService.language() === 'ta' ? 'தமிழ்நாடு மண் தகவல் தளம்' : 'Tamil Nadu Soil Information Platform' }}
              </span>
            </div>

            <p class="text-xs text-stone-400 max-w-md leading-relaxed">
              {{ soilService.language() === 'ta'
                ? 'தமிழ்நாடு வேளாண்மை மற்றும் உழவர் நலத்துறையின் மண் ஆய்வு நெறிமுறைகளின் அடிப்படையில் உருவாக்கப்பட்ட நவீன பொதுத் தகவல் தளம்.'
                : 'A modern, accessible public-information prototype inspired by the Government of Tamil Nadu Soil Information System (Mannvalam).' }}
            </p>

            <div class="text-[11px] text-stone-500">
              {{ soilService.t().independentNotice }}
            </div>
          </div>

          <!-- Col 2: Navigation -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-stone-200">
              {{ soilService.language() === 'ta' ? 'வழிசெலுத்தல்' : 'Navigation' }}
            </h4>
            <ul class="space-y-2 text-xs">
              <li>
                <button (click)="soilService.setActiveTab('home')" class="hover:text-white transition-colors cursor-pointer">
                  {{ soilService.t().home }}
                </button>
              </li>
              <li>
                <button (click)="soilService.setActiveTab('districts')" class="hover:text-white transition-colors cursor-pointer">
                  {{ soilService.t().districts }}
                </button>
              </li>
              <li>
                <button (click)="soilService.setActiveTab('soil-info')" class="hover:text-white transition-colors cursor-pointer">
                  {{ soilService.t().soilInfo }}
                </button>
              </li>
              <li>
                <button (click)="soilService.setActiveTab('about')" class="hover:text-white transition-colors cursor-pointer">
                  {{ soilService.t().about }}
                </button>
              </li>
              <li>
                <button (click)="soilService.setActiveTab('api-docs')" class="hover:text-white transition-colors cursor-pointer text-emerald-400 font-semibold">
                  {{ soilService.t().apiDocs }}
                </button>
              </li>
            </ul>
          </div>

          <!-- Col 3: Reference & Official Portals -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-stone-200">
              {{ soilService.language() === 'ta' ? 'அதிகாரப்பூர்வ இணைப்புகள்' : 'Official Portals' }}
            </h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li>
                <a href="https://www.tnagrisnet.tn.gov.in/mannvalam/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>Mannvalam Portal</span>
                  <mat-icon class="!text-[12px]">open_in_new</mat-icon>
                </a>
              </li>
              <li>
                <a href="https://tnagrisnet.tn.gov.in" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>TNAgrisnet Portal</span>
                  <mat-icon class="!text-[12px]">open_in_new</mat-icon>
                </a>
              </li>
              <li>
                <a href="https://tnau.ac.in" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>TNAU Coimbatore</span>
                  <mat-icon class="!text-[12px]">open_in_new</mat-icon>
                </a>
              </li>
              <li>
                <a href="https://soilhealth.dac.gov.in" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>National Soil Health Card</span>
                  <mat-icon class="!text-[12px]">open_in_new</mat-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 Mannvalam Independent Redesign Prototype.
          </div>
          <div class="flex items-center gap-4">
            <button (click)="soilService.toggleLanguage()" class="hover:text-stone-300 cursor-pointer">
              {{ soilService.language() === 'en' ? 'தமிழ் பதிப்பு' : 'English Edition' }}
            </button>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class Footer {
  readonly soilService = inject(Soil);
}
