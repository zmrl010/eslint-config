/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { AttributeValueEntities } from '../lit/attribute-value-entities.js';
import type { BindingPositions } from '../lit/binding-positions.js';
import type { NoDuplicateTemplateBindings } from '../lit/no-duplicate-template-bindings.js';
import type { NoInvalidEscapeSequences } from '../lit/no-invalid-escape-sequences.js';
import type { NoInvalidHtml } from '../lit/no-invalid-html.js';
import type { NoLegacyImports } from '../lit/no-legacy-imports.js';
import type { NoLegacyTemplateSyntax } from '../lit/no-legacy-template-syntax.js';
import type { NoPrivateProperties } from '../lit/no-private-properties.js';
import type { NoPropertyChangeUpdate } from '../lit/no-property-change-update.js';
import type { NoTemplateArrow } from '../lit/no-template-arrow.js';
import type { NoTemplateBind } from '../lit/no-template-bind.js';
import type { NoTemplateMap } from '../lit/no-template-map.js';
import type { NoUselessTemplateLiterals } from '../lit/no-useless-template-literals.js';
import type { NoValueAttribute } from '../lit/no-value-attribute.js';
import type { PreferStaticStyles } from '../lit/prefer-static-styles.js';
import type { QuotedExpressions } from '../lit/quoted-expressions.js';

/**
 * `eslint-plugin-lit` Rules
 */
export interface Lit {
  /**
   * Disallows unencoded HTML entities in attribute values
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/attribute-value-entities.md
   */
  'lit/attribute-value-entities': AttributeValueEntities;

  /**
   * Disallows invalid binding positions in templates
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/binding-positions.md
   */
  'lit/binding-positions': BindingPositions;

  /**
   * Disallows duplicate names in template bindings
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-duplicate-template-bindings.md
   */
  'lit/no-duplicate-template-bindings': NoDuplicateTemplateBindings;

  /**
   * Disallows invalid escape sequences in template strings
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-invalid-escape-sequences.md
   */
  'lit/no-invalid-escape-sequences': NoInvalidEscapeSequences;

  /**
   * Disallows invalid HTML in templates
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-invalid-html.md
   */
  'lit/no-invalid-html': NoInvalidHtml;

  /**
   * Detects usages of legacy lit imports
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-legacy-imports.md
   */
  'lit/no-legacy-imports': NoLegacyImports;

  /**
   * Detects usages of legacy binding syntax
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-legacy-template-syntax.md
   */
  'lit/no-legacy-template-syntax': NoLegacyTemplateSyntax;

  /**
   * Disallows usages of "non-public" property bindings
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-private-properties.md
   */
  'lit/no-private-properties': NoPrivateProperties;

  /**
   * Disallows property changes in the `update` lifecycle method
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-property-change-update.md
   */
  'lit/no-property-change-update': NoPropertyChangeUpdate;

  /**
   * Disallows arrow functions in templates
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-template-arrow.md
   */
  'lit/no-template-arrow': NoTemplateArrow;

  /**
   * Disallows `.bind` in templates
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-template-bind.md
   */
  'lit/no-template-bind': NoTemplateBind;

  /**
   * Disallows array `.map` in templates
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-template-map.md
   */
  'lit/no-template-map': NoTemplateMap;

  /**
   * Disallows redundant literal values in templates
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-useless-template-literals.md
   */
  'lit/no-useless-template-literals': NoUselessTemplateLiterals;

  /**
   * Detects usages of the `value` attribute where the equivalent property should be used instead
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-value-attribute.md
   */
  'lit/no-value-attribute': NoValueAttribute;

  /**
   * Enforces the use of static styles in elements
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/prefer-static-styles.md
   */
  'lit/prefer-static-styles': PreferStaticStyles;

  /**
   * Enforces the presence or absence of quotes around expressions
   * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/quoted-expressions.md
   */
  'lit/quoted-expressions': QuotedExpressions;
}
