// Advanced AndLearn Platform with Fancy Effects
// Default to light theme for beginner-friendliness
const CURRENT_THEME = 'light';
const CURRENT_LANGUAGE = 'en';

// Global state
let isLoaded = false;
let particles = [];
let animationFrame;

// Translations
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-courses': 'Courses',
        'nav-about': 'About',
        
        // Hero Section
        'hero-title': 'Learn Programming the Fun Way',
        'hero-subtitle': 'Master JavaScript, React, TypeScript and more through interactive, hands-on tutorials designed to make coding easy and enjoyable.',
        'btn-start-learning': 'Start Learning Free',
        'btn-learn-more': 'Learn More',
        
        // Stats
        'stats-tutorials': 'Tutorials',
        'stats-free': 'Always',
        'stats-practice': 'Practice',
        
        // Courses Section
        'courses-title': 'Choose Your Learning Path',
        'courses-subtitle': 'Start with any course that interests you. Each one is designed to take you from beginner to confident programmer.',
        
        // Course Cards
        'js-title': 'JavaScript',
        'js-desc': 'Learn the language that powers the web. Start from basics to advanced concepts.',
        'js-count': '12 Lessons',
        
        'react-title': 'React',
        'react-desc': 'Build modern user interfaces with the most popular JavaScript library.',
        'react-count': '6 Lessons',
        
        'ts-title': 'TypeScript',
        'ts-desc': 'Add type safety to JavaScript for more robust applications.',
        
        'more-title': 'More Languages',
        'more-desc': 'Python, PHP, Laravel and many more coming soon.',
        
        'coming-soon': 'Coming Soon',
        
        // About Section
        'about-title': 'Why Choose AndLearn?',
        'about-desc': 'AndLearn makes programming accessible and fun for everyone. Our interactive tutorials break down complex concepts into simple, hands-on lessons that help you learn by doing.',
        
        'feature-1-title': 'Interactive Learning',
        'feature-1-desc': 'Learn by writing real code, not just watching videos.',
        
        'feature-2-title': 'Beginner Friendly',
        'feature-2-desc': 'Start from zero and become a confident programmer.',
        
        'feature-3-title': 'Always Free',
        'feature-3-desc': 'Quality education should be accessible to everyone.',
        
        'about-quote': '"The best way to learn programming is by actually programming. AndLearn makes this possible with interactive, beginner-friendly tutorials."',
        'about-author': 'Created with ❤️ by Luka Partenadze',
        
        // Footer
        'footer-text': '© 2024 AndLearn. Making programming education accessible and fun for everyone.',
        
        // Modal
        'modal-coming-soon': 'Coming Soon!',
        'modal-description': 'This course is currently under development. Sign up to be notified when it becomes available.',
        'modal-close': 'Close'
    },
    ka: {
        // Navigation
        'nav-home': 'მთავარი',
        'nav-courses': 'კურსები',
        'nav-about': 'ჩვენ შესახებ',
        
        // Hero Section
        'hero-title': 'ისწავლე პროგრამირება სახალისოდ',
        'hero-subtitle': 'დაეუფლე JavaScript-ს, React-ს, TypeScript-ს და სხვას ინტერაქტიული გაკვეთილების მეშვეობით, რომლებიც კოდირებას მარტივს და სახალისოს ხდის.',
        'btn-start-learning': 'დაიწყე სწავლა უფასოდ',
        'btn-learn-more': 'გაიგე მეტი',
        
        // Stats
        'stats-tutorials': 'გაკვეთილი',
        'stats-free': 'ყოველთვის',
        'stats-practice': 'პრაქტიკა',
        
        // Courses Section
        'courses-title': 'აირჩიე შენი სასწავლო მიმართულება',
        'courses-subtitle': 'დაიწყე ნებისმიერი კურსით, რომელიც გაინტერესებს. თითოეული შექმნილია იმისთვის, რომ დამწყებიდან თავდაჯერებულ პროგრამისტად გახადოს.',
        
        // Course Cards
        'js-title': 'JavaScript',
        'js-desc': 'ისწავლე ენა, რომელიც ვებს ამოძრავებს. დაიწყე საფუძვლებიდან მოწინავე კონცეფციებამდე.',
        'js-count': '12 გაკვეთილი',
        
        'react-title': 'React',
        'react-desc': 'შექმენი თანამედროვე მომხმარებლის ინტერფეისები ყველაზე პოპულარული JavaScript ბიბლიოთეკით.',
        'react-count': '6 გაკვეთილი',
        
        'ts-title': 'TypeScript',
        'ts-desc': 'დაამატე ტიპების უსაფრთხოება JavaScript-ს უფრო სანდო აპლიკაციებისთვის.',
        
        'more-title': 'მეტი ენები',
        'more-desc': 'Python, PHP, Laravel და სხვა მალე იქნება ხელმისაწვდომი.',
        
        'coming-soon': 'მალე',
        
        // About Section
        'about-title': 'რატომ აირჩიო AndLearn?',
        'about-desc': 'AndLearn პროგრამირებას ყველასთვის ხელმისაწვდომს და სახალისოს ხდის. ჩვენი ინტერაქტიული გაკვეთილები რთულ კონცეფციებს მარტივ, პრაქტიკულ გაკვეთილებად ყოფს.',
        
        'feature-1-title': 'ინტერაქტიული სწავლება',
        'feature-1-desc': 'ისწავლე რეალური კოდის წერით, არა მხოლოდ ვიდეოების ყურებით.',
        
        'feature-2-title': 'დამწყებთათვის მოსახერხებელი',
        'feature-2-desc': 'დაიწყე ნულიდან და გახდი თავდაჯერებული პროგრამისტი.',
        
        'feature-3-title': 'ყოველთვის უფასო',
        'feature-3-desc': 'ხარისხიანი განათლება ყველასთვის ხელმისაწვდომი უნდა იყოს.',
        
        'about-quote': '"პროგრამირების სწავლის საუკეთესო გზა არის რეალური პროგრამირება. AndLearn ამას შესაძლებელს ხდის ინტერაქტიული, დამწყებთათვის მოსახერხებელი გაკვეთილებით."',
        'about-author': 'შექმნილია ❤️-ით ლუკა ფარტენაძის მიერ',
        
        // Footer
        'footer-text': '© 2024 AndLearn. პროგრამირების განათლების ხელმისაწვდომობა და სახალისო ყველასთვის.',
        
        // Modal
        'modal-coming-soon': 'მალე იქნება!',
        'modal-description': 'ეს კურსი ამჟამად მუშავდება. დარეგისტრირდი, რომ მიიღო შეტყობინება, როდესაც ხელმისაწვდომი გახდება.',
        'modal-close': 'დახურვა'
    }
};

