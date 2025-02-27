export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { configFile: './jest.babel.config.json' }],
  },
  moduleNameMapper: {
    '^atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^templates/(.*)$': '<rootDir>/src/components/templates/$1',
  },
};
