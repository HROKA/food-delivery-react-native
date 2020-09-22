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
    'object-curly-newline': 0,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'function-paren-newline': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'linebreak-style': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'no-use-before-define': ['error', { variables: false }],
  },
};
