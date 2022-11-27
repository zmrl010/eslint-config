/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SpaceBeforeBlocks0 =
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

/**
 * Enforce consistent spacing before blocks
 * @see https://typescript-eslint.io/rules/space-before-blocks
 */
export type SpaceBeforeBlocks = 'off' | SpaceBeforeBlocks0;
