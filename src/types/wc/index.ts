/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { AttachShadowConstructor } from '../wc/attach-shadow-constructor.js';
import type { GuardSuperCall } from '../wc/guard-super-call.js';
import type { NoClosedShadowRoot } from '../wc/no-closed-shadow-root.js';
import type { NoConstructorAttributes } from '../wc/no-constructor-attributes.js';
import type { NoConstructorParams } from '../wc/no-constructor-params.js';
import type { NoInvalidElementName } from '../wc/no-invalid-element-name.js';
import type { NoSelfClass } from '../wc/no-self-class.js';
import type { NoTypos } from '../wc/no-typos.js';
import type { RequireListenerTeardown } from '../wc/require-listener-teardown.js';

/**
 * `eslint-plugin-wc` Rules
 */
export interface Wc {
  /**
   * Disallows attaching a shadow root outside the constructor
   * @see https://github.com/43081j/eslint-plugin-wc/blob/master/docs/rules/attach-shadow-constructor.md
   */
  'wc/attach-shadow-constructor': AttachShadowConstructor;

  /**
   * Requires a guard before calling a super lifecycle hook
   * @see https://github.com/43081j/eslint-plugin-wc/blob/master/docs/rules/guard-super-call.md
   */
  'wc/guard-super-call': GuardSuperCall;

  /**
   * Disallows closed shadow roots
   * @see https://github.com/43081j/eslint-plugin-wc/blob/master/docs/rules/no-closed-shadow-root.md
   */
  'wc/no-closed-shadow-root': NoClosedShadowRoot;

  /**
   * Disallows interaction with attributes in constructors
   * @see https://github.com/43081j/eslint-plugin-wc/blob/master/docs/rules/no-constructor-attributes.md
   */
  'wc/no-constructor-attributes': NoConstructorAttributes;

  /**
   * Disallows constructor parameters in custom elements
   * @see https://github.com/43081j/eslint-plugin-wc/blob/master/docs/rules/no-constructor-params.md
   */
  'wc/no-constructor-params': NoConstructorParams;

  /**
   * Disallows invalid custom element names
   * @see https://github.com/43081j/eslint-plugin-wc/blob/master/docs/rules/no-invalid-element-name.md
   */
  'wc/no-invalid-element-name': NoInvalidElementName;

  /**
   * Disallows class mutations on self
   * @see https://github.com/43081j/eslint-plugin-wc/blob/master/docs/rules/no-self-class.md
   */
  'wc/no-self-class': NoSelfClass;

  /**
   * Detects misspellings of common features
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-typos.md
   */
  'wc/no-typos': NoTypos;

  /**
   * Requires that listeners be cleaned up on DOM disconnect.
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/require-listener-teardown.md
   */
  'wc/require-listener-teardown': RequireListenerTeardown;
}
