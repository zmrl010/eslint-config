import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { JsxA11yConfig } from '../plugin-configs/index.js';

const config: FlatConfig = [
  {
    plugins: JsxA11yConfig.plugins,
    rules: JsxA11yConfig.rules,
  },
];

export default config;
