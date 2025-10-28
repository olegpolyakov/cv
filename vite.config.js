import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup';

export default defineConfig({
    base: './',
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
        sourcemap: true
    },
    plugins: [
        react(),
        mdx(),
        svgr({
            include: '**/*.svg',
            svgrOptions: {
                ref: true,
                svgo: true,
                titleProp: true
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
            generateScopedName: '[folder]__[local]--[hash:base64:5]'
        },
        preprocessorOptions: {
            scss: {}
        }
    }
});
