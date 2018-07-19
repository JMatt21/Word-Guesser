# Word-Guesser
This is hangman but playable on the Node.js terminal

Includes the Inquirer 6.0.0 npm package.

There are 2 objects: letter and word.
## Letter(char: string)
Only allows alpha characters, spaces, and nothing with a length > 1
this.char: string
this.isGuessed: boolean

Prototypes:
toString(): string
checkLetter(char: string): boolean 

## Word (word: string)
Requires letter object. 
this.letters: Array
this.answer: string

Prototypes:
guess(char: string): boolean
toString(): string

The game uses inquirer and recursion to continuously prompt the user to guess a letter.
Only single alphabet letters are accepted.
Capitalization of words and letters are generally ignored except when being displayed on the terminal.

Some console.log's use some coloring found here: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
although it sometimes adds a space inside the log.

Currently maintaining this on: https://github.com/JMatt21/Word-Guesser.
