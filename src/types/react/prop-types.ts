
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PropTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: string[];
        customValidators?: string[];
        skipUndeclared?: boolean;
      }
    ];

export type PropTypes = 'off' | PropTypes0;
