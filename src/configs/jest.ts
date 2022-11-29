import { minVersion } from 'semver';
import { FlatConfig } from '../../types/flat-eslint-config.js';
import { getDependencyVersion } from '../lib/dependency.js';
import { readPackage } from '../lib/read-package.js';
import { JestConfig } from '../plugin-configs/index.js';
import testingLibrary from './testing-library.js';

const packageJson = readPackage();
/**
 * We don't necessarily care if jest is installed.
 * We need to provide a version so rules work correctly.
 */
const jestVersion =
  minVersion(getDependencyVersion(packageJson, 'jest'))?.version ?? '28.0.0';

const config: FlatConfig = [
  ...testingLibrary,
  {
    files: ['**/__tests__/**/*.+(js|ts)?(x)', '**/*.{spec,test}.+(js|ts)?(x)'],
    plugins: JestConfig.plugins,
    settings: {
      jest: {
        version: jestVersion,
      },
    },
    rules: JestConfig.rules,
  },
  {
    files: ['**/__tests__/**/*.ts?(x)', '**/*.{spec,test}.ts?(x)'],
    rules: {
      ...JestConfig.typescriptRules,
    },
  },
];

export default config;
