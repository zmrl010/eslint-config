/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md
 *
 * @minItems 1
 */
export type MouseEventsHaveKeyEvents =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: unknown | undefined;
      }
    ];
