const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("Home directory");
    res.end("Home directory");
  }
  if (req.url === "/about") {
    for (let i = 0; i <= 1000; i++) {
      for (let j = 0; j <= 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About");
  }
});

server.listen(8080, () => {
  console.log("Server lisenting on 8080!");
});