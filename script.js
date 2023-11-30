// Data for pages and languages
const pages = [
    {
        "name": "Affiliate: Sports",
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
        "name": "*CryptoBetting.org: Sports",
        "languages": [
            {"code": "en", "id": "cryptobetting"},
        ]
    },
    {
        "name": "*Cryptomaniaks: Co-Branded",
        "languages": [
            {"code": "en", "id": "cryptomaniaks"},
        ]
    },
    {
        "name": "*Cryptomaniaks: Co-Branded + 200FS",
        "languages": [
            {"code": "en", "id": "cryptomaniaks-freespins"},
        ]
    },
    {
        "name": "*GlobalExtraMoney: Co-Branded + 100 FS",
        "languages": [
            {"code": "en", "id": "bitcoin-betting/globalextramoney"},
        ]
    },
    {
        "name": "*Kryptobuchmacher: Co-Branded",
        "languages": [
            {"code": "de", "id": "kryptobuchmacher-com"},
        ]
    },
    {
        "name": "*Sportwettenvergleich: Co-Branded",
        "languages": [
            {"code": "de", "id": "swv"},
        ]
    },
    {
        "name": "Affiliate: Bitcoin Bonus",
        "languages": [
            {"code": "en", "id": "bitcoin-bonus"},
            {"code": "de", "id": "bitcoin-bonus"},
            {"code": "es", "id": "bitcoin-bonus"},
            {"code": "fr", "id": "bitcoin-bonus"},
            {"code": "it", "id": "bitcoin-bonus"},
            {"code": "pt", "id": "bitcoin-bonus"},
            {"code": "ja", "id": "bitcoin-bonus"},
        ]
    },
     {
        "name": "Affiliate: Casino",
        "languages": [
            {"code": "en", "id": "bitcoin-casino"},
        ]
    },
    {
        "name": "*ActuFinance: Co-Branded + 200 FS",
        "languages": [
            {"code": "fr", "id": "actufinance"},
        ]
    },
        {
        "name": "*CasinoDaddy: Co-Branded + 200 FS",
        "languages": [
            {"code": "en", "id": "casinodaddy"},
        ]
    },
    {
        "name": "*CasinoGuide: Co-Branded + 200 FS",
        "languages": [
            {"code": "en", "id": "casino-guide"},
        ]
    },
    {
        "name": "*CasinosBlockchain: Co-Branded + 100 FS",
        "languages": [
            {"code": "en", "id": "100-free-spins/casinosblockchain"},
        ]
    },
    {
        "name": "*CoinCierge: Co-Branded + 200 FS",
        "languages": [
            {"code": "de", "id": "coincierge"},
        ]
    },
    {
        "name": "*CryptoCasinos: Co-Branded + 200 FS",
        "languages": [
            {"code": "en", "id": "cryptocasinos"},
        ]
    },
    {
        "name": "*Cryptonaute: Co-Branded + 200 FS",
        "languages": [
            {"code": "fr", "id": "cryptonaute"},
        ]
    },
    {
        "name": "*Gaming.net: Co-Branded + 100 FS",
        "languages": [
            {"code": "en", "id": "gamingnet"},
        ]
    },
    {
        "name": "*[OLD] GlobalExtraMoney: Co-Branded + 100 FS",
        "languages": [
            {"code": "en", "id": "globalextramoney"},
        ]
    },
    {
        "name": "*InsideBitcoins: Co-Branded + 200 FS",
        "languages": [
            {"code": "en", "id": "insidebitcoins"},
        ]
    },
    {
        "name": "*Kryptoszene: Co-Branded + 200 FS",
        "languages": [
            {"code": "de", "id": "kryptoszene"},
        ]
    },
    {
        "name": "*Top10CasinoSites: Co-Branded + 50 FS",
        "languages": [
            {"code": "en", "id": "top10-casinosites"},
        ]
    },
    {
        "name": "*CasinoTest - Co-Branded + 200 FS",
        "languages": [
            {"code": "de", "id": "casinotest-de"},
        ]
    },
    {
        "name": "Sports: NFL",
        "languages": [
            {"code": "en", "id": "bet-on-nfl"},
        ]
    },
    {
        "name": "Influencer: Casino",
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
        "name": "*Gennci: Co-Branded",
        "languages": [
            {"code": "en", "id": "gennci"},
        ]
    },
    {
        "name": "*CasinosBlockChain: Co-Branded",
        "languages": [
            {"code": "en", "id": "casinosblockchain"},
        ]
    }
];


// Default pages available to all partners
const defaultPages = [
    'Affiliate: Bitcoin Bonus',
    'Affiliate: Casino',
    'Affiliate: Sports',
    'Influencer: Casino',
    'Influencer: Sports/eSports',
    'Sports: NFL',
];

