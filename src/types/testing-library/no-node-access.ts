/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoNodeAccess0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowContainerFirstChild?: boolean;
        [k: string]: unknown;
      }
    ];

/**
 * Disallow direct Node access
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md
 */
export type NoNodeAccess = 'off' | NoNodeAccess0;
