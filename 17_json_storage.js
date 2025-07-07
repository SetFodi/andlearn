// ===== JSON AND LOCAL STORAGE =====
// ქართული: JSON და ლოკალური შენახვა

// 1. What is JSON? (რა არის JSON?)
// JSON (JavaScript Object Notation) is a format for storing and transferring data
// JSON არის ფორმატი მონაცემების შენახვისა და გადაცემისთვის

// JavaScript Object
let student = {
    name: "Luka",
    age: 20,
    courses: ["JavaScript", "React", "TypeScript"],
    isActive: true,
    address: {
        city: "Tbilisi",
        country: "Georgia"
    }
};

console.log("Original object:", student);
console.log("Type:", typeof student); // "object"

// 2. Converting to JSON (JSON-ში გარდაქმნა)

// Object to JSON string
let jsonString = JSON.stringify(student);
console.log("JSON string:", jsonString);
console.log("Type:", typeof jsonString); // "string"

// Pretty formatted JSON (formatted with indentation)
let prettyJson = JSON.stringify(student, null, 2);
console.log("Pretty JSON:");
console.log(prettyJson);

// 3. Converting from JSON (JSON-იდან გარდაქმნა)

// JSON string back to object
let parsedStudent = JSON.parse(jsonString);
console.log("Parsed object:", parsedStudent);
console.log("Type:", typeof parsedStudent); // "object"

// Accessing properties works normally
console.log(`Student name: ${parsedStudent.name}`);
console.log(`First course: ${parsedStudent.courses[0]}`);

// 4. Error Handling with JSON (JSON-თან ერორების მართვა)

let invalidJson = '{"name": "Luka", "age": 20,}'; // Extra comma makes it invalid

try {
    let result = JSON.parse(invalidJson);
    console.log(result);
} catch (error) {
    console.log("JSON parsing failed:", error.message);
}

// Safe JSON parsing function
function safeJsonParse(jsonString, defaultValue = null) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log("Invalid JSON, returning default value");
        return defaultValue;
    }
}

let safeResult = safeJsonParse(invalidJson, {name: "Unknown", age: 0});
console.log("Safe result:", safeResult);

// 5. Local Storage (ლოკალური შენახვა)
// Local Storage allows saving data in the browser that persists across sessions
// ლოკალური შენახვა საშუალებას გაძლევს მონაცემები შეინახოთ ბროუზერში

// Saving data to localStorage
function saveUserData(userData) {
    try {
        let jsonData = JSON.stringify(userData);
        localStorage.setItem('userData', jsonData);
        console.log("User data saved successfully!");
        return true;
    } catch (error) {
        console.log("Failed to save user data:", error.message);
        return false;
    }
}

// Loading data from localStorage
function loadUserData() {
    try {
        let jsonData = localStorage.getItem('userData');
        if (jsonData === null) {
            console.log("No user data found");
            return null;
        }
        let userData = JSON.parse(jsonData);
        console.log("User data loaded successfully!");
        return userData;
    } catch (error) {
        console.log("Failed to load user data:", error.message);
        return null;
    }
}

// Removing data from localStorage
function clearUserData() {
    localStorage.removeItem('userData');
    console.log("User data cleared!");
}

// Example usage
let userProfile = {
    name: "ანა გელაშვილი",
    email: "ana@example.com",
    preferences: {
        language: "Georgian",
        theme: "dark",
        notifications: true
    },
    lastLogin: new Date().toISOString()
};

saveUserData(userProfile);
let loadedData = loadUserData();
console.log("Loaded data:", loadedData);

// 6. Settings Manager Example (პარამეტრების მენეჯერის მაგალითი)

class SettingsManager {
    constructor(storageKey = 'appSettings') {
        this.storageKey = storageKey;
        this.settings = this.loadSettings();
    }
    
    // Load settings from localStorage
    loadSettings() {
        try {
            let settingsJson = localStorage.getItem(this.storageKey);
            if (settingsJson) {
                return JSON.parse(settingsJson);
            } else {
                // Default settings
                return {
                    theme: 'light',
                    language: 'en',
                    fontSize: 16,
                    notifications: true,
                    autoSave: true
                };
            }
        } catch (error) {
            console.log("Error loading settings, using defaults");
            return this.getDefaultSettings();
        }
    }
    
    // Save settings to localStorage
    saveSettings() {
        try {
            let settingsJson = JSON.stringify(this.settings);
            localStorage.setItem(this.storageKey, settingsJson);
            console.log("Settings saved successfully");
            return true;
        } catch (error) {
            console.log("Error saving settings:", error.message);
            return false;
        }
    }
    
    // Get a specific setting
    get(key) {
        return this.settings[key];
    }
    
    // Set a specific setting
    set(key, value) {
        this.settings[key] = value;
        this.saveSettings();
    }
    
    // Update multiple settings
    update(newSettings) {
        this.settings = {...this.settings, ...newSettings};
        this.saveSettings();
    }
    
    // Reset to defaults
    reset() {
        this.settings = this.getDefaultSettings();
        this.saveSettings();
    }
    
