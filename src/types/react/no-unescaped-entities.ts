/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnescapedEntities0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              char?: string;
              alternatives?: string[];
              [k: string]: unknown;
            }
        )[];
      }
    ];

/**
 * Disallow unescaped HTML entities from appearing in markup
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md
 */
export type NoUnescapedEntities = 'off' | NoUnescapedEntities0;
