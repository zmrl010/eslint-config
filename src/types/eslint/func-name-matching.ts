/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require function names to match the name of the variable or property to which they are assigned
 * @see https://eslint.org/docs/rules/func-name-matching
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
