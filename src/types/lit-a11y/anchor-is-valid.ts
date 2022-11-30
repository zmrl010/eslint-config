/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * anchor-is-valid
 * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/anchor-is-valid.md
 *
 * @minItems 1
 */
export type AnchorIsValid =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        aspects?: [
          'noHref' | 'invalidHref' | 'preferButton',
          ...('noHref' | 'invalidHref' | 'preferButton')[]
        ];
        allowHash?: boolean;
        [k: string]: unknown | undefined;
      }
    ];
