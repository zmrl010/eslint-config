/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow wrapping Testing Library utils or empty callbacks in `act`
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md
 *
 * @minItems 1
 */
export type NoUnnecessaryAct =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        isStrict?: boolean;
        [k: string]: unknown | undefined;
      }
    ];
