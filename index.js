// File Requirements
const Word = require('./word');
const inquirer = require('inquirer');

// Constants
const listOfWords = ['grumpy', 'morning', 'crook', 'adjoining', 'rats', 'giant rat', 'Boston', 'The Boston Boy Wonder', 'Darth Plagius the Wise'];
// Tester for listOfWords
// const listOfWords = ['ALL CAPS'];
const MAX_NUMBER_OF_GUESSES = 5;
// Variables
let answer;
let numOfGuesses;
let lettersGuessed;

// Functions
function newGuess() {
    // To color the text in the console.log's 
    // See https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color


    console.log("\x1b[0m", 'Guess This Word: ' + answer.toString());
    console.log('\nLetters already guessed: ' + lettersGuessed.join(' '));
    console.log('');

    if (numOfGuesses !== 0) {
        inquirer.prompt({
            type: 'text',
            message: ' ',
            name: 'guess'
        }).then((user) => {
            if ((user.guess.toLowerCase() >= 'a' && user.guess.toLowerCase() <= 'z') && user.guess !== ' ' && user.guess.length === 1) {
                if (!lettersGuessed.includes(user.guess.toLowerCase())) {
                    lettersGuessed.push(user.guess.toLowerCase());
                    if (!answer.guess(user.guess)) {
                        console.log("\x1b[31m", '\nINCORRECT!!!\n' + --numOfGuesses + ' guesses left!\n');
                    } else {
                        console.log("\x1b[32m", '\nCORRECT!!!\n');
                    }

                    if (!answer.toString().includes('_')) {
                        console.log("You did it! Lets play another!\n\n");
                        newGame();
                    } else {
                        newGuess();
                    }

                } else {
                    console.log("\x1b[0m", "\nLetter already Guessed!\n");
                    newGuess();
                }
            } else {
                console.log('\nINVALID CHARACTER(S) TRY AGAIN!\n');
                newGuess();
            }
        });

    } else {
        console.log("\x1b[33m", '*************************************')
        console.log(' OOOH YOU MISSED THAT ONE TRY ANOTHER!');
        console.log(' THE WORD WAS: ' + answer.answer);
        console.log(' *************************************\n\n')
        newGame();
    }
}

function newGame() {
    answer = new Word(listOfWords[Math.floor(Math.random() * listOfWords.length)]);
    lettersGuessed = [];
    numOfGuesses = MAX_NUMBER_OF_GUESSES;
    newGuess();
}

//On Startup
newGame();

