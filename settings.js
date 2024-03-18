// Get reference to the settings button
const settingsButton = document.getElementById('settingsButton');

// Add event listener for the settings button
settingsButton.addEventListener('click', openSettingsPage);

// Function to open the settings page
function openSettingsPage() {
    // Redirect the player to the settings page
    window.location.href = 'settings.html';
}
