
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentTypeAssertions0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            assertionStyle: 'never';
          }
        | {
            assertionStyle: 'as' | 'angle-bracket';
            objectLiteralTypeAssertions?:
              | 'allow'
              | 'allow-as-parameter'
              | 'never';
          }
      )
    ];

export type ConsistentTypeAssertions = 'off' | ConsistentTypeAssertions0;
