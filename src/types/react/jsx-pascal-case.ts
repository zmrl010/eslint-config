
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxPascalCase0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAllCaps?: boolean;
        allowLeadingUnderscore?: boolean;
        allowNamespace?: boolean;
        /**
         * @minItems 0
         */
        ignore?: [] | [string];
      }
    ];

export type JsxPascalCase = 'off' | JsxPascalCase0;
