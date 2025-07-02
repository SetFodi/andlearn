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

// Translation Data
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-categories': 'Categories',
        'nav-about': 'About',
        'javascript': 'JavaScript',
        
        // Hero Section
        'hero-title-1': 'Master Programming',
        'hero-title-2': 'with Interactive Tutorials',
        'hero-subtitle': 'Learn JavaScript, TypeScript, React, and more through hands-on, beginner-friendly tutorials that make coding fun and easy.',
        'btn-start-learning': 'Start Learning Now',
        'btn-learn-more': 'Learn More',
        
        // Stats
        'stats-tutorials': 'Tutorials',
        'stats-categories': 'Categories', 
        'stats-practice': 'Practice',
        
        // Categories Section
        'categories-title': 'Choose Your Path',
        'categories-subtitle': 'Start your programming journey with our carefully crafted tutorials. Each category is designed to take you from beginner to proficient.',
        
        // Category Cards
        'js-title': 'JavaScript',
        'js-desc': 'Master the language of the web. From basics to advanced concepts.',
        'js-count': '12 Tutorials',
        'ts-title': 'TypeScript',
        'ts-desc': 'Add type safety to your JavaScript. Build more robust applications.',
        'react-title': 'React',
        'react-desc': 'Build modern user interfaces with the most popular JavaScript library.',
        'more-title': 'More',
        'more-desc': 'PHP, Python, Laravel, and many more languages coming soon.',
        'coming-soon': 'Coming Soon',
        
        // About Section
        'about-title': 'About AndLearn',
        'about-desc': 'AndLearn is designed to make programming accessible and enjoyable for everyone. Our interactive tutorials break down complex concepts into digestible, hands-on lessons that help you learn by doing, not just reading.',
        'about-quote': 'The best way to learn programming is by actually programming. AndLearn makes this possible with interactive, beginner-friendly tutorials.',
        'about-author': 'Created with ❤️ by Luka Partenadze',
        
        // Footer
        'footer-text': '© 2024 AndLearn. Making programming education accessible to everyone.',
        
        // JavaScript Page
        'js-interactive': 'Interactive Tutorials',
        'js-progress-text': 'tutorials to master JavaScript from basics to advanced concepts',
        'beginner': 'Beginner',
        'intermediate': 'Intermediate', 
        'advanced': 'Advanced',
        'variables-title': 'Variables & Data Types',
        'variables-desc': 'Learn the building blocks',
        'functions-title': 'Functions',
        'functions-desc': 'Reusable code blocks',
        'controlflow-title': 'Control Flow',
        'controlflow-desc': 'Making decisions',
        'arrays-title': 'Arrays & Objects Deep Dive',
        'arrays-desc': 'Data structures',
        'advanced-functions-title': 'Functions + Arrays & Objects',
        'advanced-functions-desc': 'Combining concepts',
        'advanced-arrays-title': 'Advanced Array Methods',
        'advanced-arrays-desc': 'Powerful array tools',
        'typescript-title': 'TypeScript Introduction',
        'typescript-desc': 'Type-safe JavaScript',
        'dom-title': 'DOM Manipulation',
        'dom-desc': 'Web page interaction',
        'events-title': 'Events & Advanced DOM',
        'events-desc': 'User interactions',
        'async-title': 'Async JavaScript',
        'async-desc': 'Non-blocking code',
        'api-title': 'API Requests',
        'api-desc': 'Fetching data',
        'error-handling-title': 'Error Handling',
        'error-handling-desc': 'Managing errors',
        'progress-title': 'Progress',
        'progress-encouragement': 'Keep going! You\'re doing great! 🎉'
    },
    ka: {
        // Navigation
        'nav-home': 'მთავარი',
        'nav-categories': 'კატეგორიები',
        'nav-about': 'ჩვენ შესახებ',
        'javascript': 'ჯავასკრიპტი',
        
        // Hero Section
        'hero-title-1': 'დაეუფლეთ პროგრამირებას',
        'hero-title-2': 'ინტერაქტიული გაკვეთილებით',
        'hero-subtitle': 'ისწავლეთ JavaScript, TypeScript, React და სხვა ტექნოლოგიები პრაქტიკული, დამწყებთათვის მორგებული გაკვეთილებით, რომლებიც პროგრამირებას სახალისო და მარტივს ხდის.',
        'btn-start-learning': 'დაიწყეთ სწავლა ახლავე',
        'btn-learn-more': 'გაიგეთ მეტი',
        
        // Stats
        'stats-tutorials': 'გაკვეთილი',
        'stats-categories': 'კატეგორია',
        'stats-practice': 'პრაქტიკა',
        
        // Categories Section
        'categories-title': 'აირჩიეთ თქვენი გზა',
        'categories-subtitle': 'დაიწყეთ პროგრამირების მოგზაურობა ჩვენი ყურადღებით შექმნილი გაკვეთილებით. თითოეული კატეგორია შექმნილია იმისთვის, რომ დამწყებიდან პროფესიონალამდე მიგიყვანოთ.',
        
        // Category Cards
        'js-title': 'ჯავასკრიპტი',
        'js-desc': 'დაეუფლეთ ვებ-ტექნოლოგიების ენას. საფუძვლებიდან გაღრმავებულ კონცეფციებამდე.',
        'js-count': '12 გაკვეთილი',
        'ts-title': 'ტაიპსკრიპტი',
        'ts-desc': 'დაუმატეთ type safety თქვენს ჯავასკრიპტს. შექმენით უფრო სანდო აპლიკაციები.',
        'react-title': 'რეაქტი',
        'react-desc': 'შექმენით თანამედროვე user interface-ები ყველაზე პოპულარული ჯავასკრიპტ ბიბლიოთეკით.',
        'more-title': 'მეტი',
        'more-desc': 'PHP, Python, Laravel და მრავალი სხვა ენა მალე მოვა.',
        'coming-soon': 'მალე',
        
        // About Section
        'about-title': 'AndLearn-ის შესახებ',
        'about-desc': 'AndLearn შექმნილია იმისთვის, რომ პროგრამირება ხელმისაწვდომი და სახალისო გახადოს ყველასთვის. ჩვენი ინტერაქტიული გაკვეთილები რთულ კონცეფციებს ყოფს ადვილად გასაგებ, პრაქტიკულ გაკვეთილებად, რომლებიც გეხმარებათ ისწავლოთ საქმის კეთებით, არა მხოლოდ კითხვით.',
        'about-quote': 'პროგრამირების ყველაზე კარგი გზა არის პროგრამირების კეთება. AndLearn ამას შესაძლებელს ხდის ინტერაქტიული, დამწყებთათვის მორგებული გაკვეთილებით.',
        'about-author': 'შექმნილია ❤️-ით ლუკა ფარტენაძის მიერ',
        
        // Footer
        'footer-text': '© 2024 AndLearn. პროგრამირების განათლების ხელმისაწვდომობა ყველასთვის.',
        
        // JavaScript Page
        'js-interactive': 'ინტერაქტიული გაკვეთილები',
        'js-progress-text': 'გაკვეთილი ჯავასკრიპტის დასაუფლებლად საწყისებიდან გაღრმავებულ კონცეფციებამდე',
        'beginner': 'დამწყები',
        'intermediate': 'საშუალო',
        'advanced': 'გაღრმავებული',
        'variables-title': 'ცვლადები და მონაცემთა ტიპები',
        'variables-desc': 'ისწავლეთ საფუძვლები',
        'functions-title': 'ფუნქციები',
        'functions-desc': 'მეორადი გამოყენების კოდის ბლოკები',
        'controlflow-title': 'მართვის ნაკადი',
        'controlflow-desc': 'გადაწყვეტილებების მიღება',
        'arrays-title': 'მასივები და ობიექტები გაღრმავებულად',
        'arrays-desc': 'მონაცემთა სტრუქტურები',
        'advanced-functions-title': 'ფუნქციები + მასივები და ობიექტები',
        'advanced-functions-desc': 'კონცეფციების გაერთიანება',
        'advanced-arrays-title': 'მასივების გაღრმავებული მეთოდები',
        'advanced-arrays-desc': 'მასივების ძლიერი ხელსაწყოები',
        'typescript-title': 'ტაიპსკრიპტის შესავალი',
        'typescript-desc': 'Type-safe ჯავასკრიპტი',
        'dom-title': 'DOM მანიპულაცია',
        'dom-desc': 'ვებ გვერდთან ინტერაქცია',
        'events-title': 'Events და გაღრმავებული DOM',
        'events-desc': 'მომხმარებლის ინტერაქციები',
        'async-title': 'ასინქრონული ჯავასკრიპტი',
        'async-desc': 'არაბლოკირებადი კოდი',
        'api-title': 'API მოთხოვნები',
        'api-desc': 'მონაცემების მოტანა',
        'error-handling-title': 'შეცდომების მართვა',
        'error-handling-desc': 'შეცდომების მენეჯმენტი',
        'progress-title': 'პროგრესი',
        'progress-encouragement': 'გააგრძელეთ! შესანიშნავად გერთულებათ! 🎉'
    }
};

