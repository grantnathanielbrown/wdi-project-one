/*
PSEUDOCODE

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
*/

// var array = ['a', '_', 'c'];
// array[1] = 'b';
// console.log(JSON.stringify(array));

// user 1 prompt
var wordSelector = prompt('Please enter your word.');

// TODO create an <input> that takes in a single letter
// TODO if the length of the string taken in is longer than 1,
// TODO write in red text an error message. Otherwise, see if 
// TODO letter exists. add letter to list of letters guessed.
// TODO display letters guessed in a display section that is populated
// TODO every time the javascript function to guess is called.
// TODO if a match exists, fill in a letter and update accordingly.

// TODO extra credit: say if the letter is already guessed


// this turns user 1 string into values of hidden array
var hiddenWordArray = wordSelector.split("");
// create array with underscores _ equal to length of word passed in by user
var underscoreArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",];
underscoreArray.fill("_", 0, hiddenWordArray.length);

// onclick if letterbutton?.innerhtml === hiddenwordarray[i],
// then underscorearray[i] === letterbutton?.innerhtml
// At the END of entire function, push letterbutton?.innerhtml to lettersguessedarray

//make blank array

//make reveal and mistake counter
var revealCounter = 0;
var mistakeCounter = 0;

// createButtonClickHandler('.gameOptionA', 'a');
// function createButtonClickHandler (gameOption, letter) {
    // TODO Cast word to all lower case OR all upper case
    const letterButtonA = document.querySelector('.gameoptionA');
    letterButtonA.addEventListener('click', function guessLetter() {
        console.log(JSON.stringify(hiddenWordArray));
        for (var i = 0; i < hiddenWordArray.length; i++) {
            if (letterButtonA.innerHTML === hiddenWordArray[i]) {
            underscoreArray[i] = letterButtonA.innerHTML;
            
            } else if (hiddenWordArray.includes(letterButtonA.innerHTML) === false ) {
                i = hiddenWordArray.length; // CHECK TO MAKE SURE THIS ISN'T A PROBLEM
                mistakeCounter += 1;
            }
        }
    })
// }





