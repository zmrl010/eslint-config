/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ForbidPropTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: string[];
        checkContextTypes?: boolean;
        checkChildContextTypes?: boolean;
        [k: string]: unknown;
      }
    ];

/**
 * Disallow certain propTypes
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md
 */
export type ForbidPropTypes = 'off' | ForbidPropTypes0;
