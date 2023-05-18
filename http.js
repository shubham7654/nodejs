const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("Loaded!");
    res.end("Welcome to the homepage!!!");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
});

server.listen(8080);