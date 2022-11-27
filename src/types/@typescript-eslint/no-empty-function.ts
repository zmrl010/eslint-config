/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoEmptyFunction0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: (
          | 'functions'
          | 'arrowFunctions'
          | 'generatorFunctions'
          | 'methods'
          | 'generatorMethods'
          | 'getters'
          | 'setters'
          | 'constructors'
          | 'private-constructors'
          | 'protected-constructors'
          | 'asyncFunctions'
          | 'asyncMethods'
          | 'decoratedFunctions'
          | 'overrideMethods'
        )[];
      }
    ];

/**
 * Disallow empty functions
 * @see https://typescript-eslint.io/rules/no-empty-function
 */
export type NoEmptyFunction = 'off' | NoEmptyFunction0;
