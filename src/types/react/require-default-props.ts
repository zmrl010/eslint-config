/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RequireDefaultProps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbidDefaultForRequired?: boolean;
        classes?: {
          [k: string]: unknown | undefined;
        };
        functions?: {
          [k: string]: unknown | undefined;
        };
        ignoreFunctionalComponents?: boolean;
      }
    ];

/**
 * Enforce a defaultProps definition for every prop that is not a required prop
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md
 */
export type RequireDefaultProps = 'off' | RequireDefaultProps0;
