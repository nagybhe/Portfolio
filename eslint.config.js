import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
    { ignores: ['build/**', 'coverage/**', 'node_modules/**', 'playwright-report/**', 'test-results/**'] },
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            globals: { ...globals.browser, ...globals.node },
            parserOptions: {
                ecmaFeatures: { jsx: true },
                sourceType: 'module'
            }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'jsx-a11y': jsxA11y
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.flatConfigs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'no-console': ['warn', { allow: ['warn', 'error'] }]
        }
    },
    {
        files: ['**/*.{test,spec}.{js,jsx}', 'src/setupTests.js', 'e2e/**/*.js'],
        languageOptions: { globals: { ...globals.browser, ...globals.node, ...globals.vitest } }
    }
];
