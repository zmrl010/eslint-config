/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type DefaultPropsMatchPropTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowRequiredDefaults?: boolean;
      }
    ];

/**
 * Enforce all defaultProps have a corresponding non-required PropType
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md
 */
export type DefaultPropsMatchPropTypes = 'off' | DefaultPropsMatchPropTypes0;
