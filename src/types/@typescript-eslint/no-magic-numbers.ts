/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow magic numbers
 * @see https://typescript-eslint.io/rules/no-magic-numbers
 *
 * @minItems 1
 */
export type NoMagicNumbers =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        detectObjects?: boolean;
        enforceConst?: boolean;
        ignore?: (number | string)[];
        ignoreArrayIndexes?: boolean;
        ignoreDefaultValues?: boolean;
        ignoreClassFieldInitialValues?: boolean;
        ignoreNumericLiteralTypes?: boolean;
        ignoreEnums?: boolean;
        ignoreReadonlyClassProperties?: boolean;
        ignoreTypeIndexes?: boolean;
      }
    ];
