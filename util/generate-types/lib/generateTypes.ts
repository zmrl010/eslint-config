import type { TSESLint } from '@typescript-eslint/utils';
import util from 'node:util';
import path from 'path';
import { GeneratorOptions, setupContext } from './context.js';
import { createDoc, createRuleDoc } from './doc.js';
import { generatePluginTypes } from './generatePluginTypes.js';
import { getAllPlugins, type Plugin } from './getPlugins.js';
import { formatText, joinLines, toPascalCase } from './text.js';

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

export async function generateTypes(
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

    await generatePluginTypes(context, {
      ...plugin,
      rules,
    });

    const rulePrefix =
      plugin.shortName === 'eslint' ? '' : `${plugin.shortName}/`;

    const ruleNames = Object.keys(rules).map((rule) => ({
      name: rule,
      safeName: toPascalCase(rule.replace(`${plugin.shortName}/`, '')),
    }));

    const typeImports = ruleNames.map(
      (rule) =>
        `import type { ${rule.safeName} } from '../${plugin.shortName}/${rule.name}.js'`
    );

    const interfaceDoc = createDoc(`\`${plugin.name}\` Rules`);

    const interfaceName = toPascalCase(plugin.shortName);

    const interfaceMembers = ruleNames.map((rule) => {
      const comment = createRuleDoc(rules[rule.name].meta.docs);
      return `${comment}\n'${rulePrefix}${rule.name}': ${rule.safeName};\n`;
    });

    const indexFileText = joinLines(
      context.autoGeneratedNote,
      '',
      ...typeImports,
      '',
      interfaceDoc,
      `export interface ${interfaceName} {`,
      ...interfaceMembers,
      '}'
    );

    context.writeFile(
      path.resolve(context.target, plugin.shortName, 'index.ts'),
      formatText(indexFileText)
    );

    console.info('Wrote types for', plugin.name, '\n');
  }

  console.info('Done!');
}

function generateIndexFile() {}
