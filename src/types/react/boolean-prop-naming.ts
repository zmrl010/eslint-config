/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type BooleanPropNaming0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        propTypeNames?: [string, ...string[]];
        rule?: string;
        message?: string;
        validateNested?: boolean;
      }
    ];

/**
 * Enforces consistent naming for boolean props
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md
 */
export type BooleanPropNaming = 'off' | BooleanPropNaming0;
