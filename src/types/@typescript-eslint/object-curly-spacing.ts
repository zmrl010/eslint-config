/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent spacing inside braces
 * @see https://typescript-eslint.io/rules/object-curly-spacing
 *
 * @minItems 1
 */
export type ObjectCurlySpacing =
  | 'off'
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
