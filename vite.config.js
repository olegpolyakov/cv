import path from 'path';
import { NodePackageImporter } from 'sass';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup';

export default defineConfig(env => {
    const isDevelopment = env.mode === 'development';

    return {
        root: path.resolve(__dirname, 'src'),
        publicDir: path.resolve(__dirname, 'public'),
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
            alias: Object.assign({
                '@': path.resolve(__dirname, 'src')
            }, isDevelopment ? {
                'kantanui': path.resolve(__dirname, '../../kantanui')
            } : {})
        },
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
                generateScopedName: '[folder]__[local]--[hash:base64:5]'
            },
            preprocessorOptions: {
                scss: {
                    importers: [new NodePackageImporter()]
                }
            }
        }
    };
});
