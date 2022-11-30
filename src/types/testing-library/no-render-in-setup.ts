/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow the use of `render` in testing frameworks setup functions
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-setup.md
 *
 * @minItems 1
 */
export type NoRenderInSetup =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowTestingFrameworkSetupHook?: 'beforeEach' | 'beforeAll';
        [k: string]: unknown | undefined;
      }
    ];
