let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    let message = '';

    if (userGuess < 1 || userGuess > 100) {
        message = 'Please enter a number between 1 and 100.';
    } else if (userGuess > randomNumber) {
        message = 'Too high! Try again.';
    } else if (userGuess < randomNumber) {
        message = 'Too low! Try again.';
    } else {
        message = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        // Reset the game
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
    }

    document.getElementById('message').textContent = message;
    document.getElementById('guess').value = ''; // Clear the input
});