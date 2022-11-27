/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { PreferChecked } from '../jest-dom/prefer-checked.js';
import type { PreferEmpty } from '../jest-dom/prefer-empty.js';
import type { PreferEnabledDisabled } from '../jest-dom/prefer-enabled-disabled.js';
import type { PreferFocus } from '../jest-dom/prefer-focus.js';
import type { PreferInDocument } from '../jest-dom/prefer-in-document.js';
import type { PreferRequired } from '../jest-dom/prefer-required.js';
import type { PreferToHaveAttribute } from '../jest-dom/prefer-to-have-attribute.js';
import type { PreferToHaveClass } from '../jest-dom/prefer-to-have-class.js';
import type { PreferToHaveStyle } from '../jest-dom/prefer-to-have-style.js';
import type { PreferToHaveTextContent } from '../jest-dom/prefer-to-have-text-content.js';
import type { PreferToHaveValue } from '../jest-dom/prefer-to-have-value.js';

/**
 * `eslint-plugin-jest-dom` Rules
 */
export interface JestDom {
  /**
   * prefer toBeChecked over checking attributes
   * @see prefer-checked
   */
  'jest-dom/prefer-checked': PreferChecked;
  /**
   * Prefer toBeEmpty over checking innerHTML
   * @see prefer-empty
   */
  'jest-dom/prefer-empty': PreferEmpty;
  /**
   * prefer toBeDisabled or toBeEnabled over checking attributes
   * @see prefer-enabled-disabled
   */
  'jest-dom/prefer-enabled-disabled': PreferEnabledDisabled;
  /**
   * prefer toHaveFocus over checking document.activeElement
   * @see prefer-focus
   */
  'jest-dom/prefer-focus': PreferFocus;
  /**
   * Prefer .toBeInTheDocument() for asserting the existence of a DOM node
   * @see prefer-in-document
   */
  'jest-dom/prefer-in-document': PreferInDocument;
  /**
   * prefer toBeRequired over checking properties
   * @see prefer-required
   */
  'jest-dom/prefer-required': PreferRequired;
  /**
   * prefer toHaveAttribute over checking  getAttribute/hasAttribute
   * @see prefer-to-have-attribute
   */
  'jest-dom/prefer-to-have-attribute': PreferToHaveAttribute;
  /**
   * prefer toHaveClass over checking element className
   * @see prefer-to-have-class
   */
  'jest-dom/prefer-to-have-class': PreferToHaveClass;
  /**
   * prefer toHaveStyle over checking element style
   * @see prefer-to-have-style
   */
  'jest-dom/prefer-to-have-style': PreferToHaveStyle;
  /**
   * Prefer toHaveTextContent over checking element.textContent
   * @see prefer-to-have-text-content
   */
  'jest-dom/prefer-to-have-text-content': PreferToHaveTextContent;
  /**
   * prefer toHaveValue over checking element.value
   * @see prefer-to-have-value
   */
  'jest-dom/prefer-to-have-value': PreferToHaveValue;
}
