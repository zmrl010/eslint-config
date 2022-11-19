declare module 'eslint' {
  import { TSESLint } from '@typescript-eslint/utils';

  export const Linter: TSESLint.Linter;
  export const RuleTester: TSESLint.RuleTester;
  export const SourceCode: TSESLint.SourceCode;
  export const CLIEngine: typeof TSESLint.CLIEngine;
  export const ESLint: TSESLint.ESLint;
  export namespace Rule {
    type RuleModule = TSESLint.RuleModule<string>;
  }
}
