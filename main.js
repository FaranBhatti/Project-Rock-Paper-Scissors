// Function: returns either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
  // Store array of strings containing 'Rock', 'Paper', and 'Scissors'
  const possibleChoices = ['Rock', 'Paper', 'Scissors'];

  // Obtain length of the array
  const arrayLength = possibleChoices.length;

  // Declare variable to store random number based off of the length of the array
  let randomNumber = Math.floor(Math.random() * arrayLength);

  // Return array location based off of the position via randomNumber
  return possibleChoices[randomNumber];
}