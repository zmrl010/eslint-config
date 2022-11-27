
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ForbidElements0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              element: string;
              message?: string;
            }
        )[];
      }
    ];

export type ForbidElements = 'off' | ForbidElements0;
