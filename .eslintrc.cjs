module.exports = {
  env: { es2023: true, node: true, jest: true },
  extends: ['standard'],
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'off'
  }
};
