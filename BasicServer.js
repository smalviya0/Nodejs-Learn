//http - handle server request and response
// const http = require('http');

// http.createServer((req, resp)=>{
//     resp.write("<h1>Hello this is dummy data</h1>")
//     resp.end();
// }).listen(4500);
//pass using function

// const http = require('http');

// function dataCount(req, resp){
//     resp.write("<h1>Hii this is form data</h1>")
//     resp.end();
// }
// http.createServer(dataCount).listen(4500);
//using arrow function
// const http = require('http');

// const dataCount = (req, resp) =>{
//     resp.write("<h1>Hello guys this is form data</h1>")
//     resp.end();
// }
// http.createServer(dataCount).listen(4500);

//pass as a parameter
const http = require('http');

http.createServer((req, resp) =>{
    resp.write("<h1>Hello this is form data</h1>")
    resp.end();
}).listen(4500)

