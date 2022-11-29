/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoDistractingElements0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 0
         */
        elements?: ('marquee' | 'blink')[];
        [k: string]: unknown | undefined;
      }
    ];

/**
 * Enforce distracting elements are not used.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md
 */
export type NoDistractingElements = 'off' | NoDistractingElements0;
