// Get elements using querySelector
const stoneButton = document.querySelector("#stoneButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const resultDiv = document.querySelector("#result");

// Generate computer choice
function getComputerChoice() {
    const choices = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Handle game logic
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage;

    if (userChoice === computerChoice) {
        resultMessage = `It's a Tie! You both chose ${userChoice}.`;
    } else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You Won! You chose ${userChoice}, and the computer chose ${computerChoice}.`;
    } else {
        resultMessage = `You Lost! You chose ${userChoice}, and the computer chose ${computerChoice}.`;
    }

    // Display the result on the webpage
    resultDiv.textContent = resultMessage;
    resultDiv.classList.add("show");
}

// Add event listeners
stoneButton.addEventListener("click", () => playGame("stone"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
