/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md
 *
 * @minItems 1
 */
export type NoStaticElementInteractions =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        handlers?: string[];
        [k: string]: unknown | undefined;
      }
    ];
