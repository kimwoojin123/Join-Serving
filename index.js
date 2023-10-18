const signUp = require("./module/signup");

let id = document.getElementsByName("id");
let idError = document.getElementById("iderror");
let pw = document.getElementsByName("pw");
let pw2 = document.getElementsByName("pw2");
let pwError = document.getElementById("pwerror");
let email = document.getElementsByName("email");
let emailError = document.getElementById("emerror");
let submit = document.getElementsByName("submit");
let idValue = id.value;
let idStr = idValue.split("");
let emailValue = email.value;
let emStr = emailValue.split("");
let atSignIndex = emStr.indexOf("@");

const idUpper = idStr.find((elem) => {
  return elem === elem.toUpperCase();
});

const idLower = idStr.find((elem) => {
  return elem === elem.toLowerCase();
});

const emAtsign = emStr.includes("@");
const emDot = emStr.includes(".", atSignIndex);

function idCheck() {
  if (idUpper === undefined && idLower === undefined) {
    idError.textContent = "대문자나 소문자가 포함되어야 합니다.";
  }
}

function pwCheck() {
  if (pw.value !== pw2.value) {
    pwError.textContent = "비밀번호가 일치하지 않습니다.";
  }
}

function emCheck() {
  if (emAtsign === false && emDot === false) {
    emailError.textContent = "이메일 형식이 맞지 않습니다.";
  }
}
