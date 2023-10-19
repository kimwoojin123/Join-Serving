const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const subPage = require("./module/subpage");
const signUpAsset = require("./module/signup");
const titleText = require("./module/titletext");
const idCheck = require("./checkmodule/idcheck");
const pwCheck = require("./checkmodule/pwcheck");
const emailCheck = require("./checkmodule/emailcheck");

http
  .createServer((req, res) => {
    function readFile(url, content) {
      fs.readFile(url, "utf8", (err, data) => {
        res.writeHead(200, { "Content-Type": content });
        res.end(data);
      });
    }

    if (req.url === "/style/sub.css") {
      fs.readFile("./style/sub.css", "utf8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
        return res.end();
      });
    }

    if (req.url === "/") {
      readFile("index.html", "text/html");
    } else if (req.url === "/style/main.css") {
      fs.readFile("./style/main.css", "utf8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
        return res.end();
      });
    }

    if (req.method === "POST") {
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
          res.end(subPage(signUpAsset.id));
        }
      });
    }
    if (req.method === "POST" && req.url === "/login") {
      let data = "";
      req.on("data", (chunk) => {
        data += chunk.toString();
      });
      req.on("end", () => {
        const parseData = queryString.parse(data);
        Object.assign(titleText, parseData);
        res.writeHead(200);
        if (titleText.title !== "" && titleText.text !== "") {
          res.end(console.log(titleText));
        }
      });
    }
  })
  .listen(8000, () => {
    console.log("http://localhost:8000");
  });
