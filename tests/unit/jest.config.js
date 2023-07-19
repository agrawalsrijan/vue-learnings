// Setup global env variables for all unit tests
process.env.TZ = 'UTC';

module.exports = {
    rootDir: '../../',
    moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
    modulePathIgnorePatterns: ['node_modules'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '.*\\.(ts)$': 'ts-jest',
        '.*\\.(vue)$': 'vue-jest',
        '.*\\.(js)$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub',
    },
    transformIgnorePatterns: ['node_modules'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/**/*.spec.js', '**/**/*.spec.ts'],
    testPathIgnorePatterns: ['<rootDir>/config/', '<rootDir>/node_modules'],
    setupFiles: ['<rootDir>/tests/unit/setup.js'],
    // Jest-junit config
    reporters: [
        'default',
        [
            'jest-junit',
            {
                suiteName: 'Unit-tests report',
                outputDirectory: 'reports/test',
                outputName: 'unit-tests-report.xml',
                classNameTemplate: '{classname}-{title}',
                titleTemplate: '{classname}-{title}',
            },
        ],
    ],
    // Jest coverage using Istanbul lib "cobertura"
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,vue, ts}',
        '!**/node_modules/**',
        '!**/src/plugins/**',
        '!src/router/index.js',
        '!src/vuetify/**',
        '!src/main/**',
        '!src/registerServiceWorker.js',
        '!src/components/index.js',
        '!src/config/**',
        '!src/mocks/**',
        '!**/translationHelpers/**',
    ],
    coverageDirectory: 'reports/coverage',
    coverageReporters: ['cobertura', 'html', 'text-summary', 'lcov'],
};
