const http = require('http');
const fs = require('fs')

var server = http.createServer((req,res) => 
     fs.createReadStream(process.argv[3]).pipe(res));
    
server.listen(process.argv[2]);