import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { isDependencyListed } from '../lib/dependency.js';
import { readPackage } from '../lib/read-package.js';
import { JestDom, TestingLibrary } from '../plugin-configs/index.js';

const packageJson = readPackage();

const hasJestDom = isDependencyListed(packageJson, '@testing-library/jest-dom');
const hasTestingLibrary = [
  '@testing-library/dom',
  '@testing-library/react',
  '@testing-library/angular',
  '@testing-library/vue',
].some((value) => isDependencyListed(packageJson, value));

const config: FlatConfig = [
  hasJestDom ? JestDom.config : {},
  hasTestingLibrary ? TestingLibrary.config : {},
];

export default config;
