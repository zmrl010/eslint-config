/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type JsxNoBind =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowArrowFunctions?: boolean;
        allowBind?: boolean;
        allowFunctions?: boolean;
        ignoreRefs?: boolean;
        ignoreDOMComponents?: boolean;
      }
    ];
