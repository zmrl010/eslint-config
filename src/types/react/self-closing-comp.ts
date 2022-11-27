/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SelfClosingComp0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        component?: boolean;
        html?: boolean;
      }
    ];

/**
 * Disallow extra closing tags for components without children
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md
 */
export type SelfClosingComp = 'off' | SelfClosingComp0;
