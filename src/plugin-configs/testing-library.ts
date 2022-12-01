import testingLibraryPlugin from 'eslint-plugin-testing-library';
import semver, { minVersion } from 'semver';
import type { FlatConfigItem } from '../../types/flat-eslint-config.js';
import { getDependencyVersion } from '../lib/dependency.js';
import { readPackage } from '../lib/read-package.js';
import type { TestingLibrary } from '../types/testing-library/index.js';

const packageJson = readPackage();

const userEventVersion = minVersion(
  getDependencyVersion(packageJson, '@testing-library/user-event')
);

/**
 * v14+ of @testing-library/user-event is async
 * and some rules need to respect that
 */
const VERSION_USER_EVENTS_WENT_ASYNC = '14.0.0';
const isAsyncUserEvent = userEventVersion
  ? semver.gte(userEventVersion, VERSION_USER_EVENTS_WENT_ASYNC)
  : true;

export const config = {
  files: ['**/__tests__/**/*.+(js|ts)?(x)', '**/*.{spec,test}.+(js|ts)?(x)'],
  plugins: { 'testing-library': testingLibraryPlugin },
  rules: {
    'testing-library/await-async-query': ['error'],
    'testing-library/await-async-utils': ['error'],
    'testing-library/await-fire-event': 'off',
    'testing-library/consistent-data-testid': 'off',
    'testing-library/no-await-sync-events': [
      'error',
      {
        eventModules: isAsyncUserEvent
          ? ['fire-event']
          : ['fire-event', 'user-event'],
      },
    ],
    'testing-library/no-await-sync-query': ['error'],
    'testing-library/no-container': ['error'],
    'testing-library/no-debugging-utils': ['error'],
    'testing-library/no-dom-import': ['error', 'react'],
    'testing-library/no-global-regexp-flag-in-query': ['error'],
    'testing-library/no-manual-cleanup': ['error'],
    'testing-library/no-node-access': ['error'],
    'testing-library/no-promise-in-fire-event': ['error'],
    'testing-library/no-render-in-setup': ['error'],
    'testing-library/no-unnecessary-act': ['error'],
    'testing-library/no-wait-for-empty-callback': ['error'],
    'testing-library/no-wait-for-multiple-assertions': ['error'],
    'testing-library/no-wait-for-side-effects': ['error'],
    'testing-library/no-wait-for-snapshot': ['error'],
    'testing-library/prefer-explicit-assert': ['warn'],
    'testing-library/prefer-find-by': ['error'],
    'testing-library/prefer-presence-queries': ['error'],
    'testing-library/prefer-query-by-disappearance': ['error'],
    'testing-library/prefer-screen-queries': ['error'],
    'testing-library/prefer-user-event': ['error'],
    'testing-library/prefer-wait-for': ['error'],
    'testing-library/render-result-naming-convention': ['error'],
  } satisfies TestingLibrary,
} satisfies FlatConfigItem;
