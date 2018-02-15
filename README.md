HANGMAN - https://grantnathanielbrown.github.io/wdi-project-one/

This is an online version of the classic game, Hangman.

The objective of Hangman is to guess the hidden word, one letter at a time. 

The first user chooses the hidden word. The second user attempts to guess the hidden word. 

Every time you click on a letter in the alphabet below, the word is scanned to see if it contains the chosen letter. 

If it does, each instance of the letter is revealed. If not, the user loses a life point.

FEATURES

- Basic, functional hangman game: One user sets a hidden word, the other user guesses a word gradually by clicking letters.
- Letters are revealed upon correct guesses.
- The user is shown a list of letters he / she has already guessed.
- When a player loses all of his / her lives, a loss image is shown.
- The input word of the first user is hidden after he / she submits the word.
- The game can be reset by simply inputting a new word, creating a new blank board (with the exception of the life counter, which is not fully functional yet.)

TECHNOLOGIES USED

The site was made entirely using VSCode. It has an HTML, CSS, and Javascript page. These provide the functionality of the site.

The site is hosted using GitHub Pages.

APPROACH TO BUILDING THE SITE

Below is my preliminary list of desired features for the site.

This changed a bit as the site was developed, but it more or less encompasses the visuals and features of the game.

Visuals on the site
1. "Hangman" title
2. copyright footer
3. Instructions
4. A background image


Game itself
1. The word is created by user 1, taken from a prompt.
2. A list of clickable letters, which are equivalent to guessing a letter.
3. The hangman answer, depicted as a bunch of underscores (_ _ _ _ _ _)
4. Letter spaces which are filled in when you click a correct letter.
5. Whenever you click an incorrect letter, counter displaying remaining guesses goes down by 1.

Bronze Features

Sophisticated animations
Sounds on correct guess / incorrect guess / win / lose
Timer
Scoring system
Categories for words

Silver Features

Mode where you can play without input from user 1, get a huge pool of randomized words
definition of word gets shown at the end, or as a clickable link

Gold Features

Time challenge between two players

Javascript Pseudocode

1. user 1 receives a prompt to set the string. string not allowed to contain numbers
2. after user 1 enters string, each character value of that string are passed into an array; hidden answer array
3. based on the length of the hidden ans array, make a space with an underscore for each index.
4. there is a set of 26 divs for each letter in the alphabet. each one has a value corresponding to the display letter
5. When letter div is clicked, value of that div is checked against every index in underscore array using if else statement
If 
    Value is equivalent, push that value into the corresponding index, and add +1 to reveal counter.
    Also, make the letter div turn a diff color and become unclickable, or disappear.
    Finally, if reveal counter = # of spaces in the array, go to win screen.
Else
    Value is not equivalent. Make the letter div turn a diff color and become unclickable, or disappear.
    Add +1 to "mistake" counter. This is a visible counter
    If mistake counter = 5, go to loss screen

UNSOLVED PROBLEMS / TO-DO LIST

1. Fix life total bug
2. Add more sophisticated win / loss outcomes