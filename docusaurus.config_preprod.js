let config =require("./docusaurus.config")

let newConfig = config;
newConfig.scripts=[]
newConfig.noIndex=true

module.exports = newConfig