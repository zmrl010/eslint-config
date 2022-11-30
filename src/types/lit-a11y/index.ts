/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { AltText } from '../lit-a11y/alt-text.js';
import type { AnchorHasContent } from '../lit-a11y/anchor-has-content.js';
import type { AnchorIsValid } from '../lit-a11y/anchor-is-valid.js';
import type { AriaActivedescendantHasTabindex } from '../lit-a11y/aria-activedescendant-has-tabindex.js';
import type { AriaAttrValidValue } from '../lit-a11y/aria-attr-valid-value.js';
import type { AriaAttrs } from '../lit-a11y/aria-attrs.js';
import type { AriaRole } from '../lit-a11y/aria-role.js';
import type { AriaUnsupportedElements } from '../lit-a11y/aria-unsupported-elements.js';
import type { AutocompleteValid } from '../lit-a11y/autocomplete-valid.js';
import type { ClickEventsHaveKeyEvents } from '../lit-a11y/click-events-have-key-events.js';
import type { HeadingHasContent } from '../lit-a11y/heading-has-content.js';
import type { IframeTitle } from '../lit-a11y/iframe-title.js';
import type { ImgRedundantAlt } from '../lit-a11y/img-redundant-alt.js';
import type { MouseEventsHaveKeyEvents } from '../lit-a11y/mouse-events-have-key-events.js';
import type { NoAccessKey } from '../lit-a11y/no-access-key.js';
import type { NoAutofocus } from '../lit-a11y/no-autofocus.js';
import type { NoDistractingElements } from '../lit-a11y/no-distracting-elements.js';
import type { NoRedundantRole } from '../lit-a11y/no-redundant-role.js';
import type { RoleHasRequiredAriaAttrs } from '../lit-a11y/role-has-required-aria-attrs.js';
import type { RoleSupportsAriaAttr } from '../lit-a11y/role-supports-aria-attr.js';
import type { Scope } from '../lit-a11y/scope.js';
import type { TabindexNoPositive } from '../lit-a11y/tabindex-no-positive.js';
import type { ValidLang } from '../lit-a11y/valid-lang.js';

/**
 * `eslint-plugin-lit-a11y` Rules
 */
export interface LitA11y {
  /**
   * Images require alt text
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/alt-text.md
   */
  'lit-a11y/alt-text': AltText;

  /**
   * Enforce anchor elements to contain accessible content.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/anchor-has-content.md
   */
  'lit-a11y/anchor-has-content': AnchorHasContent;

  /**
   * anchor-is-valid
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/anchor-is-valid.md
   */
  'lit-a11y/anchor-is-valid': AnchorIsValid;

  /**
   * Enforce elements with aria-activedescendant are tabbable.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/aria-activedescendant-has-tabindex.md
   */
  'lit-a11y/aria-activedescendant-has-tabindex': AriaActivedescendantHasTabindex;

  /**
   * aria-attr-valid-value
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/aria-attr-valid-value.md
   */
  'lit-a11y/aria-attr-valid-value': AriaAttrValidValue;

  /**
   * Elements cannot use an invalid ARIA attribute.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/aria-attrs.md
   */
  'lit-a11y/aria-attrs': AriaAttrs;

  /**
   * aria-role
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/aria-role.md
   */
  'lit-a11y/aria-role': AriaRole;

  /**
   * Certain reserved DOM elements do not support ARIA roles, states and properties.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/aria-unsupported-elements.md
   */
  'lit-a11y/aria-unsupported-elements': AriaUnsupportedElements;

  /**
   * Ensure autocomplete attribute is correct.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/autocomplete-valid.md
   */
  'lit-a11y/autocomplete-valid': AutocompleteValid;

  /**
   * click-events-have-key-events
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/click-events-have-key-events.md
   */
  'lit-a11y/click-events-have-key-events': ClickEventsHaveKeyEvents;

  /**
   * Enforce heading (h1, h2, etc) elements contain accessible content.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/heading-has-content.md
   */
  'lit-a11y/heading-has-content': HeadingHasContent;

  /**
   * <iframe> elements must have a unique title property.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/iframe-title.md
   */
  'lit-a11y/iframe-title': IframeTitle;

  /**
   * Enforce img alt attribute does not contain the word image, picture, or photo.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/img-redundant-alt.md
   */
  'lit-a11y/img-redundant-alt': ImgRedundantAlt;

  /**
   * mouse-events-have-key-events
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/mouse-events-have-key-events.md
   */
  'lit-a11y/mouse-events-have-key-events': MouseEventsHaveKeyEvents;

  /**
   * Enforce no accesskey attribute on element.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/no-access-key.md
   */
  'lit-a11y/no-access-key': NoAccessKey;

  /**
   * Enforce that autofocus attribute or property are not used on elements.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/no-autofocus.md
   */
  'lit-a11y/no-autofocus': NoAutofocus;

  /**
   * Enforce distracting elements are not used.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/no-distracting-elements.md
   */
  'lit-a11y/no-distracting-elements': NoDistractingElements;

  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/no-redundant-role.md
   */
  'lit-a11y/no-redundant-role': NoRedundantRole;

  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/role-has-required-aria-attrs.md
   */
  'lit-a11y/role-has-required-aria-attrs': RoleHasRequiredAriaAttrs;

  /**
   * Enforce that elements with a defined role contain only supported ARIA attributes for that role.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/role-supports-aria-attrs.md
   */
  'lit-a11y/role-supports-aria-attr': RoleSupportsAriaAttr;

  /**
   * Enforce scope prop is only used on <th> elements.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/scope.md
   */
  'lit-a11y/scope': Scope;

  /**
   * Enforce tabIndex value is not greater than zero.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/tabindex-no-positive.md
   */
  'lit-a11y/tabindex-no-positive': TabindexNoPositive;

  /**
   * Ensures the document has a valid `lang` attribute.
   * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/valid-html.md
   */
  'lit-a11y/valid-lang': ValidLang;
}
