module.exports = {
    root: true,
    env: {
        node: true
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: [
        "plugin:vue/essential",
        'eslint:recommended',
        "prettier"
    ],
};
