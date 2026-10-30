import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Soil } from '../services/soil';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <header class="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-18 sm:h-20 gap-4">
          <!-- Zone 1: Premium Geospatial Brand Identity -->
          <button
            type="button"
            class="flex items-center gap-3 shrink-0 cursor-pointer text-left focus:outline-none group"
            (click)="soilService.setActiveTab('home')"
            aria-label="Mannvalam Home"
          >
            <!-- Geospatial Earth/Soil Emblem -->
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white flex items-center justify-center shadow-xs border border-emerald-700/60 group-hover:from-emerald-700 group-hover:to-emerald-900 transition-all shrink-0">
              <mat-icon class="!text-[22px] !w-5.5 !h-5.5 text-emerald-200">layers</mat-icon>
            </div>

            <!-- Brand Typography: Strong primary name, smaller secondary text -->
            <div class="flex flex-col text-left">
              <div class="flex items-center gap-2">
                <span class="text-base sm:text-lg font-black tracking-tight text-stone-900 group-hover:text-emerald-950 transition-colors">
                  {{ soilService.language() === 'ta' ? 'மண்வளம்' : 'MANNVALAM' }}
                </span>
                <span class="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100/90 text-emerald-800 border border-emerald-200/80">
                  TN GIS
                </span>
              </div>
              <span class="text-[11px] sm:text-xs text-stone-500 font-medium tracking-tight leading-tight">
                {{ soilService.language() === 'ta' ? 'தமிழ்நாடு மண் தகவல் தளம்' : 'Tamil Nadu Soil Information Portal' }}
              </span>
            </div>
          </button>

          <!-- Zone 2: Navigation Links (Single Line, High-End Feel) -->
          <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <button
              (click)="soilService.setActiveTab('home')"
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer hover:text-stone-900"
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
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer hover:text-stone-900"
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
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer hover:text-stone-900"
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
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer hover:text-stone-900"
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
              class="relative py-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 hover:text-stone-900"
              [class.text-emerald-800]="soilService.activeTab() === 'api-docs'"
              [class.font-semibold]="soilService.activeTab() === 'api-docs'"
              [class.text-stone-600]="soilService.activeTab() !== 'api-docs'"
            >
              <mat-icon class="!text-[15px] text-stone-400">terminal</mat-icon>
              <span>{{ soilService.t().apiDocs }}</span>
              @if (soilService.activeTab() === 'api-docs') {
                <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full"></span>
              }
            </button>
          </nav>

          <!-- Zone 3: Language Switcher & Controls -->
          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <!-- Language Switcher Button -->
            <button
              type="button"
              (click)="soilService.toggleLanguage()"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-stone-300/80 bg-white text-stone-700 hover:bg-stone-50 hover:border-stone-400 transition-colors shadow-2xs cursor-pointer whitespace-nowrap"
              [attr.aria-label]="soilService.language() === 'en' ? 'Switch to Tamil language' : 'ஆங்கில மொழிக்கு மாற்றுக'"
            >
              <mat-icon class="text-stone-500 !text-[15px] !w-3.5 !h-3.5 leading-none">language</mat-icon>
              <span>{{ soilService.t().switchLanguage }}</span>
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

          <div class="pt-3 border-t border-stone-100 flex items-center justify-between">
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
}

