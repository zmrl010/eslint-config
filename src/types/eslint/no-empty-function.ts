
/**
 * THIS FILE IS AUTO-GENERATED.
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
          | 'asyncFunctions'
          | 'asyncMethods'
        )[];
      }
    ];

export type NoEmptyFunction = 'off' | NoEmptyFunction0;
