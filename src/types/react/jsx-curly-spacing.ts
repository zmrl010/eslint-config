/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type JsxCurlySpacing =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | (BasicConfig & {
            attributes?: BasicConfigOrBoolean;
            children?: BasicConfigOrBoolean;
            [k: string]: unknown | undefined;
          })
        | ('always' | 'never')
      )
    ]
  | [
      'off' | 'error' | 'warn',
      (
        | (BasicConfig & {
            attributes?: BasicConfigOrBoolean;
            children?: BasicConfigOrBoolean;
            [k: string]: unknown | undefined;
          })
        | ('always' | 'never')
      ),
      {
        allowMultiline?: boolean;
        spacing?: {
          objectLiterals?: 'always' | 'never';
          [k: string]: unknown | undefined;
        };
      }
    ];
export type BasicConfigOrBoolean = BasicConfig | boolean;

export interface BasicConfig {
  when?: 'always' | 'never';
  allowMultiline?: boolean;
  spacing?: {
    objectLiterals?: 'always' | 'never';
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
