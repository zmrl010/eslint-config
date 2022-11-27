/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ArrayElementNewline0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | BasicConfig
        | {
            ArrayExpression?: BasicConfig;
            ArrayPattern?: BasicConfig;
          }
      )
    ];
type BasicConfig =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

/**
 * Enforce line breaks after each array element
 * @see https://eslint.org/docs/rules/array-element-newline
 */
export type ArrayElementNewline = 'off' | ArrayElementNewline0;
