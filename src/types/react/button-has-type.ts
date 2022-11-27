/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ButtonHasType0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        button?: boolean;
        submit?: boolean;
        reset?: boolean;
      }
    ];

/**
 * Disallow usage of `button` elements without an explicit `type` attribute
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md
 */
export type ButtonHasType = 'off' | ButtonHasType0;
