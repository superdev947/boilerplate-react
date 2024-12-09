const eslint = require('@eslint/js');
const tslint = require('typescript-eslint');
const react = require('eslint-plugin-react');
const ts = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const globals = require('globals');

module.exports = [
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['**/*.config.js'],
    plugins: {
      ts,
      react,
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        globals: {
          ...globals.browser,
        }
      },
    },
    rules: {},
  },
];
