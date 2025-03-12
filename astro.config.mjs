import { defineConfig } from 'astro/config';

import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerMetaHighlight
} from '@shikijs/transformers'

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dark-plus',
      wrap: true,
      transformers: [
        transformerNotationDiff(),
        transformerNotationFocus(),
        transformerMetaHighlight(),
      ],
    },
  },
});