import type { TSESLint } from '@typescript-eslint/utils';
import mkdirp from 'mkdirp';
import path from 'path';
import util from 'util';
import { GeneratorOptions, setupContext } from './context.js';
import { generateRuleTypeFiles } from './generateRuleTypeFiles.js';
import { getAllPlugins, type Plugin } from './getPlugins.js';
import { createDoc, formatText, joinLines, toPascalCase } from './text.js';

const debug = util.debuglog('generate-types');

/**
 * normalize function rule into object
 */
function normalizeRule(
  ruleCreator: TSESLint.RuleCreateFunction
): TSESLint.RuleModule<string, unknown[]> {
  return {
    defaultOptions: [],
    meta: {
      messages: {},
      schema: {},
      type: 'suggestion',
    },
    create: ruleCreator,
  };
}

export async function generateRuleTypes(
  options: GeneratorOptions = {}
): Promise<void> {
  const context = setupContext(options);
  const plugins = getAllPlugins();

  for await (const plugin of plugins) {
    debug(`processing plugin \`%s\``, plugin.name);
    if (!plugin.rules) {
      debug(`no rules found. skipping...`);
      continue;
    }

    const rules: Plugin['rules'] = {};
    for (const [ruleName, rule] of Object.entries(plugin.rules)) {
      if (typeof rule === 'function') {
        rules[ruleName] = normalizeRule(rule);
      } else if (rule.meta.deprecated === true) {
        // filter deprecated rules
        continue;
      } else {
        rules[ruleName] = rule;
      }
    }

    const pluginDir = path.resolve(context.target, plugin.shortName);
    await mkdirp(pluginDir);

    await generateRuleTypeFiles(context, rules, pluginDir);

    const ruleNames = Object.keys(rules).map((rule) => ({
      name: rule,
      safeName: toPascalCase(rule.replace(`${plugin.shortName}/`, '')),
    }));

    const rulePrefix =
      plugin.shortName === 'eslint' ? '' : `${plugin.shortName}/`;

    const typeImports = ruleNames.map(
      (rule) =>
        `import type { ${rule.safeName} } from '../${plugin.shortName}/${rule.name}.js'`
    );

    const interfaceDoc = createDoc(`\`${plugin.name}\` Rules`);

    const interfaceName = toPascalCase(plugin.shortName);

    const interfaceMembers = ruleNames.map(
      (rule) => `'${rulePrefix}${rule.name}': ${rule.safeName};`
    );

    const indexFileText = joinLines(
      ...typeImports,
      '',
      interfaceDoc,
      `export interface ${interfaceName} {`,
      ...interfaceMembers,
      '}'
    );

    context.writeFile(
      path.resolve(context.target, plugin.shortName, 'index.ts'),
      formatText(joinLines(context.autoGeneratedNote, '', indexFileText))
    );

    debug('Wrote types for ', plugin.name);
  }

  console.info('Done!');
}
