/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MouseEventsHaveKeyEvents0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: unknown;
      }
    ];

/**
 * mouse-events-have-key-events
 * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/mouse-events-have-key-events.md
 */
export type MouseEventsHaveKeyEvents = 'off' | MouseEventsHaveKeyEvents0;
