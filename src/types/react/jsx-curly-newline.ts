/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type JsxCurlyNewline =
  | 'off'
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
