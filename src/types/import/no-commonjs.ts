
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type NoCommonjs0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'allow-primitive-modules']
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowPrimitiveModules?: boolean;
        allowRequire?: boolean;
        allowConditionalRequire?: boolean;
      }
    ];

export type NoCommonjs = 'off' | NoCommonjs0;
