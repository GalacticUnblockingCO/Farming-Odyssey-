// Get reference to the start button
const startButton = document.getElementById('startButton');

// Add event listener for the start button
startButton.addEventListener('click', startGame);

// Function to start the game
function startGame() {
    // Redirect the player to the game page (if needed)
    window.location.href = 'game.html';

    // Display the introductory dialogue
    displayIntroDialogue();
}

// Function to display the introductory dialogue
function displayIntroDialogue() {
    // Define the dialogue text
    const dialogue = [
        "Character: Ever since I was a child, I dreamed of owning my own farm.",
        "Character: I longed to work the land, to watch seeds grow into bountiful crops, and to raise livestock under the open sky.",
        "Character: Today, that dream becomes a reality. My journey as a farmer begins now."
    ];

    // Get reference to the dialogue container
    const dialogueContainer = document.getElementById('dialogue');

    // Loop through each line of dialogue and display it with a delay
    dialogue.forEach((line, index) => {
        setTimeout(() => {
            dialogueContainer.textContent = line;
        }, index * 2000); // Adjust the delay as needed
    });

    // After displaying all dialogue, remove it after a certain delay
    setTimeout(() => {
        dialogueContainer.textContent = "";
    }, dialogue.length * 2000 + 2000); // Adjust the delay as needed
}
