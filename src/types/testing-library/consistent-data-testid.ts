/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentDataTestid0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        testIdPattern: string;
        testIdAttribute?: string | string[];
      }
    ];

/**
 * Ensures consistent usage of `data-testid`
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/consistent-data-testid.md
 */
export type ConsistentDataTestid = 'off' | ConsistentDataTestid0;
