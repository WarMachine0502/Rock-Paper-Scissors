const rps = () => {
    let pScore = 0;
    let cScore = 0;
    let tries = 0;
    
    const winner = (p, c) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.pCount');
        const computerScoreBoard = document.querySelector('.cCount');
        p = p.toLowerCase();
        c = c.toLowerCase();
        if (p === c) {
            result.textContent = 'TIED!'
        }
        else if (p == 'rock') {
            if (c == 'paper') {
                result.textContent = 'COMPUTER WINS!';
                cScore++;
                computerScoreBoard.textContent = cScore;
            } else {
                result.textContent = 'USER WINS!'
                pScore++;
                playerScoreBoard.textContent = pScore;
            }
        }
        else if (p == 'scissors') {
            if (c == 'rock') {
                result.textContent = 'COMPUTER WINS!';
                cScore++;
                computerScoreBoard.textContent = cScore;
            } else {
                result.textContent = 'USER WINS!';
                pScore++;
                playerScoreBoard.textContent = pScore;
            }
        }
        else if (p == 'paper') {
            if (c == 'scissors') {
                result.textContent = 'COMPUTER WINS!';
                cScore++;
                computerScoreBoard.textContent = cScore;
            } else {
                result.textContent = 'USER WINS!';
                pScore++;
                playerScoreBoard.textContent = pScore;
            }
        }
    }
    
    const over = (pOptions, triesLeft) => {
        const result = document.querySelector('.result');
        const reload = document.querySelector('.reload');
        pOptions.forEach(option => {
            option.style.display = 'none';
        })
        triesLeft.style.display = 'none';
        if (pScore > cScore) {
            result.innerText = 'USER WINS THE GAME!'
            result.style.fontSize = '2rem';
        }
        else if (pScore < cScore) {
            result.innerText = 'COMPUTER WINS THE GAME!';
            result.style.fontSize = '2rem';
        }
        else {
            result.innerText = 'THE GAME IS TIED!';
            result.style.fontSize = '2rem';
        }
        reload.style.display = 'flex';
        reload.addEventListener('click', () => {
            window.location.reload();
        })
    }
    
    const start = () => {
        const rock = document.querySelector('.rock');
        const paper = document.querySelector('.paper');
        const scissor = document.querySelector('.scissor');
        const pOptions = [rock, paper, scissor];
        const cOptions = ['rock', 'paper', 'scissors']
        pOptions.forEach(option => {
            option.addEventListener('click', function () {
                const triesLeft = document.querySelector('.left');
                tries++;
                triesLeft.innerText = `Tries Left: ${5 - tries}`;
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = cOptions[choiceNumber];
                winner(this.innerText, computerChoice)
                if (tries == 5) {
                    over(pOptions, triesLeft);
                }
            })
        })
    }
    start();
}
rps();