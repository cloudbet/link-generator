// Data for pages and languages
const pages = [
    {
        "name": "Bitcoin Bonus",
        "languages": [
            {"code": "en", "id": "bitcoin-bonus"},
            {"code": "de", "id": "bitcoin-bonus"},
            // ... other languages
        ]
    },
    // ... other pages
];

// Partner specific pages
const partnerPages = {
    '1234': ['Bitcoin Bonus', 'Another Page'],
    '5678': ['Different Page', 'Bitcoin Bonus']
    // ... more mappings as needed
};

// Get partner ID from URL
const urlParams = new URLSearchParams(window.location.search);
const partnerId = urlParams.get('partner');

// Get references to elements
const pageSelector = document.getElementById("page-selector");
const languageSelector = document.getElementById("language-selector");
const generateBtn = document.getElementById("generate-btn");
const result = document.getElementById("result");

// Set default values
document.getElementById("personal-id").value = "Your Impact ID";

// Populate the page selector with options based on partner ID
for (let i = 0; i < pages.length; i++) {
    if (!partnerId || (partnerPages[partnerId] && partnerPages[partnerId].includes(pages[i].name))) {
        const option = document.createElement("option");
        option.value = pages[i].name;
        option.text = pages[i].name;
        pageSelector.appendChild(option);
    }
}
pageSelector.selectedIndex = 0;
updateLanguageSelector();

// Function to update the language selector options
function updateLanguageSelector() {
    languageSelector.innerHTML = "";
    const selectedPage = pages.find(page => page.name === pageSelector.value);
    
    for (let i = 0; i < selectedPage.languages.length; i++) {
        const option = document.createElement("option");
        option.value = selectedPage.languages[i].code;
        option.text = selectedPage.languages[i].code.toUpperCase();
        languageSelector.appendChild(option);
    }
}

// Event listener for page selector change
pageSelector.addEventListener("change", updateLanguageSelector);

// Event listener for generate button click
generateBtn.addEventListener("click", function() {
    const personalId = document.getElementById("personal-id").value;
    const aftmSource = document.getElementById("label1").value;
    const referrer = document.getElementById("label2").value;
    const selectedLanguageCode = languageSelector.value;
    const pageName = pageSelector.value.replace(/\*/g, '');

    let url = `https://www.cloudbet.com/${selectedLanguageCode}/landing/${pageName}/?af_token=${personalId}`;
    if (aftmSource) {
        url += `&aftm_source=${encodeURIComponent(aftmSource)}`;
    }
    if (referrer) {
        url += `&referrer=${encodeURIComponent(referrer)}`;
    }

    result.innerText = url;
});

// Copy to Clipboard Function
function copyToClipboard() {
    const resultText = result.innerText;
    const urlStartIndex = resultText.indexOf("https://");
    if (urlStartIndex >= 0) {
        const url = resultText.substring(urlStartIndex);
        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert("URL copied to clipboard: " + url);
    }
}
