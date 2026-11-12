import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-my-education',
  standalone: true,
  templateUrl: './myEducation.html',
  styleUrl: '../../app.css',
})
export class MyEducationComponent {
  readonly i18n = inject(TranslationService);
}