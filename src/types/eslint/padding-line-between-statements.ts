/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PaddingLineBetweenStatements0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        blankLine: PaddingType;
        prev: StatementType;
        next: StatementType;
      }
    ];
type PaddingType = 'any' | 'never' | 'always';
type StatementType =
  | (
      | '*'
      | 'block-like'
      | 'cjs-export'
      | 'cjs-import'
      | 'directive'
      | 'expression'
      | 'iife'
      | 'multiline-block-like'
      | 'multiline-expression'
      | 'multiline-const'
      | 'multiline-let'
      | 'multiline-var'
      | 'singleline-const'
      | 'singleline-let'
      | 'singleline-var'
      | 'block'
      | 'empty'
      | 'function'
      | 'break'
      | 'case'
      | 'class'
      | 'const'
      | 'continue'
      | 'debugger'
      | 'default'
      | 'do'
      | 'export'
      | 'for'
      | 'if'
      | 'import'
      | 'let'
      | 'return'
      | 'switch'
      | 'throw'
      | 'try'
      | 'var'
      | 'while'
      | 'with'
    )
  | [
      (
        | '*'
        | 'block-like'
        | 'cjs-export'
        | 'cjs-import'
        | 'directive'
        | 'expression'
        | 'iife'
        | 'multiline-block-like'
        | 'multiline-expression'
        | 'multiline-const'
        | 'multiline-let'
        | 'multiline-var'
        | 'singleline-const'
        | 'singleline-let'
        | 'singleline-var'
        | 'block'
        | 'empty'
        | 'function'
        | 'break'
        | 'case'
        | 'class'
        | 'const'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'do'
        | 'export'
        | 'for'
        | 'if'
        | 'import'
        | 'let'
        | 'return'
        | 'switch'
        | 'throw'
        | 'try'
        | 'var'
        | 'while'
        | 'with'
      ),
      ...(
        | '*'
        | 'block-like'
        | 'cjs-export'
        | 'cjs-import'
        | 'directive'
        | 'expression'
        | 'iife'
        | 'multiline-block-like'
        | 'multiline-expression'
        | 'multiline-const'
        | 'multiline-let'
        | 'multiline-var'
        | 'singleline-const'
        | 'singleline-let'
        | 'singleline-var'
        | 'block'
        | 'empty'
        | 'function'
        | 'break'
        | 'case'
        | 'class'
        | 'const'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'do'
        | 'export'
        | 'for'
        | 'if'
        | 'import'
        | 'let'
        | 'return'
        | 'switch'
        | 'throw'
        | 'try'
        | 'var'
        | 'while'
        | 'with'
      )[]
    ];

/**
 * Require or disallow padding lines between statements
 * @see https://eslint.org/docs/rules/padding-line-between-statements
 */
export type PaddingLineBetweenStatements =
  | 'off'
  | PaddingLineBetweenStatements0;
