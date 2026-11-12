import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-my-experiences',
  standalone: true,
  templateUrl: './myExperiences.html',
  styleUrl: '../../app.css',
})
export class MyExperiencesComponent {
  readonly i18n = inject(TranslationService);
}