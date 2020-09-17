module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  root: true,
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb-base'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'linebreak-style': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'no-use-before-define': ['error', { variables: false }],
  },
};
