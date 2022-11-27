
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RequireDefaultProps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbidDefaultForRequired?: boolean;
        classes?: {
          [k: string]: unknown;
        };
        functions?: {
          [k: string]: unknown;
        };
        ignoreFunctionalComponents?: boolean;
      }
    ];

export type RequireDefaultProps = 'off' | RequireDefaultProps0;
