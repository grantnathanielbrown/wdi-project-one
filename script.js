/* TODO list

2. add life total based on # of letters in the word
5. image pops up upon loss and win at bottom
6. restart function - probably needs to accept input from input field + button
7. 
*/


// user 1 prompt
var wordSelectorBefore = prompt('Please enter your word.');
// makes user prompt uppercase
var wordSelector = wordSelectorBefore.toUpperCase();
console.log(wordSelector);


// this turns user 1 string into values of hidden array
var hiddenWordArray = wordSelector.split("");
console.log(hiddenWordArray);
// this creates an array(underscoreArray) which will later be filled with underscores.
var underscoreArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",];
console.log(underscoreArray);
// this fills the underscoreArray with underscores based on the length of the word chosen by user 1
underscoreArray.fill("_", 0, hiddenWordArray.length)
console.log(underscoreArray);


// display variable is created to take innerHTML from the underscoreArray
var hangmanDisplay = document.querySelector('.underscore-array');
// then, array is temporarily turned into a string so it can be passed into the display variable
underscoreArray = underscoreArray.join(' ');
// innerhtml of display variable is set to underscoreArray (temporarily a string)
hangmanDisplay.innerHTML = underscoreArray;
// underscoreArray is turned back into an array, so when our user 2 clicks buttons, we can check the innerhtml values against underscoreArray
underscoreArray = underscoreArray.split(' ');

// creates a string which will have the values of each letter guessed pushed to the end of it
var lettersGuessed = "Letters Guessed: ";
// creates display variable for letters which have been guessed 
var lettersGuessedDisplay = document.querySelector('.letters-guessed-array');
// set innerhtml of display variable to the value of the lettersGuessed string, which will later be added onto
lettersGuessedDisplay.innerHTML = lettersGuessed;


// make mistake counter based on the length of the word; a longer word means more lives are granted to user 2
if (hiddenWordArray.length <= 5) {
    var mistakeCounter = 5;
} else if ( hiddenWordArray.length > 5 && hiddenWordArray.length <= 9) {
    var mistakeCounter = 7;
} else if (hiddenWordArray.length > 9) {
    var mistakeCounter = 9;
}
// creates display variable for # of lives left
var livesLeftDisplay = document.querySelector('.lives-left');
// set innerhtml of display variable to value of the counter
livesLeftDisplay.innerHTML = mistakeCounter;

// get parent element for the buttons (.letters)
var letters = document.querySelector('.letters');
// adds event listener to parent element
letters.addEventListener('click', function checkLetter() {
// the if statement wrapped around the entire function prevents a disastrous bug from occurring if a user clicks on the whitespace in the letters box
// basically, it ensures the event listener only works on the buttons
if (event.srcElement.nodeName === "BUTTON") {
    // adds letters to lettersGuessed array
    lettersGuessed += event.target.innerHTML;
    // updates value of lettersGuessed array
    lettersGuessedDisplay.innerHTML = lettersGuessed;
    // makes the clicked button invisible by adding a CSS class
    event.target.classList.add('invisible');
    for (var i = 0; i < hiddenWordArray.length; i++) {
        // checks to see if innerhtml of button is equal to letters in each index of hiddenwordarray
        if (event.target.innerHTML === hiddenWordArray[i]) {
            // populates underscorearray (the visible array) with the accurately guessed letter
            underscoreArray[i] = event.target.innerHTML;
            // accomplishes the same thing that lines 30-35 do by changing the underscoreArray into a string, updating the value, then turning it back into an array
            underscoreArray = underscoreArray.join(' ');
            hangmanDisplay.innerHTML = underscoreArray;
            underscoreArray = underscoreArray.split(' ');
        // if the user guesses incorrectly, decrements the livesLeft counter.
        } else if (hiddenWordArray.includes(event.target.innerHTML) === false ) {
            i = hiddenWordArray.length;
            mistakeCounter -= 1;
            livesLeftDisplay.innerHTML = mistakeCounter;
            if (mistakeCounter === 0) {
                
                }
        }
    }
    console.log(underscoreArray);
}
})


