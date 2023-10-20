function idCheck(obj) {
  let idStr = obj.split("");
  let upIdStr = obj.toUpperCase();
  let upId = upIdStr.split("");
  let lowIdStr = obj.toLowerCase();
  let lowId = lowIdStr.split("");
  let arr = [];
  let idUpper = idStr.filter((elem) => upId.includes(elem));
  let idLower = idStr.filter((elem) => lowId.includes(elem));
  if (idUpper.toString() !== arr.toString() && idLower.toString() !== arr.toString()) {
    return true;
  }
}

module.exports = idCheck;
