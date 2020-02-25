const fs = require('fs');

let manifestRaw = fs.readFileSync(`dist/${process.env.FILENAME}.json`);
let manifest = JSON.parse(manifestRaw);

let content = manifest.content;

Object.keys(content).forEach((oldKey) => {
  const newKey = `./${process.env.PREFIX}${oldKey.substring(1)}`;

  content[newKey] = content[oldKey];
  delete content[oldKey];
});

fs.writeFileSync(`dist/${process.env.FILENAME}.json`, JSON.stringify(manifest));
