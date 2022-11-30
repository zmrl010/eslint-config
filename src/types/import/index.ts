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
  'import/no-unresolved': NoUnresolved;
  'import/named': Named;
  'import/default': Default;
  'import/namespace': Namespace;
  'import/no-namespace': NoNamespace;
  'import/export': Export;
  'import/no-mutable-exports': NoMutableExports;
  'import/extensions': Extensions;
  'import/no-restricted-paths': NoRestrictedPaths;
  'import/no-internal-modules': NoInternalModules;
  'import/group-exports': GroupExports;
  'import/no-relative-packages': NoRelativePackages;
  'import/no-relative-parent-imports': NoRelativeParentImports;
  'import/no-self-import': NoSelfImport;
  'import/no-cycle': NoCycle;
  'import/no-named-default': NoNamedDefault;
  'import/no-named-as-default': NoNamedAsDefault;
  'import/no-named-as-default-member': NoNamedAsDefaultMember;
  'import/no-anonymous-default-export': NoAnonymousDefaultExport;
  'import/no-unused-modules': NoUnusedModules;
  'import/no-commonjs': NoCommonjs;
  'import/no-amd': NoAmd;
  'import/no-duplicates': NoDuplicates;
  'import/first': First;
  'import/max-dependencies': MaxDependencies;
  'import/no-extraneous-dependencies': NoExtraneousDependencies;
  'import/no-absolute-path': NoAbsolutePath;
  'import/no-nodejs-modules': NoNodejsModules;
  'import/no-webpack-loader-syntax': NoWebpackLoaderSyntax;
  'import/order': Order;
  'import/newline-after-import': NewlineAfterImport;
  'import/prefer-default-export': PreferDefaultExport;
  'import/no-default-export': NoDefaultExport;
  'import/no-named-export': NoNamedExport;
  'import/no-dynamic-require': NoDynamicRequire;
  'import/unambiguous': Unambiguous;
  'import/no-unassigned-import': NoUnassignedImport;
  'import/no-useless-path-segments': NoUselessPathSegments;
  'import/dynamic-import-chunkname': DynamicImportChunkname;
  'import/no-import-module-exports': NoImportModuleExports;
  'import/exports-last': ExportsLast;
  'import/no-deprecated': NoDeprecated;
}
