const http = require("http");
const port = process.env.PORT || 5000;

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello, Guys< yessss/h1>");
    res.end();
}).listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
