/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow definitions of unused propTypes
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md
 *
 * @minItems 1
 */
export type NoUnusedPropTypes =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: string[];
        customValidators?: string[];
        skipShapeProps?: boolean;
      }
    ];
