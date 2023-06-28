
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

const playGame = () => {

    var playerScore = 0
    var computerScore = 0
    while (true) {
        let computerSelection = getComputerChoice().toLowerCase()
        while (true) {
            var playerSelection = prompt("Choice between Rock, Paper, and Scissor: ").toString().toLowerCase()
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
                break
            }
        }

        console.log(playerSelection)
        console.log(computerSelection)

        const [text, winner] = decideWinner(playerSelection, computerSelection)

        if (winner == "win") {
            playerScore++
        } else if (winner == "lose") {
            computerScore++
        }

        console.log(text)
        console.log(`The score is currently Player: ${playerScore} | Computer: ${computerScore}`)

        if ((playerScore + computerScore) == 5) {
            break
        }
    }
}

playGame()
