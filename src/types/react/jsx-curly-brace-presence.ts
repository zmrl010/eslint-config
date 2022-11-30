/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type JsxCurlyBracePresence =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            props?: 'always' | 'never' | 'ignore';
            children?: 'always' | 'never' | 'ignore';
            propElementValues?: 'always' | 'never' | 'ignore';
          }
        | ('always' | 'never' | 'ignore')
      )
    ];
