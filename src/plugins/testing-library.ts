import jestDomPlugin from 'eslint-plugin-jest-dom';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import semver, { minVersion } from 'semver';
import { defineConfig } from '../lib/config.js';
import { getDependencyVersion, isDependencyListed } from '../lib/dependency.js';
import { readPackage } from '../lib/read-package.js';

const packageJson = readPackage();

const hasJestDom = isDependencyListed(packageJson, '@testing-library/jest-dom');
const hasTestingLibrary = [
  '@testing-library/dom',
  '@testing-library/react',
  '@testing-library/angular',
  '@testing-library/vue',
].some((value) => isDependencyListed(packageJson, value));

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

const commonFileGlobs = [
  '**/__tests__/**/*.+(js|ts)?(x)',
  '**/*.{spec,test}.+(js|ts)?(x)',
];

export default defineConfig(
  /**
   * look into when this is executed.
   * conditional might need to be rethought.
   */
  hasJestDom
    ? {
        files: commonFileGlobs,
        plugins: {
          'jest-dom': jestDomPlugin,
        },
        rules: {
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
        },
      }
    : {},
  hasTestingLibrary
    ? {
        files: commonFileGlobs,
        plugins: {
          'testing-library': testingLibraryPlugin,
        },
        rules: {
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
        },
      }
    : {}
);
