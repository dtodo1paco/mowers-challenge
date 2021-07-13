module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  snapshotSerializers: [],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/@types/**',
    '!**/*.d.{ts,tsx}',
    '!**/scripts/**',
  ],
  testRegex: "^.+\\.*\.test.ts$",
  reporters: ['default'],
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};