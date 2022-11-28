/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoAwaitSyncEvents0 =
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

/**
 * Disallow unnecessary `await` for sync events
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md
 */
export type NoAwaitSyncEvents = 'off' | NoAwaitSyncEvents0;
