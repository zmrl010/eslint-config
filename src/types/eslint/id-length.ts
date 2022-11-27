
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type IdLength = 'off' | IdLength0;
