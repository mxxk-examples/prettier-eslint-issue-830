module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2017,
    requireConfigFile: false,
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    quotes: ['error', 'single'],
  },
};
