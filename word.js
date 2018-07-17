const Letter = require('./letter');

const Word = function (word) {
    this.letters = [];
    for (letter of word) {
        this.letters.push(new Letter(letter));
    }

}

Word.prototype.guess = function (char) {
    let any_letters_checked = false;
    this.letters.forEach(letter => {
        if (letter.checkLetter(char)) {
            any_letters_checked = true;
        };
    });
    return any_letters_checked;
}
Word.prototype.toString = function () {
    const ret = [];
    this.letters.forEach(letter => {
        ret.push(letter.toString());
    })
    return ret.join(' ');
}
module.exports = Word;