/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Yoda0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        exceptRange?: boolean;
        onlyEquality?: boolean;
      }
    ];

/**
 * Require or disallow "Yoda" conditions
 * @see https://eslint.org/docs/rules/yoda
 */
export type Yoda = 'off' | Yoda0;
