module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "vue/multi-word-component-names": "off",
    },
    parser: "vue-eslint-parser",
    extends: ["plugin:vue/essential", "eslint:recommended", "prettier"],
};
