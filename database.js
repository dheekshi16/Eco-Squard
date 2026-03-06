class Database {
    constructor() {
        this.storageKey = 'zeroWasteData';
        this.initDB();
    }

    initDB() {
        if (!localStorage.getItem(this.storageKey)) {
            const initialData = {
                foods: [
                    { id: 1, name: 'Veg Biryani', quantity: 30, category: 'Main Course', prepared: this.getTime(-2), expiry: this.getTime(4), status: 'Available', originalPrice: 100 },
                    { id: 2, name: 'Chicken Fried Rice', quantity: 25, category: 'Main Course', prepared: this.getTime(-3), expiry: this.getTime(3), status: 'Available', originalPrice: 150 },
                    { id: 3, name: 'Paneer Butter Masala', quantity: 20, category: 'Side Dish', prepared: this.getTime(-1), expiry: this.getTime(5), status: 'Available', originalPrice: 120 },
                    { id: 4, name: 'Chapati Set', quantity: 40, category: 'Main Course', prepared: this.getTime(-4), expiry: this.getTime(2), status: 'Available', originalPrice: 40 }
                ],
                metrics: {
                    totalAdded: 4,
                    foodDonated: 0,
                    discountSold: 0,
                    foodSavedKg: 0,
                    mealsProvided: 0,
                    co2Saved: 0,
                    waterSaved: 0
                }
            };
            this.saveToStorage(initialData);
        }
    }

    getTime(offsetHours) {
        const date = new Date();
        date.setHours(date.getHours() + offsetHours);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    getData() {
        return JSON.parse(localStorage.getItem(this.storageKey));
    }

    saveToStorage(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        // Dispatch custom event to notify other tabs/scripts of update
        window.dispatchEvent(new Event('db_updated'));
    }

    getFoods() {
        return this.getData().foods;
    }
    
    getAvailableFoods() {
        return this.getData().foods.filter(f => f.status === 'Available');
    }

    getMetrics() {
        return this.getData().metrics;
    }

    saveFood(food) {
        const data = this.getData();
        food.id = Date.now();
        food.status = 'Available';
        data.foods.push(food);
        data.metrics.totalAdded += 1;
        this.saveToStorage(data);
    }

    updateFoodStatus(id, newStatus) {
        const data = this.getData();
        const food = data.foods.find(f => f.id === id);
        if (food) {
            food.status = newStatus;
            
            // Assuming 1 portion/plate = 0.5kg
            const foodKg = food.quantity * 0.5;

            if (newStatus === 'Donated') {
                data.metrics.foodDonated += 1;
                data.metrics.mealsProvided += food.quantity;
                data.metrics.foodSavedKg += foodKg;
                data.metrics.co2Saved += foodKg * 2.5; 
                data.metrics.waterSaved += foodKg * 1.5; // dummy formula
            } else if (newStatus === 'Sold') {
                data.metrics.discountSold += 1;
                data.metrics.mealsProvided += food.quantity;
                data.metrics.foodSavedKg += foodKg;
                data.metrics.co2Saved += foodKg * 2.5;
                data.metrics.waterSaved += foodKg * 1.5;
            }

            this.saveToStorage(data);
        }
    }

    deleteFood(id) {
        const data = this.getData();
        data.foods = data.foods.filter(f => f.id !== id);
        this.saveToStorage(data);
    }
}

// Global instance
const db = new Database();
