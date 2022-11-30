import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { WebComponents } from '../plugin-configs/index.js';

const config: FlatConfig = [WebComponents.config];

export default config;
