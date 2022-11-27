
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxNoScriptUrl0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        name: string;
        props: string[];
      }[]
    ];

export type JsxNoScriptUrl = 'off' | JsxNoScriptUrl0;
