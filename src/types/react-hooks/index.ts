/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { RulesOfHooks } from '../react-hooks/rules-of-hooks.js';
import type { ExhaustiveDeps } from '../react-hooks/exhaustive-deps.js';

/**
 * `eslint-plugin-react-hooks` Rules
 */
export interface ReactHooks {
  /**
   * enforces the Rules of Hooks
   * @see https://reactjs.org/docs/hooks-rules.html
   */
  'react-hooks/rules-of-hooks': RulesOfHooks;
  /**
   * verifies the list of dependencies for Hooks like useEffect and similar
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-hooks/exhaustive-deps': ExhaustiveDeps;
}
