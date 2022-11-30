/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type JsxClosingBracketLocation =
  | 'off'
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
