import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
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
          <!-- Col 1: Identity & Creator Credit -->
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

            <!-- Creator & Organisation Attribution -->
            <div class="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/60 max-w-lg space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span class="text-xs font-bold text-white tracking-wide">Tharvesh Muhaideen A</span>
                  <p class="text-[11px] text-emerald-400 font-medium">Founder of TM Nexus · Creator of tharvbytes</p>
                </div>
                <!-- Promotional modal button -->
                <button
                  type="button"
                  (click)="openPromoModal.emit()"
                  class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-stone-700 hover:bg-stone-600 text-stone-200 hover:text-white transition-colors cursor-pointer border border-stone-600"
                >
                  <mat-icon class="!text-[14px] !w-3.5 !h-3.5">person</mat-icon>
                  <span>View Portfolio</span>
                </button>
              </div>

              <!-- Contact Developer -->
              <div class="pt-2 border-t border-stone-700/80 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                <span class="text-stone-400">Contact Developer:</span>
                <a
                  href="mailto:imtharvesh@gmail.com"
                  class="font-medium text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1"
                >
                  <mat-icon class="!text-[13px] !w-3.5 !h-3.5">mail</mat-icon>
                  <span>imtharvesh&#64;gmail.com</span>
                </a>
              </div>
            </div>

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

          <!-- Col 3: Developer Support & Quick Links -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-stone-200">
              Developer & Support
            </h4>

            <div class="flex flex-col gap-2.5 pt-1">
              <!-- About Me : about.imtharvesh.me {target = new tab} - Outline Button -->
              <a
                href="https://about.imtharvesh.me"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-between px-3.5 py-2 text-xs font-semibold rounded-lg border border-stone-600 bg-transparent text-stone-200 hover:bg-stone-800 hover:text-white hover:border-stone-500 transition-all shadow-2xs group"
              >
                <div class="flex items-center gap-1.5">
                  <mat-icon class="!text-[15px] !w-4 !h-4 text-stone-400 group-hover:text-stone-200">account_circle</mat-icon>
                  <span>About Me</span>
                </div>
                <mat-icon class="!text-[13px] !w-3.5 !h-3.5 text-stone-500 group-hover:text-stone-300">open_in_new</mat-icon>
              </a>

              <!-- Buy Me a Coffee: https://buymeacoffee.com/tharveshmuhaideen - Solid Button -->
              <a
                href="https://buymeacoffee.com/tharveshmuhaideen"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-between px-3.5 py-2 text-xs font-bold rounded-lg bg-amber-400 hover:bg-amber-500 text-stone-900 transition-all shadow-sm"
              >
                <div class="flex items-center gap-1.5">
                  <span>☕ Buy me a coffee</span>
                </div>
                <mat-icon class="!text-[14px] !w-3.5 !h-3.5 leading-none">favorite</mat-icon>
              </a>
            </div>

            <div class="pt-2">
              <span class="text-[11px] text-stone-400 block font-medium mb-1.5">Official Portals:</span>
              <ul class="space-y-1.5 text-xs text-stone-400">
                <li>
                  <a href="https://www.tnagrisnet.tn.gov.in/mannvalam/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>Mannvalam Portal</span>
                    <mat-icon class="!text-[11px] !w-3 !h-3">open_in_new</mat-icon>
                  </a>
                </li>
                <li>
                  <a href="https://tnagrisnet.tn.gov.in" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>TNAgrisnet Portal</span>
                    <mat-icon class="!text-[11px] !w-3 !h-3">open_in_new</mat-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 Mannvalam Independent Redesign. Crafted by Tharvesh Muhaideen A (TM Nexus).
          </div>
          <div class="flex items-center gap-4">
            <button (click)="openPromoModal.emit()" class="hover:text-stone-300 cursor-pointer">
              Developer Profile
            </button>
            <span class="text-stone-700">·</span>
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
  readonly openPromoModal = output<void>();
}

