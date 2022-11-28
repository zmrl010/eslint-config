import { createDoc } from './doc.js';

export const AUTO_GENERATED_NOTE = createDoc(
  'THIS FILE IS AUTO-GENERATED.',
  'DO NOT MODIFY IT MANUALLY',
  'RUN `pnpm generate:types` TO REGENERATE IT.'
);
