var Letter = require("./letter");

function Word(word) {
  this.letters = word.split("").map(function(char) {
    return new Letter(char);
  });
};

module.exports = Word;