/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow empty functions
 * @see https://eslint.org/docs/rules/no-empty-function
 *
 * @minItems 1
 */
export type NoEmptyFunction =
  | 'off'
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
          | 'asyncFunctions'
          | 'asyncMethods'
        )[];
      }
    ];
