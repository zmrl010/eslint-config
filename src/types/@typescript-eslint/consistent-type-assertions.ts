/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type ConsistentTypeAssertions =
  | 'off'
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
