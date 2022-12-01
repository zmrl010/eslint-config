import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { Lit, LitA11y, WebComponents } from '../plugin-configs/index.js';

const config: FlatConfig = [Lit.config, LitA11y.config, WebComponents.config];

export default config;
