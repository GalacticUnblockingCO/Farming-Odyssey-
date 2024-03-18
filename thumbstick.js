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
            // Check if it's the last line of dialogue
            if (index === introDialogue.length - 1) {
                // After displaying all introductory dialogue, display the thumbstick
                displayThumbstick();
            }
        }, index * 2000); // Adjust the delay as needed
    });
}

// Function to display the thumbstick
function displayThumbstick() {
    // Get reference to the thumbstick
    const thumbstick = document.getElementById('thumbstick');

    // Display the thumbstick
    thumbstick.style.display = 'block';
    
    // Add event listeners for thumbstick movement
    thumbstick.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', dragThumbstick);
    document.addEventListener('mouseup', stopDragging);
}

// Function to start dragging thumbstick
function startDragging(event) {
    event.preventDefault();
    thumbstick.setPointerCapture(event.pointerId);
}

// Function to drag thumbstick
function dragThumbstick(event) {
    if (event.pointerId !== thumbstick.getPointerId()) return;
    thumbstickPos.x = event.clientX - thumbstick.offsetWidth / 2;
    thumbstickPos.y = event.clientY - thumbstick.offsetHeight / 2;
    updateThumbstickPosition();
}

// Function to stop dragging thumbstick
function stopDragging(event) {
    if (event.pointerId !== thumbstick.getPointerId()) return;
    thumbstick.releasePointerCapture(event.pointerId);
}

// Function to update thumbstick position
function updateThumbstickPosition() {
    thumbstick.style.left = thumbstickPos.x + 'px';
    thumbstick.style.top = thumbstickPos.y + 'px';
    updatePlayerPosition();
}

// Function to update player position based on thumbstick position
function updatePlayerPosition() {
    let dx = thumbstickPos.x - playerPos.x;
    let dy = thumbstickPos.y - playerPos.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    if (distance > 50) {
        let angle = Math.atan2(dy, dx);
        playerPos.x = thumbstickPos.x - 50 * Math.cos(angle);
        playerPos.y = thumbstickPos.y - 50 * Math.sin(angle);
        player.style.left = playerPos.x + 'px';
        player.style.top = playerPos.y + 'px';
    }
}
