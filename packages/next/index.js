module.exports = {
  extends: [
    '@black-tooth/eslint-config-react',
    'plugin:@next/next/recommended'
  ],
  plugins: ['jsx-a11y'],
  rules: {
    'import/no-anonymous-default-export': 'warn',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image']
      }
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn'
  }
}
