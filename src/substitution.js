// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    const encryptedMessage = input.toLowerCase().split("");
    const encryptedKeys = {};
    let totalCharCount = 97;

    if (!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;

    for (let index = 0; index <= 25; index++) {
      if (Object.values(encryptedKeys).includes(alphabet[index])) {
        return false;
      } else {
        encryptedKeys[String.fromCharCode(totalCharCount)] = alphabet[index];
        totalCharCount++;
      }
    }

    return encryptedMessage
      .map((letter) => {
        for (let plainLetter in encryptedKeys) {
          let substituteLetter = encryptedKeys[plainLetter];
          if (letter == " ") {
            return " ";
          } else if (encode && letter === plainLetter) {
            return substituteLetter;
          } else if (!encode && letter === substituteLetter) {
            return plainLetter;
          }
        }
      })
      .join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
