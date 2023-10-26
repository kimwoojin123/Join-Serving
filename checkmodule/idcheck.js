function idCheck(obj) {
  let hasLowerCase = false; // 소문자 포함 여부를 나타내는 변수
  let hasUpperCase = false; // 대문자 포함 여부를 나타내는 변수

  for (let i = 0; i < obj.length; i++) {
    const char = obj[i];
    if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    } else if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    }

    // 둘 다 발견되면 바로 true 반환
    if (hasLowerCase && hasUpperCase) {
      return true;
    }
  }

  // 루프가 끝났을 때 여전히 true가 아니라면 false 반환
  return false;
}

module.exports = idCheck;