// Language Management
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = translations;
        this.init();
    }

    init() {
        this.setupLanguageSelector();
        this.updateLanguageDisplay();
        this.translatePage();
        console.log('Language Manager initialized with language:', this.currentLanguage);
    }

    setupLanguageSelector() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        const languageOptions = document.querySelectorAll('.language-option');

        console.log('Setting up language selector:', {
            languageBtn: !!languageBtn,
            languageDropdown: !!languageDropdown,
            languageOptions: languageOptions.length
        });

        if (languageBtn && languageDropdown) {
            // Toggle dropdown
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('Language button clicked');
                languageDropdown.classList.toggle('hidden');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                    languageDropdown.classList.add('hidden');
                }
            });

            // Handle language selection
            languageOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const lang = option.dataset.lang;
                    console.log('Language option clicked:', lang);
                    this.setLanguage(lang);
                    languageDropdown.classList.add('hidden');
                });
            });
        } else {
            console.error('Language selector elements not found');
        }
    }

    setLanguage(lang) {
        console.log('Setting language to:', lang);
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.updateLanguageDisplay();
        this.translatePage();
        this.showLanguageChangeMessage();
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
            console.log('Language display updated to:', this.currentLanguage);
        }
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
                element.textContent = this.translations[this.currentLanguage][key];
            }
        });
        console.log(`Translated ${elements.length} elements to ${this.currentLanguage}`);
    }

    showLanguageChangeMessage() {
        if (this.currentLanguage === 'ka') {
            this.showToast('ენა შეიცვალა ქართულად! 🇬🇪', 'Language changed to Georgian!');
        } else {
            this.showToast('Language changed to English! 🇺🇸', 'ენა შეიცვალა ინგლისურად!');
        }
    }

    showToast(message, subtitle) {
        // Create a toast notification
        const toast = document.createElement('div');
        toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-up';
        toast.innerHTML = `
            <div class="font-medium">${message}</div>
            <div class="text-sm opacity-90">${subtitle}</div>
        `;
        
        document.body.appendChild(toast);
        
        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.remove();
        }, 3000);
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