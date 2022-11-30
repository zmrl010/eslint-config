import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { isDependencyListed } from '../lib/dependency.js';
import { readPackage } from '../lib/read-package.js';
import {
  JestDomConfig,
  TestingLibraryConfig,
} from '../plugin-configs/index.js';

const packageJson = readPackage();

const hasJestDom = isDependencyListed(packageJson, '@testing-library/jest-dom');
const hasTestingLibrary = [
  '@testing-library/dom',
  '@testing-library/react',
  '@testing-library/angular',
  '@testing-library/vue',
].some((value) => isDependencyListed(packageJson, value));

const commonFileGlobs = [
  '**/__tests__/**/*.+(js|ts)?(x)',
  '**/*.{spec,test}.+(js|ts)?(x)',
];

const config: FlatConfig = [
  hasJestDom
    ? {
        files: commonFileGlobs,
        plugins: JestDomConfig.plugins,
        rules: JestDomConfig.rules,
      }
    : {},
  hasTestingLibrary
    ? {
        files: commonFileGlobs,
        plugins: TestingLibraryConfig.plugins,
        rules: TestingLibraryConfig.rules,
      }
    : {},
];

export default config;
