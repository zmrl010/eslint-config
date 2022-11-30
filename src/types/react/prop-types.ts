/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow missing props validation in a React component definition
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md
 *
 * @minItems 1
 */
export type PropTypes =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: string[];
        customValidators?: string[];
        skipUndeclared?: boolean;
      }
    ];
