/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require empty lines around comments
 * @see https://typescript-eslint.io/rules/lines-around-comment
 *
 * @minItems 1
 */
export type LinesAroundComment =
  | 'off'
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
        allowInterfaceStart?: boolean;
        allowInterfaceEnd?: boolean;
        allowTypeStart?: boolean;
        allowTypeEnd?: boolean;
        allowEnumStart?: boolean;
        allowEnumEnd?: boolean;
        allowModuleStart?: boolean;
        allowModuleEnd?: boolean;
        ignorePattern?: string;
        applyDefaultIgnorePatterns?: boolean;
      }
    ];
