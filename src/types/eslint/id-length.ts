/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type IdLength =
  | 'off'
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
