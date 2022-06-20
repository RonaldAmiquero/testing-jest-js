module.exports = {
   env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
      jest: true
   },
   extends: ['airbnb-base', 'prettier'],
   parserOptions: {
      ecmaVersion: 'latest'
   },
   rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
   }
}
