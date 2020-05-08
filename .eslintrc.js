module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react-hooks",  "jsx-a11y", '@typescript-eslint'],
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "trailingComma": "es5",
      "printWidth": 120,
    }],
    "semi": [
      2,
      "always"
    ],
    'react/prop-types': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/camelcase": 0,
    "jsx-a11y/alt-text": 2,
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
