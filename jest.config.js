module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],

  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  verbose: true,
  setupFiles: ['<rootDir>setup-mocks.js'],
  setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
  coveragePathIgnorePatterns: ['node_modules'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
