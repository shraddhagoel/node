var filterDir = require('./task6module.js');

var dirPath = process.argv[2];
var extension = process.argv[3];

filterDir(dirPath, extension, (err, list) => {
  if (err) {
    console.log('An error ' + dirPath);
    return err;
  }
  
  list.forEach((filename) => {
    console.log(filename);
  });
});
