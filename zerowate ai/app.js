// Language dictionaries
const i18n = {
    en: {
        nav_overview: "Overview", nav_add_food: "Add Food", nav_donation: "NGO Donation",
        nav_sale: "Discount Sale", nav_inventory: "Inventory", nav_impact: "Impact", nav_settings: "Settings",
        ai_insights: "AI Predictions & Insights", add_surplus_food: "Add Surplus Food",
        food_name: "Food Name", quantity_plates: "Quantity (plates)", food_category: "Food Category",
        time_prepared: "Time Prepared", expiry_time: "Expiry Time", original_price: "Original Price (₹)",
        btn_add_food: "ADD FOOD", available_for_donation: "Available for Donation", quantity: "Quantity",
        action: "Action", discount_sales: "Discount Sales (Delivery Apps)", discount_price: "Discount Price (30% off)",
        status: "Status", current_inventory: "Current Inventory", btn_donate: "Donate", btn_sell: "Sell", btn_delete: "Delete",
        cat_main: "Main Course", cat_appetizer: "Appetizer", cat_bread: "Bread/Rotis", cat_dessert: "Dessert", cat_curry: "Curry",
        auto_refresh_time: "Set Daily Auto-Refresh Time (24hr format)", btn_save_settings: "Save Settings",
        settings_saved: "Settings Saved!", auto_refresh_desc: "App will automatically refresh metrics and clear expired items at this time.",
        stat_total_added: "Total Food Added", stat_donated: "Food Donated", stat_sold: "Discount Food Sold",
        stat_meals: "Meals Provided", stat_food_saved: "Food Saved (kg)", stat_co2: "CO₂ Emission Saved (kg)",
        stat_water: "Water Saved (L)"
    },
    ta: {
        nav_overview: "கண்ணோட்டம்", nav_add_food: "உணவைச் சேர்", nav_donation: "அறக்கட்டளை நன்கொடை",
        nav_sale: "தள்ளுபடி விற்பனை", nav_inventory: "கையிருப்பு", nav_impact: "தாக்கம்", nav_settings: "அமைப்புகள்",
        ai_insights: "AI கணிப்புகள் & நுண்ணறிவு", add_surplus_food: "கூடுதல் உணவைச் சேர்",
        food_name: "உணவின் பெயர்", quantity_plates: "அளவு (தட்டுகள்)", food_category: "உணவு வகை",
        time_prepared: "தயாரிக்கப்பட்ட நேரம்", expiry_time: "காலாவதியாகும் நேரம்", original_price: "அசல் விலை (₹)",
        btn_add_food: "உணவைச் சேர்", available_for_donation: "நன்கொடைக்கு கிடைக்கும்", quantity: "அளவு",
        action: "செயல்", discount_sales: "தள்ளுபடி விற்பனை (டெலிவரி செயலிகள்)", discount_price: "தள்ளுபடி விலை (30% தள்ளுபடி)",
        status: "நிலை", current_inventory: "தற்போதைய கையிருப்பு", btn_donate: "நன்கொடை", btn_sell: "விற்க", btn_delete: "அழி",
        cat_main: "முதன்மை உணவு", cat_appetizer: "சிற்றுண்டி", cat_bread: "ரொட்டி", cat_dessert: "இனிப்பு", cat_curry: "குழம்பு",
        auto_refresh_time: "தினசரி தானியங்கி புதுப்பிப்பு நேரத்தை அமை (24 மணிநேர வடிவம்)", btn_save_settings: "அமைப்புகளைச் சேமி",
        settings_saved: "அமைப்புகள் சேமிக்கப்பட்டன!", auto_refresh_desc: "பயன்பாடு தானாகவே அளவீடுகளைப் புதுப்பிக்கும் மற்றும் காலாவதியான உருப்படிகளை அழிக்கும்.",
        stat_total_added: "மொத்த உணவு சேர்க்கப்பட்டது", stat_donated: "உணவு நன்கொடை வழங்கப்பட்டது", stat_sold: "தள்ளுபடியில் விற்கப்பட்ட உணவு",
        stat_meals: "வழங்கப்பட்ட உணவுகள்", stat_food_saved: "சேமிக்கப்பட்ட உணவு (கிலோ)", stat_co2: "சேமிக்கப்பட்ட CO₂ உமிழ்வு (கிலோ)",
        stat_water: "சேமிக்கப்பட்ட நீர் (லி)"
    },
    te: {
        nav_overview: "అవలోకనం", nav_add_food: "ఆహారాన్ని జోడించండి", nav_donation: "NGO విరాళం",
        nav_sale: "డిస్కౌంట్ అమ్మకం", nav_inventory: "నిల్వ", nav_impact: "ప్రభావం", nav_settings: "సెట్టింగ్‌లు",
        ai_insights: "AI అంచనాలు & అంతర్దృష్టులు", add_surplus_food: "మిగులు ఆహారాన్ని జోడించండి",
        food_name: "ఆహారం పేరు", quantity_plates: "పరిమాణం (ప్లేట్లు)", food_category: "ఆహార వర్గం",
        time_prepared: "తయారుచేసిన సమయం", expiry_time: "గడువు సమయం", original_price: "అసలు ధర (₹)",
        btn_add_food: "ఆహారాన్ని జోడించండి", available_for_donation: "విరాళం కోసం అందుబాటులో ఉంది", quantity: "పరిమాణం",
        action: "చర్య", discount_sales: "డిస్కౌంట్ అమ్మకాలు", discount_price: "డిస్కౌంట్ ధర (30% తక్కువ)",
        status: "స్థితి", current_inventory: "ప్రస్తుత నిల్వ", btn_donate: "విరాళం", btn_sell: "అమ్మకం", btn_delete: "తొలగించు",
        cat_main: "ప్రధాన భోజనం", cat_appetizer: "ఆకలి పుట్టించేది", cat_bread: "బ్రెడ్/రోటీ", cat_dessert: "స్వీట్", cat_curry: "కూర",
        auto_refresh_time: "రోజువారీ ఆటో-రిఫ్రెష్ సమయాన్ని సెట్ చేయండి", btn_save_settings: "సెట్టింగ్‌లను సేవ్ చేయండి",
        settings_saved: "సెట్టింగ్‌లు సేవ్ చేయబడ్డాయి!", auto_refresh_desc: "ఈ సమయంలో యాప్ ఆటోమేటిక్‌గా మెట్రిక్‌లను రిఫ్రెష్ చేస్తుంది.",
        stat_total_added: "మొత్తం జోడించిన ఆహారం", stat_donated: "విరాళం ఇచ్చిన ఆహారం", stat_sold: "అమ్మిన ఆహారం",
        stat_meals: "అందించిన భోజనాలు", stat_food_saved: "ఆదా చేసిన ఆహారం (కిలోలు)", stat_co2: "ఆదా చేసిన CO₂ (కిలోలు)",
        stat_water: "ఆదా చేసిన నీరు (లీటర్లు)"
    },
    hi: {
        nav_overview: "अवलोकन", nav_add_food: "भोजन जोड़ें", nav_donation: "एनजीओ दान",
        nav_sale: "छूट बिक्री", nav_inventory: "इन्वेंटरी", nav_impact: "प्रभाव", nav_settings: "सेटिंग्स",
        ai_insights: "एआई भविष्यवाणियां और अंतर्दृष्टि", add_surplus_food: "अतिरिक्त भोजन जोड़ें",
        food_name: "भोजन का नाम", quantity_plates: "मात्रा (प्लेटें)", food_category: "भोजन श्रेणी",
        time_prepared: "तैयार करने का समय", expiry_time: "समाप्ति समय", original_price: "मूल्य (₹)",
        btn_add_food: "भोजन जोड़ें", available_for_donation: "दान के लिए उपलब्ध", quantity: "मात्रा",
        action: "कार्रवाई", discount_sales: "छूट बिक्री", discount_price: "छूट मूल्य (30% कम)",
        status: "स्थिति", current_inventory: "वर्तमान इन्वेंटरी", btn_donate: "दान करें", btn_sell: "बेचें", btn_delete: "हटाएं",
        cat_main: "कुकर्म", cat_appetizer: "क्षुधावर्धक", cat_bread: "रोटी", cat_dessert: "मिठाई", cat_curry: "करी",
        auto_refresh_time: "दैनिक ऑटो-रिफ्रेश समय निर्धारित करें (24 घंटे)", btn_save_settings: "सेटिंग्स सहेजें",
        settings_saved: "सेटिंग्स सहेजी गईं!", auto_refresh_desc: "ऐप स्वचालित रूप से इस समय मेट्रिक्स को रिफ्रेश करेगा और समाप्त वस्तुओं को साफ़ करेगा।",
        stat_total_added: "कुल जोड़ा गया भोजन", stat_donated: "दान किया गया भोजन", stat_sold: "बेचा गया भोजन",
        stat_meals: "प्रदान किया गया भोजन", stat_food_saved: "बचाया गया भोजन (किलो)", stat_co2: "बचाया गया CO₂ (किलो)",
        stat_water: "बचाया गया पानी (लीटर)"
    }
};

