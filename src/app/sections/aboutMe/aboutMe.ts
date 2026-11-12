import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './aboutMe.html',
  styleUrl: '../../app.css',
})
export class AboutMeComponent {
  readonly i18n = inject(TranslationService);
}