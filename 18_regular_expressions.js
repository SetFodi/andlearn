// ===== REGULAR EXPRESSIONS BASICS =====
// ქართული: რეგულარული გამონათქვამები (საფუძვლები)

// What are Regular Expressions? (რა არის რეგულარული გამონათქვამები?)
// Regular expressions (RegEx) are patterns used to match text
// რეგულარული გამონათქვამები არის შაბლონები ტექსტის მოძებნისთვის

// 1. Creating Regular Expressions (რეგექსის შექმნა)

// Method 1: Using literal notation
let regex1 = /hello/;
let regex2 = /Hello/i; // 'i' flag makes it case-insensitive

// Method 2: Using RegExp constructor
let regex3 = new RegExp('hello');
let regex4 = new RegExp('Hello', 'i');

console.log("Testing 'Hello world' with /hello/:", regex1.test('Hello world')); // false
console.log("Testing 'Hello world' with /Hello/i:", regex2.test('Hello world')); // true

// 2. Basic Methods (ძირითადი მეთოდები)

let text = "Hello, my email is luka@andlearn.com and I love JavaScript!";

// test() - returns true/false
let hasEmail = /@/.test(text);
console.log("Text contains @:", hasEmail); // true

// match() - returns matched text or null
let emailMatch = text.match(/@\w+\.\w+/);
console.log("Email domain match:", emailMatch); // ["@andlearn.com"]

// search() - returns index of first match or -1
let atPosition = text.search(/@/);
console.log("Position of @:", atPosition); // 27

// replace() - replaces matched text
let hiddenEmail = text.replace(/@\w+\.\w+/, '@*****.***');
console.log("Hidden email:", hiddenEmail);

// 3. Common Patterns (გავრცელებული შაბლონები)

// Letters and numbers
let lettersOnly = /^[a-zA-Z]+$/;
console.log("'Hello' is letters only:", lettersOnly.test('Hello')); // true
console.log("'Hello123' is letters only:", lettersOnly.test('Hello123')); // false

let numbersOnly = /^\d+$/;
console.log("'12345' is numbers only:", numbersOnly.test('12345')); // true
console.log("'123abc' is numbers only:", numbersOnly.test('123abc')); // false

// Phone number (Georgian format)
let georgianPhone = /^5\d{8}$/; // Starts with 5, followed by 8 digits
console.log("'555123456' is valid phone:", georgianPhone.test('555123456')); // true
console.log("'123456789' is valid phone:", georgianPhone.test('123456789')); // false

// 4. Email Validation (ემეილის ვალიდაცია)

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log("Valid emails:");
console.log(isValidEmail('luka@andlearn.com')); // true
console.log(isValidEmail('ana.gelashvili@gmail.com')); // true
console.log(isValidEmail('invalid.email')); // false
console.log(isValidEmail('test@')); // false

// 5. Password Validation (პაროლის ვალიდაცია)

function validatePassword(password) {
    let requirements = {
        minLength: password.length >= 8,
        hasUppercase: /[A-Z]/.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasNumber: /\d/.test(password),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    let isValid = Object.values(requirements).every(req => req);
    
    return {
        isValid: isValid,
        requirements: requirements
    };
}

let passwordTest = validatePassword('MyPass123!');
console.log("Password validation:", passwordTest);

// 6. Text Cleaning and Formatting (ტექსტის გაწმენდა და ფორმატირება)

function cleanPhoneNumber(phone) {
    // Remove all non-digits
    let cleaned = phone.replace(/\D/g, '');
    
    // Format as XXX-XXX-XXX
    if (cleaned.length === 9) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
    }
    
    return phone; // Return original if not 9 digits
}

console.log("Formatted phone numbers:");
console.log(cleanPhoneNumber('555 123 456')); // "555-123-456"
console.log(cleanPhoneNumber('555.123.456')); // "555-123-456"
console.log(cleanPhoneNumber('(555) 123-456')); // "555-123-456"

// Remove extra whitespace
function cleanText(text) {
    return text
        .replace(/\s+/g, ' ')      // Replace multiple spaces with single space
        .replace(/^\s+|\s+$/g, ''); // Remove leading and trailing spaces
}

let messyText = "  Hello    world   with   lots of    spaces!  ";
console.log("Original:", `"${messyText}"`);
console.log("Cleaned:", `"${cleanText(messyText)}"`);

// 7. Extracting Information (ინფორმაციის გამოტანა)

function extractEmails(text) {
    let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(emailRegex) || [];
}

function extractUrls(text) {
    let urlRegex = /https?:\/\/[^\s]+/g;
    return text.match(urlRegex) || [];
}

let sampleText = `
    Contact us at info@andlearn.com or support@andlearn.com
    Visit our website at https://andlearn.com or https://blog.andlearn.com
    You can also reach out via admin@andlearn.ge
`;

console.log("Extracted emails:", extractEmails(sampleText));
console.log("Extracted URLs:", extractUrls(sampleText));

// 8. Input Validation Functions (შეყვანის ვალიდაციის ფუნქციები)

