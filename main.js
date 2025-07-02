// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupToggle();
    }

    applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
    }

    toggle() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    setupToggle() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    }
}

// Language Management
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        this.setupLanguageSelector();
        this.updateLanguageDisplay();
    }

    setupLanguageSelector() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        const languageOptions = document.querySelectorAll('.language-option');

        if (languageBtn && languageDropdown) {
            // Toggle dropdown
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('hidden');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                languageDropdown.classList.add('hidden');
            });

            // Handle language selection
            languageOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = option.dataset.lang;
                    this.setLanguage(lang);
                    languageDropdown.classList.add('hidden');
                });
            });
        }
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.updateLanguageDisplay();
    }

    updateLanguageDisplay() {
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');

        if (currentFlag && currentLang) {
            if (this.currentLanguage === 'ka') {
                currentFlag.textContent = '🇬🇪';
                currentLang.textContent = 'KA';
            } else {
                currentFlag.textContent = '🇺🇸';
                currentLang.textContent = 'EN';
            }
        }
    }
}

// Smooth Scrolling
function scrollToCategories() {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
        categoriesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Category Navigation
function setupCategoryNavigation() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            
            switch(category) {
                case 'javascript':
                    window.location.href = 'javascript.html';
                    break;
                case 'typescript':
                case 'react':
                case 'more':
                    // Show coming soon message
                    showComingSoonMessage(category);
                    break;
                default:
                    console.log('Category not found:', category);
            }
        });
    });
}

function showComingSoonMessage(category) {
    // Create and show a modal or toast message
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in';
    
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md mx-4 animate-slide-up">
            <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    ${category.charAt(0).toUpperCase() + category.slice(1)} Coming Soon!
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                    We're working hard to bring you amazing ${category} tutorials. 
                    Stay tuned for updates!
                </p>
                <button onclick="closeModal()" class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    Got it!
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.remove();
    }
}

// Intersection Observer for Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.category-card, .stats-item');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    new ThemeManager();
    new LanguageManager();
    
    // Setup interactions
    setupCategoryNavigation();
    setupScrollAnimations();
    
    console.log('🚀 AndLearn landing page initialized!');
});

// Add some easter eggs for fun
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated!
            console.log('🎉 Konami Code activated! You found the secret!');
            document.body.style.animation = 'rainbow 2s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style); 