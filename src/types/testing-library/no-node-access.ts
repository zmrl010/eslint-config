/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow direct Node access
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md
 *
 * @minItems 1
 */
export type NoNodeAccess =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowContainerFirstChild?: boolean;
        [k: string]: unknown | undefined;
      }
    ];