// ====================
// LOADING SCREEN
// ====================
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const matrixBg = document.getElementById('matrixBg');
    
    // Create matrix rain effect
    createMatrixRain(matrixBg);
    
    // Simulate realistic loading time with steps
    setTimeout(() => {
        loadingScreen.classList.add('loading-hidden');
        isLoaded = true;
        
        // Start animations after loading
        setTimeout(() => {
            initializeAnimations();
            loadingScreen.remove();
        }, 800);
    }, 3500); // Increased to show the cool terminal effect
}

function createMatrixRain(container) {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * 20 + 'px';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        // Add random characters
        let text = '';
        for (let j = 0; j < Math.floor(Math.random() * 20 + 10); j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        container.appendChild(column);
    }
}

// ====================
// PARTICLE SYSTEM
// ====================
class Particle {
    constructor(container) {
        this.container = container;
        this.reset();
        this.element = this.createElement();
    }
    
    reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = window.innerHeight + 50;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = -(Math.random() * 3 + 2);
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.005;
        this.size = Math.random() * 4 + 2;
    }
    
    createElement() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            left: ${this.x}px;
            top: ${this.y}px;
            width: ${this.size}px;
            height: ${this.size}px;
            opacity: ${this.life};
        `;
        this.container.appendChild(particle);
        return particle;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.element.style.opacity = this.life;
        
        // Reset if particle is dead or off screen
        if (this.life <= 0 || this.y < -50) {
            this.reset();
            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px';
            this.element.style.opacity = this.life;
        }
    }
}

function initializeParticles() {
    const particleContainer = document.getElementById('particles');
    if (!particleContainer) return;
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(particleContainer));
    }
    
    function animateParticles() {
        particles.forEach(particle => particle.update());
        animationFrame = requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// ====================
// SCROLL EFFECTS
// ====================
function initializeScrollEffects() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    function updateScrollIndicator() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (scrollIndicator) {
            scrollIndicator.style.width = scrollPercent + '%';
        }
    }
    
    // Parallax effect for background elements (temporarily disabled)
    function updateParallax() {
        // Temporarily disabled to prevent animation conflicts
        // const scrolled = window.pageYOffset;
        // const shapes = document.querySelectorAll('.shape');
        // shapes.forEach((shape, index) => {
        //     const speed = 0.5 + (index * 0.1);
        //     shape.style.transform = `translateY(${scrolled * speed}px)`;
        // });
    }
    
    window.addEventListener('scroll', () => {
        updateScrollIndicator();
        updateParallax();
    });
}

// ====================
// INTERSECTION OBSERVER ANIMATIONS
// ====================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Staggered animations disabled
                // if (entry.target.classList.contains('course-card')) {
                //     const cards = document.querySelectorAll('.course-card');
                //     cards.forEach((card, index) => {
                //         setTimeout(() => {
                //             card.style.opacity = '1';
                //             card.style.transform = 'translateY(0)';
                //         }, index * 100);
                //     });
                // }
            }
        });
    }, observerOptions);
    
    // Observe elements - animations disabled
    const elementsToAnimate = document.querySelectorAll('.course-card, .feature-card, section h2, section p');
    elementsToAnimate.forEach(el => {
        // No animations - just show elements normally
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}

// ====================
// ENHANCED MOUSE INTERACTIONS
// ====================
function initializeMouseEffects() {
    // Add mouse trail effect
    let mouseTrail = [];
    
    document.addEventListener('mousemove', (e) => {
        mouseTrail.push({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });
        
        // Keep only recent trail points
        mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 500);
        
        // Temporarily disabled mouse trail particles to prevent conflicts
        // if (Math.random() < 0.03) {
        //     createMouseParticle(e.clientX, e.clientY);
        // }
    });
    
    function createMouseParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            opacity: 0.8;
            transition: all 0.5s ease-out;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.transform = 'scale(0) translateY(-20px)';
            particle.style.opacity = '0';
        }, 50);
        
        setTimeout(() => {
            particle.remove();
        }, 600);
    }
}

// ====================
// THEME MANAGEMENT
// ====================
function initializeTheme() {
    const savedTheme = localStorage.getItem('andlearn-theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    updateThemeIcons(savedTheme);
}

function updateThemeIcons(theme) {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    
    if (theme === 'dark') {
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
    } else {
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
    }
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';
            
            // Add transition effect
            document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            
            if (newTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            
            localStorage.setItem('andlearn-theme', newTheme);
            updateThemeIcons(newTheme);
            
            // Show fancy notification
            showAdvancedNotification(`Switched to ${newTheme} theme`, newTheme === 'dark' ? '🌙' : '☀️');
            
            // Remove transition after animation
            setTimeout(() => {
                document.documentElement.style.transition = '';
            }, 300);
        });
    }
}

// ====================
// LANGUAGE MANAGEMENT
// ====================
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('andlearn-language') || 'en';
    updateLanguage(savedLanguage);
}

function updateLanguage(lang) {
    const langData = translations[lang] || translations.en;
    
    // Update all translatable elements with animation
    document.querySelectorAll('[data-translate]').forEach((element, index) => {
        const key = element.getAttribute('data-translate');
        if (langData[key]) {
            setTimeout(() => {
                element.style.transform = 'translateY(-10px)';
                element.style.opacity = '0.5';
                
                setTimeout(() => {
                    element.textContent = langData[key];
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }, 150);
            }, index * 50);
        }
    });
    
    // Update language display
    const currentFlag = document.getElementById('currentFlag');
    const currentLang = document.getElementById('currentLang');
    
    if (currentFlag && currentLang) {
        if (lang === 'ka') {
            currentFlag.textContent = '🇬🇪';
            currentLang.textContent = 'KA';
        } else {
            currentFlag.textContent = '🇺🇸';
            currentLang.textContent = 'EN';
        }
    }
    
    localStorage.setItem('andlearn-language', lang);
}

function setupLanguageToggle() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (languageBtn && languageDropdown) {
        // Toggle dropdown with animation
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            if (languageDropdown.classList.contains('hidden')) {
                languageDropdown.classList.remove('hidden');
                languageDropdown.style.opacity = '0';
                languageDropdown.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    languageDropdown.style.opacity = '1';
                    languageDropdown.style.transform = 'translateY(0)';
                }, 10);
            } else {
                languageDropdown.style.opacity = '0';
                languageDropdown.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    languageDropdown.classList.add('hidden');
                }, 200);
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            languageDropdown.style.opacity = '0';
            languageDropdown.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                languageDropdown.classList.add('hidden');
            }, 200);
        });
        
        // Handle language selection
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = option.getAttribute('data-lang');
                updateLanguage(selectedLang);
                
                languageDropdown.style.opacity = '0';
                setTimeout(() => {
                    languageDropdown.classList.add('hidden');
                }, 200);
                
                const langName = selectedLang === 'ka' ? 'ქართული' : 'English';
                showAdvancedNotification(`Language changed to ${langName}`, selectedLang === 'ka' ? '🇬🇪' : '🇺🇸');
            });
        });
    }
}

// ====================
// SMOOTH SCROLLING
// ====================
function scrollToCourses() {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
        coursesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Bounce effect disabled
        // setTimeout(() => {
        //     const courseCards = document.querySelectorAll('.course-card');
        //     courseCards.forEach((card, index) => {
        //         setTimeout(() => {
        //             card.style.animation = 'bounce 0.6s ease';
        //         }, index * 100);
        //     });
        // }, 500);
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

// ====================
// COURSE NAVIGATION
// ====================
function setupCourseNavigation() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        // Hover animations disabled
        // card.addEventListener('mouseenter', () => {
        //     card.style.animation = 'pulse 0.3s ease';
        // });
        
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            // Click animations disabled - direct navigation
            if (category === 'javascript') {
                showPageTransition(() => {
                    window.location.href = 'javascript.html';
                });
            } else if (category === 'react') {
                showPageTransition(() => {
                    window.location.href = 'react.html';
                });
            } else {
                showAdvancedComingSoonModal(category);
            }
        });
    });
}

// ====================
// ADVANCED MODALS
// ====================
function showAdvancedComingSoonModal(category) {
    const modal = createAdvancedModal();
    document.body.appendChild(modal);
    
    // Animate in with advanced effects
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        
        const content = modal.querySelector('.modal-content');
        content.style.transform = 'scale(1) rotateY(0deg)';
    }, 10);
}

function createAdvancedModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 opacity-0 transition-all duration-500';
    
    const currentLang = localStorage.getItem('andlearn-language') || 'en';
    const langData = translations[currentLang];
    
    modal.innerHTML = `
        <div class="modal-content glass dark:glass-dark rounded-2xl p-8 max-w-md mx-4 transform scale-0 rotateY-180 transition-all duration-500" style="transform: scale(0) rotateY(180deg);">
            <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-primary-500 via-purple-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin" style="animation-duration: 2s;">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-gradient">${langData['modal-coming-soon']}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">${langData['modal-description']}</p>
                <button onclick="this.closest('.fixed').remove()" class="fancy-button text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105">
                    ${langData['modal-close']}
                </button>
            </div>
        </div>
    `;
    
    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    return modal;
}

// ====================
// PAGE TRANSITIONS
// ====================
function showPageTransition(callback) {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-gradient-to-br from-primary-600 to-purple-600 z-50 flex items-center justify-center';
    overlay.style.transform = 'translateX(-100%)';
    overlay.innerHTML = `
        <div class="text-center text-white">
            <div class="loader mb-4"></div>
            <div class="text-2xl font-bold">Loading...</div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.style.transform = 'translateX(0)';
        overlay.style.transition = 'transform 0.5s ease-in-out';
    }, 10);
    
    setTimeout(() => {
        callback();
    }, 600);
}

