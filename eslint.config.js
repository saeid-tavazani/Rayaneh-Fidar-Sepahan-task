import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import { defineConfig } from 'eslint-define-config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default defineConfig({
  ignores: ['dist'],
  extends: [js.configs.recommended, ...tseslint.configs.recommended, 'plugin:prettier/recommended'],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    'prettier': 'eslint-plugin-prettier',
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
  },
});
