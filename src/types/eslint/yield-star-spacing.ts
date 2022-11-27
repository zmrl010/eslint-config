/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type YieldStarSpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          }
      )
    ];

/**
 * Require or disallow spacing around the `*` in `yield*` expressions
 * @see https://eslint.org/docs/rules/yield-star-spacing
 */
export type YieldStarSpacing = 'off' | YieldStarSpacing0;
