/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type IdLength0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        min?: number;
        max?: number;
        exceptions?: string[];
        exceptionPatterns?: string[];
        properties?: 'always' | 'never';
      }
    ];

/**
 * Enforce minimum and maximum identifier lengths
 * @see https://eslint.org/docs/rules/id-length
 */
export type IdLength = 'off' | IdLength0;
