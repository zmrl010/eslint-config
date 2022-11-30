/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow passing of children as props
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md
 *
 * @minItems 1
 */
export type NoChildrenProp =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowFunctions?: boolean;
      }
    ];
