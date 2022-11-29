import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { LitA11yConfig } from '../plugin-configs/index.js';

const config: FlatConfig = [
  {
    plugins: LitA11yConfig.plugins,
    rules: { ...LitA11yConfig.rules },
  },
];

export default config;
