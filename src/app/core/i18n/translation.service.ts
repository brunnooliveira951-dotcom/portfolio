import { Injectable, computed, signal } from '@angular/core';

import { DICT } from '../../dictionaries';
import type { Lang } from './translation.model';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly _lang = signal<Lang>('pt');

  readonly lang = this._lang.asReadonly();

  readonly translations = computed(() => DICT[this._lang()]);

  setLanguage(lang: Lang): void {
    this._lang.set(lang);
  }

  toggleLanguage(): void {
    this._lang.update(current =>
      current === 'pt' ? 'en' : 'pt'
    );
  }
}