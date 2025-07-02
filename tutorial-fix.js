// Simple Tutorial Navigation Fix
let currentTutorial = 'variables';
let currentLanguage = localStorage.getItem('language') || 'en';

// Simple tutorial content
const tutorials = {
    variables: {
        en: {
            title: "Variables in JavaScript",
            description: "Learn the fundamentals of JavaScript variables, data types, and basic syntax."
        },
        ka: {
            title: "ცვლადები JavaScript-ში", 
            description: "ისწავლეთ JavaScript-ის ცვლადების, მონაცემთა ტიპების და ძირითადი სინტაქსის საფუძვლები."
        }
    },
    functions: {
        en: {
            title: "Functions in JavaScript",
            description: "Functions are like magical recipes - give them ingredients and they create something new!"
        },
        ka: {
            title: "ფუნქციები JavaScript-ში",
            description: "ფუნქციები ჯადოსნური რეცეპტების მსგავსია - მისცით მათ ინგრედიენტები და ისინი შექმნიან ახალს!"
        }
    }
};

// UI translations
const uiText = {
    en: {
        'nav-home': 'Home',
        'nav-categories': 'Categories', 
        'javascript': 'JavaScript',
        'js-interactive': 'Interactive Tutorials',
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced'
    },
    ka: {
        'nav-home': 'მთავარი',
        'nav-categories': 'კატეგორიები',
        'javascript': 'ჯავასკრიპტი', 
        'js-interactive': 'ინტერაქტიული გაკვეთილები',
        'beginner': 'დამწყები',
        'intermediate': 'საშუალო', 
        'advanced': 'გაღრმავებული'
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupLanguage();
    updateLanguage();
});

function setupNavigation() {
    document.querySelectorAll('.tutorial-item').forEach(item => {
        item.addEventListener('click', function() {
            const tutorial = this.dataset.tutorial;
            if (tutorials[tutorial]) {
                loadTutorial(tutorial);
                setActive(this);
            }
        });
    });
}

function setupLanguage() {
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            currentLanguage = this.dataset.lang;
            localStorage.setItem('language', currentLanguage);
            updateLanguage();
            if (tutorials[currentTutorial]) {
                loadTutorial(currentTutorial);
            }
            showToast();
        });
    });
}

function loadTutorial(name) {
    currentTutorial = name;
    const content = tutorials[name][currentLanguage];
    
    const title = document.getElementById('tutorialTitle');
    const desc = document.getElementById('tutorialDescription');
    
    if (title) title.textContent = content.title;
    if (desc) desc.textContent = content.description;
}

function setActive(item) {
    document.querySelectorAll('.tutorial-item').forEach(el => {
        el.className = 'tutorial-item flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors';
    });
    
    item.className = 'tutorial-item flex items-center p-3 rounded-lg cursor-pointer bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300';
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (uiText[currentLanguage] && uiText[currentLanguage][key]) {
            el.textContent = uiText[currentLanguage][key];
        }
    });
    
    const flag = document.getElementById('currentFlag');
    const lang = document.getElementById('currentLang');
    if (flag && lang) {
        if (currentLanguage === 'ka') {
            flag.textContent = '🇬🇪';
            lang.textContent = 'KA';
        } else {
            flag.textContent = '🇺🇸';
            lang.textContent = 'EN';
        }
    }
}

function showToast() {
    const msg = currentLanguage === 'ka' ? 'ენა შეიცვალა! 🇬🇪' : 'Language changed! 🇺🇸';
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg z-50';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// Code editor functions
function runCode() {
    const editor = document.getElementById('codeEditor');
    const output = document.getElementById('consoleOutput');
    if (!editor || !output) return;
    
    const code = editor.value.trim();
    if (!code) {
        output.innerHTML = '<div class="text-blue-400">> Write some code first! 🚀</div>';
        return;
    }
    
    output.innerHTML = '';
    
    try {
        const logs = [];
        const originalLog = console.log;
        console.log = (...args) => logs.push(args.join(' '));
        
        eval(code);
        console.log = originalLog;
        
        if (logs.length === 0) {
            output.innerHTML = '<div class="text-green-400">> Code executed successfully!</div>';
        } else {
            logs.forEach(log => {
                const div = document.createElement('div');
                div.className = 'text-green-400 mb-1';
                div.textContent = '> ' + log;
                output.appendChild(div);
            });
        }
    } catch (error) {
        const div = document.createElement('div');
        div.className = 'text-red-400';
        div.textContent = '> Error: ' + error.message;
        output.appendChild(div);
    }
}

function resetCode() {
    const editor = document.getElementById('codeEditor');
    if (editor) {
        editor.value = '// Start coding here...\n\nconsole.log("Hello, World!");';
    }
    clearConsole();
}

function clearConsole() {
    const output = document.getElementById('consoleOutput');
    if (output) {
        output.innerHTML = '<div class="text-gray-500">// Console output will appear here...</div>';
    }
}

// Setup code editor buttons
document.addEventListener('DOMContentLoaded', function() {
    const runBtn = document.getElementById('runCodeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const clearBtn = document.getElementById('clearConsoleBtn');
    
    if (runBtn) runBtn.addEventListener('click', runCode);
    if (resetBtn) resetBtn.addEventListener('click', resetCode);
    if (clearBtn) clearBtn.addEventListener('click', clearConsole);
}); 