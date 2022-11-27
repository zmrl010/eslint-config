/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Disallow certain types in boolean expressions
 * @see https://typescript-eslint.io/rules/strict-boolean-expressions
 */
export type StrictBooleanExpressions = 'off' | StrictBooleanExpressions0;
