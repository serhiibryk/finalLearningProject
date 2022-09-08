module.exports = {
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  globals: {
    beforeAll: true,
    beforeEach: true,
    describe: true,
    expect: true,
    it: true,
    jest: true,
    localStorage: true,
    chrome: 'readonly',
  },
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: ["tsconfig.json"]
  },
  rules: {
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "multiline-ternary": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "import/order": 0,
    "@typescript-eslint/semi": 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    camelcase: 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': 1,
    'consistent-return': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
        json5: 'never',
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    'import/order': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@test', './test'],
        ],
        extensions: ['.ts', '.js', '.tsx', '.json', '.json5'],
      },
    },
  },
}
