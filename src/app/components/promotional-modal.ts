import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-promotional-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-modal-title"
    >
      <!-- Modal Box Container -->
      <div
        class="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
      >
        <!-- Modal Top Bar -->
        <div class="flex items-center justify-between px-5 py-3.5 bg-stone-900 text-white border-b border-stone-800">
          <div class="flex items-center gap-2.5">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <div class="flex items-center gap-2">
              <h2 id="promo-modal-title" class="text-sm font-bold tracking-tight text-white">
                Tharvesh Muhaideen A
              </h2>
              <span class="text-xs text-stone-400 hidden sm:inline">· Founder of TM Nexus & Creator of tharvbytes</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <!-- Open in new tab link -->
            <a
              href="https://tharvesh2026.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-stone-300 hover:text-white rounded bg-stone-800 hover:bg-stone-700 transition-colors"
            >
              <mat-icon class="!text-[14px] !w-3.5 !h-3.5">open_in_new</mat-icon>
              <span class="hidden sm:inline">Open Site</span>
            </a>

            <!-- Close Modal Button -->
            <button
              type="button"
              (click)="closeModal.emit()"
              class="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close profile modal"
            >
              <mat-icon class="!text-[20px]">close</mat-icon>
            </button>
          </div>
        </div>

        <!-- iframe Content -->
        <div class="relative flex-1 w-full bg-stone-100 min-h-[500px] sm:min-h-[580px] overflow-hidden">
          @if (isLoading()) {
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/90 z-10">
              <div class="w-8 h-8 rounded-full border-2 border-emerald-800 border-t-transparent animate-spin"></div>
              <p class="text-xs font-medium text-stone-600">Loading Tharvesh's profile portfolio...</p>
            </div>
          }

          <iframe
            src="https://tharvesh2026.github.io/"
            title="Tharvesh Muhaideen A - Portfolio and Projects"
            class="w-full h-full border-0 absolute inset-0"
            (load)="onIframeLoad()"
            referrerpolicy="no-referrer"
            loading="lazy"
          ></iframe>
        </div>

        <!-- Modal Bottom Bar Actions -->
        <div class="px-5 py-3 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-4 text-stone-600">
            <span class="font-medium">Contact:</span>
            <a
              href="mailto:imtharvesh@gmail.com"
              class="font-semibold text-emerald-800 hover:underline flex items-center gap-1"
            >
              <mat-icon class="!text-[14px]">email</mat-icon>
              <span>imtharvesh&#64;gmail.com</span>
            </a>
          </div>

          <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <a
              href="https://about.imtharvesh.me"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stone-300 bg-white font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <span>about.imtharvesh.me</span>
              <mat-icon class="!text-[14px]">arrow_outward</mat-icon>
            </a>

            <a
              href="https://buymeacoffee.com/tharveshmuhaideen"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 font-semibold text-stone-900 shadow-2xs transition-colors"
            >
              <span>☕ Buy me a coffee</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PromotionalModal {
  readonly closeModal = output<void>();
  readonly isLoading = signal<boolean>(true);

  onIframeLoad() {
    this.isLoading.set(false);
  }
}
