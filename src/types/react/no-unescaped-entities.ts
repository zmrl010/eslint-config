
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoUnescapedEntities = 'off' | NoUnescapedEntities0;
