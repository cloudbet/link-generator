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
            {"code": "ja", "id": "bitcoin-bonus"}
        ]
    }
];

let selectedPageName = "";

// Get references to elements
const pageSelector = document.getElementById("page-selector");
const languageSelector = document.getElementById("language-selector");
const generateBtn = document.getElementById("generate-btn");
const result = document.getElementById("result");

// Set default values
document.getElementById("personal-id").value = "Your Impact ID";

// Populate the page selector with options and select the first page
for (let i = 0; i < pages.length; i++) {
    const option = document.createElement("option");
    option.value = pages[i].name;
    option.text = pages[i].name;
    pageSelector.appendChild(option);
}
pageSelector.selectedIndex = 0;
updateLanguageSelector();

// Function to update the language selector options
function updateLanguageSelector() {
    languageSelector.innerHTML = "";
    selectedPageName = pageSelector.value;
    const selectedPage = pages.find(page => page.name === selectedPageName);
    
    for (let i = 0; i < selectedPage.languages.length; i++) {
        const option = document.createElement("option");
        option.value = selectedPage.languages[i].code;
        option.text = selectedPage.languages[i].code;
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
    const pageName = pageSelector.value.replace(/\*/g, ''); // Remove asterisks from page name

    let url = `https://www.cloudbet.com/en/landing/${pageName}/?af_token=${personalId}`;
    if (aftmSource) {
        url += `&aftm_source=${encodeURIComponent(aftmSource)}`;
    }
    if (referrer) {
        url += `&referrer=${encodeURIComponent(referrer)}`;
    }

    result.innerText = url;
});

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
