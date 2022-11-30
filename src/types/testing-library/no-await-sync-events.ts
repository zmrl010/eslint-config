/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow unnecessary `await` for sync events
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md
 *
 * @minItems 1
 */
export type NoAwaitSyncEvents =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        eventModules?: [
          'fire-event' | 'user-event',
          ...('fire-event' | 'user-event')[]
        ];
      }
    ];
