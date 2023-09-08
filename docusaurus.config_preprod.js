let config =require("./docusaurus.config")

let newConfig = config;
newConfig.scripts=[]
newConfig.noIndex=true
newConfig.presets[0][1].gtag = null

module.exports = newConfig