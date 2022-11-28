/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { AwaitAsyncQuery } from '../testing-library/await-async-query.js';
import type { AwaitAsyncUtils } from '../testing-library/await-async-utils.js';
import type { AwaitFireEvent } from '../testing-library/await-fire-event.js';
import type { ConsistentDataTestid } from '../testing-library/consistent-data-testid.js';
import type { NoAwaitSyncEvents } from '../testing-library/no-await-sync-events.js';
import type { NoAwaitSyncQuery } from '../testing-library/no-await-sync-query.js';
import type { NoContainer } from '../testing-library/no-container.js';
import type { NoDebuggingUtils } from '../testing-library/no-debugging-utils.js';
import type { NoDomImport } from '../testing-library/no-dom-import.js';
import type { NoGlobalRegexpFlagInQuery } from '../testing-library/no-global-regexp-flag-in-query.js';
import type { NoManualCleanup } from '../testing-library/no-manual-cleanup.js';
import type { NoNodeAccess } from '../testing-library/no-node-access.js';
import type { NoPromiseInFireEvent } from '../testing-library/no-promise-in-fire-event.js';
import type { NoRenderInSetup } from '../testing-library/no-render-in-setup.js';
import type { NoUnnecessaryAct } from '../testing-library/no-unnecessary-act.js';
import type { NoWaitForEmptyCallback } from '../testing-library/no-wait-for-empty-callback.js';
import type { NoWaitForMultipleAssertions } from '../testing-library/no-wait-for-multiple-assertions.js';
import type { NoWaitForSideEffects } from '../testing-library/no-wait-for-side-effects.js';
import type { NoWaitForSnapshot } from '../testing-library/no-wait-for-snapshot.js';
import type { PreferExplicitAssert } from '../testing-library/prefer-explicit-assert.js';
import type { PreferFindBy } from '../testing-library/prefer-find-by.js';
import type { PreferPresenceQueries } from '../testing-library/prefer-presence-queries.js';
import type { PreferQueryByDisappearance } from '../testing-library/prefer-query-by-disappearance.js';
import type { PreferScreenQueries } from '../testing-library/prefer-screen-queries.js';
import type { PreferUserEvent } from '../testing-library/prefer-user-event.js';
import type { PreferWaitFor } from '../testing-library/prefer-wait-for.js';
import type { RenderResultNamingConvention } from '../testing-library/render-result-naming-convention.js';

/**
 * `eslint-plugin-testing-library` Rules
 */
export interface TestingLibrary {
  /**
   * Enforce promises from async queries to be handled
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-query.md
   */
  'testing-library/await-async-query': AwaitAsyncQuery;
  /**
   * Enforce promises from async utils to be awaited properly
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-utils.md
   */
  'testing-library/await-async-utils': AwaitAsyncUtils;
  /**
   * Enforce promises from `fireEvent` methods to be handled
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-fire-event.md
   */
  'testing-library/await-fire-event': AwaitFireEvent;
  /**
   * Ensures consistent usage of `data-testid`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/consistent-data-testid.md
   */
  'testing-library/consistent-data-testid': ConsistentDataTestid;
  /**
   * Disallow unnecessary `await` for sync events
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md
   */
  'testing-library/no-await-sync-events': NoAwaitSyncEvents;
  /**
   * Disallow unnecessary `await` for sync queries
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-query.md
   */
  'testing-library/no-await-sync-query': NoAwaitSyncQuery;
  /**
   * Disallow the use of `container` methods
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-container.md
   */
  'testing-library/no-container': NoContainer;
  /**
   * Disallow the use of debugging utilities like `debug`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-debugging-utils.md
   */
  'testing-library/no-debugging-utils': NoDebuggingUtils;
  /**
   * Disallow importing from DOM Testing Library
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-dom-import.md
   */
  'testing-library/no-dom-import': NoDomImport;
  /**
   * Disallow the use of the global RegExp flag (/g) in queries
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-global-regexp-flag-in-query.md
   */
  'testing-library/no-global-regexp-flag-in-query': NoGlobalRegexpFlagInQuery;
  /**
   * Disallow the use of `cleanup`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-manual-cleanup.md
   */
  'testing-library/no-manual-cleanup': NoManualCleanup;
  /**
   * Disallow direct Node access
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md
   */
  'testing-library/no-node-access': NoNodeAccess;
  /**
   * Disallow the use of promises passed to a `fireEvent` method
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-promise-in-fire-event.md
   */
  'testing-library/no-promise-in-fire-event': NoPromiseInFireEvent;
  /**
   * Disallow the use of `render` in testing frameworks setup functions
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-setup.md
   */
  'testing-library/no-render-in-setup': NoRenderInSetup;
  /**
   * Disallow wrapping Testing Library utils or empty callbacks in `act`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md
   */
  'testing-library/no-unnecessary-act': NoUnnecessaryAct;
  /**
   * Disallow empty callbacks for `waitFor` and `waitForElementToBeRemoved`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-empty-callback.md
   */
  'testing-library/no-wait-for-empty-callback': NoWaitForEmptyCallback;
  /**
   * Disallow the use of multiple `expect` calls inside `waitFor`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-multiple-assertions.md
   */
  'testing-library/no-wait-for-multiple-assertions': NoWaitForMultipleAssertions;
  /**
   * Disallow the use of side effects in `waitFor`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-side-effects.md
   */
  'testing-library/no-wait-for-side-effects': NoWaitForSideEffects;
  /**
   * Ensures no snapshot is generated inside of a `waitFor` call
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-snapshot.md
   */
  'testing-library/no-wait-for-snapshot': NoWaitForSnapshot;
  /**
   * Suggest using explicit assertions rather than standalone queries
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md
   */
  'testing-library/prefer-explicit-assert': PreferExplicitAssert;
  /**
   * Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-find-by.md
   */
  'testing-library/prefer-find-by': PreferFindBy;
  /**
   * Ensure appropriate `get*`/`query*` queries are used with their respective matchers
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-presence-queries.md
   */
  'testing-library/prefer-presence-queries': PreferPresenceQueries;
  /**
   * Suggest using `queryBy*` queries when waiting for disappearance
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-by-disappearance.md
   */
  'testing-library/prefer-query-by-disappearance': PreferQueryByDisappearance;
  /**
   * Suggest using `screen` while querying
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-screen-queries.md
   */
  'testing-library/prefer-screen-queries': PreferScreenQueries;
  /**
   * Suggest using `userEvent` over `fireEvent` for simulating user interactions
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md
   */
  'testing-library/prefer-user-event': PreferUserEvent;
  /**
   * Use `waitFor` instead of deprecated wait methods
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-wait-for.md
   */
  'testing-library/prefer-wait-for': PreferWaitFor;
  /**
   * Enforce a valid naming for return value from `render`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/render-result-naming-convention.md
   */
  'testing-library/render-result-naming-convention': RenderResultNamingConvention;
}
