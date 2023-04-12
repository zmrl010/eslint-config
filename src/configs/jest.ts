import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { Jest } from '../plugins/index.js';
import testingLibrary from './testing-library.js';

const config: FlatConfig = [
  ...testingLibrary,
  Jest.config,
  Jest.typescriptConfig,
];

export default config;
