import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { FormsModule } from '@angular/forms';
const EMAIL = 'brunnooliveira951@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/brunno-de-souza-oliveira-a94853232/';

@Component({
  selector: 'app-my-contact',
  standalone: true,
  templateUrl: './myContact.html',
  styleUrl: '../../app.css',
  imports: [
    FormsModule,
  ]
})
export class MyContactComponent {
    readonly email = EMAIL;
    readonly linkedin = LINKEDIN;
    readonly i18n = inject(TranslationService);
    readonly t = this.i18n.translations;
    sending = signal(false);
    form = { name: '', email: '', message: '', honey: '' };
    formStatus = signal<'idle' | 'success' | 'error'>('idle');
    toast = signal('');
    private toastTimer: any;
    copied = signal(false);
    whatsapp = 'https://wa.me/5541996472207';

    private showToast(msg: string): void {
        this.toast.set(msg);
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => this.toast.set(''), 3800);
    }

    async sendEmail(): Promise<void> {
        if (this.sending()) return;
        if (this.form.honey.trim()) return;
        if (!this.form.name.trim() || !this.form.email.trim() || !this.form.message.trim()) return;

        this.sending.set(true);
        this.formStatus.set('idle');
        try {
            const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: this.form.name.trim(),
                    email: this.form.email.trim(),
                    message: this.form.message.trim(),
                    _subject: `Portfólio — mensagem de ${this.form.name.trim()}`,
                    _honey: this.form.honey,
                }),
            });
            if (!res.ok) {
                throw new Error('send failed');
            }
            this.formStatus.set('success');
            this.form = { name: '', email: '', message: '', honey: '' };
            this.showToast(this.t().contact.success);
        } catch {
            this.formStatus.set('error');
        } finally {
            this.sending.set(false);
        }
    }

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
}