
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type FuncNameMatching0 =
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
    ];

export type FuncNameMatching = 'off' | FuncNameMatching0;
