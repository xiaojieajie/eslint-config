module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser',
      },
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@hannoeru/eslint-config-basic',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    // 'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
