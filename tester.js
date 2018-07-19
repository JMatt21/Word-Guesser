const Word = require('./word');
const Letter = require('./letter');
const inquirer = require('inquirer');

console.log('----- Testing Letters -----');
const a = new Letter('a');
const b = new Letter('b');
const c = new Letter(' ');
// const tooLong = new Letter('hehe');//should stop program if un-commented
console.log(a);
console.log(b);
console.log(c);
console.log('----- Displaying Letters -----');
console.log(a.toString());
console.log(b.toString());
console.log(c.toString());
console.log('----- Checking Letters -----');
console.log(a.checkLetter('a'));
console.log(b.checkLetter('b'));
console.log(c.checkLetter('c'));
console.log('----- Displaying Letters Again -----');
console.log(a.toString());
console.log(b.toString());
console.log(c.toString());
console.log('----- Raw Letter Data -----')
console.log(a);
console.log(b);
console.log(c);

console.log('----- Testing Words -----');
const apple = new Word('apple');
const spaces = new Word('w e w lad');
// const very_long = new Word("Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.");
// Wont work any more since letter wont accept invalid characters
// Removing the lines 4-6 in letter.js will fix this but it isn't intuitive for the user to guess non-alpha letters.
console.log(apple);
console.log(spaces);
// console.log(very_long);
console.log('----- Displaying Words toString -----');
console.log(apple.toString());
console.log(spaces.toString());
console.log('----- Revealing the letter "a" -----')
console.log(apple.guess('a'));
console.log(spaces.guess('a'));
console.log('---- Re-Displaying Words toString -----');
console.log(apple.toString());
console.log(spaces.toString());
console.log('----- Revealing the letter "e" -----')
console.log(apple.guess('e'));
console.log(spaces.guess('e'));
console.log('---- Re-Displaying Words toString -----');
console.log(apple.toString());
console.log(spaces.toString());
console.log('----- Revealing the rest of the letters -----')
console.log(apple.guess('p'));
console.log(apple.guess('l'));
console.log(spaces.guess('e'));
console.log(spaces.guess('w'));
console.log(spaces.guess('l'));
console.log(spaces.guess('d'));
console.log(apple.toString());
console.log(spaces.toString());
