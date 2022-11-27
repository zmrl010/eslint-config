/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce consistent usage of type assertions
 * @see https://typescript-eslint.io/rules/consistent-type-assertions
 */
export type ConsistentTypeAssertions = 'off' | ConsistentTypeAssertions0;
