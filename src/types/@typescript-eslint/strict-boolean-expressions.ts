
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type StrictBooleanExpressions0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowString?: boolean;
        allowNumber?: boolean;
        allowNullableObject?: boolean;
        allowNullableBoolean?: boolean;
        allowNullableString?: boolean;
        allowNullableNumber?: boolean;
        allowAny?: boolean;
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
      }
    ];

export type StrictBooleanExpressions = 'off' | StrictBooleanExpressions0;
