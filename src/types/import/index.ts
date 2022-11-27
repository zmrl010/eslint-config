/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { NoUnresolved } from '../import/no-unresolved.js';
import type { Named } from '../import/named.js';
import type { Default } from '../import/default.js';
import type { Namespace } from '../import/namespace.js';
import type { NoNamespace } from '../import/no-namespace.js';
import type { Export } from '../import/export.js';
import type { NoMutableExports } from '../import/no-mutable-exports.js';
import type { Extensions } from '../import/extensions.js';
import type { NoRestrictedPaths } from '../import/no-restricted-paths.js';
import type { NoInternalModules } from '../import/no-internal-modules.js';
import type { GroupExports } from '../import/group-exports.js';
import type { NoRelativePackages } from '../import/no-relative-packages.js';
import type { NoRelativeParentImports } from '../import/no-relative-parent-imports.js';
import type { NoSelfImport } from '../import/no-self-import.js';
import type { NoCycle } from '../import/no-cycle.js';
import type { NoNamedDefault } from '../import/no-named-default.js';
import type { NoNamedAsDefault } from '../import/no-named-as-default.js';
import type { NoNamedAsDefaultMember } from '../import/no-named-as-default-member.js';
import type { NoAnonymousDefaultExport } from '../import/no-anonymous-default-export.js';
import type { NoUnusedModules } from '../import/no-unused-modules.js';
import type { NoCommonjs } from '../import/no-commonjs.js';
import type { NoAmd } from '../import/no-amd.js';
import type { NoDuplicates } from '../import/no-duplicates.js';
import type { First } from '../import/first.js';
import type { MaxDependencies } from '../import/max-dependencies.js';
import type { NoExtraneousDependencies } from '../import/no-extraneous-dependencies.js';
import type { NoAbsolutePath } from '../import/no-absolute-path.js';
import type { NoNodejsModules } from '../import/no-nodejs-modules.js';
import type { NoWebpackLoaderSyntax } from '../import/no-webpack-loader-syntax.js';
import type { Order } from '../import/order.js';
import type { NewlineAfterImport } from '../import/newline-after-import.js';
import type { PreferDefaultExport } from '../import/prefer-default-export.js';
import type { NoDefaultExport } from '../import/no-default-export.js';
import type { NoNamedExport } from '../import/no-named-export.js';
import type { NoDynamicRequire } from '../import/no-dynamic-require.js';
import type { Unambiguous } from '../import/unambiguous.js';
import type { NoUnassignedImport } from '../import/no-unassigned-import.js';
import type { NoUselessPathSegments } from '../import/no-useless-path-segments.js';
import type { DynamicImportChunkname } from '../import/dynamic-import-chunkname.js';
import type { NoImportModuleExports } from '../import/no-import-module-exports.js';
import type { ExportsLast } from '../import/exports-last.js';
import type { NoDeprecated } from '../import/no-deprecated.js';

/**
 * `eslint-plugin-import` Rules
 */
export interface Import {
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-unresolved.md
   */
  'import/no-unresolved': NoUnresolved;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/named.md
   */
  'import/named': Named;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/default.md
   */
  'import/default': Default;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/namespace.md
   */
  'import/namespace': Namespace;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-namespace.md
   */
  'import/no-namespace': NoNamespace;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/export.md
   */
  'import/export': Export;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-mutable-exports.md
   */
  'import/no-mutable-exports': NoMutableExports;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/extensions.md
   */
  'import/extensions': Extensions;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-restricted-paths.md
   */
  'import/no-restricted-paths': NoRestrictedPaths;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-internal-modules.md
   */
  'import/no-internal-modules': NoInternalModules;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/group-exports.md
   */
  'import/group-exports': GroupExports;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-relative-packages.md
   */
  'import/no-relative-packages': NoRelativePackages;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-relative-parent-imports.md
   */
  'import/no-relative-parent-imports': NoRelativeParentImports;
  /**
   * Forbid a module from importing itself
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-self-import.md
   */
  'import/no-self-import': NoSelfImport;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-cycle.md
   */
  'import/no-cycle': NoCycle;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-default.md
   */
  'import/no-named-default': NoNamedDefault;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default.md
   */
  'import/no-named-as-default': NoNamedAsDefault;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default-member.md
   */
  'import/no-named-as-default-member': NoNamedAsDefaultMember;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-anonymous-default-export.md
   */
  'import/no-anonymous-default-export': NoAnonymousDefaultExport;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-unused-modules.md
   */
  'import/no-unused-modules': NoUnusedModules;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-commonjs.md
   */
  'import/no-commonjs': NoCommonjs;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-amd.md
   */
  'import/no-amd': NoAmd;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-duplicates.md
   */
  'import/no-duplicates': NoDuplicates;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/first.md
   */
  'import/first': First;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/max-dependencies.md
   */
  'import/max-dependencies': MaxDependencies;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-extraneous-dependencies.md
   */
  'import/no-extraneous-dependencies': NoExtraneousDependencies;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-absolute-path.md
   */
  'import/no-absolute-path': NoAbsolutePath;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-nodejs-modules.md
   */
  'import/no-nodejs-modules': NoNodejsModules;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-webpack-loader-syntax.md
   */
  'import/no-webpack-loader-syntax': NoWebpackLoaderSyntax;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md
   */
  'import/order': Order;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/newline-after-import.md
   */
  'import/newline-after-import': NewlineAfterImport;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md
   */
  'import/prefer-default-export': PreferDefaultExport;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-default-export.md
   */
  'import/no-default-export': NoDefaultExport;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-export.md
   */
  'import/no-named-export': NoNamedExport;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-dynamic-require.md
   */
  'import/no-dynamic-require': NoDynamicRequire;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/unambiguous.md
   */
  'import/unambiguous': Unambiguous;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-unassigned-import.md
   */
  'import/no-unassigned-import': NoUnassignedImport;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-useless-path-segments.md
   */
  'import/no-useless-path-segments': NoUselessPathSegments;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/dynamic-import-chunkname.md
   */
  'import/dynamic-import-chunkname': DynamicImportChunkname;
  /**
   * Disallow import statements with module.exports
   */
  'import/no-import-module-exports': NoImportModuleExports;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/exports-last.md
   */
  'import/exports-last': ExportsLast;
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-deprecated.md
   */
  'import/no-deprecated': NoDeprecated;
}
