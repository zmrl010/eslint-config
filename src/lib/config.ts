import type { FlatConfigArray } from '../../types/flat-eslint-config.js';

/**
 * Define ESLint flat configuration object(s)
 *
 * no-op useful for type hinting
 */
export function defineConfig(...config: FlatConfigArray): FlatConfigArray {
  return config;
}
