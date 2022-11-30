import { FlatConfig } from '../../types/flat-eslint-config.js';
import { LitConfig } from '../plugin-configs/index.js';
import webComponentConfig from './wc.js';

const config: FlatConfig = [
  ...webComponentConfig,
  {
    plugins: LitConfig.plugins,
    rules: LitConfig.rules,
  },
];

export default config;
