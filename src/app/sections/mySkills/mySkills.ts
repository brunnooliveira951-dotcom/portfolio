import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  templateUrl: './mySkills.html',
  styleUrl: '../../app.css',
})
export class MySkillsComponent {
  readonly i18n = inject(TranslationService);
}