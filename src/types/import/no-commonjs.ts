/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-commonjs.md
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
