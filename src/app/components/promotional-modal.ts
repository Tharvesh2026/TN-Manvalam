import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-promotional-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  host: {
    '(document:keydown.escape)': 'closeModal.emit()'
  },
  template: `
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-modal-title"
    >
      <!-- Backdrop button for accessible dismissal -->
      <button
        type="button"
        class="fixed inset-0 bg-black/65 backdrop-blur-xs cursor-default border-0"
        (click)="closeModal.emit()"
        aria-label="Close promotion portal"
      ></button>

      <!-- Modal Box Container (Fixed Viewport, No Cutoff) -->
      <div
        class="relative z-10 w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col h-[88vh] max-h-[850px] animate-in zoom-in-95 duration-200"
      >
        <!-- Modal Top Bar: Title & Primary Actions -->
        <div class="px-4 sm:px-6 py-3.5 bg-stone-900 text-white border-b border-stone-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <!-- Developer Identity -->
          <div class="flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
            <div>
              <div class="flex items-center gap-2">
                <h2 id="promo-modal-title" class="text-sm sm:text-base font-bold text-white tracking-tight">
                  Tharvesh Muhaideen A
                </h2>
                <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 hidden sm:inline-block">
                  TM Nexus
                </span>
              </div>
              <p class="text-[11px] text-stone-400">
                Founder of TM Nexus · Creator of tharvbytes
              </p>
            </div>
          </div>

          <!-- Action Buttons Area: Outline & Solid Buttons -->
          <div class="flex items-center gap-2 sm:gap-2.5">
            <!-- Outline Button: About Me (about.imtharvesh.me, target=_blank) -->
            <a
              href="https://about.imtharvesh.me"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-stone-600 bg-stone-800/80 hover:bg-stone-700 text-stone-100 hover:text-white transition-colors shadow-2xs whitespace-nowrap"
              title="Visit about.imtharvesh.me in new tab"
            >
              <mat-icon class="!text-[14px] !w-3.5 !h-3.5 text-stone-400">person</mat-icon>
              <span>About Me</span>
              <mat-icon class="!text-[12px] !w-3 !h-3 text-stone-500">open_in_new</mat-icon>
            </a>

            <!-- Solid Button: Buy Me a Coffee (solid amber) -->
            <a
              href="https://buymeacoffee.com/tharveshmuhaideen"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-400 hover:bg-amber-500 text-stone-900 transition-colors shadow-xs whitespace-nowrap"
              title="Support on Buy Me a Coffee"
            >
              <span>☕ Buy me a coffee</span>
            </a>

            <!-- External site shortcut -->
            <a
              href="https://tharvesh2026.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              class="hidden md:inline-flex items-center gap-1 p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              title="Open portfolio in full tab"
            >
              <mat-icon class="!text-[18px]">launch</mat-icon>
            </a>

            <!-- Close Modal Button -->
            <button
              type="button"
              (click)="closeModal.emit()"
              class="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer ml-1"
              aria-label="Close promotion portal"
            >
              <mat-icon class="!text-[20px]">close</mat-icon>
            </button>
          </div>
        </div>

        <!-- Info Strip: Contact details & Direct URL -->
        <div class="px-4 sm:px-6 py-2 bg-stone-100 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 shrink-0">
          <div class="flex items-center gap-2">
            <span class="text-stone-500">Live Portfolio:</span>
            <a
              href="https://tharvesh2026.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-emerald-800 font-medium hover:underline flex items-center gap-1"
            >
              <span>https://tharvesh2026.github.io/</span>
              <mat-icon class="!text-[12px] !w-3 !h-3">open_in_new</mat-icon>
            </a>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-stone-500">Contact:</span>
            <a
              href="mailto:imtharvesh@gmail.com"
              class="font-semibold text-emerald-800 hover:underline flex items-center gap-1"
            >
              <mat-icon class="!text-[14px] !w-3.5 !h-3.5">email</mat-icon>
              <span>imtharvesh&#64;gmail.com</span>
            </a>
          </div>
        </div>

        <!-- iframe Content (Flex-1, fills remaining vertical space) -->
        <div class="relative flex-1 w-full bg-stone-50 min-h-0 overflow-hidden">
          @if (isLoading()) {
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/95 z-10">
              <div class="w-8 h-8 rounded-full border-2 border-emerald-800 border-t-transparent animate-spin"></div>
              <p class="text-xs font-medium text-stone-600">Loading Tharvesh's profile portfolio...</p>
              <a
                href="https://tharvesh2026.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs text-emerald-700 underline mt-1"
              >
                Click here if it does not load automatically
              </a>
            </div>
          }

          <iframe
            src="https://tharvesh2026.github.io/"
            title="Tharvesh Muhaideen A - Portfolio and Projects"
            class="w-full h-full border-0"
            (load)="onIframeLoad()"
            referrerpolicy="no-referrer"
            loading="lazy"
          ></iframe>
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

