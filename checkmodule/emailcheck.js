function emCheck(obj) {
  let emStr = obj.split("");
  let atSignIndex = emStr.indexOf("@");
  let emAtsign = emStr.includes("@");
  let emDot = emStr.includes(".", atSignIndex);
  if (emAtsign !== false && emDot !== false) {
    return true;
  }
}

module.exports = emCheck;
