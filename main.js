// Function: returns either 'Rock', 'Paper', or 'Scissor'
function getComputerChoice() {
  // Store array of strings containing 'Rock', 'Paper', and 'Scissor'
  const possibleChoices = ['rock', 'paper', 'scissor'];

  // Obtain length of the array
  const arrayLength = possibleChoices.length;

  // Declare variable to store random number based off of the length of the array
  let randomChoice = Math.floor(Math.random() * arrayLength);

  // Return array location based off of the position via randomChoice
  return possibleChoices[randomChoice];
}

// Function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  
  // handle case sensitive entries by user
  playerSelection = playerSelection.toLowerCase();

  // Case 1: Tie
  if (playerSelection === computerSelection) {
    return ("Oh man, it looks like it's a tie!");
  }
  // Case 2: Player selects rock
  else if(playerSelection === 'rock') {
    if (computerSelection === 'scissor') {
      return ("Player wins! Rock beats scissors.");
    }
    else {
      return ("Computer wins! Paper beats rock.");
    }
  }
  // Case 3: Player selects scissors
  else if(playerSelection === 'scissor') {
    if (computerSelection === 'paper') {
      return ("Player wins! Scissors beats paper.");
    }
    else {
      return ("Computer wins! Rock beats scissors.");
    }
  }
  // Case 4: Player selects paper
  else if(playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return ("Player wins! Paper beats rock.");
    }
    else {
      return ("Computer wins! Scissors beats rock.");
    }
  }
  // Case 5: Invalid input
  else {
    return ("Hey now let's type our choice in correctly :)");
  }
}