/* Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results. */

console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Invalid')
  }
}

function getComputerChoice(){
  randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber){
    case 0:
    return 'rock'
    break;
    case 1:
    return 'paper'
    break;
    case 2:
    return 'scissors'
    break;
    default:
    console.log('Invalid')
    break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'It\'s a tie'
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won'
    } else {
      return 'user Won'
    }
  } 
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won'
    } else {
      return 'User won'
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer Won'
    } else {
      return 'User won'
    }
  }
  if(userChoice === 'bomb'){
    return 'User won'
  }
}

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();

