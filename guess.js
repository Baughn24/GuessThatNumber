// GUESS THAT NUMBER
//Message to be used throughout the file/project
const enterNumText = `Please enter a number greater than zero`;

//For restarting the game
let restartGame = true;

//For storing the range of the number to be guessed
let rangeNum;

//For storing the number to be guessed
let randomNum;

//For storing the number of attempts that the user has left
let attempts;

//For storing the users's guess
let guess;

//For storing user's response to play again or not play again
let playAgain;

//
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

//Below is taking care of the restartGame section
//Game restarts as long as restartGame has value of true
while (restartGame){

//Below takes care of the rangeNum section
//Asks user to enter a number to set the upper bound for the random number (AKA number to be guessed)that will be created.
rangeNum = prompt(`Please enter a maximum number for the range:`);

//Using parseInt to attempt to convert the user's response into a number value. NOTE: The value returned from a prompt is a string value. Also, if the value cannot be converted then the value returned will be NaN (not a number). This happens behind the scenes. If someone tries to enter a word, it will try to convert it to a number, which it can't so it returns the NaN. The value for rangeNum would be set to NaN
rangeNum = parseInt(rangeNum)

//Below confirms they entered a valid number above 0, which is what the parseInt is checking. 
//If someone enters a word or an invalid number or a number below 0, you will get the prompt of enterNumText which goes back to the beginning of the loop, to prompt the user to enter a valid number above 0.
//NOTE: NaN has a default boolean value of false. Also, all numbers, positive and negative, have a default boolean value of true, except for zero which has a default boolean value of false.
//! changes it from true to false, or false to true. In an OR || statement you only need 1 side to be true.
while (!rangeNum || rangeNum <1){
    //rangeNum = parseInt(prompt(enterNumText)); This is the same as the 2 below, it's just doing it on 1 line.
    rangeNum = prompt(enterNumText);
    rangeNum = parseInt(rangeNum);
}

//Below takes care of the randomNum section
//Math.random goes 0-1  but not 1.
//This creates the random number (AKA number to be guessed by the user) using the range number entered by the user.
randomNum = Math.floor(Math.random() * rangeNum) + 1;



    break;
}