let currentLang = 'en';

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang] && i18n[currentLang][key]) {
            if (el.tagName === 'INPUT' && el.type === 'submit') {
                el.value = i18n[currentLang][key]; // For inputs, which we are not currently using but good practice
            } else {
                // To keep icons intact if they are inside the element, we need a smarter replace or just replace text nodes
                // For simplicity here, if there's an icon we might overwrite it. 
                // Let's check if the element has HTML children (like <i>)
                if (el.children.length === 0) {
                    el.innerText = i18n[currentLang][key];
                } else {
                    // It has children e.g. <i class="..."></i> Overview
                    // We extract the icon HTML and prepend it to the new translated text.
                    const iconHTML = el.querySelector('i') ? el.querySelector('i').outerHTML : '';
                    el.innerHTML = `${iconHTML} ${i18n[currentLang][key]}`;
                }
            }
        }
    });

    // Re-render dashboard components that have hardcoded strings
    if (typeof renderOverview === 'function') renderOverview();
    if (typeof renderImpact === 'function') renderImpact();
    if (typeof renderInventory === 'function') renderInventory();
    if (typeof renderDonations === 'function') renderDonations();
    if (typeof renderSales === 'function') renderSales();
}

const SETTINGS_KEY = 'zerowaste_settings';

function getSettings() {
    return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || { autoRefreshTime: '00:00' };
}

