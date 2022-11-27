
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ForbidDomProps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              propName?: string;
              disallowedFor?: string[];
              message?: string;
              [k: string]: unknown;
            }
        )[];
      }
    ];

export type ForbidDomProps = 'off' | ForbidDomProps0;
