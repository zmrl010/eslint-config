import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { ImportConfig } from '../plugin-configs/index.js';
import typescriptConfig from './typescript.js';

const config: FlatConfig = [
  ...typescriptConfig,
  {
    plugins: ImportConfig.plugins,
    rules: ImportConfig.rules,
    settings: ImportConfig.settings,
  },
  {
    files: ['**/*.ts?(x)'],
    rules: ImportConfig.typescriptRules,
  },
];

export default config;
