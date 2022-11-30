/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type SpacedComment =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        exceptions?: string[];
        markers?: string[];
        line?: {
          exceptions?: string[];
          markers?: string[];
        };
        block?: {
          exceptions?: string[];
          markers?: string[];
          balanced?: boolean;
        };
      }
    ];
