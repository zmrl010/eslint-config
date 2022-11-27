
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PaddedBlocks0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never')
        | {
            blocks?: 'always' | 'never';
            switches?: 'always' | 'never';
            classes?: 'always' | 'never';
          }
      )
    ]
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never')
        | {
            blocks?: 'always' | 'never';
            switches?: 'always' | 'never';
            classes?: 'always' | 'never';
          }
      ),
      {
        allowSingleLineBlocks?: boolean;
      }
    ];

export type PaddedBlocks = 'off' | PaddedBlocks0;
