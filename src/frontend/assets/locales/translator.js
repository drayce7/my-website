function applyTranslation() {
    // 1. Get the browser's language (e.g., "pl-PL", "hu-HU", "en-US")
    const userLang = navigator.language || navigator.userLanguage;
    let langCode = "en"; // Default

    // 2. Check if we have a translation for this language
    if (userLang.startsWith("pl")) langCode = "pl";
    if (userLang.startsWith("hu")) langCode = "hu";

    // 3. Allow manual override (if they clicked a language button)
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) langCode = savedLang;

    // 4. Find all elements on the page that have the "data-translate" attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        
        // If the translation exists, swap the text
        if (window.translations && window.translations[langCode] && window.translations[langCode][key]) {
            element.textContent = window.translations[langCode][key];
        }
    });

    // 5. Update placeholders on inputs
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (window.translations && window.translations[langCode] && window.translations[langCode][key]) {
            element.placeholder = window.translations[langCode][key];
        }
    });
}