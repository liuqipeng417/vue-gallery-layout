// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],

  globals: {
    '_': true,
    '$': true
  },
  // add your custom rules here
  'rules': {
    // 函数名后无需空格
    'space-before-function-paren': 0,

    // allow paren-less arrow functions
    'arrow-parens': 0,

    // allow async-await
    'generator-star-spacing': 0,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // return 可以是表达式
    'no-return-assign': 0,

    // 强制语句必须以分号结尾
    'semi': [2, "always"],

    // new运算符用于调用构造函数(ES6), 不能省略
    'no-new': 0,

    'padded-blocks': 0,

    "camelcase": 0,

    "one-var": 0,

    "handle-callback-err": 0,

    "no-extend-native": 0
  }
}
