// puts event listener on input word button
var wordSelectorButton = document.querySelector('.hangman-button')
// this button 
wordSelectorButton.addEventListener('click', function setupHangman() {
    // removes the invisible class from buttons which had previously been selected, thus revealing them again
    var removeInvis = document.querySelectorAll('.letterbutton');
    for (k = 0; k < removeInvis.length; k++) {
        removeInvis[k].classList.remove('invisible');
    }
    // gets the user1 input from the field and places it into a variable
    var wordSelectorBefore = document.querySelector('#hangman-word');
    // parses the user1 input to uppercase, so that it can be matched against the letter buttons
    var wordSelector = wordSelectorBefore.value.toUpperCase();
    // hides the user1 input after they submit the word, so that user2 cannot cheat and view it
    wordSelectorBefore.value = '';
    



    // this turns user 1 string into values of hidden array
    var hiddenWordArray = wordSelector.split("");
    console.log(hiddenWordArray);
    // this creates an array(underscoreArray) which will later be filled with underscores.
    var underscoreArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",];
    // this fills the underscoreArray with underscores based on the length of the word chosen by user 1
    underscoreArray.fill("_", 0, hiddenWordArray.length)


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

    // make mistake counter 
    mistakeCounter = 8;
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
                // revealCounter += 1;
                // accomplishes the same thing that lines 30-35 do by changing the underscoreArray into a string, updating the value, then turning it back into an array
                underscoreArray = underscoreArray.join(' ');
                hangmanDisplay.innerHTML = underscoreArray;
                underscoreArray = underscoreArray.split(' ');
            }
        }
        // if the user guesses incorrectly, decrements the livesLeft counter by checking the value of the hiddenwordarray against the value of the letter button.
        if (hiddenWordArray.includes(event.target.innerHTML) === false ) {
            // decrements the life counter
            mistakeCounter -= 1;
            // updates the life counter display
            livesLeftDisplay.innerHTML = mistakeCounter;
            if (mistakeCounter === 0) {
                    document.querySelector('.loser-image').src = "https://i.imgur.com/xxvnWoG.jpg"
                    }
            }
        

    }
    })

})

