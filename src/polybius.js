// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const decodeMessage = (message, messageWithNoSpaces, polybiusSquare) => {
  let decodeMessage = "";
  if (messageWithNoSpaces.length % 2 != 0) {
    return false;
  }
  for (let index = 0; index < message.length; index += 2) {
    if (message[index] === " ") {
      decodeMessage += " ";
      index--;
    } else {
      decodeMessage += polybiusSquare[message[index + 1]][message[index]];
    }
  }
  return decodeMessage;
};

const encodeMessage = (message, polybiusSquare) => {
  const encryptedMessages = [];
  message.forEach((letter) => {
    if (letter === " ") {
      encryptedMessages.push(" ");
    }
    for (let index = 1; index < 6; index++) {
      for (let index2 = 1; index2 < 6; index2++) {
        if (polybiusSquare[index][index2].includes(letter)) {
          encryptedMessages.push(index2);
          encryptedMessages.push(index);
        }
      }
    }
  });
  return encryptedMessages.join("");
};

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = {
      1: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" },
      2: { 1: "f", 2: "g", 3: "h", 4: "i/j", 5: "k" },
      3: { 1: "l", 2: "m", 3: "n", 4: "o", 5: "p" },
      4: { 1: "q", 2: "r", 3: "s", 4: "t", 5: "u" },
      5: { 1: "v", 2: "w", 3: "x", 4: "y", 5: "z" },
    };

    const message = input.toLowerCase().split("");
    const messageWithNoSpaces = message.join("").replace(/\s/g, "");

    if (!encode) {
      return decodeMessage(message, messageWithNoSpaces, polybiusSquare);
    } else {
      return encodeMessage(message, polybiusSquare);
    }

  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
