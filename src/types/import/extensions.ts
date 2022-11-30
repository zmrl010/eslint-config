/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

export type Extensions =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always' | 'ignorePackages' | 'never']
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always' | 'ignorePackages' | 'never']
      | [
          'off' | 'error' | 'warn',
          'always' | 'ignorePackages' | 'never',
          {
            pattern?: {
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` ".*".
               */
              [k: string]: 'always' | 'ignorePackages' | 'never';
            };
            ignorePackages?: boolean;
            [k: string]: unknown | undefined;
          }
        ]
      | ['off' | 'error' | 'warn']
      | [
          'off' | 'error' | 'warn',
          {
            pattern?: {
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` ".*".
               */
              [k: string]: 'always' | 'ignorePackages' | 'never';
            };
            ignorePackages?: boolean;
            [k: string]: unknown | undefined;
          }
        ]
      | ['off' | 'error' | 'warn']
      | [
          'off' | 'error' | 'warn',
          {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` ".*".
             */
            [k: string]: 'always' | 'ignorePackages' | 'never';
          }
        ]
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always' | 'ignorePackages' | 'never']
      | [
          'off' | 'error' | 'warn',
          'always' | 'ignorePackages' | 'never',
          {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` ".*".
             */
            [k: string]: 'always' | 'ignorePackages' | 'never';
          }
        ]
    );
