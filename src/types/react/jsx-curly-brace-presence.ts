
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxCurlyBracePresence0 =
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

export type JsxCurlyBracePresence = 'off' | JsxCurlyBracePresence0;
