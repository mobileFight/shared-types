module.exports = {
  extends: ["prettier", "plugin:flowtype/recommended", "@atomix/eslint-config"],
  parser: "babel-eslint",
  globals: {
    grecaptcha: true,
  },
  rules: {
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: false,
      },
    ],
    quotes: "off",
  },
  plugins: ["flowtype"],
}
