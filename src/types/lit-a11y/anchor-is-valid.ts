
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type AnchorIsValid0 =
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
        [k: string]: unknown;
      }
    ];

export type AnchorIsValid = 'off' | AnchorIsValid0;
