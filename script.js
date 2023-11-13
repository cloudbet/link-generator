// Data for pages and languages
const pages = [
    {
        "name": "Bitcoin Bonus",
        "languages": [
            {"code": "en", "id": "bitcoin-bonus"},
            {"code": "de", "id": "bitcoin-bonus"},
            {"code": "es", "id": "bitcoin-bonus"},
            {"code": "fr", "id": "bitcoin-bonus"},
            {"code": "it", "id": "bitcoin-bonus"},
            {"code": "pt", "id": "bitcoin-bonus"},
            {"code": "ja", "id": "bitcoin-bonus"},
            // ... other languages
        ]
    },
    {
        "name": "Bitcoin Betting",
        "languages": [
            {"code": "en", "id": "bitcoin-betting"},
            {"code": "de", "id": "bitcoin-betting"},
            {"code": "es", "id": "bitcoin-betting"},
            {"code": "fr", "id": "bitcoin-betting"},
            {"code": "it", "id": "bitcoin-betting"},
            {"code": "pt", "id": "bitcoin-betting"},
            {"code": "ja", "id": "bitcoin-betting"},
            {"code": "tr", "id": "bitcoin-betting"},
        ]
    },
    {
        "name": "Bitcoin Casino",
        "languages": [
            {"code": "en", "id": "bitcoin-casino"},
        ]
    },
    {
        "name": "General Referral",
        "languages": [
            {"code": "en", "id": "refer"},
            {"code": "de", "id": "refer"},
            {"code": "es", "id": "refer"},
            {"code": "fr", "id": "refer"},
            {"code": "it", "id": "refer"},
            {"code": "ja", "id": "refer"},
        ]
    },
    
];

// Partner specific pages
const partnerPages = {
    '1234': ['Bitcoin Betting', 'Bitcoin Casino', 'General Referral', 'Bitcoin Bonus'],
    '5678': ['Different Page', 'Bitcoin Bonus']
    // ... more mappings as needed
};

// Partner to Affiliate ID mapping
const partnerToAffiliateIdMap = {
    '1234': 'i98327te6r3fdvyb',
    '5678': '236517891230'
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
const affiliateIdInput = document.getElementById("personal-id"); // Assuming this is your affiliate ID input's ID

// Set the affiliate ID based on partner parameter
if (partnerId && partnerToAffiliateIdMap[partnerId]) {
    affiliateIdInput.value = partnerToAffiliateIdMap[partnerId];
} else {
    affiliateIdInput.value = "Your Impact ID"; // Default value
}

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
    const personalId = affiliateIdInput.value;
    const aftmSource = document.getElementById("label1").value;
    const referrer = document.getElementById("label2").value;
    const selectedLanguageCode = languageSelector.value;

    // Find the selected page object using the selected page name
    const selectedPage = pages.find(page => page.name === pageSelector.value);
    
    // Find the id for the selected language within the selected page
    const selectedLanguageId = selectedPage ? selectedPage.languages.find(lang => lang.code === selectedLanguageCode).id : '';

    let url = `https://www.cloudbet.com/${selectedLanguageCode}/landing/${selectedLanguageId}/?af_token=${personalId}`;
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