// Special access pages for specific partners
const partnerPages = {
    'gennci': ['*Gennci: Co-Branded'],
    'cryptomaniaks': ['*Cryptomaniaks: Co-Branded', '*Cryptomaniaks: Co-Branded + 200FS', '*CryptoBetting.org: Sports'],
    'globalextramoney': ['*GlobalExtraMoney: Co-Branded + 100 FS', '*[OLD] GlobalExtraMoney: Co-Branded + 100 FS'],
    'kryptobuchmacher': ['*Kryptobuchmacher: Co-Branded'],
    'sportwettenvergleich': ['*Sportwettenvergleich: Co-Branded'],
    'actufinance': ['*ActuFinance: Co-Branded + 200 FS'],
    'casinodaddy': ['*CasinoDaddy: Co-Branded + 200 FS'],
    'casinoguide': ['*CasinoGuide: Co-Branded + 200 FS'],
    'casinosblockchain': ['*CasinosBlockchain: Co-Branded + 100 FS', '*CasinosBlockChain: Co-Branded'],
    'coincierge': ['*CoinCierge: Co-Branded + 200 FS'],
    'cryptocasinos': ['*CryptoCasinos: Co-Branded + 200 FS'],
    'cryptonaute': ['*Cryptonaute: Co-Branded + 200 FS'],
    'gamingnet': ['*Gaming.net: Co-Branded + 100 FS'],
    'insidebitcoins': ['*InsideBitcoins: Co-Branded + 200 FS'],
    'kryptoszene': ['*Kryptoszene: Co-Branded + 200 FS'],
    'top10casinosites': ['*Top10CasinoSites: Co-Branded + 50 FS'],
    'casinotest': ['*CasinoTest - Co-Branded + 200 FS'],
    'admin': []
};

// Consolidate all partner pages for 'admin'
for (const partner in partnerPages) {
    if (partner !== 'admin') {
        partnerPages['admin'] = [...new Set([...partnerPages['admin'], ...partnerPages[partner]])];
    }
}

// Partner to Affiliate ID mapping
const partnerToAffiliateIdMap = {
    'gennci': '2960602116f3dce96c4525219fdedb72',
    'cryptomaniaks': '97ab6f554e12167d3dd796c1487c78b4',
    'globalextramoney': 'abcdef345678',
    'kryptobuchmacher': '2dc3fe853e50c7a2bab32b806f885e11',
    'sportwettenvergleich': 'abcdef567890',
    'actufinance': 'abcdef678901',
    'casinodaddy': '25b1e5b3f6bcd84862024dce0b99b871',
    'casinoguide': 'abcdef890123',
    'casinosblockchain': 'abcdef901234',
    'coincierge': 'abcdef012345',
    'cryptocasinos': 'abcdef123457',
    'cryptonaute': 'abcdef234568',
    'gamingnet': 'abcdef345679',
    'insidebitcoins': 'abcdef456780',
    'kryptoszene': 'abcdef567891',
    'top10casinosites': 'abcdef678902',
    'casinotest': 'abcdef789013',
    'casinoblockchain': 'aa938b8c991e47071094b255abd00cfd',
    'admin': 'admin',
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
}

// Populate the page selector with options based on partner ID
function populatePages() {
    const partnerSpecificPages = partnerPages[partnerId] || [];
    const accessiblePages = [...new Set([...defaultPages, ...partnerSpecificPages])];

    // Create an array of page names from the pages array that are also in accessiblePages
    const pageNames = pages
        .filter(page => accessiblePages.includes(page.name))
        .map(page => page.name);

    // Sort the page names alphabetically
    pageNames.sort();

    // Clear existing options in the dropdown
    pageSelector.innerHTML = '';

    // Add sorted page names as options to the dropdown
    pageNames.forEach(pageName => {
        const option = document.createElement("option");
        option.value = pageName;
        option.text = pageName;
        pageSelector.appendChild(option);
    });

    // Update language selector for the first page
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
    const aftmCampaign = document.getElementById("label1").value;
    const aftmMedium = document.getElementById("label2").value;
    const aftmSource = document.getElementById("label3").value;
    const aftmContent = document.getElementById("label4").value;
    const selectedLanguageCode = languageSelector.value;

    const selectedPage = pages.find(page => page.name === pageSelector.value);
    const selectedLanguageId = selectedPage ? selectedPage.languages.find(lang => lang.code === selectedLanguageCode).id : '';

    let url = `https://cldbt.cloud/go/${selectedLanguageCode}/landing/${selectedLanguageId}?af_token=${personalId}`;
    if (aftmCampaign) {
        url += `&aftm_campaign=${encodeURIComponent(aftmCampaign)}`;
    }   
    if (aftmSource) {
        url += `&aftm_source=${encodeURIComponent(aftmSource)}`;
    }
    if (aftmMedium) {
        url += `&aftm_medium=${encodeURIComponent(aftmMedium)}`;
    }
    if (aftmContent) {
        url += `&aftm_content=${encodeURIComponent(aftmContent)}`;
    }

    result.innerText = url;

    // New: Copy URL to clipboard
    navigator.clipboard.writeText(result.innerText).then(() => {
        // New: Call the function to show a temporary message
        showTemporaryMessage("URL copied to clipboard!", 2500); // 2000 ms = 2 seconds
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});

// Function to show a temporary message
function showTemporaryMessage(message, duration) {
    const tempMessage = document.createElement("div");
    tempMessage.innerText = message;
    tempMessage.style.position = "fixed"; // Changed to 'fixed' to position relative to the viewport
    tempMessage.style.top = "50%"; // Center vertically
    tempMessage.style.left = "50%"; // Center horizontally
    tempMessage.style.transform = "translate(-50%, -50%)"; // Adjust to center accurately
    tempMessage.style.backgroundColor = "#FFA07A";
    tempMessage.style.padding = "10px";
    tempMessage.style.borderRadius = "5px";
    tempMessage.style.zIndex = "1000"; // Ensure it's on top of other elements
    tempMessage.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)"; // Optional: Adds a shadow for better visibility
    tempMessage.style.textAlign = "center"; // Optional: Center-aligns the text
    document.body.appendChild(tempMessage);

    // Remove the message after the specified duration
    setTimeout(() => {
        document.body.removeChild(tempMessage);
    }, duration);
}


// Initialize the page options when the script loads
populatePages();
