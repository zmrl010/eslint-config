/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Suggest using `userEvent` over `fireEvent` for simulating user interactions
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md
 *
 * @minItems 1
 */
export type PreferUserEvent =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowedMethods?: unknown[];
        [k: string]: unknown | undefined;
      }
    ];
