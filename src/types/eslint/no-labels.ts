/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoLabels0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowLoop?: boolean;
        allowSwitch?: boolean;
      }
    ];

/**
 * Disallow labeled statements
 * @see https://eslint.org/docs/rules/no-labels
 */
export type NoLabels = 'off' | NoLabels0;
