/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type LinesAroundComment0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        beforeBlockComment?: boolean;
        afterBlockComment?: boolean;
        beforeLineComment?: boolean;
        afterLineComment?: boolean;
        allowBlockStart?: boolean;
        allowBlockEnd?: boolean;
        allowClassStart?: boolean;
        allowClassEnd?: boolean;
        allowObjectStart?: boolean;
        allowObjectEnd?: boolean;
        allowArrayStart?: boolean;
        allowArrayEnd?: boolean;
        ignorePattern?: string;
        applyDefaultIgnorePatterns?: boolean;
      }
    ];

/**
 * Require empty lines around comments
 * @see https://eslint.org/docs/rules/lines-around-comment
 */
export type LinesAroundComment = 'off' | LinesAroundComment0;
