/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

export type NoCommonjs =
  | 'off'
  | (
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
        ]
    );
