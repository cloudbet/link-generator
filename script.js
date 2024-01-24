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
            {"code": "pt-br", "id": "bitcoin-betting"},
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
            {"code": "pt-br", "id": "bitcoin-bonus"},
            {"code": "ja", "id": "bitcoin-bonus"},
            {"code": "ja", "id": "bitcoin-bonus"},
        ]
    },
     {
        "name": "Affiliate: Casino",
        "languages": [
            {"code": "en", "id": "bitcoin-casino"},
            {"code": "de", "id": "bitcoin-casino"},
            {"code": "es", "id": "bitcoin-casino"},
            {"code": "fr", "id": "bitcoin-casino"},
            {"code": "it", "id": "bitcoin-casino"},
            {"code": "pt-br", "id": "bitcoin-casino"},
            {"code": "ja", "id": "bitcoin-casino"},
            {"code": "tr", "id": "bitcoin-casino"},
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
        "name": "*CasinosBlockchain: Co-Branded",
        "languages": [
            {"code": "en", "id": "casinosblockchain"},
        ]
    },
    {
        "name": "Winter Tournament",
        "languages": [
            {"code": "en", "id": "winter-tournament-en"},
            // Add other languages if necessary
        ]
    },
];


// Default pages available to all partners
const defaultPages = [
    'Affiliate: Bitcoin Bonus',
    'Affiliate: Casino',
    'Affiliate: Sports',
    'Influencer: Casino',
    'Influencer: Sports/eSports',
    'Sports: NFL',
    'Winter Tournament',
];

// Special access pages for specific partners
const partnerPages = {
    'gennci': ['*Gennci: Co-Branded'],
    'cryptomaniaks': ['*Cryptomaniaks: Co-Branded', '*Cryptomaniaks: Co-Branded + 200FS'],
    'cryptobetting': ['*CryptoBetting.org: Sports'],
    'globalextramoney': ['*GlobalExtraMoney: Co-Branded + 100 FS', '*[OLD] GlobalExtraMoney: Co-Branded + 100 FS'],
    'finixio': ['*ActuFinance: Co-Branded + 200 FS', '*CoinCierge: Co-Branded + 200 FS', '*Cryptonaute: Co-Branded + 200 FS', '*InsideBitcoins: Co-Branded + 200 FS', '*Kryptoszene: Co-Branded + 200 FS'],
    'casinodaddy': ['*CasinoDaddy: Co-Branded + 200 FS'],
    'jsweb': ['*CasinoGuide: Co-Branded + 200 FS', '*CasinoTest - Co-Branded + 200 FS', '*Kryptobuchmacher: Co-Branded'],
    'casinosblockchain': ['*CasinosBlockchain: Co-Branded + 100 FS', '*CasinosBlockchain: Co-Branded'],
    'elevatedleads': ['*CryptoCasinos: Co-Branded + 200 FS'], //done
    'blockventures': ['*Gaming.net: Co-Branded + 100 FS'], //done
    'wis': ['*Top10CasinoSites: Co-Branded + 50 FS', '*Sportwettenvergleich: Co-Branded'], //done
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
    'gennci': '2960602116f3dce96c4525219fdedb72', //done - influencer
    'cryptomaniaks': '97ab6f554e12167d3dd796c1487c78b4', //done - agile
    'cryptobetting': 'bb8af9ed6a06f7285216258ebd165ae0', //done - agile
    'globalextramoney': '25e9169d3571b9d047972eaab227c981', //done 
    'finixio': 'ae4254b0cbbf0760d3442112d77a6748', //done
    'jsweb': 'a14aaadaca11e21b036ce69f6c473a20', //done
    'casinodaddy': '25b1e5b3f6bcd84862024dce0b99b871', //done
    'casinosblockchain': 'aa938b8c991e47071094b255abd00cfd', //done
    'elevatedleads': '67b9cd11f6f47ee71d0a14eecf201a16', //done
    'blockventures': '4924e418445b3b21d4e8bbee05ec9207', //done
    'wis': '14b8da7b2de3be3c93cb0082264a3733', //done
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

    const selectedPageName = pageSelector.value;
    let url;

    if (selectedPageName === "Winter Tournament") {
        url = `https://cldbt.cloud/go/beta/${selectedLanguageCode}/tournaments/k-yme4wB6RVVS-7RsGoj/b-yme4wB6RVVS-7Ru2vh?af_token=${personalId}`;
    } else {
        const selectedPage = pages.find(page => page.name === selectedPageName);
        const selectedLanguageId = selectedPage ? selectedPage.languages.find(lang => lang.code === selectedLanguageCode).id : '';
        url = `https://cldbt.cloud/go/${selectedLanguageCode}/landing/${selectedLanguageId}?af_token=${personalId}`;
    }
    
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
    tempMessage.style.backgroundColor = "#90EE90";
    tempMessage.style.fontWeight = "bold";
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
