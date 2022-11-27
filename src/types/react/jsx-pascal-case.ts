/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxPascalCase0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAllCaps?: boolean;
        allowLeadingUnderscore?: boolean;
        allowNamespace?: boolean;
        /**
         * @minItems 0
         */
        ignore?: [] | [string];
      }
    ];

/**
 * Enforce PascalCase for user-defined JSX components
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md
 */
export type JsxPascalCase = 'off' | JsxPascalCase0;
