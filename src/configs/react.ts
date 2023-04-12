import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { JsxA11y, React, ReactHooks } from '../plugins/index.js';
import testingLibraryConfig from './testing-library.js';

const config: FlatConfig = [
  React.config,
  React.typescriptConfig,
  React.testConfig,
  ReactHooks.config,
  JsxA11y.config,
  ...testingLibraryConfig,
];

export default config;
