// Get reference to the game canvas
const gameCanvas = document.getElementById('gameCanvas');

// Initially hide the game canvas
gameCanvas.style.display = 'none';

// Function to start the game
function startGame() {
    // Display the game canvas
    gameCanvas.style.display = 'block';

    // Redirect the player to the game page (if needed)
    window.location.href = 'game.html';

    // Display the introductory dialogue
    displayIntroDialogue();
}

// Call the function to display the start menu when the page loads
displayStartMenu();
