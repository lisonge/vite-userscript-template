import { defineConfig } from 'vite';
import monkeyPlugin from 'vite-plugin-monkey';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // https://github.com/lisonge/vite-plugin-monkey.git
        monkeyPlugin({
            entry: 'src/main.ts',
            userscript: {
                icon: 'https://dev.songe.li/favicon.svg',
                namespace: 'npm/vite-plugin-monkey',
                // https://www.google.com/
                match: ['https://www.google.com/'],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
