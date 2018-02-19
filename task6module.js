const fs = require('fs');
const path = require('path');

module.exports = (dirPath, extension, callback) => {
    fs.readdir(dirPath, (err, fileNames) =>{
       if(err) return callback(err);
       callback(null, fileNames.filter((fileName) => path.extname(fileName) == "."+extension));
});
}