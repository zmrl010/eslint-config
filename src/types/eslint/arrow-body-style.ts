/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type ArrowBodyStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'as-needed']
  | [
      'off' | 'error' | 'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral?: boolean;
      }
    ];

/**
 * Require braces around arrow function bodies
 * @see https://eslint.org/docs/rules/arrow-body-style
 */
export type ArrowBodyStyle = 'off' | ArrowBodyStyle0;
