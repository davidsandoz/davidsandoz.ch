const postcssPresetEnv = require("postcss-preset-env")
const atImport = require("postcss-import")

module.exports = {
  plugins: [postcssPresetEnv(/* pluginOptions */), atImport()]
}
