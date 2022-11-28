/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnnecessaryAct0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        isStrict?: boolean;
        [k: string]: unknown;
      }
    ];

/**
 * Disallow wrapping Testing Library utils or empty callbacks in `act`
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md
 */
export type NoUnnecessaryAct = 'off' | NoUnnecessaryAct0;
