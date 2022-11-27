/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce consistent spacing inside array brackets
 * @see https://eslint.org/docs/rules/array-bracket-spacing
 */
export type ArrayBracketSpacing = 'off' | ArrayBracketSpacing0;
