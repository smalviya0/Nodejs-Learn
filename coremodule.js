//core modules
//globals - directly used like console no import neeed
//non-globals - fs import needed
console.log("Hello");
const fs = require('fs'); //module
fs.writeFileSync("Hello.txt", "like and subscribe") //create file

console.log("directory",__dirname) // directory name
console.log("file name",__filename) // file name

const gs = require('fs').writeFileSync;
gs("xyz.txt", "abc")

const http = require('http');

function dataCount(req, resp){
    resp.write("<h1>Hello this is form data</h1>")
    resp.end();
}
http.createServer(dataCount).listen(4500);
