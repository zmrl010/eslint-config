/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
 * @see https://typescript-eslint.io/rules/no-inferrable-types
 *
 * @minItems 1
 */
export type NoInferrableTypes =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreParameters?: boolean;
        ignoreProperties?: boolean;
      }
    ];
