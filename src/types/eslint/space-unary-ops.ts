
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SpaceUnaryOps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        words?: boolean;
        nonwords?: boolean;
        overrides?: {
          [k: string]: boolean;
        };
      }
    ];

export type SpaceUnaryOps = 'off' | SpaceUnaryOps0;
