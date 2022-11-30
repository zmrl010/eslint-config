/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow missing displayName in a React component definition
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md
 *
 * @minItems 1
 */
export type DisplayName =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreTranspilerName?: boolean;
      }
    ];
