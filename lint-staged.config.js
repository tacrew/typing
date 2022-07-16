module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // https://github.com/okonet/lint-staged/issues/934
  // Test TypeScript and JavaScript files
  // '**/*.(ts|tsx|js|test)': () => [`yarn jest -c jest.config.js --lastCommit`],
}
