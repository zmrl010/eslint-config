
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMeaninglessVoidOperator0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkNever?: boolean;
      }
    ];

export type NoMeaninglessVoidOperator = 'off' | NoMeaninglessVoidOperator0;
