
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ValidTypeof0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        requireStringLiterals?: boolean;
      }
    ];

export type ValidTypeof = 'off' | ValidTypeof0;
