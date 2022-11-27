
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ForbidComponentProps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              propName?: string;
              allowedFor?: string[];
              message?: string;
              [k: string]: unknown;
            }
        )[];
        [k: string]: unknown;
      }
    ];

export type ForbidComponentProps = 'off' | ForbidComponentProps0;
