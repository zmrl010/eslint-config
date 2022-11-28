/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferPresenceQueries0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        presence?: boolean;
        absence?: boolean;
      }
    ];

/**
 * Ensure appropriate `get*`/`query*` queries are used with their respective matchers
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-presence-queries.md
 */
export type PreferPresenceQueries = 'off' | PreferPresenceQueries0;
