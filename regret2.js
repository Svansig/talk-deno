// Node import statements can be confusing
// require might mean a node module, might mean a filepath
const fs = require('fs');
console.log('Accessing file secrets.txt...');
setTimeout(() => console.log(fs.readFileSync('secrets.txt', 'utf8')), 1000);
