
/**
 * Function to determine what the computer's choice is in the game
 * @returns random computer choice of either rock, paper, or scissors
 */
function getComputerChoice() 
{
  const possibleChoices = ['rock', 'paper', 'scissor'];

  const arrayLength = possibleChoices.length;

  let randomChoice = Math.floor(Math.random() * arrayLength);

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
  playerSelection = playerSelection.toLowerCase();

  switch(playerSelection) 
  {
    case (computerSelection):
      return 0;
      break;
    case 'rock':
      {
        if (computerSelection === 'scissor') 
        {
          return 1;
        }
        else {
          return 2;
        }
      }
      break;
    case 'scissor':
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
      break;
    case 'paper':
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
      break;
      default:
        return 3;
  }
}

/**
 * Function playing a whole game of rock paper scissors up to 5 rounds
 * @returns log statement of result
 */
function playGame() 
{
  let playerWinCount = 0;
  let computerWinCount = 0;

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