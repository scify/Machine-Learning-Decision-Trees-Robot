module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
    },

    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    // https://eslint.org/docs/rules/
    "rules": {
        "linebreak-style": ["error", "unix"],
        "no-console": "off"
    }
};
