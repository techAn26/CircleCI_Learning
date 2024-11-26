/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/../src/$1',
  },
  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  }
}

module.exports = config
