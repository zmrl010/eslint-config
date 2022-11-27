/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInferrableTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreParameters?: boolean;
        ignoreProperties?: boolean;
      }
    ];

/**
 * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
 * @see https://typescript-eslint.io/rules/no-inferrable-types
 */
export type NoInferrableTypes = 'off' | NoInferrableTypes0;
