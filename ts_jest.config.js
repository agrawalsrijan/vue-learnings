process.env.TZ = 'UTC';

module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    setupFiles: ['<rootDir>/tests/unit/setup.js', '<rootDir>/node_modules/core-js'],
    testMatch: ['**/**/*.spec.js', '**/**/*.spec.ts'],
    transformIgnorePatterns: ['node_modules'],

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
        'src/**/*.{js,vue}',
        '!**/node_modules/**',
        '!**/src/plugins/**',
        '!src/router/index.js',
        '!src/vuetify',
        '!src/main.js',
        '!src/registerServiceWorker.js',
        '!src/components/index.js',
        '!src/config/**',
        '!src/mocks/**',
        '!src/components/map/Leaflet/**',
        '!src/components/map/shared/**',
    ],
    coverageDirectory: 'reports/coverage',
    coverageReporters: ['cobertura', 'html', 'text-summary', 'lcov'],
};
