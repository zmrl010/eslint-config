/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow spacing between function identifiers and their invocations
 * @see https://typescript-eslint.io/rules/func-call-spacing
 */
export type FuncCallSpacing =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'never']
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always']
      | [
          'off' | 'error' | 'warn',
          'always',
          {
            allowNewlines?: boolean;
          }
        ]
    );
