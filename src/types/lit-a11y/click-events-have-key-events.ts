/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * click-events-have-key-events
 * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/click-events-have-key-events.md
 *
 * @minItems 1
 */
export type ClickEventsHaveKeyEvents =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: unknown | undefined;
      }
    ];
