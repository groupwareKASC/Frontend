// Flat Config for Vite + React + TypeScript + Storybook
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

import * as tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';

export default defineConfig([
  globalIgnores(['dist', 'build', 'coverage', 'storybook-static', 'node_modules']),

  js.configs.recommended,

  // TS 권장 규칙 세트(Flat Config용) — 배열이라 상단에서 펼쳐 넣기
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs['recommended-latest'].rules,
      ...reactRefresh.configs.vite.rules,

      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
    },
  },

  {
    ...storybook.configs['flat/recommended'],
    files: [
      '**/*.stories.@(js|jsx|ts|tsx|mdx)',
      '.storybook/**/*.@(js|jsx|ts|tsx)',
    ],
  },
]);
