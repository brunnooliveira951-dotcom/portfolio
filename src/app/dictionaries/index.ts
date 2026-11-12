import { EN } from './en';
import { PT } from './pt';

import type {
  Lang,
  TranslationDictionary,
} from '../core/i18n/translation.model';

export const DICT: Record<Lang, TranslationDictionary> = {
  pt: PT,
  en: EN,
};