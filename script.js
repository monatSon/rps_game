console.log("ahoj");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    // min inclusive, max exclusive
    const min = Math.ceil(0)
    const max = Math.floor(3)
    const randomizer = Math.floor(Math.random() * (max - min) + min);
    const choiceSelection = choices[randomizer]

    return choiceSelection;

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Draw"
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "sciccors") ||
        (playerSelection === "sciccors" && computerSelection === "rock")
    ) {
        return "Computer won"
    } else {
        return "Player won"
    }


}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = ""
        const validInput = ["rock", "paper", "scissors"]
        while (!validInput.includes(playerSelection)) {
            playerSelection = prompt(("Type rock, paper or scissors to play")).toLowerCase();
        }
        const computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();
