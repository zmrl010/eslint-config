/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RequireOptimization0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowDecorators?: string[];
      }
    ];

/**
 * Enforce React components to have a shouldComponentUpdate method
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md
 */
export type RequireOptimization = 'off' | RequireOptimization0;
