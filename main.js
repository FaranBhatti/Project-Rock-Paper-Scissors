
/**
 * Function to determine what the computer's choice is in the game
 * @returns random computer choice of either rock, paper, or scissors
 */
function getComputerChoice() 
{
  // Store array of strings containing 'Rock', 'Paper', and 'Scissor'
  const possibleChoices = ['rock', 'paper', 'scissor'];

  // Obtain length of the array
  const arrayLength = possibleChoices.length;

  // Declare variable to store random number based off of the length of the array
  let randomChoice = Math.floor(Math.random() * arrayLength);

  // Return array location based off of the position via randomChoice
  return possibleChoices[randomChoice];
}

/**
 * Function playing a round of Tic Tac Toe
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns {number} 0 = tie, 1 = player wins, 2 = computer wins, 3 = invalid user input
 */
function playRound(playerSelection, computerSelection) 
{
  
  // handle case sensitive entries by user
  playerSelection = playerSelection.toLowerCase();

  // Case 1: Tie
  if (playerSelection === computerSelection) 
  {
    return 0;
  }
  // Case 2: Player selects rock
  else if(playerSelection === 'rock') 
  {
    if (computerSelection === 'scissor') 
    {
      return 1;
    }
    else 
    {
      return 2;
    }
  }
  // Case 3: Player selects scissors
  else if(playerSelection === 'scissor') 
  {
    if (computerSelection === 'paper') 
    {
      return 1;
    }
    else 
    {
      return 2;
    }
  }
  // Case 4: Player selects paper
  else if(playerSelection === 'paper') 
  {
    if (computerSelection === 'rock') 
    {
      return 1;
    }
    else 
    {
      return 2;
    }
  }
  // Case 5: Invalid input
  else
  {
    return 3;
  }
}


function playGame() 
{
  // variables to track the wins
  let playerWinCount = 0;
  let computerWinCount = 0;

  // play 5 rounds
  for (let i = 1; i < 6; i++) 
  {
    let userChoice = prompt(`Rock, Paper, or Scissor? Round: ${i}`);
    let computerChoice = getComputerChoice();

    let roundResult = playRound(userChoice, computerChoice);
    switch (roundResult) 
    {
      case 0:
        {
          console.log(`Round ${i} was a tie! Redo.`);
          --i;
        }
        break;
      case 1:
        {
          console.log(`Player wins round ${i}.`);
          ++playerWinCount;
        }
        break;
      case 2:
        {
          console.log(`Computer wins round ${i}.`);
          ++computerWinCount;
        }
        break;
      case 3:
        {
          console.log("Output of playRound function was invalid");
          --i;
        }
        break;
      default:
        console.log("All switch cases failed. (which shouldn't happen)");
    }
  }

  // output who wins
  if (playerWinCount > computerWinCount)
  {
    console.log(`Player wins ${playerWinCount} rounds to ${computerWinCount} :)`);
  }
  else
  {
    console.log(`Computer wins ${playerWinCount} rounds to ${computerWinCount} :(`);
  }
}

playGame();