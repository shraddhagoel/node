
const net = require('net');

var server = net.createServer((socket) => socket.end(now()));
server.listen(process.argv[2]);

function now(){
    var date = new Date();
    var year = date.getFullYear();
    var month = twoDigitStr(date.getMonth()+1);
    var day = twoDigitStr(date.getDate());
    var hours = twoDigitStr(date.getHours());
    var minutes = twoDigitStr(date.getMinutes());
    return year+"-"+month+"-"+day+" "+hours+":"+minutes+"\n";
}

function twoDigitStr(number) {
    return ("0" + number).slice(-2);
}