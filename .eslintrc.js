module.exports = {
    env: {
        jest: true,
        browser: true,
        amd: true,
        node: true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    plugins: ["jest"],
    globals: {
        page: true,
        browser: true,
        context: true,
        jestPuppeteer: true,
    },
    extends: [
        "eslint:recommended"
    ],
    rules: {
        "no-useless-escape": "off",
        "no-console": "off",
        "no-debugger": "warn",
        "no-unsafe-finally": "off"
    }
}