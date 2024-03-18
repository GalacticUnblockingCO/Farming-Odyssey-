// Function to start the game
function startGame() {
    // Redirect the player to the game page (if needed)
    window.location.href = 'game.html';

    // Display the introductory dialogue
    displayIntroDialogue();
}

// Function to display the introductory dialogue
function displayIntroDialogue() {
    // Define the introductory dialogue text
    const introDialogue = [
        "Kid: Mom, Dad, when I grow up, I want to be a farmer!",
        "Mom: That's wonderful, sweetie! We'll support you in pursuing your dream.",
        "Dad: Absolutely, son. Farming is hard work, but it's rewarding.",
        "Kid: Thanks, Mom and Dad. I'll make you proud!"
    ];

    // Get reference to the dialogue container
    const dialogueContainer = document.getElementById('dialogue');

    // Loop through each line of the introductory dialogue and display it with a delay
    introDialogue.forEach((line, index) => {
        setTimeout(() => {
            dialogueContainer.textContent = line;
        }, index * 2000); // Adjust the delay as needed
    });

    // After displaying all introductory dialogue, display a scene transition
    setTimeout(() => {
        // Clear the dialogue container
        dialogueContainer.textContent = "";

        // Display the scene transition dialogue
        displayTransitionDialogue();
    }, introDialogue.length * 2000 + 2000); // Adjust the delay as needed
}

// Function to display the transition dialogue
function displayTransitionDialogue() {
    // Define the transition dialogue text
    const transitionDialogue = [
        "Narrator: 20 years later...",
        "Character: Wow, I can't believe it's been 20 years since I dreamed of being a farmer.",
        "Character: Life took me on unexpected paths, but my passion for farming never faded.",
        "Character: Now, as I drive to my farm, I feel a sense of fulfillment and excitement.",
        "Character: Today marks the beginning of a new chapter in my farming journey."
    ];

    // Get reference to the dialogue container
    const dialogueContainer = document.getElementById('dialogue');

    // Loop through each line of the transition dialogue and display it with a delay
    transitionDialogue.forEach((line, index) => {
        setTimeout(() => {
            dialogueContainer.textContent = line;
        }, index * 2000); // Adjust the delay as needed
    });
}

// Call the function to display the introductory dialogue when the page loads
displayIntroDialogue();
