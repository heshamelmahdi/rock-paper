const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
    });
})

const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissor"]
    let choiceIndex = Math.floor(Math.random() * choices.length)
    return choices[choiceIndex]
}

const decideWinner = (player, computer) => {
    if (player == computer) {
        return [`It's a tie! Both player and computer chose ${player}`, "tie"]
    } else if ((player == "rock" && computer == "scissor") || 
        (player == "paper" && computer == "rock") || (player == "scissor" && computer == "paper")) {
        return [`You win! ${player} beats ${computer}`, "win"]
    } else if ((player == "rock" && computer == "paper") || 
    (player == "paper" && computer == "scissor") || (player == "scissor" && computer == "rock")) {
        return [`You lose! ${computer} beats ${player}`, "lose"]
    }
}

const getPlayerSelection = () => {
    while (true) {
        var playerSelection = prompt("Choice between Rock, Paper, and Scissor: ").toString().toLowerCase()
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
            break
        }
    }

    return playerSelection
}

const playRound = (playerSelection) => {
    let computerSelection = getComputerChoice().toLowerCase()

    console.log(playerSelection)
    console.log(computerSelection)

    const [text, winner] = decideWinner(playerSelection, computerSelection)
    updateScore(winner)
}

const updateScore = (winner) => {
    const playerScore = document.getElementById("playerScore")
    const computerScore = document.getElementById("computerScore")

    let intPlayerScore = parseInt(playerScore.textContent)
    let intComputerScore = parseInt(computerScore.textContent)

    if (winner == "win") {
        intPlayerScore++
        playerScore.textContent = intPlayerScore
        if (intPlayerScore == 5) {
            const scorecard = document.getElementById("scorecard")
            const winnerDisplay = document.createElement("h3")
            winnerDisplay.textContent = "You have won!"
            scorecard.appendChild(winnerDisplay)
        }
    } else if (winner == "lose") {
        intComputerScore++
        computerScore.textContent = intComputerScore
        if (intComputerScore == 5) {
            const scorecard = document.getElementById("scorecard")
            const winnerDisplay = document.createElement("h3")
            winnerDisplay.textContent = "The computer won!"
            scorecard.appendChild(winnerDisplay)
        }
    }
}