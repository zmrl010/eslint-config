/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

export type ObjectShorthand =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | [
          'off' | 'error' | 'warn',
          (
            | 'always'
            | 'methods'
            | 'properties'
            | 'never'
            | 'consistent'
            | 'consistent-as-needed'
          )
        ]
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always' | 'methods' | 'properties']
      | [
          'off' | 'error' | 'warn',
          'always' | 'methods' | 'properties',
          {
            avoidQuotes?: boolean;
          }
        ]
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always' | 'methods']
      | [
          'off' | 'error' | 'warn',
          'always' | 'methods',
          {
            ignoreConstructors?: boolean;
            methodsIgnorePattern?: string;
            avoidQuotes?: boolean;
            avoidExplicitReturnArrows?: boolean;
          }
        ]
    );
