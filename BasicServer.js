//http - handle server request and response
const http = require('http');
http.createServer((req, resp)=>{
    resp.write("Hello this is dummy data")
    resp.end();
}).listen(4500);