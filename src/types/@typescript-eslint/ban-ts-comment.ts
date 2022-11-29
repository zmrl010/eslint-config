/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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
      [k: string]: unknown | undefined;
    };

/**
 * Disallow `@ts-<directive>` comments or require descriptions after directives
 * @see https://typescript-eslint.io/rules/ban-ts-comment
 */
export type BanTsComment = 'off' | BanTsComment0;
