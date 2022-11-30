import { FlatConfig } from '../../types/flat-eslint-config.js';
import { Lit } from '../plugin-configs/index.js';
import webComponentConfig from './wc.js';

const config: FlatConfig = [...webComponentConfig, Lit.config];

export default config;
