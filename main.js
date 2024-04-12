
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


function playGame() 
{
  let userSelectionBtn = document.querySelector('#buttons');
  let resetBtn = document.querySelector('.reset');
  let displayResult = document.querySelector('.display-results');
  let gameEnd = document.querySelector('.game-end');

  let playerWinCount = 0;
  let computerWinCount = 0;
  let roundCount = 0;

  let reset = false;

    userSelectionBtn.addEventListener('click', (event) => {

    const playerWins = ((playerWinCount > computerWinCount) && (roundCount == 5));
    const computerWins = ((computerWinCount > playerWinCount) && (roundCount == 5));

    if (playerWins)
    {
      gameEnd.textContent = `Player wins ${playerWinCount} rounds to ${computerWinCount}.`;
      if (reset)
      {

      }
      else
      {
        event.preventDefault();
      }
      
    }
    else if(computerWins)
    {
      gameEnd.textContent = `Computer wins ${computerWinCount} rounds to ${playerWinCount}.`;
      event.preventDefault();
      if (reset)
      {

      }
      else
      {
        event.preventDefault();
      }
    }

    if (!playerWins && !computerWins)
    {
      const playerSelects = event.target.className;
      const computerSelects = getComputerChoice();
      const roundResult = playRound(playerSelects, computerSelects);
  
      switch (roundResult) 
      {
        case 0:
          {
            if (roundCount < 6 && roundCount > 0)
            {
              displayResult.textContent = '';
              displayResult.textContent = 'Round was a tie! Redo.';
              console.log(`Round was a tie! Redo.`);
              console.log(roundCount);
            }
          }
          break;
        case 1:
          {
            ++playerWinCount;
            ++roundCount;
            displayResult.textContent = '';
            displayResult.textContent = 'Player Wins.';
            console.log(`Player Wins.`);
            console.log(playerWinCount);
          }
          break;
        case 2:
          {
            ++computerWinCount;
            ++roundCount;
            displayResult.textContent = '';
            displayResult.textContent = 'Computer Wins.';
            console.log(`Computer Wins.`);
            console.log(computerWinCount);
          }
          break;
        case 3:
          {
            --roundCount;
            displayResult.textContent = '';
            displayResult.textContent = 'Output of playRound function was invalid.';
            console.log("Output of playRound function was invalid");
          }
          break;
        default:
          {
            --roundCount;
            displayResult.textContent = '';
            displayResult.textContent = "All switch cases failed. (which shouldn't happen)";
            console.log("All switch cases failed. (which shouldn't happen)");
          }
      } // end switch      
    } // end if
  }); // end user selecting a button

  resetBtn.addEventListener('click', (event) => {
    reset = true;
    playerWinCount = 0;
    computerWinCount = 0;
    roundCount = 0;
    displayResult.textContent = '';
    gameEnd.textContent = '';
  })
}

playGame();