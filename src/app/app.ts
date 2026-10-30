import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Soil } from './services/soil';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { DistrictExplorer } from './components/district-explorer';
import { SoilInfo } from './components/soil-info';
import { About } from './components/about';
import { Footer } from './components/footer';
import { ApiDocs } from './components/api-docs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [Navbar, Home, DistrictExplorer, SoilInfo, About, Footer, ApiDocs],
  template: `
    <div class="min-h-screen flex flex-col bg-[#faf9f6] text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      <!-- Navbar with 3-Zone contract -->
      <app-navbar />

      <!-- Main Content Container according to Active Tab -->
      <main class="flex-1">
        @switch (soilService.activeTab()) {
          @case ('home') {
            <app-home />
          }
          @case ('districts') {
            <app-district-explorer />
          }
          @case ('soil-info') {
            <app-soil-info />
          }
          @case ('about') {
            <app-about />
          }
          @case ('api-docs') {
            <app-api-docs />
          }
        }
      </main>

      <!-- Institutional Footer -->
      <app-footer />
    </div>
  `,
  styleUrl: './app.css',
})
export class App {
  readonly soilService = inject(Soil);
}
