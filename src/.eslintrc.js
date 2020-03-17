module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/strict'
  ],
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
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y'
  ],
  rules: {
    semi: ["error", "never"],
    ['import/extensions']: "off",
    ['import/no-unresolved']: "off",
    ['react/jsx-filename-extension']: "off",
    ['react/prop-types']:"off"
  },
};
