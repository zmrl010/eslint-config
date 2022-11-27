
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoStringRefs0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        noTemplateLiterals?: boolean;
      }
    ];

export type NoStringRefs = 'off' | NoStringRefs0;
