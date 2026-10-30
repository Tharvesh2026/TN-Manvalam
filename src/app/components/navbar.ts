import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Soil } from '../services/soil';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <header class="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-4">
          <!-- Zone 1: Official Brand Logo & Identity -->
          <button
            type="button"
            class="flex items-center gap-3 shrink-0 cursor-pointer text-left focus:outline-none"
            (click)="soilService.setActiveTab('home')"
          >
            <div class="flex items-center gap-3">
              <!-- Official Mannvalam Logo (English or Tamil based on language) -->
              @if (soilService.language() === 'ta') {
                <img
                  src="https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/footer_tamil.svg"
                  alt="மண்வளம் - தமிழ்நாடு மண் தகவல் தளம்"
                  class="h-11 w-auto max-w-[200px] object-contain"
                  referrerpolicy="no-referrer"
                  (error)="handleLogoError($event)"
                />
              } @else {
                <img
                  src="https://www.tnagrisnet.tn.gov.in/mannvalam/assets/img/Group_english.svg"
                  alt="Mannvalam - Tamil Nadu Soil Information Platform"
                  class="h-11 w-auto max-w-[200px] object-contain"
                  referrerpolicy="no-referrer"
                  (error)="handleLogoError($event)"
                />
              }

              <!-- Subtle prototype mark in display face -->
              <div class="hidden sm:flex flex-col border-l border-stone-200 pl-3">
                <span class="text-xs uppercase tracking-wider font-semibold text-stone-500">
                  {{ soilService.language() === 'ta' ? 'தமிழ்நாடு அரசு முன்மாதிரி' : 'Tamil Nadu Soil Portal' }}
                </span>
                <span class="text-[11px] text-stone-400">
                  {{ soilService.language() === 'ta' ? 'மறுவடிவமைப்பு' : 'Modern Redesign' }}
                </span>
              </div>
            </div>
          </button>

          <!-- Zone 2: Navigation Links (Single Line) -->
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button
              (click)="soilService.setActiveTab('home')"
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer"
              [class.text-emerald-800]="soilService.activeTab() === 'home'"
              [class.font-semibold]="soilService.activeTab() === 'home'"
              [class.text-stone-600]="soilService.activeTab() !== 'home'"
            >
              {{ soilService.t().home }}
              @if (soilService.activeTab() === 'home') {
                <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full"></span>
              }
            </button>

            <button
              (click)="soilService.setActiveTab('districts')"
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer"
              [class.text-emerald-800]="soilService.activeTab() === 'districts'"
              [class.font-semibold]="soilService.activeTab() === 'districts'"
              [class.text-stone-600]="soilService.activeTab() !== 'districts'"
            >
              {{ soilService.t().districts }}
              @if (soilService.activeTab() === 'districts') {
                <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full"></span>
              }
            </button>

            <button
              (click)="soilService.setActiveTab('soil-info')"
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer"
              [class.text-emerald-800]="soilService.activeTab() === 'soil-info'"
              [class.font-semibold]="soilService.activeTab() === 'soil-info'"
              [class.text-stone-600]="soilService.activeTab() !== 'soil-info'"
            >
              {{ soilService.t().soilInfo }}
              @if (soilService.activeTab() === 'soil-info') {
                <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full"></span>
              }
            </button>

            <button
              (click)="soilService.setActiveTab('about')"
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer"
              [class.text-emerald-800]="soilService.activeTab() === 'about'"
              [class.font-semibold]="soilService.activeTab() === 'about'"
              [class.text-stone-600]="soilService.activeTab() !== 'about'"
            >
              {{ soilService.t().about }}
              @if (soilService.activeTab() === 'about') {
                <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full"></span>
              }
            </button>

            <button
              (click)="soilService.setActiveTab('api-docs')"
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
              [class.text-emerald-800]="soilService.activeTab() === 'api-docs'"
              [class.font-semibold]="soilService.activeTab() === 'api-docs'"
              [class.text-stone-600]="soilService.activeTab() !== 'api-docs'"
            >
              <mat-icon class="!text-[16px] text-stone-400">code</mat-icon>
              <span>{{ soilService.t().apiDocs }}</span>
              @if (soilService.activeTab() === 'api-docs') {
                <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full"></span>
              }
            </button>
          </nav>

          <!-- Zone 3: Language Toggle & Primary Action -->
          <div class="flex items-center gap-3 shrink-0">
            <!-- Language Switcher Button -->
            <button
              type="button"
              (click)="soilService.toggleLanguage()"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 hover:border-stone-400 transition-colors shadow-2xs cursor-pointer whitespace-nowrap"
              [attr.aria-label]="soilService.language() === 'en' ? 'Switch to Tamil language' : 'ஆங்கில மொழிக்கு மாற்றுக'"
            >
              <mat-icon class="text-stone-500 !text-[16px] !w-4 !h-4 leading-none">language</mat-icon>
              <span>{{ soilService.t().switchLanguage }}</span>
            </button>

            <!-- Primary Action Button -->
            <button
              type="button"
              (click)="soilService.setActiveTab('districts')"
              class="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              <mat-icon class="!text-[16px] !w-4 !h-4 leading-none">travel_explore</mat-icon>
              <span>{{ soilService.t().exploreDistricts }}</span>
            </button>

            <!-- Mobile Hamburger Toggle -->
            <button
              type="button"
              (click)="toggleMobileMenu()"
              class="md:hidden p-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <mat-icon>{{ isMobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown Navigation -->
      @if (isMobileMenuOpen()) {
        <div class="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <button
            (click)="selectTabAndClose('home')"
            class="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between"
            [class.bg-emerald-50]="soilService.activeTab() === 'home'"
            [class.text-emerald-900]="soilService.activeTab() === 'home'"
            [class.text-stone-700]="soilService.activeTab() !== 'home'"
          >
            <span>{{ soilService.t().home }}</span>
            @if (soilService.activeTab() === 'home') {
              <mat-icon class="text-emerald-700 !text-sm">check</mat-icon>
            }
          </button>

          <button
            (click)="selectTabAndClose('districts')"
            class="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between"
            [class.bg-emerald-50]="soilService.activeTab() === 'districts'"
            [class.text-emerald-900]="soilService.activeTab() === 'districts'"
            [class.text-stone-700]="soilService.activeTab() !== 'districts'"
          >
            <span>{{ soilService.t().districts }}</span>
            @if (soilService.activeTab() === 'districts') {
              <mat-icon class="text-emerald-700 !text-sm">check</mat-icon>
            }
          </button>

          <button
            (click)="selectTabAndClose('soil-info')"
            class="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between"
            [class.bg-emerald-50]="soilService.activeTab() === 'soil-info'"
            [class.text-emerald-900]="soilService.activeTab() === 'soil-info'"
            [class.text-stone-700]="soilService.activeTab() !== 'soil-info'"
          >
            <span>{{ soilService.t().soilInfo }}</span>
            @if (soilService.activeTab() === 'soil-info') {
              <mat-icon class="text-emerald-700 !text-sm">check</mat-icon>
            }
          </button>

          <button
            (click)="selectTabAndClose('about')"
            class="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between"
            [class.bg-emerald-50]="soilService.activeTab() === 'about'"
            [class.text-emerald-900]="soilService.activeTab() === 'about'"
            [class.text-stone-700]="soilService.activeTab() !== 'about'"
          >
            <span>{{ soilService.t().about }}</span>
            @if (soilService.activeTab() === 'about') {
              <mat-icon class="text-emerald-700 !text-sm">check</mat-icon>
            }
          </button>

          <button
            (click)="selectTabAndClose('api-docs')"
            class="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between"
            [class.bg-emerald-50]="soilService.activeTab() === 'api-docs'"
            [class.text-emerald-900]="soilService.activeTab() === 'api-docs'"
            [class.text-stone-700]="soilService.activeTab() !== 'api-docs'"
          >
            <span>{{ soilService.t().apiDocs }}</span>
            @if (soilService.activeTab() === 'api-docs') {
              <mat-icon class="text-emerald-700 !text-sm">check</mat-icon>
            }
          </button>

          <div class="pt-2 border-t border-stone-100 flex items-center justify-between">
            <span class="text-xs text-stone-500 font-medium">
              {{ soilService.language() === 'ta' ? 'மொழி / Language' : 'Language / மொழி' }}
            </span>
            <button
              (click)="soilService.toggleLanguage()"
              class="px-3 py-1.5 text-xs font-semibold rounded bg-stone-100 text-stone-800"
            >
              {{ soilService.t().switchLanguage }}
            </button>
          </div>
        </div>
      }
    </header>
  `
})
export class Navbar {
  readonly soilService = inject(Soil);
  readonly isMobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
  }

  selectTabAndClose(tab: 'home' | 'districts' | 'soil-info' | 'about' | 'api-docs') {
    this.soilService.setActiveTab(tab);
    this.isMobileMenuOpen.set(false);
  }

  handleLogoError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target) {
      // In case network issue with external SVG, provide clean styled fallback
      target.style.display = 'none';
      const parent = target.parentElement;
      if (parent && !parent.querySelector('.logo-fallback')) {
        const fallback = document.createElement('div');
        fallback.className = 'logo-fallback font-bold text-lg text-emerald-800 tracking-tight flex items-center gap-1.5';
        fallback.innerHTML = `<span class="bg-emerald-800 text-white px-2 py-0.5 rounded text-sm font-extrabold">TN</span> <span>${this.soilService.language() === 'ta' ? 'மண்வளம்' : 'Mannvalam'}</span>`;
        parent.prepend(fallback);
      }
    }
  }
}
