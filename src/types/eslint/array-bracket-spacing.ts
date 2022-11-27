
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ArrayBracketSpacing0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        singleValue?: boolean;
        objectsInArrays?: boolean;
        arraysInArrays?: boolean;
      }
    ];

export type ArrayBracketSpacing = 'off' | ArrayBracketSpacing0;
