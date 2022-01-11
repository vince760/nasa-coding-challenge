module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
  },
  plugins: ["react"],
  parser: "babel-eslint",
  rules: {
    "newline-per-chained-call": [
      2,
      {
        ignoreChainWithDepth: 1,
      },
    ],
    "react/jsx-newline": [
      2,
      {
        prevent: false,
      },
    ],
    "react/jsx-one-expression-per-line": [
      2,
      {
        allow: "none",
      },
    ],
    "react/jsx-first-prop-new-line": ["error", "always"],
    "react/jsx-closing-bracket-location": [
      "error",
      {
        selfClosing: "tag-aligned",
        nonEmpty: "tag-aligned",
      },
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "array-element-newline": [
      "error",
      {
        minItems: 2,
      },
    ],
    "array-bracket-newline": [
      "error",
      {
        minItems: 2,
      },
    ],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    quotes: ["error", "single"],
    semi: [0, "never"],
    "space-before-function-paren": [0, "never"],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
        ignoredNodes: ["TemplateLiteral > *"],
      },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "no-script-url": "off",
    camelcase: [
      "error",
      {
        properties: "always",
      },
    ],
    "no-redeclare": [
      2,
      {
        builtinGlobals: true,
      },
    ],
    eqeqeq: [2, "always"],
    "no-unused-vars": [
      2,
      {
        vars: "local",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    "no-console": [0, "always"],
        
  },
};
