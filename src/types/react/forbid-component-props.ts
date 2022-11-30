/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type ForbidComponentProps =
  | 'off'
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
              [k: string]: unknown | undefined;
            }
        )[];
        [k: string]: unknown | undefined;
      }
    ];
