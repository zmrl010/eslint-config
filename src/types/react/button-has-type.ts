/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow usage of `button` elements without an explicit `type` attribute
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md
 *
 * @minItems 1
 */
export type ButtonHasType =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        button?: boolean;
        submit?: boolean;
        reset?: boolean;
      }
    ];
