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
        {
        "name": "Influencer: Casino/eSports",
        "languages": [
            {"code": "en", "id": "creator-offer"},
            {"code": "es", "id": "creator-offer"},
        ]
    },
        {
        "name": "Influencer: Sports/eSports",
        "languages": [
            {"code": "en", "id": "creator-offer-sport"},
        ]
    },
        {
        "name": "Gennci: Co-Branded",
        "languages": [
            {"code": "en", "id": "gennci"},
        ]
    },
      {
        "name": "Cryptomaniaks: Co-Branded",
        "languages": [
            {"code": "en", "id": "cryptomaniaks"},
        ]
    },
    
    
];

// Default pages available to all partners
const defaultPages = ['Bitcoin Bonus', 'Bitcoin Betting', 'Bitcoin Casino', 'General Referral', 'Influencer: Casino/eSports', 'Influencer: Sports/eSports'];

// Special access pages for specific partners
const partnerPages = {
    'gennci': ['Gennci: Co-Branded'],
    'cryptomaniaks': ['Cryptomaniaks: Co-Branded']
};

// Partner to Affiliate ID mapping
const partnerToAffiliateIdMap = {
    'gennci': 'i98327te6r3fdvyb',
    'cryptomaniaks': '236517891230'
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
const affiliateIdInput = document.getElementById("personal-id");

// Set the affiliate ID based on partner parameter
if (partnerId && partnerToAffiliateIdMap[partnerId]) {
    affiliateIdInput.value = partnerToAffiliateIdMap[partnerId];
} else {
    affiliateIdInput.value = "Your Affiliate ID"; // Default value
}

// Populate the page selector with options based on partner ID
function populatePages() {
    const partnerSpecificPages = partnerPages[partnerId] || [];
    const accessiblePages = [...new Set([...defaultPages, ...partnerSpecificPages])];

    pageSelector.innerHTML = ''; // Clear existing options

    pages.forEach(page => {
        if (accessiblePages.includes(page.name)) {
            const option = document.createElement("option");
            option.value = page.name;
            option.text = page.name;
            pageSelector.appendChild(option);
        }
    });

    pageSelector.selectedIndex = 0;
    updateLanguageSelector();
}

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

    const selectedPage = pages.find(page => page.name === pageSelector.value);
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

// Initialize the page options when the script loads
populatePages();

// Copy to Clipboard Function
function copyToClipboard() {
    const textToCopy = document.getElementById('result').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard');
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
}

