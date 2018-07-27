// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaFeatures": {
        "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "vue/jsx-uses-vars": 2,
    "no-console": ["error"]
  }
}
