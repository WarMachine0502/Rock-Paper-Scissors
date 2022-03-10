const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors']


        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Tries Left: ${5 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];


                winner(this.innerText, computerChoice)


                if (moves == 5) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }


    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'TIED!'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'COMPUTER WINS!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = 'USER WINS!'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'COMPUTER WINS!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'USER WINS!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'COMPUTER WINS!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'USER WINS!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }


    const gameOver = (playerOptions, movesLeft) => {

        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'USER WINS THE GAME!'

        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'COMPUTER WINS THE GAME!';

        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'THE GAME IS TIED!';

        }
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
    playGame();

}
game();