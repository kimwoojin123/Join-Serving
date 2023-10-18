const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const mainPage = require("./module/mainpage");

http
  .createServer((req, res) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      res.writeHead(200);
      res.end(mainPage);
    });
  })
  .listen(8000, () => {
    console.log("http://localhost:8000");
  });
