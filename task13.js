
const http = require('http');
const url = require('url');
const parstime = '/api/parsetime';
const unixtime =  '/api/unixtime';

var server = http.createServer((req,res) => {
    var reqUrl =  url.parse(req.url,true);
    if(req.method !== 'GET' || !reqUrl.query.hasOwnProperty('iso')){
        res.writeHead(404);
        return res.end("I answer only ISP-format GET requests\n");
    }

    switch(reqUrl.pathname){
        case parstime:
            res.writeHead(200, { 'Content-Type': 'application/json' }); 
            return res.end(isoToJson(reqUrl.query.iso));
        case unixtime:
            res.writeHead(200, { 'Content-Type': 'application/json' }); 
            return res.end(isoToJsonUnix(reqUrl.query.iso));
        default:
            res.writeHead(404);
            return res.end("url pathname sould be either "+parstime+" or "+unixtime+"\n");
    }
});

server.listen(process.argv[2]);


function isoToJson(isoString){
    var date = new Date(isoString);
    return JSON.stringify({ 
            "hour": date.getHours(), 
            "minute": date.getMinutes(), 
            "second": date.getSeconds() 
        
    });
}

function isoToJsonUnix(isoString){
    var date = new Date(isoString);
    return JSON.stringify({ unixtime: date.getTime()});
}