function idCheck(obj) {
  let idStr = obj.split("");
  let idUpper = idStr.find((elem) => {
    return elem === elem.toUpperCase();
  });
  let idLower = idStr.find((elem) => {
    return elem === elem.toLowerCase();
  });
  if (idUpper !== undefined && idLower !== undefined) {
    return true;
  }
}

module.exports = idCheck;
