/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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
      }
    ];

/**
 * Disallow magic numbers
 * @see https://eslint.org/docs/rules/no-magic-numbers
 */
export type NoMagicNumbers = 'off' | NoMagicNumbers0;
