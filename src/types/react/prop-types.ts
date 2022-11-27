/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PropTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: string[];
        customValidators?: string[];
        skipUndeclared?: boolean;
      }
    ];

/**
 * Disallow missing props validation in a React component definition
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md
 */
export type PropTypes = 'off' | PropTypes0;
