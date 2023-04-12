/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { ConsistentTestIt } from '../jest/consistent-test-it.js';
import type { ExpectExpect } from '../jest/expect-expect.js';
import type { MaxExpects } from '../jest/max-expects.js';
import type { MaxNestedDescribe } from '../jest/max-nested-describe.js';
import type { NoAliasMethods } from '../jest/no-alias-methods.js';
import type { NoCommentedOutTests } from '../jest/no-commented-out-tests.js';
import type { NoConditionalExpect } from '../jest/no-conditional-expect.js';
import type { NoConditionalInTest } from '../jest/no-conditional-in-test.js';
import type { NoDeprecatedFunctions } from '../jest/no-deprecated-functions.js';
import type { NoDisabledTests } from '../jest/no-disabled-tests.js';
import type { NoDoneCallback } from '../jest/no-done-callback.js';
import type { NoDuplicateHooks } from '../jest/no-duplicate-hooks.js';
import type { NoExport } from '../jest/no-export.js';
import type { NoFocusedTests } from '../jest/no-focused-tests.js';
import type { NoHooks } from '../jest/no-hooks.js';
import type { NoIdenticalTitle } from '../jest/no-identical-title.js';
import type { NoInterpolationInSnapshots } from '../jest/no-interpolation-in-snapshots.js';
import type { NoJasmineGlobals } from '../jest/no-jasmine-globals.js';
import type { NoLargeSnapshots } from '../jest/no-large-snapshots.js';
import type { NoMocksImport } from '../jest/no-mocks-import.js';
import type { NoRestrictedJestMethods } from '../jest/no-restricted-jest-methods.js';
import type { NoRestrictedMatchers } from '../jest/no-restricted-matchers.js';
import type { NoStandaloneExpect } from '../jest/no-standalone-expect.js';
import type { NoTestPrefixes } from '../jest/no-test-prefixes.js';
import type { NoTestReturnStatement } from '../jest/no-test-return-statement.js';
import type { NoUntypedMockFactory } from '../jest/no-untyped-mock-factory.js';
import type { PreferCalledWith } from '../jest/prefer-called-with.js';
import type { PreferComparisonMatcher } from '../jest/prefer-comparison-matcher.js';
import type { PreferEach } from '../jest/prefer-each.js';
import type { PreferEqualityMatcher } from '../jest/prefer-equality-matcher.js';
import type { PreferExpectAssertions } from '../jest/prefer-expect-assertions.js';
import type { PreferExpectResolves } from '../jest/prefer-expect-resolves.js';
import type { PreferHooksInOrder } from '../jest/prefer-hooks-in-order.js';
import type { PreferHooksOnTop } from '../jest/prefer-hooks-on-top.js';
import type { PreferLowercaseTitle } from '../jest/prefer-lowercase-title.js';
import type { PreferMockPromiseShorthand } from '../jest/prefer-mock-promise-shorthand.js';
import type { PreferSnapshotHint } from '../jest/prefer-snapshot-hint.js';
import type { PreferSpyOn } from '../jest/prefer-spy-on.js';
import type { PreferStrictEqual } from '../jest/prefer-strict-equal.js';
import type { PreferToBe } from '../jest/prefer-to-be.js';
import type { PreferToContain } from '../jest/prefer-to-contain.js';
import type { PreferToHaveLength } from '../jest/prefer-to-have-length.js';
import type { PreferTodo } from '../jest/prefer-todo.js';
import type { RequireHook } from '../jest/require-hook.js';
import type { RequireToThrowMessage } from '../jest/require-to-throw-message.js';
import type { RequireTopLevelDescribe } from '../jest/require-top-level-describe.js';
import type { UnboundMethod } from '../jest/unbound-method.js';
import type { ValidDescribeCallback } from '../jest/valid-describe-callback.js';
import type { ValidExpectInPromise } from '../jest/valid-expect-in-promise.js';
import type { ValidExpect } from '../jest/valid-expect.js';
import type { ValidTitle } from '../jest/valid-title.js';

/**
 * `eslint-plugin-jest` Rules
 */
export interface Jest {
  'jest/consistent-test-it': ConsistentTestIt;
  'jest/expect-expect': ExpectExpect;
  'jest/max-expects': MaxExpects;
  'jest/max-nested-describe': MaxNestedDescribe;
  'jest/no-alias-methods': NoAliasMethods;
  'jest/no-commented-out-tests': NoCommentedOutTests;
  'jest/no-conditional-expect': NoConditionalExpect;
  'jest/no-conditional-in-test': NoConditionalInTest;
  'jest/no-deprecated-functions': NoDeprecatedFunctions;
  'jest/no-disabled-tests': NoDisabledTests;
  'jest/no-done-callback': NoDoneCallback;
  'jest/no-duplicate-hooks': NoDuplicateHooks;
  'jest/no-export': NoExport;
  'jest/no-focused-tests': NoFocusedTests;
  'jest/no-hooks': NoHooks;
  'jest/no-identical-title': NoIdenticalTitle;
  'jest/no-interpolation-in-snapshots': NoInterpolationInSnapshots;
  'jest/no-jasmine-globals': NoJasmineGlobals;
  'jest/no-large-snapshots': NoLargeSnapshots;
  'jest/no-mocks-import': NoMocksImport;
  'jest/no-restricted-jest-methods': NoRestrictedJestMethods;
  'jest/no-restricted-matchers': NoRestrictedMatchers;
  'jest/no-standalone-expect': NoStandaloneExpect;
  'jest/no-test-prefixes': NoTestPrefixes;
  'jest/no-test-return-statement': NoTestReturnStatement;
  'jest/no-untyped-mock-factory': NoUntypedMockFactory;
  'jest/prefer-called-with': PreferCalledWith;
  'jest/prefer-comparison-matcher': PreferComparisonMatcher;
  'jest/prefer-each': PreferEach;
  'jest/prefer-equality-matcher': PreferEqualityMatcher;
  'jest/prefer-expect-assertions': PreferExpectAssertions;
  'jest/prefer-expect-resolves': PreferExpectResolves;
  'jest/prefer-hooks-in-order': PreferHooksInOrder;
  'jest/prefer-hooks-on-top': PreferHooksOnTop;
  'jest/prefer-lowercase-title': PreferLowercaseTitle;
  'jest/prefer-mock-promise-shorthand': PreferMockPromiseShorthand;
  'jest/prefer-snapshot-hint': PreferSnapshotHint;
  'jest/prefer-spy-on': PreferSpyOn;
  'jest/prefer-strict-equal': PreferStrictEqual;
  'jest/prefer-to-be': PreferToBe;
  'jest/prefer-to-contain': PreferToContain;
  'jest/prefer-to-have-length': PreferToHaveLength;
  'jest/prefer-todo': PreferTodo;
  'jest/require-hook': RequireHook;
  'jest/require-to-throw-message': RequireToThrowMessage;
  'jest/require-top-level-describe': RequireTopLevelDescribe;
  'jest/unbound-method': UnboundMethod;
  'jest/valid-describe-callback': ValidDescribeCallback;
  'jest/valid-expect-in-promise': ValidExpectInPromise;
  'jest/valid-expect': ValidExpect;
  'jest/valid-title': ValidTitle;
}
