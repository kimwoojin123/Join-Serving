const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const mainPage = require("./module/mainpage");
const signUpAsset = require("./module/signup");
const idCheck = require("./idcheck");
const pwCheck = require("./pwcheck");
const emailCheck = require("./emailcheck");

http
  .createServer((req, res) => {
    fs.readFile("index.html", "utf8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const parseBody = queryString.parse(body);
        Object.assign(signUpAsset, parseBody);
        console.log(parseBody);
        console.log(signUpAsset);
        console.log(signUpAsset.id);
        res.writeHead(200);
        if (
          idCheck(signUpAsset.id) === true &&
          pwCheck(signUpAsset.password, signUpAsset.password2) &&
          emailCheck(signUpAsset.email)
        ) {
          res.end(mainPage);
        }
      });
    }
  })
  .listen(8000, () => {
    console.log("http://localhost:8000");
  });
