module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  // without it self closing tag won't work
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }, 
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // self closing - enable on save fix to resolve
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }],
    "react/no-unknown-property": 0
  },
}
