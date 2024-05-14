function getComputerChoice(){

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let str;

  if (randomNumber === 1) {
    str = 'Rock';
  }
  if (randomNumber === 2) {
    str = 'Paper';
  }
  if (randomNumber === 3){
    str = 'Scissors';
  }

  return str;
}


function getHumanChoice(){
  let x = prompt("Choose between Rock, Paper, or Scissors");
  return x;
}


function playGame(){

  let humanChoice;
  let computerChoice;

  function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log('You chose ' + humanChoice + '.');
    console.log('Computer chose ' + computerChoice + '.');

    if (humanChoice === computerChoice){
      return console.log('It\'s a draw!');
      
    }
    if ((humanChoice === 'Rock') && (computerChoice === 'Paper')){
      computerScore++;
      return console.log('You lost!');
    }
    if ((humanChoice === 'Paper') && (computerChoice === 'Scissors')){
      computerScore++;
      return console.log('You lost!');
    }
    if ((humanChoice === 'Scissors') && (computerChoice === 'Rock')){
      computerScore++;
      return console.log('You lost!');
    }
    if ((humanChoice === 'Rock') && (computerChoice === 'Scissors')){
      humanScore++;
      return console.log('You win!');
    }
    if ((humanChoice === 'Paper') && (computerChoice === 'Rock')){
      humanScore++;
      return console.log('You win!');
    }
    if ((humanChoice === 'Scissors') && (computerChoice === 'Paper')){
      humanScore++;
      return console.log('You win!');
    }
  
    return { humanScore, computerScore};
  }


    let humanScore = 0;
    let computerScore = 0;

    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);




console.log(humanScore);
console.log(computerScore);

  if (humanScore > computerScore){
    console.log('You win it all!');
  }

  if (humanScore < computerScore){
    console.log('You lost it all!');
  }

  if (humanScore === computerScore){
    console.log('Draw! Draw! Draw!');
  }


  }

playGame();















