module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@black-tooth/eslint-config-ts'
  ],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 20, multiline: { max: 20 } }],
    // 'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'comma-dangle': [2, 'never']
  }
}
