import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';
import pooolint from '@poool/eslint-config-react';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  { ignores: [
    '.next',
    '.vercel',
    'node_modules',
    'tests-results',
    '.vscode',
    'next-env.d.ts',
    'dist',
    'coverage',
    '.yarn',
    'tests/__mocks__',
  ] },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...pooolint.configs.recommended,
  ...compat.config({
    extends: ['plugin:@next/next/recommended'],
  }),
);
