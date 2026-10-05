import mdx from '@mdx-js/rollup';
import { defineConfig, mergeConfig } from 'vite';

import sharedConfig from '@olegpolyakov/frontend/viteconfig';

export default defineConfig(mergeConfig(
    sharedConfig({
        basePath: import.meta.dirname
    }), {
        plugins: [mdx()]
    })
);