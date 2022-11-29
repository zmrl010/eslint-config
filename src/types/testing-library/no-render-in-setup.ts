/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRenderInSetup0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowTestingFrameworkSetupHook?: 'beforeEach' | 'beforeAll';
        [k: string]: unknown | undefined;
      }
    ];

/**
 * Disallow the use of `render` in testing frameworks setup functions
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-setup.md
 */
export type NoRenderInSetup = 'off' | NoRenderInSetup0;
