const getUserChoice = (userInput) => {
    const computerInput = getComputerChoice();
    userInput = userInput.toLowerCase();
  
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("Error! Invalid user choice!");
    }
  };
  
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice !== undefined) {
      console.log(`Human: ${userChoice}`);
      console.log(`Computer: ${computerChoice}`);
      if (userChoice === computerChoice) {
        console.log("Empate");
        return "The game is a tie!";
      } else {
        if (
          (userChoice === "rock" && computerChoice === "scissors") ||
          (userChoice === "paper" && computerChoice === "rock") ||
          (userChoice === "scissors" && computerChoice === "paper")
        ) {
          console.log("Human Winner!!");
        } else {
          console.log("Computer Winner!!");
        }
      }
    }
  }
  
  const userChoice = getUserChoice("rock"); // Escolha do usuário (pode ser "rock", "paper" ou "scissors")
  const computerChoice = getComputerChoice(); // Escolha aleatória do computador
  
  determineWinner(userChoice, computerChoice);
  