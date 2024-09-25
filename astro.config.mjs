import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerMetaHighlight
} from '@shikijs/transformers'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
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