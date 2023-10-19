const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const subPage = require("./module/subpage");
const signUpAsset = require("./module/signup");
const idCheck = require("./idcheck");
const pwCheck = require("./pwcheck");
const emailCheck = require("./emailcheck");

http
  .createServer((req, res) => {
    function readFile(url, content) {
      fs.readFile(url, "utf8", (err, data) => {
        res.writeHead(200, { "Content-Type": content });
        res.end(data);
      });
    }

    // fs.readFile("index.html", "utf8", (err, data) => {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.end(data);
    // });

    // fs.readFile("./style/sub.css", "utf8", (err, data) => {
    //   res.writeHead(200, { "Content-Type": "text/css" });
    //   res.end(data);
    // });

    // fs.readFile("./style/main.css", "utf8", (err, data) => {
    //   res.writeHead(200, { "Content-Type": "text/css" });
    //   res.end(data);
    // });

    if (req.method === "POST" && req.url === "/") {
      readFile("index.html", "text/html");
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const parseBody = queryString.parse(body);
        Object.assign(signUpAsset, parseBody);
        res.writeHead(200);
        if (
          idCheck(signUpAsset.id) === true &&
          pwCheck(signUpAsset.password, signUpAsset.password2) &&
          emailCheck(signUpAsset.email)
        ) {
          let welcome = `<h1>${signUpAsset.id}님! 반갑습니다.<br>저에게 편지를 보내주세요!</h1>`;
          res.end(welcome + subPage);
        }
      });
    } else if (req.method === "POST" && req.url === "/style/main.css") {
      readFile("./style/main.css", "text/css");
    } else if (req.method === "POST" && req.url === "/style/sub.css") {
      readFile("./style/sub.css", "text/css");
    }
  })
  .listen(8000, () => {
    console.log("http://localhost:8000");
  });
