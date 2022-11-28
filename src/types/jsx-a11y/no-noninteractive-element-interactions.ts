/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoNoninteractiveElementInteractions0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        handlers?: string[];
        [k: string]: unknown;
      }
    ];

/**
 * Non-interactive elements should not be assigned mouse or keyboard event listeners.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md
 */
export type NoNoninteractiveElementInteractions =
  | 'off'
  | NoNoninteractiveElementInteractions0;
