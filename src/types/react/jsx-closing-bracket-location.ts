
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxClosingBracketLocation0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('after-props' | 'props-aligned' | 'tag-aligned' | 'line-aligned')
        | {
            location?:
              | 'after-props'
              | 'props-aligned'
              | 'tag-aligned'
              | 'line-aligned';
          }
        | {
            nonEmpty?:
              | 'after-props'
              | 'props-aligned'
              | 'tag-aligned'
              | 'line-aligned'
              | false;
            selfClosing?:
              | 'after-props'
              | 'props-aligned'
              | 'tag-aligned'
              | 'line-aligned'
              | false;
          }
      )
    ];

export type JsxClosingBracketLocation = 'off' | JsxClosingBracketLocation0;
