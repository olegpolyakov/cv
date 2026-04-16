import mdx from '@mdx-js/rollup';
import sharedConfig from '@olegpoliakov/frontend/config/vite.config.js';
import { defineConfig, mergeConfig } from 'vite';

export default defineConfig(mergeConfig(
    sharedConfig({
        basePath: import.meta.dirname
    }), {
        plugins: [mdx()]
    })
);