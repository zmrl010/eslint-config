/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type SpaceBeforeBlocks =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never')
        | {
            keywords?: 'always' | 'never' | 'off';
            functions?: 'always' | 'never' | 'off';
            classes?: 'always' | 'never' | 'off';
          }
      )
    ];
