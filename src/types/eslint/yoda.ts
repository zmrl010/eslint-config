/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow "Yoda" conditions
 * @see https://eslint.org/docs/rules/yoda
 *
 * @minItems 1
 */
export type Yoda =
  | 'off'
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
