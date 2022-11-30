/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

export type FuncNameMatching =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always' | 'never']
      | [
          'off' | 'error' | 'warn',
          'always' | 'never',
          {
            considerPropertyDescriptor?: boolean;
            includeCommonJSModuleExports?: boolean;
          }
        ]
      | ['off' | 'error' | 'warn']
      | [
          'off' | 'error' | 'warn',
          {
            considerPropertyDescriptor?: boolean;
            includeCommonJSModuleExports?: boolean;
          }
        ]
    );
