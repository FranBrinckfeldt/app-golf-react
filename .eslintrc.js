module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'semi': 'off',
    '@typescript-eslint/semi': [2, "never"],
    'import/no-extraneous-dependencies': 0,
    'no-console': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/comma-dangle': [2, "never"],
    'object-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'arrow-body-style': 0,
    'consistent-return': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/button-has-type': 0,
    'arrow-parens': [2, "as-needed"],
    'class-methods-use-this': 0,
    'jest/no-mocks-import': 1,
    '@typescript-eslint/no-unused-vars': [1, { "argsIgnorePattern": "^_" }],
    'react/jsx-closing-bracket-location': 0,
    'react/require-default-props': 0,
    'no-underscore-dangle': [2, { "allow": ['_id'], "allowAfterThis": true }]
  },
}