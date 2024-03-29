import jestPlugin from 'eslint-plugin-jest';
import { minVersion } from 'semver';
import type { FlatConfigItem } from '../../types/flat-eslint-config.js';
import { getDependencyVersion } from '../lib/dependency.js';
import { readPackage } from '../lib/read-package.js';
import type { Jest } from '../types/jest/index.js';

const packageJson = readPackage();
/**
 * We don't necessarily care if jest is installed.
 * We need to provide a version so rules work correctly.
 */
const jestVersion =
  minVersion(getDependencyVersion(packageJson, 'jest'))?.version ?? '28.0.0';

export const config = {
  files: ['**/__tests__/**/*.+(js|ts)?(x)', '**/*.{spec,test}.+(js|ts)?(x)'],
  plugins: { jest: jestPlugin },
  settings: {
    jest: { version: jestVersion },
  },
  rules: {
    'jest/consistent-test-it': 'off',
    'jest/expect-expect': 'off',
    'jest/max-expects': ['error'],
    'jest/max-nested-describe': ['error'],
    'jest/no-alias-methods': 'off',
    'jest/no-commented-out-tests': ['warn'],
    'jest/no-conditional-expect': ['error'],
    'jest/no-conditional-in-test': ['error'],
    'jest/no-deprecated-functions': ['error'],
    'jest/no-disabled-tests': ['warn'],
    'jest/no-done-callback': ['error'],
    'jest/no-duplicate-hooks': 'off',
    'jest/no-export': ['error'],
    'jest/no-focused-tests': ['error'],
    'jest/no-hooks': 'off',
    'jest/no-identical-title': ['error'],
    'jest/no-interpolation-in-snapshots': ['error'],
    'jest/no-jasmine-globals': 'off',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/no-mocks-import': ['error'],
    'jest/no-restricted-matchers': 'off',
    'jest/no-standalone-expect': 'off',
    'jest/no-test-prefixes': ['error'],
    'jest/no-test-return-statement': 'off',
    'jest/prefer-called-with': ['error'],
    'jest/prefer-comparison-matcher': ['error'],
    'jest/prefer-each': ['error'],
    'jest/prefer-equality-matcher': ['error'],
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-expect-resolves': 'off',
    'jest/prefer-hooks-on-top': ['error'],
    'jest/prefer-hooks-in-order': ['error'],
    'jest/prefer-lowercase-title': 'off',
    'jest/prefer-mock-promise-shorthand': ['warn'],
    'jest/prefer-snapshot-hint': ['error'],
    'jest/prefer-spy-on': 'off',
    'jest/prefer-strict-equal': 'off',
    'jest/prefer-to-be': 'off',
    'jest/prefer-to-contain': ['warn'],
    'jest/prefer-to-have-length': ['warn'],
    'jest/prefer-todo': ['warn'],
    'jest/require-hook': 'off',
    'jest/require-to-throw-message': 'off',
    'jest/require-top-level-describe': 'off',
    'jest/unbound-method': 'off',
    'jest/valid-describe-callback': ['error'],
    'jest/valid-expect': ['error'],
    'jest/valid-expect-in-promise': ['error'],
    'jest/valid-title': ['warn'],
    'jest/no-restricted-jest-methods': 'off',
    'jest/no-untyped-mock-factory': ['error'],
  } satisfies Jest,
} satisfies FlatConfigItem;

export const typescriptConfig = {
  files: ['**/__tests__/**/*.ts?(x)', '**/*.{spec,test}.ts?(x)'],
  rules: {
    '@typescript-eslint/unbound-method': 'off',
    'jest/unbound-method': ['error'],
  },
} satisfies FlatConfigItem;
