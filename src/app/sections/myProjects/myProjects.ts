import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  templateUrl: './myProjects.html',
  styleUrl: '../../app.css',
})
export class MyProjectsComponent {
  readonly i18n = inject(TranslationService);
}