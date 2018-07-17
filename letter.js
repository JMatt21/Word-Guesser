const Letter = function (char) {
    if (char.length > 1) {
        // console.error('dont do that')
        throw 'Letter objects cannot be longer than 1 character!'
    } else {
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
    if (char === this.char) {
        this.isGuessed = true;
        return true;
    } else {
        return false;
    }
}
module.exports = Letter;