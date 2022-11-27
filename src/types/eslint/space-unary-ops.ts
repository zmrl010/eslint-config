/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce consistent spacing before or after unary operators
 * @see https://eslint.org/docs/rules/space-unary-ops
 */
export type SpaceUnaryOps = 'off' | SpaceUnaryOps0;
