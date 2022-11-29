/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxCurlySpacing0 =
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
type BasicConfigOrBoolean = BasicConfig | boolean;

interface BasicConfig {
  when?: 'always' | 'never';
  allowMultiline?: boolean;
  spacing?: {
    objectLiterals?: 'always' | 'never';
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}

/**
 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md
 */
export type JsxCurlySpacing = 'off' | JsxCurlySpacing0;