const validators = {
    // Georgian name validation (ქართული სახელი)
    georgianName: function(name) {
        let georgianRegex = /^[ა-ჰ\s]+$/;
        return georgianRegex.test(name) && name.trim().length > 0;
    },
    
    // English name validation
    englishName: function(name) {
        let englishRegex = /^[a-zA-Z\s]+$/;
        return englishRegex.test(name) && name.trim().length > 0;
    },
    
    // Age validation (1-120)
    age: function(age) {
        let ageRegex = /^(1[0-1]?[0-9]|[1-9]?[0-9])$/;
        let num = parseInt(age);
        return ageRegex.test(age) && num >= 1 && num <= 120;
    },
    
    // Georgian ID number (11 digits)
    georgianId: function(id) {
        let idRegex = /^\d{11}$/;
        return idRegex.test(id);
    },
    
    // Strong password
    strongPassword: function(password) {
        let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return strongRegex.test(password);
    }
};

// Test validators
console.log("=== VALIDATION TESTS ===");
console.log("Georgian name 'ლუკა ფარტენაძე':", validators.georgianName('ლუკა ფარტენაძე'));
console.log("English name 'John Doe':", validators.englishName('John Doe'));
console.log("Age '25':", validators.age('25'));
console.log("Georgian ID '12345678901':", validators.georgianId('12345678901'));
console.log("Strong password 'MyPass123!':", validators.strongPassword('MyPass123!'));

// 9. Form Validation Example (ფორმის ვალიდაციის მაგალითი)

class FormValidator {
    constructor() {
        this.errors = [];
    }
    
    validateField(value, fieldName, rules) {
        this.errors = [];
        
        for (let rule of rules) {
            if (!rule.test(value)) {
                this.errors.push(`${fieldName}: ${rule.message}`);
            }
        }
        
        return this.errors.length === 0;
    }
    
    getErrors() {
        return [...this.errors];
    }
}

// Define validation rules
const validationRules = {
    email: [
        {
            test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: "Please enter a valid email address"
        }
    ],
    password: [
        {
            test: (value) => value.length >= 8,
            message: "Password must be at least 8 characters long"
        },
        {
            test: (value) => /[A-Z]/.test(value),
            message: "Password must contain at least one uppercase letter"
        },
        {
            test: (value) => /[a-z]/.test(value),
            message: "Password must contain at least one lowercase letter"
        },
        {
            test: (value) => /\d/.test(value),
            message: "Password must contain at least one number"
        }
    ],
    phone: [
        {
            test: (value) => /^5\d{8}$/.test(value.replace(/\D/g, '')),
            message: "Phone number must be in format 5XXXXXXXX"
        }
    ]
};

// Test form validation
let validator = new FormValidator();

console.log("=== FORM VALIDATION ===");

// Valid email test
if (validator.validateField('luka@andlearn.com', 'Email', validationRules.email)) {
    console.log("✅ Email is valid");
} else {
    console.log("❌ Email errors:", validator.getErrors());
}

// Invalid password test
if (validator.validateField('weak', 'Password', validationRules.password)) {
    console.log("✅ Password is valid");
} else {
    console.log("❌ Password errors:", validator.getErrors());
}

// ===== PRACTICE TASKS =====

// Task 1: Create a function to validate Georgian mobile numbers
function validateGeorgianMobile(phone) {
    // Remove all non-digits
    let digits = phone.replace(/\D/g, '');
    
    // Georgian mobile numbers: 5XX XXX XXX (9 digits total, starts with 5)
    let mobileRegex = /^5\d{8}$/;
    
    return mobileRegex.test(digits);
}

console.log("=== MOBILE VALIDATION ===");
console.log(validateGeorgianMobile('555 123 456')); // true
console.log(validateGeorgianMobile('595-87-65-43')); // true
console.log(validateGeorgianMobile('7555123456')); // false (doesn't start with 5)
console.log(validateGeorgianMobile('55512345')); // false (too short)

// Task 2: Extract hashtags from social media text
function extractHashtags(text) {
    let hashtagRegex = /#[a-zA-Z0-9_ა-ჰ]+/g;
    return text.match(hashtagRegex) || [];
}

let socialPost = "Learning #JavaScript and #React at #AndLearn! 🚀 #კოდირება #პროგრამირება";
console.log("Hashtags:", extractHashtags(socialPost));

// Task 3: Censor bad words
function censorText(text, badWords) {
    let censoredText = text;
    
    badWords.forEach(word => {
        let wordRegex = new RegExp(word, 'gi'); // Case insensitive global
        let censor = '*'.repeat(word.length);
        censoredText = censoredText.replace(wordRegex, censor);
    });
    
    return censoredText;
}

let originalText = "This is a bad word test";
let badWordsList = ['bad', 'test'];
console.log("Censored:", censorText(originalText, badWordsList));

// Remember: Regular expressions are powerful but can be complex
// Start with simple patterns and gradually learn more advanced features
// გახსოვდეთ: რეგულარული გამონათქვამები ძლიერია, მაგრამ შეიძლება იყოს რთული
// დაიწყეთ მარტივი შაბლონებით და თანდათან ისწავლეთ უფრო რთული ფუნქციები 