/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { AltText } from '../jsx-a11y/alt-text.js';
import type { AnchorHasContent } from '../jsx-a11y/anchor-has-content.js';
import type { AnchorIsValid } from '../jsx-a11y/anchor-is-valid.js';
import type { AriaActivedescendantHasTabindex } from '../jsx-a11y/aria-activedescendant-has-tabindex.js';
import type { AriaProps } from '../jsx-a11y/aria-props.js';
import type { AriaProptypes } from '../jsx-a11y/aria-proptypes.js';
import type { AriaRole } from '../jsx-a11y/aria-role.js';
import type { AriaUnsupportedElements } from '../jsx-a11y/aria-unsupported-elements.js';
import type { AutocompleteValid } from '../jsx-a11y/autocomplete-valid.js';
import type { ClickEventsHaveKeyEvents } from '../jsx-a11y/click-events-have-key-events.js';
import type { ControlHasAssociatedLabel } from '../jsx-a11y/control-has-associated-label.js';
import type { HeadingHasContent } from '../jsx-a11y/heading-has-content.js';
import type { HtmlHasLang } from '../jsx-a11y/html-has-lang.js';
import type { IframeHasTitle } from '../jsx-a11y/iframe-has-title.js';
import type { ImgRedundantAlt } from '../jsx-a11y/img-redundant-alt.js';
import type { InteractiveSupportsFocus } from '../jsx-a11y/interactive-supports-focus.js';
import type { LabelHasAssociatedControl } from '../jsx-a11y/label-has-associated-control.js';
import type { Lang } from '../jsx-a11y/lang.js';
import type { MediaHasCaption } from '../jsx-a11y/media-has-caption.js';
import type { MouseEventsHaveKeyEvents } from '../jsx-a11y/mouse-events-have-key-events.js';
import type { NoAccessKey } from '../jsx-a11y/no-access-key.js';
import type { NoAutofocus } from '../jsx-a11y/no-autofocus.js';
import type { NoDistractingElements } from '../jsx-a11y/no-distracting-elements.js';
import type { NoInteractiveElementToNoninteractiveRole } from '../jsx-a11y/no-interactive-element-to-noninteractive-role.js';
import type { NoNoninteractiveElementInteractions } from '../jsx-a11y/no-noninteractive-element-interactions.js';
import type { NoNoninteractiveElementToInteractiveRole } from '../jsx-a11y/no-noninteractive-element-to-interactive-role.js';
import type { NoNoninteractiveTabindex } from '../jsx-a11y/no-noninteractive-tabindex.js';
import type { NoRedundantRoles } from '../jsx-a11y/no-redundant-roles.js';
import type { NoStaticElementInteractions } from '../jsx-a11y/no-static-element-interactions.js';
import type { RoleHasRequiredAriaProps } from '../jsx-a11y/role-has-required-aria-props.js';
import type { RoleSupportsAriaProps } from '../jsx-a11y/role-supports-aria-props.js';
import type { Scope } from '../jsx-a11y/scope.js';
import type { TabindexNoPositive } from '../jsx-a11y/tabindex-no-positive.js';

/**
 * `eslint-plugin-jsx-a11y` Rules
 */
export interface JsxA11y {
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md
   */
  'jsx-a11y/alt-text': AltText;

  /**
   * Enforce all anchors to contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md
   */
  'jsx-a11y/anchor-has-content': AnchorHasContent;

  /**
   * Enforce all anchors are valid, navigable elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md
   */
  'jsx-a11y/anchor-is-valid': AnchorIsValid;

  /**
   * Enforce elements with aria-activedescendant are tabbable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md
   */
  'jsx-a11y/aria-activedescendant-has-tabindex': AriaActivedescendantHasTabindex;

  /**
   * Enforce all `aria-*` props are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md
   */
  'jsx-a11y/aria-props': AriaProps;

  /**
   * Enforce ARIA state and property values are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md
   */
  'jsx-a11y/aria-proptypes': AriaProptypes;

  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md
   */
  'jsx-a11y/aria-role': AriaRole;

  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md
   */
  'jsx-a11y/aria-unsupported-elements': AriaUnsupportedElements;

  /**
   * Enforce that autocomplete attributes are used correctly.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md
   */
  'jsx-a11y/autocomplete-valid': AutocompleteValid;

  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md
   */
  'jsx-a11y/click-events-have-key-events': ClickEventsHaveKeyEvents;

  'jsx-a11y/control-has-associated-label': ControlHasAssociatedLabel;

  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md
   */
  'jsx-a11y/heading-has-content': HeadingHasContent;

  /**
   * Enforce `<html>` element has `lang` prop.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md
   */
  'jsx-a11y/html-has-lang': HtmlHasLang;

  /**
   * Enforce iframe elements have a title attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md
   */
  'jsx-a11y/iframe-has-title': IframeHasTitle;

  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md
   */
  'jsx-a11y/img-redundant-alt': ImgRedundantAlt;

  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md
   */
  'jsx-a11y/interactive-supports-focus': InteractiveSupportsFocus;

  /**
   * Enforce that a `label` tag has a text label and an associated control.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
   */
  'jsx-a11y/label-has-associated-control': LabelHasAssociatedControl;

  /**
   * Enforce lang attribute has a valid value.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md
   */
  'jsx-a11y/lang': Lang;

  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md
   */
  'jsx-a11y/media-has-caption': MediaHasCaption;

  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md
   */
  'jsx-a11y/mouse-events-have-key-events': MouseEventsHaveKeyEvents;

  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md
   */
  'jsx-a11y/no-access-key': NoAccessKey;

  /**
   * Enforce autoFocus prop is not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md
   */
  'jsx-a11y/no-autofocus': NoAutofocus;

  /**
   * Enforce distracting elements are not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md
   */
  'jsx-a11y/no-distracting-elements': NoDistractingElements;

  /**
   * Interactive elements should not be assigned non-interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role': NoInteractiveElementToNoninteractiveRole;

  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md
   */
  'jsx-a11y/no-noninteractive-element-interactions': NoNoninteractiveElementInteractions;

  /**
   * Non-interactive elements should not be assigned interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role': NoNoninteractiveElementToInteractiveRole;

  /**
   * `tabIndex` should only be declared on interactive elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md
   */
  'jsx-a11y/no-noninteractive-tabindex': NoNoninteractiveTabindex;

  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md
   */
  'jsx-a11y/no-redundant-roles': NoRedundantRoles;

  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md
   */
  'jsx-a11y/no-static-element-interactions': NoStaticElementInteractions;

  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md
   */
  'jsx-a11y/role-has-required-aria-props': RoleHasRequiredAriaProps;

  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md
   */
  'jsx-a11y/role-supports-aria-props': RoleSupportsAriaProps;

  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md
   */
  'jsx-a11y/scope': Scope;

  /**
   * Enforce `tabIndex` value is not greater than zero.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md
   */
  'jsx-a11y/tabindex-no-positive': TabindexNoPositive;
}
