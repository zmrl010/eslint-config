
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type DynamicImportChunkname0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        importFunctions?: string[];
        webpackChunknameFormat?: string;
        [k: string]: unknown;
      }
    ];

export type DynamicImportChunkname = 'off' | DynamicImportChunkname0;
