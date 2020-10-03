module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'react-app',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: [2, 'always'],
    'indent': ['error', 2],
    'quotes': [2, 'single', { 'avoidEscape': true }],
  }
};
