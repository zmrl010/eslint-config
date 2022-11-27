
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type BanTsComment0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        'ts-expect-error'?: DirectiveConfigSchema;
        'ts-ignore'?: DirectiveConfigSchema;
        'ts-nocheck'?: DirectiveConfigSchema;
        'ts-check'?: DirectiveConfigSchema;
        minimumDescriptionLength?: number;
      }
    ];
type DirectiveConfigSchema =
  | boolean
  | 'allow-with-description'
  | {
      descriptionFormat?: string;
      [k: string]: unknown;
    };

export type BanTsComment = 'off' | BanTsComment0;
