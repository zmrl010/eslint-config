/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type JsxPropsNoSpreading =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        html?: 'enforce' | 'ignore';
        custom?: 'enforce' | 'ignore';
        exceptions?: string[];
        [k: string]: unknown | undefined;
      } & {
        [k: string]: unknown | undefined;
      }
    ];
