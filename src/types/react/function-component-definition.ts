/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type FunctionComponentDefinition =
  | 'off'
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
        [k: string]: unknown | undefined;
      }
    ];
