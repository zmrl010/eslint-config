import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { WebComponentsConfig } from '../plugin-configs/index.js';

const config: FlatConfig = [
  {
    plugins: WebComponentsConfig.plugins,
    rules: WebComponentsConfig.rules,
  },
];

export default config;
