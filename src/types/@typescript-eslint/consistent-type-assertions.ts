/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent usage of type assertions
 * @see https://typescript-eslint.io/rules/consistent-type-assertions
 *
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
