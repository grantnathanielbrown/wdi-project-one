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

// TODO display letters guessed in a display section that is populated
// TODO every time the javascript function to guess is called.
// TODO if a match exists, fill in a letter and update accordingly.

// TODO extra credit: say if the letter is already guessed


// this turns user 1 string into values of hidden array
var hiddenWordArray = wordSelector.split("");

// use .map with    
// create array with underscores _ equal to length of word passed in by user
var underscoreArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",];
underscoreArray.fill("_", 0, hiddenWordArray.length);

var hangmanDisplay = document.querySelector('.underscore-array');
hangmanDisplay.innerHTML = underscoreArray;


// At the END of entire function, push letterbutton?.innerhtml to lettersguessedarray


//make mistake counter
var mistakeCounter = 0;

console.log(wordSelector);
console.log(hiddenWordArray);
console.log(underscoreArray);
console.log();
    // TODO Cast word to all lower case OR all upper case
    
// get parent element for the buttons (.letters)
var letters = document.querySelector('.letters');
//add event listener to parent element
letters.addEventListener('click', function checkLetter() {
    for (var i = 0; i < hiddenWordArray.length; i++) {
        //checks to see if innerhtml of button is equal to letters in each index of hiddenwordarray
        if (event.target.innerHTML === hiddenWordArray[i]) {
        // populates underscorearray (the visible array) with the accurately guessed letter
        underscoreArray[i] = event.target.innerHTML;
        hangmanDisplay.innerHTML = underscoreArray;

        } else if (hiddenWordArray.includes(event.target.innerHTML) === false ) {
            i = hiddenWordArray.length; // CHECK TO MAKE SURE THIS ISN'T A PROBLEM
            mistakeCounter += 1;
        }
    }
})

/*
1. get parent element for the buttons (.letters)
2. add event listener to parent element
3. event handler will:
    - check event.target.innerHTML for letter ('A', 'B', 'C', etc)


*/



