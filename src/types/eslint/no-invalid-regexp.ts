
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInvalidRegexp0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowConstructorFlags?: string[];
      }
    ];

export type NoInvalidRegexp = 'off' | NoInvalidRegexp0;
