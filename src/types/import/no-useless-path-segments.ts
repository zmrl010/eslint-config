/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-useless-path-segments.md
 *
 * @minItems 1
 */
export type NoUselessPathSegments =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
        noUselessIndex?: boolean;
      }
    ];
