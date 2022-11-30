/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow constant expressions in conditions
 * @see https://eslint.org/docs/rules/no-constant-condition
 *
 * @minItems 1
 */
export type NoConstantCondition =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkLoops?: boolean;
      }
    ];