// ====================
// ADVANCED NOTIFICATIONS
// ====================
function showAdvancedNotification(message, icon = '✨') {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 glass dark:glass-dark text-gray-900 dark:text-white px-6 py-4 rounded-xl shadow-2xl z-50 transform translate-x-full transition-all duration-500';
    
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <span class="text-2xl animate-bounce">${icon}</span>
            <span class="font-medium">${message}</span>
            <div class="w-1 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Slide in with bounce
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
        notification.style.transform = 'translateX(0) scale(1.05)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 200);
    
    // Slide out
    setTimeout(() => {
        notification.style.transform = 'translateX(100%) scale(0.9)';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// ====================
// ANIMATIONS INITIALIZATION
// ====================
function initializeAnimations() {
    // Add CSS animations class
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
            40%, 43% { transform: translate3d(0,-20px,0); }
            70% { transform: translate3d(0,-10px,0); }
            90% { transform: translate3d(0,-4px,0); }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize all effect systems
    initializeParticles();
    initializeScrollEffects();
    initializeScrollAnimations();
    initializeMouseEffects();
}

// ====================
// MAIN INITIALIZATION
// ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚀 AndLearn Advanced Platform Loading...', 'color: #3b82f6; font-size: 18px; font-weight: bold;');
    console.log('%c✨ Initializing fancy effects and animations!', 'color: #22c55e; font-size: 14px;');
    
    // Start loading screen
    initializeLoadingScreen();
    
    // Initialize core functionality
    initializeTheme();
    initializeLanguage();
    setupThemeToggle();
    setupLanguageToggle();
    setupCourseNavigation();
    
    // Make global functions available
    window.scrollToCourses = scrollToCourses;
    window.scrollToAbout = scrollToAbout;
    
    console.log('%c💫 Advanced features activated!', 'color: #8b5cf6; font-size: 14px;');
    console.log('%c🎨 Enjoy the enhanced experience!', 'color: #f59e0b; font-size: 14px;');
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
}); 