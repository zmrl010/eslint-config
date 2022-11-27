/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ClickEventsHaveKeyEvents0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: unknown;
      }
    ];

/**
 * click-events-have-key-events
 * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/click-events-have-key-events.md
 */
export type ClickEventsHaveKeyEvents = 'off' | ClickEventsHaveKeyEvents0;
