const http = require('http');
var results = [];
var count = 0;

for(var i = 0; i < 3; i++)
    httpGet(i);

function httpGet(index){
    http.get(process.argv[2+index], (res) => {
        results[index] = "";
        res.setEncoding('utf8');
        res.on('data',  (data) => results[index] += data);
        res.on('end', () => { 
            if(++count === 3){
                for(var j = 0; j < 3; j++)
                    console.log(results[j]);
            }
        });
        res.on('error', console.error);
    }).on('error', console.error);
}