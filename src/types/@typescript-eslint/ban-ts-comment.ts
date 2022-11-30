/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type BanTsComment =
  | 'off'
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
export type DirectiveConfigSchema =
  | boolean
  | 'allow-with-description'
  | {
      descriptionFormat?: string;
      [k: string]: unknown | undefined;
    };
