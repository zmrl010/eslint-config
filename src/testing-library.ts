import semver from 'semver';
import { type Linter } from 'eslint';
import { hasDependency, getVersion } from './lib/dependency';

import './eslint-patch/modern-module-resolution';

const hasJestDom = hasDependency('@testing-library/jest-dom');
const hasTestingLibrary = [
  '@testing-library/dom',
  '@testing-library/react',
  '@testing-library/angular',
  '@testing-library/vue',
].some(hasDependency);

const VERSION_USER_EVENTS_WENT_ASYNC = '14.0.0';

const userEventVersion =
  getVersion('@testing-library/user-event') ?? VERSION_USER_EVENTS_WENT_ASYNC;

/**
 * v14+ of @testing-library/user-event is async
 * and some rules need to respect that
 */
const isAsyncUserEvent = semver.gte(
  userEventVersion,
  VERSION_USER_EVENTS_WENT_ASYNC
);

const testingLibrary: Linter.Config = {
  plugins: [
    hasJestDom ? 'jest-dom' : '',
    hasTestingLibrary ? 'testing-library' : '',
  ].filter(Boolean),
  overrides: [
    {
      files: [
        '**/__tests__/**/*.+(js|ts)?(x)',
        '**/*.{spec,test}.+(js|ts)?(x)',
      ],
      rules: {
        ...(hasJestDom
          ? {
              'jest-dom/prefer-checked': 'error',
              'jest-dom/prefer-empty': 'error',
              'jest-dom/prefer-enabled-disabled': 'error',
              'jest-dom/prefer-focus': 'error',
              'jest-dom/prefer-in-document': 'error',
              'jest-dom/prefer-required': 'error',
              'jest-dom/prefer-to-have-attribute': 'error',
              'jest-dom/prefer-to-have-class': 'error',
              'jest-dom/prefer-to-have-style': 'error',
              'jest-dom/prefer-to-have-text-content': 'error',
              'jest-dom/prefer-to-have-value': 'error',
            }
          : null),

        ...(hasTestingLibrary
          ? {
              'testing-library/await-async-query': 'error',
              'testing-library/await-async-utils': 'error',
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
              'testing-library/no-await-sync-query': 'error',
              'testing-library/no-container': 'error',
              'testing-library/no-debugging-utils': 'error',
              'testing-library/no-dom-import': ['error', 'react'],
              'testing-library/no-global-regexp-flag-in-query': 'error',
              'testing-library/no-manual-cleanup': 'error',
              'testing-library/no-node-access': 'error',
              'testing-library/no-promise-in-fire-event': 'error',
              'testing-library/no-render-in-setup': 'error',
              'testing-library/no-unnecessary-act': 'error',
              'testing-library/no-wait-for-empty-callback': 'error',
              'testing-library/no-wait-for-multiple-assertions': 'error',
              'testing-library/no-wait-for-side-effects': 'error',
              'testing-library/no-wait-for-snapshot': 'error',
              'testing-library/prefer-explicit-assert': 'warn',
              'testing-library/prefer-find-by': 'error',
              'testing-library/prefer-presence-queries': 'error',
              'testing-library/prefer-query-by-disappearance': 'error',
              'testing-library/prefer-screen-queries': 'error',
              'testing-library/prefer-user-event': 'error',
              'testing-library/prefer-wait-for': 'error',
              'testing-library/render-result-naming-convention': 'error',
            }
          : null),
      },
    },
  ],
};

export = testingLibrary;
