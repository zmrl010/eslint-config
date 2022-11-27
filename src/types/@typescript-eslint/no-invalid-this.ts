
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInvalidThis0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        capIsConstructor?: boolean;
      }
    ];

export type NoInvalidThis = 'off' | NoInvalidThis0;
