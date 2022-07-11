// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/* 
-   If the `shift` value isn't present, equal to `0`, less than `-25`, or greater than `25`, the function should return `false`.
-   Spaces should be maintained throughout, as should other nonalphabetic symbols.
-   Capital letters can be ignored.
-   If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter `z`), it should wrap around to the front of the alphabet (e.g., `z` becomes `c`).

-   `input` refers to the inputted text to be encoded or decoded.
-   `shift` refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., `A` becomes `D`) whereas a negative number means shifting to the left (i.e., `M` becomes `K`).
-   `encode` refers to whether you should encode or decode the message. By default it is set to `true`.
*/

const positiveShift = (input, shift, alphabet) => {
  let decodedMessage = [];
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  }
  input.forEach((char) => {
    if (alphabet.includes(char)) {
      alphabet.find((letter, index) => {
        if (char === letter) {
          let newIndex = index + shift;
          if (newIndex < 0) {
            newIndex += 26;
          }
          if (newIndex > 25) {
            newIndex -= 26;
          }
          newLetter = alphabet[newIndex];
          decodedMessage.push(newLetter);
        }
      });
    } else {
      decodedMessage.push(char);
    }
  });
  return decodedMessage.join("");
}  

const negativeShift = (input, shift, alphabet) => {
  let decodedMessage = [];
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  }
  input.forEach((char) => {
    if (alphabet.includes(char)) {
      alphabet.find((letter, index) => {
        if (char === letter) {
          let newIndex = index - shift;
          if (newIndex < 0) {
            newIndex += 26;
          }
          if (newIndex > 25) {
            newIndex -= 26;
          }
          newLetter = alphabet[newIndex];
          decodedMessage.push(newLetter);
        }
      });
    } else {
      decodedMessage.push(char);
    }
  });
  return decodedMessage.join("");
}

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const decodedMessage = [];
    input = input.toLowerCase().split("");

    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    if (encode) {
      return positiveShift(input, shift, alphabet);
    }
    return negativeShift(input, shift, alphabet);

  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
