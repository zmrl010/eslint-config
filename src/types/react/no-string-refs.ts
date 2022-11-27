/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoStringRefs0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        noTemplateLiterals?: boolean;
      }
    ];

/**
 * Disallow using string references
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md
 */
export type NoStringRefs = 'off' | NoStringRefs0;
