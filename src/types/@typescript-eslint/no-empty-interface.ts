/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoEmptyInterface0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowSingleExtends?: boolean;
      }
    ];

/**
 * Disallow the declaration of empty interfaces
 * @see https://typescript-eslint.io/rules/no-empty-interface
 */
export type NoEmptyInterface = 'off' | NoEmptyInterface0;
