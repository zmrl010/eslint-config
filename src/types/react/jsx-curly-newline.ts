
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxCurlyNewline0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('consistent' | 'never')
        | {
            singleline?: 'consistent' | 'require' | 'forbid';
            multiline?: 'consistent' | 'require' | 'forbid';
          }
      )
    ];

export type JsxCurlyNewline = 'off' | JsxCurlyNewline0;
