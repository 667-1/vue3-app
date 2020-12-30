module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'quotes': [1, 'single'],
    'eqeqeq': 2,
    'no-eq-null': 2,
    'vue/comment-directive': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
