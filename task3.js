const fs = require("fs")
var buff=fs.readFileSync(process.argv[2],'utf8');
var lines = buff.split("\n").length - 1;
console.log(lines);