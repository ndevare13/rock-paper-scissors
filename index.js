const options = ['rock', 'paper', 'scissors'];

console.log(game());

function game() {
    let win = 0;
    let lose = 0;
    let draw = 0;

    for (let i = 1; i <= 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt('Choose rock, paper or scissors!');
        score = playRound(playerSelection, computerSelection);

        if (score === 'won') {
            win += 1;
        } else if (score === 'lost') {
            lose += 1;
        } else {
            draw += 1;
        }
    }

    return compareThree(win, lose, draw);
}

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function compareThree(numberOne, numberTwo, numberThree) {
    if (numberOne > numberTwo) {
        if (numberOne > numberThree) {
            return 'You have won the round!';
        } else if (numberThree > numberOne) {
            return 'It was a draw overall.';
        } else {
            return 'It was a draw between Draw and Win';
        }
    } else if (numberTwo > numberOne) {
        if (numberTwo > numberThree) {
            return 'You have lost the round...';
        } else if (numberThree > numberTwo) {
            return 'It was a draw overall.';
        } else {
            return 'It was a draw between Draw and Lose';
        }
    } else {
        return 'It was a draw between Win and Lose.';
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            console.log('You Lost! Try again?');
            return 'lost';
        } else if (computerSelection === 'scissors') {
            console.log(`You won!! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
            return 'won';
        } else {
            console.log('Oops! It was a draw.');
            return 'draw';
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            console.log('You Lost! Try again?');
            return 'lost';
        } else if (computerSelection === 'rock') {
            console.log(`You won!! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
            return 'won';
        } else {
            console.log('Oops! It was a draw.');
            return 'draw';
        }
    } else {
        if (computerSelection === 'rock') {
            console.log('You Lost! Try again?');
            return 'lost';
        } else if (computerSelection === 'paper') {
            console.log(`You won!! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
            return 'won';
        } else {
            console.log('Oops! It was a draw.');
            return 'draw';
        }
    }
}