console.log("Let's play!");

let humanScore = 0;
let computerScore = 0;

getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

getHumanChoice = () => {
  let choice = prompt("Let's play: Rock, paper or scissors?", "").toLowerCase();
  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  } else {
    console.log("Invalid Guess");
    return null;
  }
};

function playRound (humanChoice, ComputerChoice){
  if (humanChoice === "rock" && ComputerChoice === "paper") {
    alert("Computer wins!");
    computerScore++;
  } else if (humanChoice === "paper" && ComputerChoice === "scissors") {
    alert("Computer wins!");
    computerScore++;
  } else if (humanChoice === "scissors" && ComputerChoice === "rock") {
    alert("Computer wins!");
    computerScore++;
  } else if (humanChoice === "paper" && ComputerChoice === "rock") {
    alert("Human wins!");
    humanScore++;
  } else if (humanChoice === "scissors" && ComputerChoice === "paper") {
    alert("Human wins!");
    humanScore++;
  } else if (humanChoice === "rock" && ComputerChoice === "scissors") {
    alert("Human wins!");
    humanScore++;
  } else {
    alert(
      `It's a tie! Human chose ${humanChoice} and computer chose ${ComputerChoice}!`,
    );
  }
} 


function playGame() {
    while (humanScore < 5 && computerScore < 5) {
      playRound(getHumanChoice(), getComputerChoice());
      alert(
        `Human's score is ${humanScore} and computer's score is ${computerScore}`,
      );
    }
}


playGame()

alert(`Final scores - Human: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore) {
  alert("Human wins the game!");
} else if (computerScore > humanScore) {
  alert("Computer wins the game!");
} else {
  alert("It's a tie!");
}
// Returns either 'rock', 'paper', or 'scissors'.
