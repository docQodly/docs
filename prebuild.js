const fs = require('fs');
const util = require('util');


let args = process.argv.slice(2);
const mainFolder = args[0]
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);


function collect(mainFolder) {
    return new Promise( async (resolve, reject)=>{
        let data = {}
        let promises = []
        let files = await readdir(mainFolder)
        files.forEach((file)=> {
            if(file.endsWith(".md")) {
                const content = readFile(mainFolder + file,{encoding:"utf8"})
                const p = new Promise((resolve, reject)=> {
                    content.then((content)=> {
                        const regex = /<!--\s*REF\s+#_command_.([a-zA-Z]+)/g
                        const matches = [...content.matchAll(regex)].map(m=>m[1]).filter((value, index, self)=>self.indexOf(value) == index);
                        matches.forEach((value)=> {
                            data[value] = file.split('.').slice(0, -1).join('.');
                        })
                        resolve()
                    })
                })
                promises.push(p)

            }
        })
        Promise.all(promises).then(()=> {
            resolve(data)
        })

    });
}

collect(mainFolder).then(data=>{
    if(Object.keys(data).length !== 0) {
        fs.writeFileSync("commandList.json", JSON.stringify(data))
    }
})




