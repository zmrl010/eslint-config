/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type DestructuringAssignment0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        ignoreClassFields?: boolean;
        destructureInSignature?: 'always' | 'ignore';
      }
    ];

/**
 * Enforce consistent usage of destructuring assignment of props, state, and context
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md
 */
export type DestructuringAssignment = 'off' | DestructuringAssignment0;
