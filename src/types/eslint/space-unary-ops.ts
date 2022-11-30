/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent spacing before or after unary operators
 * @see https://eslint.org/docs/rules/space-unary-ops
 *
 * @minItems 1
 */
export type SpaceUnaryOps =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        words?: boolean;
        nonwords?: boolean;
        overrides?: {
          [k: string]: boolean | undefined;
        };
      }
    ];
