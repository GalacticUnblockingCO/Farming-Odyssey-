// Get reference to the start button
const startButton = document.getElementById('startButton');

// Add event listener for the start button
startButton.addEventListener('click', startGame);

// Function to start the game
function startGame() {
    // Redirect the player to the game page
    window.location.href = 'game.html';
}
