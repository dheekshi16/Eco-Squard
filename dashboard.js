function updateDashboard() {
    // Only run if we are on the admin page
    if (!document.getElementById('overviewMetrics')) return;

    renderOverview();
    renderNGOTable();
    renderDiscountTable();
    renderInventoryTable();
    renderImpact();
}

function renderOverview() {
    const metrics = db.getMetrics();
    const container = document.getElementById('overviewMetrics');
    if (!container) return;

    container.innerHTML = `
        <div class="glass-card metric-card">
            <h3>Total Food Added</h3>
            <div class="value">${metrics.totalAdded}</div>
        </div>
        <div class="glass-card metric-card">
            <h3>Food Donated</h3>
            <div class="value blue">${metrics.foodDonated}</div>
        </div>
        <div class="glass-card metric-card">
            <h3>Discount Food Sold</h3>
            <div class="value green">${metrics.discountSold}</div>
        </div>
        <div class="glass-card metric-card">
            <h3>Meals Provided</h3>
            <div class="value">${metrics.mealsProvided}</div>
        </div>
    `;
}

function renderNGOTable() {
    const foods = db.getAvailableFoods();
    const tbody = document.getElementById('ngoTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    foods.forEach(food => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${food.name}</td>
            <td>${food.quantity}</td>
            <td>${food.prepared}</td>
            <td>${food.expiry}</td>
            <td><button class="btn btn-blue" onclick="window.donateFood(${food.id})">DONATE</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function renderDiscountTable() {
    const foods = db.getAvailableFoods();
    const tbody = document.getElementById('discountTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    foods.forEach(food => {
        const discountPrice = (food.originalPrice * 0.7).toFixed(2);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${food.name}</td>
            <td>${food.quantity}</td>
            <td>$${food.originalPrice}</td>
            <td style="color:var(--accent-green); font-weight:600;">$${discountPrice}</td>
            <td><span class="badge badge-available">${food.status}</span></td>
            <td>
                <button class="btn btn-orange" onclick="window.sellFood(${food.id})" style="margin-right: 5px;">SELL</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderInventoryTable() {
    const foods = db.getFoods();
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    foods.forEach(food => {
        let badgeClass = 'badge-available';
        if (food.status === 'Donated') badgeClass = 'badge-donated';
        if (food.status === 'Sold') badgeClass = 'badge-sold';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${food.name}</td>
            <td>${food.quantity}</td>
            <td>${food.category}</td>
            <td>${food.expiry}</td>
            <td><span class="badge ${badgeClass}">${food.status}</span></td>
            <td>
                ${food.status === 'Available' ? `<button class="btn btn-blue" style="padding: 4px 8px; font-size:0.8rem;" onclick="window.donateFood(${food.id})">Donate</button>
                <button class="btn btn-orange" style="padding: 4px 8px; font-size:0.8rem;" onclick="window.sellFood(${food.id})">Sell</button>` : ''}
                <button class="btn btn-red" style="padding: 4px 8px; font-size:0.8rem;" onclick="window.deleteFood(${food.id})">🗑</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderImpact() {
    const metrics = db.getMetrics();
    const container = document.getElementById('impactMetrics');
    if (!container) return;

    container.innerHTML = `
        <div class="glass-card metric-card">
            <h3>Food Saved</h3>
            <div class="value green">${metrics.foodSavedKg.toFixed(1)} <span style="font-size:1rem;color:var(--text-muted)">kg</span></div>
        </div>
        <div class="glass-card metric-card">
            <h3>CO₂ Emission Saved</h3>
            <div class="value blue">${metrics.co2Saved.toFixed(1)} <span style="font-size:1rem;color:var(--text-muted)">kg</span></div>
        </div>
        <div class="glass-card metric-card">
            <h3>Water Saved</h3>
            <div class="value">${metrics.waterSaved.toFixed(1)} <span style="font-size:1rem;color:var(--text-muted)">L</span></div>
        </div>
        <div class="glass-card metric-card">
            <h3>Meals Provided</h3>
            <div class="value orange">${metrics.mealsProvided}</div>
        </div>
    `;
}
