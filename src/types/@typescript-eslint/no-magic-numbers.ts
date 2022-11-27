
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMagicNumbers0 =
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

export type NoMagicNumbers = 'off' | NoMagicNumbers0;
