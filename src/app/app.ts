import {
  Component,
  AfterViewInit,
  OnDestroy,
  signal,
  computed,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import type { PT } from './dictionaries/pt';
import type { EN } from './dictionaries/en';
import { TranslationService } from './core/i18n/translation.service';
export type TranslationDictionary = typeof PT;
import { AboutMeComponent } from './sections/aboutMe/aboutMe';
import { MyContactComponent } from './sections/myContact/myContact';
import { MySkillsComponent } from './sections/mySkills/mySkills';
import { MyExperiencesComponent } from './sections/myExperiences/myExperiences';
import { MyEducationComponent } from './sections/myEducation/myEducation';
import { HeroComponent } from './sections/hero/hero.component';
import {MyProjectsComponent} from './sections/myProjects/myProjects';
const EMAIL = 'brunnooliveira951@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/brunno-de-souza-oliveira-a94853232/';

const MARQUEE = [
  'Java',
  'Spring Boot',
  'TypeScript',
  'React',
  'MySQL',
  'Groovy',
  'Data Analysis',
  'Full-Stack',
  'Code Maintenance',
  'Curitiba PR',
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    AboutMeComponent,
    MyContactComponent,
    MySkillsComponent,
    MyExperiencesComponent,
    MyEducationComponent,
    HeroComponent,
    MyProjectsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly email = EMAIL;
  readonly linkedin = LINKEDIN;
  readonly marqueeItems = MARQUEE;
  readonly i18n = inject(TranslationService);
  readonly t = this.i18n.translations;

  menuOpen = signal(false);
  sending = signal(false);
  formStatus = signal<'idle' | 'success' | 'error'>('idle');
  toast = signal('');
  copied = signal(false);

  form = { name: '', email: '', message: '', honey: '' };

  private platformId = inject(PLATFORM_ID);
  private stoppers: Array<() => void> = [];
  private toastTimer: any;

  toggleLang(): void {
    this.i18n.toggleLanguage();
  }

  goTo(id: string): void {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

  private showToast(msg: string): void {
    this.toast.set(msg);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toast.set(''), 3800);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      el.style.opacity = '0';
    });
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = Number(target.dataset['delay'] || 0);
          target.animate(
            [
              { opacity: 0, transform: 'translateY(32px)' },
              { opacity: 1, transform: 'translateY(0px)' },
            ],
            { duration: 800, delay: delay * 1000, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
          );
          revealObserver.unobserve(target);
        });
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => revealObserver.observe(el));
    this.stoppers.push(() => revealObserver.disconnect());

    const heroArt = document.querySelector<HTMLElement>('.hero-art-inner');
    const heroSection = document.getElementById('top');
    if (heroArt && heroSection) {
      const updateParallax = () => {
        const progress = Math.min(1, Math.max(0, -heroSection.getBoundingClientRect().top / heroSection.offsetHeight));
        heroArt.style.transform = `translateY(${progress * 90}px)`;
      };
      window.addEventListener('scroll', updateParallax, { passive: true });
      updateParallax();
      this.stoppers.push(() => window.removeEventListener('scroll', updateParallax));
    }
  }

  ngOnDestroy(): void {
    this.stoppers.forEach((stop) => stop());
    clearTimeout(this.toastTimer);
  }
}