    // Get all settings
    getAll() {
        return {...this.settings}; // Return a copy
    }
    
    getDefaultSettings() {
        return {
            theme: 'light',
            language: 'en',
            fontSize: 16,
            notifications: true,
            autoSave: true
        };
    }
}

// Using the SettingsManager
let appSettings = new SettingsManager();

console.log("Current theme:", appSettings.get('theme'));
console.log("All settings:", appSettings.getAll());

// Change some settings
appSettings.set('theme', 'dark');
appSettings.set('language', 'ka');
appSettings.update({
    fontSize: 18,
    notifications: false
});

console.log("Updated settings:", appSettings.getAll());

// 7. Shopping Cart Example (კალათის მაგალითი)

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
    }
    
    loadCart() {
        let cartData = localStorage.getItem('shoppingCart');
        return cartData ? JSON.parse(cartData) : [];
    }
    
    saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.items));
    }
    
    addItem(product) {
        // Check if item already exists
        let existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += product.quantity || 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity || 1
            });
        }
        
        this.saveCart();
        console.log(`Added ${product.name} to cart`);
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        console.log(`Removed item with ID ${productId} from cart`);
    }
    
    updateQuantity(productId, newQuantity) {
        let item = this.items.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
            }
        }
    }
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
    
    clearCart() {
        this.items = [];
        this.saveCart();
        console.log("Cart cleared");
    }
    
    getCartSummary() {
        return {
            items: this.items,
            itemCount: this.getItemCount(),
            total: this.getTotal()
        };
    }
}

// Using the shopping cart
let cart = new ShoppingCart();

// Add some items
cart.addItem({id: 1, name: "JavaScript Book", price: 25.99});
cart.addItem({id: 2, name: "Coffee Mug", price: 12.50, quantity: 2});
cart.addItem({id: 1, name: "JavaScript Book", price: 25.99}); // Should increase quantity

console.log("Cart summary:", cart.getCartSummary());

// ===== PRACTICE TASKS =====

// Task 1: User Profile Manager
class UserProfileManager {
    constructor() {
        this.profile = this.loadProfile();
    }
    
    loadProfile() {
        let profileData = localStorage.getItem('userProfile');
        return profileData ? JSON.parse(profileData) : {
            name: '',
            email: '',
            age: 0,
            courses: [],
            preferences: {}
        };
    }
    
    saveProfile() {
        localStorage.setItem('userProfile', JSON.stringify(this.profile));
    }
    
    updateProfile(updates) {
        this.profile = {...this.profile, ...updates};
        this.saveProfile();
        console.log("Profile updated successfully");
    }
    
    addCourse(courseName) {
        if (!this.profile.courses.includes(courseName)) {
            this.profile.courses.push(courseName);
            this.saveProfile();
            console.log(`Added course: ${courseName}`);
        }
    }
    
    removeCourse(courseName) {
        this.profile.courses = this.profile.courses.filter(course => course !== courseName);
        this.saveProfile();
        console.log(`Removed course: ${courseName}`);
    }
    
    getProfile() {
        return {...this.profile};
    }
}

// Test the profile manager
let profileManager = new UserProfileManager();
profileManager.updateProfile({
    name: "ლუკა ფარტენაძე",
    email: "luka@andlearn.com",
    age: 20
});

profileManager.addCourse("JavaScript");
profileManager.addCourse("React");
profileManager.addCourse("TypeScript");

console.log("Final profile:", profileManager.getProfile());

// Task 2: Note-taking app
function createNoteApp() {
    const STORAGE_KEY = 'myNotes';
    
    function loadNotes() {
        let notesData = localStorage.getItem(STORAGE_KEY);
        return notesData ? JSON.parse(notesData) : [];
    }
    
    function saveNotes(notes) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }
    
    let notes = loadNotes();
    
    return {
        addNote: function(title, content) {
            let note = {
                id: Date.now(),
                title: title,
                content: content,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            notes.push(note);
            saveNotes(notes);
            console.log(`Note "${title}" added`);
            return note;
        },
        
        getAllNotes: function() {
            return [...notes];
        },
        
        deleteNote: function(id) {
            notes = notes.filter(note => note.id !== id);
            saveNotes(notes);
            console.log(`Note with ID ${id} deleted`);
        },
        
        updateNote: function(id, updates) {
            let note = notes.find(note => note.id === id);
            if (note) {
                Object.assign(note, updates);
                note.updatedAt = new Date().toISOString();
                saveNotes(notes);
                console.log(`Note with ID ${id} updated`);
            }
        }
    };
}

// Test the note app
let noteApp = createNoteApp();
noteApp.addNote("JavaScript Tips", "Remember to use semicolons!");
noteApp.addNote("Shopping List", "Milk, Bread, Coffee");

console.log("All notes:", noteApp.getAllNotes());

// Important: localStorage has size limits (usually 5-10 MB)
// Always handle errors when working with localStorage
// გაითვალისწინეთ: localStorage-ს აქვს ზომის ლიმიტები (ჩვეულებრივ 5-10 MB) 