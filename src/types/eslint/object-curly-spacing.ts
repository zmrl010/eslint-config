/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ObjectCurlySpacing0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        arraysInObjects?: boolean;
        objectsInObjects?: boolean;
      }
    ];

/**
 * Enforce consistent spacing inside braces
 * @see https://eslint.org/docs/rules/object-curly-spacing
 */
export type ObjectCurlySpacing = 'off' | ObjectCurlySpacing0;
