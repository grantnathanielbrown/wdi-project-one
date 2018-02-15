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
var underscoreArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",];
console.log(underscoreArray);
underscoreArray.fill("_", 0, hiddenWordArray.length)
console.log(underscoreArray);



var hangmanDisplay = document.querySelector('.underscore-array');
underscoreArray = underscoreArray.join(' ');
console.log(underscoreArray);
hangmanDisplay.innerHTML = underscoreArray;
underscoreArray = underscoreArray.split(' ');
console.log(underscoreArray);


var lettersGuessed = "Letters Guessed: ";   
var lettersGuessedDisplay = document.querySelector('.letters-guessed-array');
lettersGuessedDisplay.innerHTML = lettersGuessed;


//make mistake counter
var mistakeCounter = 7;
var livesLeftDisplay = document.querySelector('.lives-left');
livesLeftDisplay.innerHTML = mistakeCounter;

// get parent element for the buttons (.letters)
var letters = document.querySelector('.letters');
//add event listener to parent element
letters.addEventListener('click', function checkLetter() {
if (event.srcElement.nodeName === "BUTTON") {
    lettersGuessed += event.target.innerHTML;
    lettersGuessedDisplay.innerHTML = lettersGuessed;
    event.target.classList.add('invisible');
    for (var i = 0; i < hiddenWordArray.length; i++) {
        //checks to see if innerhtml of button is equal to letters in each index of hiddenwordarray
        if (event.target.innerHTML === hiddenWordArray[i]) {
        // populates underscorearray (the visible array) with the accurately guessed letter
            underscoreArray[i] = event.target.innerHTML;
            console.log(underscoreArray);
            underscoreArray = underscoreArray.join(' ');
            hangmanDisplay.innerHTML = underscoreArray;
            underscoreArray = underscoreArray.split(' ');
        } else if (hiddenWordArray.includes(event.target.innerHTML) === false ) {
            i = hiddenWordArray.length; // CHECK TO MAKE SURE THIS ISN'T A PROBLEM
            mistakeCounter -= 1;
            livesLeftDisplay.innerHTML = mistakeCounter;
            if (mistakeCounter === 0) {
                
                }
        }
    }
    console.log(underscoreArray);
}
})


