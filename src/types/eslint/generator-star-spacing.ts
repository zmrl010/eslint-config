/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type GeneratorStarSpacing =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
            named?:
              | ('before' | 'after' | 'both' | 'neither')
              | {
                  before?: boolean;
                  after?: boolean;
                };
            anonymous?:
              | ('before' | 'after' | 'both' | 'neither')
              | {
                  before?: boolean;
                  after?: boolean;
                };
            method?:
              | ('before' | 'after' | 'both' | 'neither')
              | {
                  before?: boolean;
                  after?: boolean;
                };
          }
      )
    ];
