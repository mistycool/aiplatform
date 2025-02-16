Is this full ipdated language js file ?? // Function to set the selected language
function setLanguage(languageCode) {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.value = languageCode; // Update dropdown selection
    updatePageLanguage(languageCode); // Update page content
}

// Function to update page content based on selected language
function updatePageLanguage(languageCode) {
    // Fetch translations for the selected language
    fetch(`translations/${languageCode}.json`)
        .then(response => response.json())
        .then(translations => {
            // Update all text elements on the page with the translations
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[key]; // Update placeholder for input/textarea
                    } else {
                        element.textContent = translations[key]; // Update text content for other elements
                    }
                }
            });
        });
}

// Toggle dropdown menu when language button is clicked
document.getElementById('language-button').addEventListener('click', () => {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

// Change language when dropdown selection changes
document.getElementById('language-dropdown').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    saveLanguagePreference(selectedLanguage); // Save preference
});

// Save language preference to local storage
function saveLanguagePreference(languageCode) {
    localStorage.setItem('preferredLanguage', languageCode);
}

// Load saved language preference from local storage
function loadLanguagePreference() {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
        setLanguage(preferredLanguage);
    }
}

// Call detectUserLanguage and loadLanguagePreference on page load
window.onload = () => {
    loadLanguagePreference();
};
