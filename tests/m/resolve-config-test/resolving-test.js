const prettier = require("prettier-local");

async function retrieveConfig(fileName) {
    const config = await prettier.resolveConfigFile(fileName);

    return config;
}

module.exports = retrieveConfig;