import type { FlatConfig } from '../../types/flat-eslint-config.js';

/**
 * Define ESLint flat configuration object(s)
 *
 * no-op useful for type hinting
 */
export function defineConfig(...config: FlatConfig): FlatConfig {
  return config;
}
