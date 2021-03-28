const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    console.log(options[Math.floor(Math.random() * 3)]);
}

computerPlay();