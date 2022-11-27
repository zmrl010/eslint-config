
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxNoTargetBlank0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowReferrer?: boolean;
        enforceDynamicLinks?: 'always' | 'never';
        warnOnSpreadAttributes?: boolean;
        links?: boolean;
        forms?: boolean;
      }
    ];

export type JsxNoTargetBlank = 'off' | JsxNoTargetBlank0;