function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation Logic ---
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.dashboard-section');
    const pageTitle = document.getElementById('pageTitle');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Add active to clicked
            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Re-render specific section data
            if (targetId === 'overview') renderOverview();
            if (targetId === 'inventory') renderInventory();
            if (targetId === 'ngoDonation') renderDonations();
            if (targetId === 'discountSale') renderSales();
            if (targetId === 'impact') renderImpact();

            // Setup Page Title with current translation
            const key = item.getAttribute('data-i18n');
            pageTitle.innerText = i18n[currentLang][key] || item.innerText.trim();
        });
    });

    // --- Weather & Clock ---
    function updateClockAndWeather() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        let weatherStr = localStorage.getItem('weather_cache') || "Loading...";

        document.getElementById('timeWeather').innerText = `${timeString} | Temp: ${weatherStr}`;

        // Auto Refresh Logic
        checkAutoRefresh(now);
    }

    setInterval(updateClockAndWeather, 1000);

    // Fetch Weather (Mocking coords to a major city like Chennai to ensure it works without prompts, or try geolocation)
    // Using open-meteo which requires no API key
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
        }, error => {
            // Fallback to New Delhi if location blocked
            fetchWeather(28.61, 77.20);
        });
    } else {
        fetchWeather(28.61, 77.20);
    }

    async function fetchWeather(lat, lon) {
        try {
            const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            const data = await res.json();
            const temp = data.current_weather.temperature + "°C";
            localStorage.setItem('weather_cache', temp);
        } catch (e) {
            localStorage.setItem('weather_cache', "N/A");
        }
    }

    // --- Form Handling ---
    const addFoodForm = document.getElementById('addFoodForm');
    if (addFoodForm) {
        addFoodForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newFood = {
                id: Date.now().toString(),
                name: document.getElementById('foodName').value,
                quantity: document.getElementById('foodQty').value,
                category: document.getElementById('foodCategory').value,
                prepTime: document.getElementById('prepTime').value,
                expiryTime: document.getElementById('expiryTime').value,
                originalPrice: document.getElementById('originalPrice').value,
                status: 'Available'
            };

            saveFood(newFood);
            addFoodForm.reset();
            alert("Food item added successfully!");

            // Switch to inventory
            document.querySelector('[data-target="inventory"]').click();
        });
    }

    // --- Localization ---
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        translatePage();
    });

    // --- Settings / Auto Refresh ---
    const settings = getSettings();
    document.getElementById('autoRefreshTimeInput').value = settings.autoRefreshTime;

    document.getElementById('saveSettingsBtn').addEventListener('click', () => {
        const time = document.getElementById('autoRefreshTimeInput').value;
        saveSettings({ autoRefreshTime: time });
        const msg = document.getElementById('settingsMsg');
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 3000);
    });

    let lastRefreshedDay = localStorage.getItem('last_refresh_day');

    function checkAutoRefresh(now) {
        const settings = getSettings();
        const currentHrMin = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        const currentDay = now.toDateString();

        if (currentHrMin === settings.autoRefreshTime && lastRefreshedDay !== currentDay) {
            // Trigger 24hr maintenance!
            console.log("Running daily maintenance and refresh.");

            // For example, delete all expired available items
            let foods = getFoods();
            const activeNav = document.querySelector('.nav-item.active').getAttribute('data-target');
            // Mock clear out logic
            // ...

            lastRefreshedDay = currentDay;
            localStorage.setItem('last_refresh_day', currentDay);

            // Re-render current page
            if (activeNav === 'overview') renderOverview();
            if (activeNav === 'inventory') renderInventory();
            if (activeNav === 'ngoDonation') renderDonations();
            if (activeNav === 'discountSale') renderSales();
            if (activeNav === 'impact') renderImpact();
        }
    }

    // Initial render
    renderOverview();
    translatePage();
});
