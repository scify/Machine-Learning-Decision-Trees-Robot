module.exports = {
    testEnvironment: "jest-environment-jsdom",
    moduleFileExtensions: [
        "js",
        "json",
        // tell Jest to handle `*.vue` files
        "vue"
    ],
    transform: {
        // process `*.vue` files with `vue-jest`
        ".*\\.(vue)$": "@vue/vue2-jest",
        // process js with `babel-jest`
        "^.+\\.js$": "babel-jest"
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};