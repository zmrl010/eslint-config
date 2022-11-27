
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoFallthrough0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commentPattern?: string;
        allowEmptyCase?: boolean;
      }
    ];

export type NoFallthrough = 'off' | NoFallthrough0;
