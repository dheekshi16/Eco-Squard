// Helper to get translated string or fallback
function t(key, fallback) {
    return (typeof currentLang !== 'undefined' && typeof i18n !== 'undefined' && i18n[currentLang] && i18n[currentLang][key])
        ? i18n[currentLang][key]
        : fallback;
}

// Generate UI Analytics Cards
function renderOverview() {
    const metrics = getMetrics();
    const container = document.getElementById('overviewCards');

    container.innerHTML = `
        <div class="stat-card glass">
            <div class="stat-title">${t('stat_total_added', 'Total Food Added')}</div>
            <div class="stat-value" style="color: var(--text-primary)">${metrics.totalAdded}</div>
        </div>
        <div class="stat-card glass">
            <div class="stat-title">${t('stat_donated', 'Food Donated')}</div>
            <div class="stat-value" style="color: var(--accent-blue)">${metrics.totalDonated}</div>
        </div>
        <div class="stat-card glass">
            <div class="stat-title">${t('stat_sold', 'Discount Food Sold')}</div>
            <div class="stat-value" style="color: var(--accent-orange)">${metrics.totalSold}</div>
        </div>
        <div class="stat-card glass">
            <div class="stat-title">${t('stat_co2', 'CO₂ Emission Saved')}</div>
            <div class="stat-value" style="color: var(--accent-green)">${metrics.co2SavedKg} kg</div>
        </div>
        <div class="stat-card glass">
            <div class="stat-title">${t('stat_meals', 'Meals Provided')}</div>
            <div class="stat-value" style="color: #a855f7">${metrics.mealsProvided}</div>
        </div>
    `;

    renderAIInsights();
}

// Render AI Insights
function renderAIInsights() {
    const foods = getFoods();
    const available = foods.filter(f => f.status === 'Available');
    const msgElement = document.getElementById('aiMessage');

    if (available.length === 0) {
        msgElement.innerText = "No surplus food detected. You are running a highly efficient kitchen!";
        return;
    }

    // Find items close to expiry (mock logic, comparing times roughly)
    const now = new Date();
    const currentHour = now.getHours();

    let criticalItems = available.slice(0, 1); // Mock picking 1 item
    if (criticalItems.length > 0) {
        const item = criticalItems[0];
        msgElement.innerHTML = `<strong>Action Required:</strong> You have ${item.quantity} plates of ${item.name} expiring at ${item.expiryTime}. <br> <span style="color: var(--accent-orange); cursor: pointer; text-decoration: underline;" onclick="document.querySelector('[data-target=\\'discountSale\\']').click()">Click here to List for 30% Discount</span> or <span style="color: var(--accent-blue); cursor: pointer; text-decoration: underline;" onclick="document.querySelector('[data-target=\\'ngoDonation\\']').click()">Donate to NGO</span> immediately.`;
    }
}

// Global scope actions
window.actionDonate = function (id) {
    updateFoodStatus(id, 'Donated');
    renderDonations();
    renderInventory();
};

window.actionSell = function (id) {
    updateFoodStatus(id, 'Sold');
    renderSales();
    renderInventory();
};

window.actionDelete = function (id) {
    if (confirm("Are you sure you want to delete this item?")) {
        deleteFood(id);
        renderInventory();
        renderDonations();
        renderSales();
    }
};

// Render Inventory
function renderInventory() {
    const foods = getFoods();
    const tbody = document.getElementById('inventoryTableBody');
    tbody.innerHTML = '';

    foods.forEach(f => {
        let statusBadge = `<span class="status status-${f.status.toLowerCase()}">${f.status}</span>`;

        let actions = '-';
        if (f.status === 'Available') {
            actions = `
                <button class="btn btn-blue" style="padding: 0.3rem 0.6rem; font-size: 0.8rem" onclick="actionDonate('${f.id}')">${t('btn_donate', 'Donate')}</button>
                <button class="btn btn-orange" style="padding: 0.3rem 0.6rem; font-size: 0.8rem" onclick="actionSell('${f.id}')">${t('btn_sell', 'Sell')}</button>
                <button class="btn btn-red" style="padding: 0.3rem 0.6rem; font-size: 0.8rem" onclick="actionDelete('${f.id}')"><i class="fa fa-trash"></i></button>
            `;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${f.name}</td>
            <td>${f.quantity}</td>
            <td>${f.category}</td>
            <td>${f.expiryTime}</td>
            <td>${statusBadge}</td>
            <td style="display:flex; gap:0.5rem">${actions}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Render NGO Donations
function renderDonations() {
    const foods = getFoods().filter(f => f.status === 'Available');
    const tbody = document.getElementById('donationTableBody');
    tbody.innerHTML = '';

    foods.forEach(f => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${f.name}</td>
            <td>${f.quantity}</td>
            <td>${f.prepTime}</td>
            <td>${f.expiryTime}</td>
            <td>
                <button class="btn btn-blue" onclick="actionDonate('${f.id}')">${t('btn_donate', 'Donate')}</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Render Discount Sales
function renderSales() {
    const foods = getFoods().filter(f => f.status === 'Available' || f.status === 'Sold');
    const tbody = document.getElementById('salesTableBody');
    tbody.innerHTML = '';

    foods.forEach(f => {
        if (!f.originalPrice) f.originalPrice = 100; // fallback
        const discountPrice = (f.originalPrice * 0.7).toFixed(2);

        let statusBadge = `<span class="status status-${f.status.toLowerCase()}">${f.status}</span>`;
        let actionBtn = f.status === 'Available' ?
            `<button class="btn btn-orange" onclick="actionSell('${f.id}')">${t('btn_sell', 'Sell')}</button>` : '-';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${f.name}</td>
            <td>${f.quantity}</td>
            <td>₹${f.originalPrice}</td>
            <td style="color: var(--accent-green); font-weight: 600;">₹${discountPrice}</td>
            <td>${statusBadge}</td>
            <td>${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Render Impact
function renderImpact() {
    const metrics = getMetrics();
    const container = document.getElementById('impactCards');

    container.innerHTML = `
        <div class="stat-card glass">
            <div class="stat-title">${t('stat_food_saved', 'Food Saved (kg)')}</div>
            <div class="stat-value" style="color: var(--accent-green)">${metrics.foodSavedKg}</div>
        </div>
        <div class="stat-card glass">
            <div class="stat-title">${t('stat_meals', 'Meals Provided')}</div>
            <div class="stat-value" style="color: var(--accent-blue)">${metrics.mealsProvided}</div>
        </div>
        <div class="stat-card glass">
            <div class="stat-title">${t('stat_co2', 'CO₂ Saved')}</div>
            <div class="stat-value" style="color: var(--accent-orange)">${metrics.co2SavedKg} kg</div>
        </div>
        <div class="stat-card glass">
            <div class="stat-title">${t('stat_water', 'Water Saved')}</div>
            <div class="stat-value" style="color: #38bdf8">${metrics.waterSavedLiters} L</div>
        </div>
    `;
}
