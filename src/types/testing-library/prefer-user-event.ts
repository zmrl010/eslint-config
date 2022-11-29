/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferUserEvent0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowedMethods?: unknown[];
        [k: string]: unknown | undefined;
      }
    ];

/**
 * Suggest using `userEvent` over `fireEvent` for simulating user interactions
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md
 */
export type PreferUserEvent = 'off' | PreferUserEvent0;
