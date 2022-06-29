import { Language } from './language';

/**
 * Represents a language mapping between the target {@link Language} and
 * source {@link Language}s or {@link RegExp}s.
 *
 * **Usage example**
 *
 * Use "uk" language when the {@link LanguageSource} provides either "ru" or "be":
 *
 * ```ts
 * TranslationModule.forRoot(() => ({
 *   language: {
 *     default: 'en',
 *     supported: ['en', 'uk', 'pl', 'lv', 'lt'],
 *     mapping: {
 *       'uk': ['ru', 'be']
 *     }
 *   }
 * }));
 */
export type LanguageMapping = Record<
  Language,
  ReadonlyArray<Language | RegExp>
>;
