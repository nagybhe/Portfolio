import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'build',
        sourcemap: false
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/setupTests.js',
        // O jsdom não avalia media queries de layout: processar o CSS aqui faria
        // o toggle mobile (display:none no desktop) sumir da árvore de
        // acessibilidade. Visibilidade responsiva é verificada no Playwright.
        css: false,
        include: ['src/**/*.{test,spec}.{js,jsx}'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            include: ['src/**/*.{js,jsx}'],
            exclude: ['src/main.jsx', 'src/setupTests.js', 'src/**/*.{test,spec}.{js,jsx}']
        }
    }
});
