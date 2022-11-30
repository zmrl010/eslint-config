/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

export type JsxBooleanValue =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always' | 'never']
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always']
      | [
          'off' | 'error' | 'warn',
          'always',
          {
            never?: string[];
          }
        ]
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'never']
      | [
          'off' | 'error' | 'warn',
          'never',
          {
            always?: string[];
          }
        ]
    );
