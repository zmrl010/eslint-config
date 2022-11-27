/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoConstantCondition0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkLoops?: boolean;
      }
    ];

/**
 * Disallow constant expressions in conditions
 * @see https://eslint.org/docs/rules/no-constant-condition
 */
export type NoConstantCondition = 'off' | NoConstantCondition0;
