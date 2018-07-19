const Letter = function (char) {
    if (char.length > 1) {
        throw 'Letter objects cannot be longer than 1 character!'
    } else if (!(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') && char !== ' '){
        // Will only accepts letters in the English Alphabet and spaces
        throw 'Invalid input for Letter object!';
    }
    
    else {
        this.char = char;
    }
    this.isGuessed = false;
}

Letter.prototype.toString = function () {
    if (this.char === ' '){
        return this.char;
    }
    else if (this.isGuessed) {
        return this.char;
    } else {
        return '_';
    }
}

Letter.prototype.checkLetter = function (char) {
    if (char.toLowerCase() === this.char.toLowerCase()) {
        this.isGuessed = true;
        return true;
    } else {
        return false;
    }
}
module.exports = Letter;