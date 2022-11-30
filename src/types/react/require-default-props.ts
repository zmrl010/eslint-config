/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type RequireDefaultProps =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbidDefaultForRequired?: boolean;
        classes?: {
          [k: string]: unknown | undefined;
        };
        functions?: {
          [k: string]: unknown | undefined;
        };
        ignoreFunctionalComponents?: boolean;
      }
    ];
