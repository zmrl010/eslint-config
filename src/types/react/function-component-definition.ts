/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type FunctionComponentDefinition0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        namedComponents?:
          | ('function-declaration' | 'arrow-function' | 'function-expression')
          | (
              | 'function-declaration'
              | 'arrow-function'
              | 'function-expression'
            )[];
        unnamedComponents?:
          | ('arrow-function' | 'function-expression')
          | ('arrow-function' | 'function-expression')[];
        [k: string]: unknown;
      }
    ];

/**
 * Enforce a specific function type for function components
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md
 */
export type FunctionComponentDefinition = 'off' | FunctionComponentDefinition0;
