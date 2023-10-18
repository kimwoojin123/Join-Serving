const signUp = require("./module/signup");

let id = document.getElementsByName("id");
let pw = document.getElementsByName("pw");
let pw2 = document.getElementsByName("pw2");
let email = document.getElementsByName("email");
let idValue = id.value;
let idStr = idValue.split("");

const idUpper = idStr.find((elem) => {
  return elem === elem.toUpperCase();
});

const idLower = idStr.find((elem) => {
  return elem === elem.toLowerCase();
});

if (idUpper === undefined && idLower === undefined) {
}
