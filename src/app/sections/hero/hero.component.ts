import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
const EMAIL = 'brunnooliveira951@gmail.com';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: '../../app.css',
})
export class HeroComponent {
    readonly i18n = inject(TranslationService);
    readonly email = EMAIL;
    readonly t = this.i18n.translations;
    private toastTimer: any;
    toast = signal('');
    copied = signal(false);
    menuOpen = signal(false);

    async copyEmail(): Promise<void> {
        try {
            await navigator.clipboard.writeText(EMAIL);
            this.copied.set(true);
            this.showToast(this.t().contact.copied);
            setTimeout(() => this.copied.set(false), 2200);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    }

    private showToast(msg: string): void {
        this.toast.set(msg);
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => this.toast.set(''), 3800);
    }

    goTo(id: string): void {
        this.menuOpen.set(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
}