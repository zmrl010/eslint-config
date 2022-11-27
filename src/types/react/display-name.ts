/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type DisplayName0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreTranspilerName?: boolean;
      }
    ];

/**
 * Disallow missing displayName in a React component definition
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md
 */
export type DisplayName = 'off' | DisplayName0;
