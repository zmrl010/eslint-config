
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ForbidForeignPropTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowInPropTypes?: boolean;
      }
    ];

export type ForbidForeignPropTypes = 'off' | ForbidForeignPropTypes0;
