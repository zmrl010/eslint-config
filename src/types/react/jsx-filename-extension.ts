
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxFilenameExtension0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: 'always' | 'as-needed';
        extensions?: string[];
      }
    ];

export type JsxFilenameExtension = 'off' | JsxFilenameExtension0;
