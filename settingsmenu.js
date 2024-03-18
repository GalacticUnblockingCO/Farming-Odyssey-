// Get references to settings elements
const soundCheckbox = document.getElementById('soundCheckbox');
const musicVolumeInput = document.getElementById('musicVolume');
const saveButton = document.getElementById('saveButton');
const backButton = document.getElementById('backButton');

// Load saved settings from localStorage (if available)
window.onload = function() {
    loadSettings();
};

// Function to load saved settings
function loadSettings() {
    // Check if settings are saved in localStorage
    if(localStorage.getItem('soundEnabled') !== null) {
        // Load sound setting
        soundCheckbox.checked = JSON.parse(localStorage.getItem('soundEnabled'));
    }
    if(localStorage.getItem('musicVolume') !== null) {
        // Load music volume setting
        musicVolumeInput.value = JSON.parse(localStorage.getItem('musicVolume'));
    }
}

// Add event listener for the save button
saveButton.addEventListener('click', saveSettings);

// Function to save settings
function saveSettings() {
    // Save sound setting
    localStorage.setItem('soundEnabled', JSON.stringify(soundCheckbox.checked));

    // Save music volume setting
    localStorage.setItem('musicVolume', JSON.stringify(musicVolumeInput.value));

    // Alert the user that settings have been saved (optional)
    alert('Settings saved successfully!');
}

// Add event listener for the back button
backButton.addEventListener('click', backToGame);

// Function to return to the game screen
function backToGame() {
    // Redirect the player back to the game screen
    window.location.href = 'index.html'; // Assuming your game screen is named 'index.html'
}
