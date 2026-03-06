const DB_KEY = 'zerowaste_db';

const initialData = [
    { id: '1', name: 'Veg Biryani', quantity: 30, category: 'Main Course', prepTime: '12:00', expiryTime: '20:00', status: 'Available', originalPrice: 150 },
    { id: '2', name: 'Chicken Fried Rice', quantity: 25, category: 'Main Course', prepTime: '13:00', expiryTime: '21:00', status: 'Available', originalPrice: 200 },
    { id: '3', name: 'Paneer Butter Masala', quantity: 20, category: 'Curry', prepTime: '11:00', expiryTime: '19:00', status: 'Available', originalPrice: 180 },
    { id: '4', name: 'Chapati Set', quantity: 40, category: 'Bread', prepTime: '10:00', expiryTime: '22:00', status: 'Available', originalPrice: 50 },
];

function initDB() {
    if (!localStorage.getItem(DB_KEY)) {
        localStorage.setItem(DB_KEY, JSON.stringify(initialData));
    }
}

function getFoods() {
    return JSON.parse(localStorage.getItem(DB_KEY)) || [];
}

function saveFoods(foods) {
    localStorage.setItem(DB_KEY, JSON.stringify(foods));
}

function saveFood(food) {
    const foods = getFoods();
    foods.push(food);
    saveFoods(foods);
}

function deleteFood(id) {
    let foods = getFoods();
    foods = foods.filter(food => food.id !== id);
    saveFoods(foods);
}

function updateFoodStatus(id, newStatus) {
    let foods = getFoods();
    const index = foods.findIndex(food => food.id === id);
    if (index !== -1) {
        foods[index].status = newStatus;
        saveFoods(foods);
    }
}

function getMetrics() {
    const foods = getFoods();
    let totalAdded = foods.length;
    let totalDonated = foods.filter(f => f.status === 'Donated').length;
    let totalSold = foods.filter(f => f.status === 'Sold').length;

    // Simulations
    // 1 meal saved = 0.5 kg food. Using quantity as "meals/plates"
    let donatedQuantity = foods.filter(f => f.status === 'Donated').reduce((sum, f) => sum + parseInt(f.quantity), 0);
    let soldQuantity = foods.filter(f => f.status === 'Sold').reduce((sum, f) => sum + parseInt(f.quantity), 0);
    let totalSavedQuantity = donatedQuantity + soldQuantity;

    let foodSavedKg = totalSavedQuantity * 0.5;
    let co2SavedKg = foodSavedKg * 2.5;
    let waterSavedLiters = totalSavedQuantity * 10; // Mock formula for water

    return {
        totalAdded,
        totalDonated,
        totalSold,
        mealsProvided: totalSavedQuantity,
        foodSavedKg: foodSavedKg.toFixed(1),
        co2SavedKg: co2SavedKg.toFixed(1),
        waterSavedLiters: waterSavedLiters.toFixed(1)
    };
}

initDB();
