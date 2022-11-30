/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow the declaration of empty interfaces
 * @see https://typescript-eslint.io/rules/no-empty-interface
 *
 * @minItems 1
 */
export type NoEmptyInterface =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowSingleExtends?: boolean;
      }
    ];
