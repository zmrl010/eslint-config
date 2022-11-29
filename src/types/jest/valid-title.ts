/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ValidTitle0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreTypeOfDescribeName?: boolean;
        disallowedWords?: string[];
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^must(?:Not)?Match$".
         */
        [k: string]:
          | undefined
          | boolean
          | string[]
          | string
          | [string]
          | [string, string]
          | {
              [k: string]: string | [string] | [string, string];
            };
      }
    ];

/**
 * Enforce valid titles
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/valid-title.md
 */
export type ValidTitle = 'off' | ValidTitle0;
