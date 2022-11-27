/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Disallow certain elements
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md
 */
export type ForbidElements = 'off' | ForbidElements0;
