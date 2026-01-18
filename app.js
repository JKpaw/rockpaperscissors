console.log("Hello World");

getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

console.log(getComputerChoice())

getHumanChoice = () => {
    prompt("Rock, paper or scissors?", "");
    let choice = ""
    if (choice === "rock") {
      return "rock";
    } else if (choice === "paper") {
      return "paper";
    } else if (choice === "scissors") {
      return "scissors"; }
      else {
        console.log("Invalid Guess")
      }
    }

console.log(getHumanChoice())
// Returns either 'rock', 'paper', or 'scissors'. 

