// Application State
let currentLanguage = 'en';

// Translation Service
class TranslationService {
    constructor() {
        this.cache = new Map();
        this.preTranslated = new Map();
        this.initializePreTranslations();
    }

    initializePreTranslations() {
        // Pre-translated common terms for instant loading
        const translations = {
            'Variables': 'ცვლადები',
            'Functions': 'ფუნქციები',
            'Control Flow': 'მართვის ნაკადი',
            'Arrays & Objects': 'მასივები და ობიექტები',
            'Advanced Functions': 'პროგრესული ფუნქციები',
            'Advanced Arrays': 'პროგრესული მასივები',
            'TypeScript Basics': 'TypeScript-ის საფუძვლები',
            'DOM Manipulation': 'DOM მანიპულირება',
            'Events & Advanced DOM': 'მოვლენები და პროგრესული DOM',
            'Async JavaScript': 'ასინქრონული JavaScript',
            
            // Common words
            'Practice Task': 'პრაქტიკული ამოცანა',
            'Try it Yourself': 'სცადეთ თავად',
            'Output': 'შედეგი',
            'Run Code': 'კოდის გაშვება',
            'Reset': 'დაბრუნება',
            'Copy': 'კოპირება',
            'Clear': 'გასუფთავება',
            'Previous': 'წინა',
            'Next': 'შემდეგი',
            'Your Task:': 'თქვენი ამოცანა:',
            
            // Tutorial descriptions
            'Learn the fundamentals of JavaScript variables, data types, and basic syntax.': 'შეისწავლეთ JavaScript ცვლადების, მონაცემთა ტიპებისა და ძირითადი სინტაქსის საფუძვლები.',
            'Functions are like magical recipes - give them ingredients (inputs) and they create something new!': 'ფუნქციები არის როგორც მაგიური რეცეპტები - მისცეთ ინგრედიენტები (შეყვანა) და ისინი ახალ რამეს შექმნიან!',
            'Learn to make your code smart! Teach it to make decisions and repeat tasks automatically.': 'ისწავლეთ თქვენი კოდის გონიერად გაკეთება! ასწავლეთ გადაწყვეტილებების მიღება და ამოცანების ავტომატურად გამეორება.',
            'Learn to organize and work with collections of data - like digital filing cabinets!': 'ისწავლეთ მონაცემების კოლექციების ორგანიზება და მუშაობა - როგორც ციფრული საქაღალდე კარადები!',
            'Now you\'re ready for the ultimate combo - functions working with arrays and objects like a pro!': 'ახლა მზად ხართ საბოლოო კომბინაციისთვის - ფუნქციები მუშაობენ მასივებთან და ობიექტებთან როგორც პროფესიონალები!',
            'Master powerful array methods like map, filter, and reduce - your data manipulation superpowers!': 'დაეუფლეთ მასივის ძლიერ მეთოდებს როგორიცაა map, filter და reduce - თქვენი მონაცემების მანიპულირების ზეძალები!',
            'Learn TypeScript - JavaScript with superpowers! Add types to catch errors before they happen.': 'შეისწავლეთ TypeScript - JavaScript ზეძალებით! დაამატეთ ტიპები შეცდომების დაჭერისთვის მანამ სანამ ისინი მოხდება.',
            'Learn to control web pages! Make your websites interactive by changing content, styles, and responding to user actions.': 'ისწავლეთ ვებ გვერდების კონტროლი! გახადეთ თქვენი ვებსაიტები ინტერაქტიული კონტენტის, სტილებისა და მომხმარებლის მოქმედებებზე რეაგირებით.',
            'Master advanced DOM techniques! Create, modify, and remove elements dynamically for truly interactive experiences.': 'დაეუფლეთ DOM-ის პროგრესულ ტექნიკებს! შექმენით, შეცვალეთ და ამოიღეთ ელემენტები დინამიურად ნამდვილად ინტერაქტიული გამოცდილებისთვის.',
            'Master asynchronous programming! Handle API calls, promises, and async operations like a pro.': 'დაეუფლეთ ასინქრონულ პროგრამირებას! მართეთ API გამოძახებები, პრომისები და ასინქრონული ოპერაციები როგორც პროფესიონალი.'
        };

        Object.entries(translations).forEach(([en, ka]) => {
            this.preTranslated.set(`${en}_en_ka`, ka);
        });
    }

    async translate(text, fromLang = 'en', toLang = 'ka') {
        // Create cache key
        const cacheKey = `${text}_${fromLang}_${toLang}`;
        
        // Check pre-translated first (instant)
        if (this.preTranslated.has(cacheKey)) {
            return this.preTranslated.get(cacheKey);
        }
        
        // Check cache
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // For short text, try LibreTranslate (faster than MyMemory)
        if (text.length < 500) {
            try {
                const response = await fetch('https://libretranslate.de/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        q: text,
                        source: fromLang,
                        target: toLang,
                        format: 'text'
                    })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    const translation = data.translatedText;
                    this.cache.set(cacheKey, translation);
                    return translation;
                }
            } catch (error) {
                console.warn('LibreTranslate failed, trying fallback');
            }
        }

        // Fallback to MyMemory for longer text
        try {
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`
            );
            const data = await response.json();
            
            if (data.responseStatus === 200) {
                const translation = data.responseData.translatedText;
                this.cache.set(cacheKey, translation);
                return translation;
            }
        } catch (error) {
            console.warn('Translation API error, using original text:', error);
        }
        
        // If all fails, return original text
        return text;
    }

    async translateBatch(texts, fromLang = 'en', toLang = 'ka') {
        // Translate multiple texts efficiently
        const results = await Promise.allSettled(
            texts.map(text => this.translate(text, fromLang, toLang))
        );
        
        return results.map((result, index) => 
            result.status === 'fulfilled' ? result.value : texts[index]
        );
    }
}

const translationService = new TranslationService();

// Tutorial Data Structure with multiple languages
const tutorials = {
    variables: {
        title: {
            en: "Variables in JavaScript",
            ka: "ცვლადები JavaScript-ში"
        },
        description: {
            en: "Let's learn about variables - think of them as boxes where you can store different things!",
            ka: "ვისწავლოთ ცვლადები - წარმოიდგინეთ ისინი, როგორც ყუთები, სადაც შეგიძლიათ შეინახოთ სხვადასხვა ნივთები!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "📦 What are Variables?",
                        ka: "📦 რა არის ცვლადები?"
                    },
                    content: {
                        en: `
                            <h3>Variables are like labeled boxes that store information</h3>
                            <p>Imagine you have boxes in your room. Each box has a label and stores something different. Variables work the same way!</p>
                            <p>In JavaScript, we create variables using these keywords:</p>
                            <ul>
                                <li><strong>let</strong> - for things that might change (like your age)</li>
                                <li><strong>const</strong> - for things that stay the same (like your name)</li>
                                <li><strong>var</strong> - old way (we don't use this anymore)</li>
                            </ul>
                            <p>💡 <em>Think of 'let' as a box you can put new things in, and 'const' as a box that's sealed shut!</em></p>
                        `,
                        ka: `
                            <h3>ცვლადები არის ეტიკეტირებული ყუთები, რომლებიც ინახავენ ინფორმაციას</h3>
                            <p>წარმოიდგინეთ, რომ თქვენს ოთახში გაქვთ ყუთები. ყოველ ყუთს აქვს ეტიკეტი და ინახავს რაღაც განსხვავებულს. ცვლადები იგივენაირად მუშაობენ!</p>
                            <p>JavaScript-ში ცვლადებს ვქმნით ამ საკვანძო სიტყვებით:</p>
                            <ul>
                                <li><strong>let</strong> - რამისთვისაც, რაც შეიძლება შეიცვალოს (როგორც თქვენი ასაკი)</li>
                                <li><strong>const</strong> - რამისთვისაც, რაც იგივე რჩება (როგორც თქვენი სახელი)</li>
                                <li><strong>var</strong> - ძველი გზა (ამას ახლა აღარ ვიყენებთ)</li>
                            </ul>
                            <p>💡 <em>წარმოიდგინეთ 'let' როგორც ყუთი, რომელშიც ახალი ნივთების ჩადება შეგიძლიათ, ხოლო 'const' როგორც ყუთი, რომელიც დალუქულია!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎭 Different Types of Data",
                        ka: "🎭 მონაცემების სხვადასხვა ტიპები"
                    },
                    content: {
                        en: `
                            <h3>JavaScript can store different types of information:</h3>
                            <ul>
                                <li><strong>Text (String)</strong> - Words and sentences: <code>"Hello World"</code></li>
                                <li><strong>Numbers</strong> - Any number: <code>42</code>, <code>3.14</code>, <code>-5</code></li>
                                <li><strong>True/False (Boolean)</strong> - Yes or no answers: <code>true</code>, <code>false</code></li>
                                <li><strong>Lists (Array)</strong> - Multiple items: <code>["apple", "banana", "orange"]</code></li>
                                <li><strong>Objects</strong> - Complex information: <code>{name: "Luka", age: 20}</code></li>
                            </ul>
                            <p>🤔 <em>Think of it like different types of containers - some hold text, some hold numbers, some hold lists of things!</em></p>
                        `,
                        ka: `
                            <h3>JavaScript-ს შეუძლია შეინახოს ინფორმაციის სხვადასხვა ტიპები:</h3>
                            <ul>
                                <li><strong>ტექსტი (String)</strong> - სიტყვები და წინადადებები: <code>"გამარჯობა მსოფლიო"</code></li>
                                <li><strong>რიცხვები</strong> - ნებისმიერი რიცხვი: <code>42</code>, <code>3.14</code>, <code>-5</code></li>
                                <li><strong>მართალი/ცრუ (Boolean)</strong> - კი ან არა პასუხები: <code>true</code>, <code>false</code></li>
                                <li><strong>სიები (Array)</strong> - მრავალი ელემენტი: <code>["ვაშლი", "ბანანი", "ნარინჯი"]</code></li>
                                <li><strong>ობიექტები</strong> - რთული ინფორმაცია: <code>{name: "ლუკა", age: 20}</code></li>
                            </ul>
                            <p>🤔 <em>წარმოიდგინეთ, როგორც კონტეინერების სხვადასხვა ტიპები - ზოგი ინახავს ტექსტს, ზოგი რიცხვებს, ზოგი ნივთების სიებს!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🚀 Let's Try It!",
                        ka: "🚀 ვცადოთ!"
                    },
                    content: {
                        en: `
                            <h3>Here's a simple example to get you started:</h3>
                            <pre><code class="language-javascript">// Let's create some variables!
let myName = "Luka";
let myAge = 20;
let isCool = true;

let favoriteColors = ["blue", "green", "red"];
let aboutMe = {
    name: myName,
    age: myAge,
    hobbies: ["coding", "football", "gaming"]
};

console.log("Hello! My name is " + myName);
console.log("I am " + myAge + " years old");
console.log("Here's more about me:", aboutMe);</code></pre>
                            <p>✨ <em>Copy this code below and click "Run Code" to see what happens!</em></p>
                        `,
                        ka: `
                            <h3>აჰა, მარტივი მაგალითი დასაწყებად:</h3>
                            <pre><code class="language-javascript">// შევქმნათ რამდენიმე ცვლადი!
let myName = "ლუკა";
let myAge = 20;
let isCool = true;

let favoriteColors = ["ლურჯი", "მწვანე", "წითელი"];
let aboutMe = {
    name: myName,
    age: myAge,
    hobbies: ["კოდირება", "ფეხბურთი", "გეიმინგი"]
};

console.log("გამარჯობა! მე მქვია " + myName);
console.log("მე ვარ " + myAge + " წლის");
console.log("აქ არის მეტი ჩემ შესახებ:", aboutMe);</code></pre>
                            <p>✨ <em>დააკოპირეთ ეს კოდი ქვემოთ და დააჭირეთ "კოდის გაშვება"-ს, რომ ნახოთ რა მოხდება!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Your Turn to Experiment!",
                ka: "თქვენი რიგია ექსპერიმენტისთვის!"
            },
            description: {
                en: "Now it's time to create your own variables! Don't worry about making mistakes - that's how we learn!",
                ka: "ახლა დროა შექმნათ თქვენი საკუთარი ცვლადები! არ ღელავდეთ შეცდომების გამო - ასე ვსწავლობთ!"
            },
            task: {
                en: "1. Create a variable with your actual name\n2. Create a variable with your age (or any number you like)\n3. Make an array with things you enjoy doing\n4. Create an object that describes you\n5. Try displaying your information with console.log()",
                ka: "1. შექმენით ცვლადი თქვენი რეალური სახელით\n2. შექმენით ცვლადი თქვენი ასაკით (ან ნებისმიერი რიცხვი)\n3. გააკეთეთ მასივი იმ ნივთებით, რაც გიყვართ\n4. შექმენით ობიექტი, რომელიც თქვენს აღწერს\n5. სცადეთ თქვენი ინფორმაციის ჩვენება console.log()-ით"
            }
        }
    },
    
    functions: {
        title: {
            en: "Functions in JavaScript",
            ka: "ფუნქციები JavaScript-ში"
        },
        description: {
            en: "Functions are like magical recipes - give them ingredients (inputs) and they create something new!",
            ka: "ფუნქციები არის როგორც მაგიური რეცეპტები - მისცეთ ინგრედიენტები (შეყვანა) და ისინი ახალ რამეს შექმნიან!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🎪 What are Functions?",
                        ka: "🎪 რა არის ფუნქციები?"
                    },
                    content: {
                        en: `
                            <h3>Functions are like helpful assistants that do tasks for you!</h3>
                            <p>Imagine you have a friend who's really good at math. Instead of doing calculations yourself, you ask your friend. Functions work the same way!</p>
                            <p>Functions help you:</p>
                            <ul>
                                <li>🔄 Do the same task many times without rewriting code</li>
                                <li>🧩 Break big problems into smaller, easier pieces</li>
                                <li>📚 Keep your code neat and organized</li>
                                <li>🎯 Focus on what you want to achieve, not how to do it</li>
                            </ul>
                            <p>💭 <em>Think of functions as your personal helpers - each one knows how to do one thing really well!</em></p>
                        `,
                        ka: `
                            <h3>ფუნქციები არის როგორც დამხმარე ასისტენტები, რომლებიც გიკეთებენ საქმეებს!</h3>
                            <p>წარმოიდგინეთ, რომ გაქვთ მეგობარი, რომელიც ძალიან კარგად არის მათემატიკაში. კალკულაციების გაკეთების ნაცვლად, თქვენ მეგობარს ეკითხებით. ფუნქციები იგივენაირად მუშაობენ!</p>
                            <p>ფუნქციები გეხმარებათ:</p>
                            <ul>
                                <li>🔄 იგივე ამოცანის მრავალჯერ გაკეთება კოდის ახლიდან დაწერის გარეშე</li>
                                <li>🧩 დიდი პრობლემების პატარა, მარტივ ნაწილებად დაყოფა</li>
                                <li>📚 თქვენი კოდის სუფთად და ორგანიზებულად შენახვა</li>
                                <li>🎯 იმაზე ფოკუსირება, რისი მიღწევაც გინდათ, არა როგორ გააკეთოთ</li>
                            </ul>
                            <p>💭 <em>წარმოიდგინეთ ფუნქციები როგორც თქვენი პირადი დამხმარეები - ყოველმა იცის როგორ გააკეთოს ერთი რამ ძალიან კარგად!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "✏️ How to Create Functions",
                        ka: "✏️ როგორ შევქმნათ ფუნქციები"
                    },
                    content: {
                        en: `
                            <h3>There are two easy ways to create functions:</h3>
                            <h4>📋 Regular Function (like writing a recipe):</h4>
                            <pre><code class="language-javascript">function sayHello(name) {
    return "Hi there, " + name + "! 👋";
}</code></pre>
                            <h4>⚡ Arrow Function (shorter way):</h4>
                            <pre><code class="language-javascript">const sayHello = (name) => "Hi there, " + name + "! 👋";</code></pre>
                            <p>Both do exactly the same thing! Arrow functions are just a shorter way to write them.</p>
                            <p>🔍 <em>The part in parentheses () is what you give to the function, and 'return' is what it gives back to you!</em></p>
                        `,
                        ka: `
                            <h3>ფუნქციების შექმნის ორი მარტივი გზა არსებობს:</h3>
                            <h4>📋 ჩვეულებრივი ფუნქცია (როგორც რეცეპტის დაწერა):</h4>
                            <pre><code class="language-javascript">function sayHello(name) {
    return "გამარჯობა, " + name + "! 👋";
}</code></pre>
                            <h4>⚡ ისრის ფუნქცია (მოკლე გზა):</h4>
                            <pre><code class="language-javascript">const sayHello = (name) => "გამარჯობა, " + name + "! 👋";</code></pre>
                            <p>ორივე ზუსტად იგივეს აკეთებს! ისრის ფუნქციები უბრალოდ მოკლე გზაა მათი დასაწერად.</p>
                            <p>🔍 <em>ნაწილი ფრჩხილებში () არის ის, რასაც ფუნქციას აძლევთ, ხოლო 'return' არის ის, რასაც ის უბრუნებს!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎮 Let's Play with Functions!",
                        ka: "🎮 ვითამაშოთ ფუნქციებით!"
                    },
                    content: {
                        en: `
                            <h3>Here are some fun and useful functions:</h3>
                            <pre><code class="language-javascript">// A function that greets people
function greetPerson(name) {
    return "Hello " + name + "! Nice to meet you! 😊";
}

// A function that doubles any number
const doubleNumber = (num) => num * 2;

// A function that checks if someone can vote
const canVote = (age) => age >= 18 ? "Yes, you can vote! 🗳️" : "Not yet, but soon! ⏰";

// A function that creates a fun fact
function createFunFact(name, hobby) {
    return name + " loves " + hobby + "! How cool is that? 🌟";
}

// Let's use them!
console.log(greetPerson("Luka"));
console.log("5 doubled is:", doubleNumber(5));
console.log(canVote(20));
console.log(createFunFact("Luka", "coding"));</code></pre>
                            <p>🎯 <em>Try copying this code and running it! Then try changing the names and numbers to see what happens!</em></p>
                        `,
                        ka: `
                            <h3>აჰა, რამდენიმე სახალისო და სასარგებლო ფუნქცია:</h3>
                            <pre><code class="language-javascript">// ფუნქცია, რომელიც ხალხს ესალმება
function greetPerson(name) {
    return "გამარჯობა " + name + "! სასიამოვნოა შეხვედრა! 😊";
}

// ფუნქცია, რომელიც ნებისმიერ რიცხვს ორმაგ აკეთებს
const doubleNumber = (num) => num * 2;

// ფუნქცია, რომელიც ამოწმებს შეუძლია თუ არა ვინმეს ხმის მიცემა
const canVote = (age) => age >= 18 ? "კი, შეგიძლია ხმა მისცე! 🗳️" : "ჯერ არა, მაგრამ მალე! ⏰";

// ფუნქცია, რომელიც საინტერესო ფაქტს ქმნის
function createFunFact(name, hobby) {
    return name + "-ს უყვარს " + hobby + "! რა მაგარია ეს! 🌟";
}

// ვიყენებთ მათ!
console.log(greetPerson("ლუკა"));
console.log("5-ის გადაორმაგება:", doubleNumber(5));
console.log(canVote(20));
console.log(createFunFact("ლუკა", "კოდირება"));</code></pre>
                            <p>🎯 <em>სცადეთ ამ კოდის კოპირება და გაშვება! შემდეგ სცადეთ სახელებისა და რიცხვების შეცვლა, რომ ნახოთ რა მოხდება!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Your Own Functions!",
                ka: "ააგეთ თქვენი საკუთარი ფუნქციები!"
            },
            description: {
                en: "Time to create your own helpful functions! Remember, there's no wrong way - just have fun with it!",
                ka: "დროა შექმნათ თქვენი საკუთარი დამხმარე ფუნქციები! გახსოვდეთ, არასწორი გზა არ არსებობს - უბრალოდ ისიამოვნეთ!"
            },
            task: {
                en: "1. Create a function that adds two numbers together\n2. Make a function that tells you if a number is big (over 100) or small\n3. Create a function that makes a sentence with your name and favorite food\n4. Try making a function that calculates someone's birth year from their age\n5. Experiment! What other helpful functions can you think of?",
                ka: "1. შექმენით ფუნქცია, რომელიც ორ რიცხვს შეკრებს\n2. გააკეთეთ ფუნქცია, რომელიც იტყვის დიდია თუ პატარა რიცხვი (100-ზე მეტი)\n3. შექმენით ფუნქცია, რომელიც წინადადებას აკეთებს თქვენი სახელით და საყვარელი საკვებით\n4. სცადეთ ფუნქციის გაკეთება, რომელიც ვინმეს დაბადების წელს გამოთვლის ასაკიდან\n5. ექსპერიმენტი! რა სხვა დამხმარე ფუნქციები მოგიფიქრდებათ?"
            }
        }
    },

    controlflow: {
        title: {
            en: "Control Flow",
            ka: "მართვის ნაკადი"
        },
        description: {
            en: "Learn to make your code smart! Teach it to make decisions and repeat tasks automatically.",
            ka: "ისწავლეთ თქვენი კოდის გონიერად გაკეთება! ასწავლეთ გადაწყვეტილებების მიღება და ამოცანების ავტომატურად გამეორება."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🔄 Loops - Your Tireless Helpers",
                        ka: "🔄 მარყუჟები - თქვენი დაუღალავი დამხმარეები"
                    },
                    content: {
                        en: `
                            <h3>Loops are like having a robot assistant that never gets tired!</h3>
                            <p>Imagine you need to count from 1 to 100. Instead of writing 100 lines, loops do it for you automatically!</p>
                            
                            <h4>🎯 For Loop - When you know exactly how many times:</h4>
                            <pre><code class="language-javascript">// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Counting: " + i);
}

// Say hello 3 times
for (let i = 1; i <= 3; i++) {
    console.log("Hello! This is time " + i);
}</code></pre>
                            
                            <h4>🔄 While Loop - Keep going until something happens:</h4>
                            <pre><code class="language-javascript">let energy = 10;
while (energy > 0) {
    console.log("I have " + energy + " energy left!");
    energy = energy - 2; // use some energy
}</code></pre>
                            <p>🤖 <em>Think of loops as instructions for a helpful robot: "Keep doing this until I tell you to stop!"</em></p>
                        `,
                        ka: `
                            <h3>მარყუჟები არის როგორც რობოტი ასისტენტი, რომელიც არასოდეს იღლება!</h3>
                            <p>წარმოიდგინეთ, რომ 1-დან 100-მდე უნდა დაითვალოთ. 100 ხაზის დაწერის ნაცვლად, მარყუჟები ამას ავტომატურად აკეთებენ!</p>
                            
                            <h4>🎯 For მარყუჟი - როცა ზუსტად იცით რამდენჯერ:</h4>
                            <pre><code class="language-javascript">// 1-დან 5-მდე დათვლა
for (let i = 1; i <= 5; i++) {
    console.log("ვითვლი: " + i);
}

// 3-ჯერ გამარჯობის თქმა
for (let i = 1; i <= 3; i++) {
    console.log("გამარჯობა! ეს არის " + i + "-ჯერადი");
}</code></pre>
                            
                            <h4>🔄 While მარყუჟი - იყავი მანამ, სანამ რაღაც არ მოხდება:</h4>
                            <pre><code class="language-javascript">let energy = 10;
while (energy > 0) {
    console.log("მაქვს " + energy + " ენერგია დარჩენილი!");
    energy = energy - 2; // ღირებულება ენერგიის
}</code></pre>
                            <p>🤖 <em>წარმოიდგინეთ მარყუჟები როგორც ინსტრუქციები დამხმარე რობოტისთვის: "გააგრძელე ამის კეთება, სანამ არ ვეტყვი შეწყვეტა!"</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🤔 Making Smart Decisions",
                        ka: "🤔 გონიერი გადაწყვეტილებების მიღება"
                    },
                    content: {
                        en: `
                            <h3>Teach your code to think and make choices!</h3>
                            <p>Just like you decide what to wear based on the weather, your code can make decisions based on data!</p>
                            
                            <pre><code class="language-javascript">let weather = "sunny";
if (weather === "sunny") {
    console.log("Let's go to the beach! ☀️");
} else if (weather === "rainy") {
    console.log("Perfect day for Netflix! 🌧️");
} else {
    console.log("Any day is a good day! 😊");
}

let age = 20;
if (age >= 18) {
    console.log("You're an adult! 🎉");
} else {
    console.log("Still growing up! 🌱");
}

let score = 85;
if (score >= 90) {
    console.log("Amazing work! A+ 🌟");
} else if (score >= 80) {
    console.log("Great job! B+ 👏");
} else if (score >= 70) {
    console.log("Good effort! C+ 👍");
} else {
    console.log("Keep trying! You'll get there! 💪");
}</code></pre>
                            <p>🧠 <em>if/else statements are like giving your code a brain to think with!</em></p>
                        `,
                        ka: `
                            <h3>ასწავლეთ თქვენს კოდს ფიქრი და არჩევანის გაკეთება!</h3>
                            <p>ისევე როგორც თქვენ გადაწყვეტთ რა ჩაიცვათ ამინდის მიხედვით, თქვენი კოდი შეუძლია გადაწყვეტილებები მიიღოს მონაცემების საფუძველზე!</p>
                            
                            <pre><code class="language-javascript">let weather = "მზიანი";
if (weather === "მზიანი") {
    console.log("წავიდეთ სანაპიროზე! ☀️");
} else if (weather === "წვიმიანი") {
    console.log("სრულყოფილი დღე Netflix-ისთვის! 🌧️");
} else {
    console.log("ნებისმიერი დღე კარგი დღეა! 😊");
}

let age = 20;
if (age >= 18) {
    console.log("ხარ უკვე ზრდასრული! 🎉");
} else {
    console.log("ჯერ ვზრდები! 🌱");
}

let score = 85;
if (score >= 90) {
    console.log("გასაოცარი მუშაობა! A+ 🌟");
} else if (score >= 80) {
    console.log("მაგარი შედეგი! B+ 👏");
} else if (score >= 70) {
    console.log("კარგი ცდა! C+ 👍");
} else {
    console.log("გააგრძელე ცდა! მიაღწევ! 💪");
}</code></pre>
                            <p>🧠 <em>if/else განცხადებები არის როგორც ტვინის მიცემა თქვენს კოდს ფიქრისთვის!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎪 Loops + Decisions = Magic!",
                        ka: "🎪 მარყუჟები + გადაწყვეტილებები = მაგია!"
                    },
                    content: {
                        en: `
                            <h3>Combine loops and decisions for super powerful code!</h3>
                            <pre><code class="language-javascript">// Let's check numbers from 1 to 10
for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(number + " is even! 📈");
    } else {
        console.log(number + " is odd! 📉");
    }
}

// Find lucky numbers in a list
let numbers = [7, 13, 4, 21, 8, 3, 15];
console.log("Looking for lucky numbers...");

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    
    if (currentNumber === 7 || currentNumber === 13 || currentNumber === 21) {
        console.log("🍀 Lucky number found: " + currentNumber);
    } else if (currentNumber > 10) {
        console.log("📊 Big number: " + currentNumber);
    } else {
        console.log("📌 Small number: " + currentNumber);
    }
}

console.log("All done! ✨");</code></pre>
                            <p>🎯 <em>Now your code is smart AND tireless - it can check hundreds of things automatically!</em></p>
                        `,
                        ka: `
                            <h3>შეაერთეთ მარყუჟები და გადაწყვეტილებები ზეძლიერი კოდისთვის!</h3>
                            <pre><code class="language-javascript">// შევამოწმოთ რიცხვები 1-დან 10-მდე
for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(number + " არის ლუწი! 📈");
    } else {
        console.log(number + " არის კენტი! 📉");
    }
}

// ვიპოვოთ იღბლიანი რიცხვები სიაში
let numbers = [7, 13, 4, 21, 8, 3, 15];
console.log("ვეძებთ იღბლიან რიცხვებს...");

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    
    if (currentNumber === 7 || currentNumber === 13 || currentNumber === 21) {
        console.log("🍀 იღბლიანი რიცხვი ნაპოვნია: " + currentNumber);
    } else if (currentNumber > 10) {
        console.log("📊 დიდი რიცხვი: " + currentNumber);
    } else {
        console.log("📌 პატარა რიცხვი: " + currentNumber);
    }
}

console.log("ყველაფერი დასრულებულია! ✨");</code></pre>
                            <p>🎯 <em>ახლა თქვენი კოდი გონიერი და დაუღალავია - მას შეუძლია ასობით რამის ავტომატურად შემოწმება!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Smart Programs!",
                ka: "ააგეთ გონიერი პროგრამები!"
            },
            description: {
                en: "Time to create programs that can think and work automatically! Start simple and build up.",
                ka: "დროა შექმნათ პროგრამები, რომლებსაც შეუძლიათ ფიქრი და ავტომატურად მუშაობა! დაიწყეთ მარტივად და ითვითარეთ."
            },
            task: {
                en: "1. Create a loop that counts from 1 to your age\n2. Make a program that checks if numbers are big (over 50) or small\n3. Create a list of your favorite foods and use a loop to print them all\n4. Try making a program that finds all even numbers between 1 and 20\n5. Challenge: Make a program that grades test scores (90+=A, 80+=B, 70+=C, etc.)",
                ka: "1. შექმენით მარყუჟი, რომელიც თვლის 1-დან თქვენს ასაკამდე\n2. გააკეთეთ პროგრამა, რომელიც ამოწმებს დიდია თუ პატარა რიცხვები (50-ზე მეტი)\n3. შექმენით თქვენი საყვარელი საკვების სია და გამოიყენეთ მარყუჟი ყველას დასაბეჭდად\n4. სცადეთ პროგრამის გაკეთება, რომელიც პოულობს ყველა ლუწ რიცხვს 1-დან 20-მდე\n5. გამოწვევა: გააკეთეთ პროგრამა, რომელიც აფასებს ტესტის ქულებს (90+=A, 80+=B, 70+=C, და ა.შ.)"
            }
        }
    },

    "arrays-objects": {
        title: {
            en: "Arrays & Objects",
            ka: "მასივები და ობიექტები"
        },
        description: {
            en: "Learn to organize and work with collections of data - like digital filing cabinets!",
            ka: "ისწავლეთ მონაცემების კოლექციების ორგანიზება და მუშაობა - როგორც ციფრული საქაღალდე კარადები!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "📋 Arrays - Your Digital Lists",
                        ka: "📋 მასივები - თქვენი ციფრული სიები"
                    },
                    content: {
                        en: `
                            <h3>Arrays are like shopping lists that can hold anything!</h3>
                            <p>Imagine you have a notebook where you write lists. Arrays work exactly like that - they keep things in order!</p>
                            
                            <h4>🛠️ Cool things you can do with arrays:</h4>
                            <ul>
                                <li><code>push()</code> - Add something to the end 📝</li>
                                <li><code>pop()</code> - Remove the last thing ✂️</li>
                                <li><code>shift()</code> - Remove the first thing 🔄</li>
                                <li><code>unshift()</code> - Add something to the beginning ⬆️</li>
                            </ul>
                            
                            <pre><code class="language-javascript">// My favorite foods list
let favoriteFoods = ["Pizza", "Ice Cream", "Chocolate"];

console.log("My list:", favoriteFoods);

// Add new favorite food to the end
favoriteFoods.push("Burger");
console.log("Added burger:", favoriteFoods);

// Remove the last one (oops, too full!)
favoriteFoods.pop();
console.log("Removed last:", favoriteFoods);

// Add something to the beginning (most favorite!)
favoriteFoods.unshift("Pasta");
console.log("Pasta is now first:", favoriteFoods);</code></pre>
                            <p>🎯 <em>Arrays remember the order of things - just like your shopping list!</em></p>
                        `,
                        ka: `
                            <h3>მასივები არის როგორც სამაღალი სიები, რომლებსაც შეუძლიათ ნებისმიერის შენახვა!</h3>
                            <p>წარმოიდგინეთ, რომ გაქვთ რვეული, სადაც სიებს წერთ. მასივები ზუსტად ასე მუშაობენ - ისინი ნივთებს რიგითობაში ინახავენ!</p>
                            
                            <h4>🛠️ მაგარი რამეები, რაც მასივებით შეგიძლიათ:</h4>
                            <ul>
                                <li><code>push()</code> - რაღაცის ბოლოში დამატება 📝</li>
                                <li><code>pop()</code> - ბოლო ნივთის ამოღება ✂️</li>
                                <li><code>shift()</code> - პირველი ნივთის ამოღება 🔄</li>
                                <li><code>unshift()</code> - რაღაცის დასაწყისში დამატება ⬆️</li>
                            </ul>
                            
                            <pre><code class="language-javascript">// ჩემი საყვარელი საკვების სია
let favoriteFoods = ["პიცა", "ნაყინი", "შოკოლადი"];

console.log("ჩემი სია:", favoriteFoods);

// ახალი საყვარელი საკვების ბოლოში დამატება
favoriteFoods.push("ბურგერი");
console.log("ბურგერი დავამატე:", favoriteFoods);

// ბოლოს ამოღება (უფს, ძალიან ბევრია!)
favoriteFoods.pop();
console.log("ბოლო ამოვიღე:", favoriteFoods);

// რაღაცის დასაწყისში დამატება (ყველაზე საყვარელი!)
favoriteFoods.unshift("მაკარონი");
console.log("მაკარონი ახლა პირველია:", favoriteFoods);</code></pre>
                            <p>🎯 <em>მასივები ნივთების თანმიმდევრობას ინახავენ - ისევე როგორც თქვენი სამაღაზიო სია!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🗂️ Objects - Your Digital Profile Cards",
                        ka: "🗂️ ობიექტები - თქვენი ციფრული პროფილის ბარათები"
                    },
                    content: {
                        en: `
                            <h3>Objects are like ID cards with lots of information!</h3>
                            <p>Think of an object like a person's ID card - it has their name, age, address, etc. Each piece of info has a label!</p>
                            
                            <pre><code class="language-javascript">// Creating a profile (like an ID card)
let myProfile = {
    name: "Luka",
    age: 20,
    city: "Tbilisi",
    isStudent: true,
    favoriteColor: "blue"
};

// Reading information (like looking at ID card)
console.log("Hi! I'm " + myProfile.name);
console.log("I'm " + myProfile.age + " years old");
console.log("I live in " + myProfile.city);

// Updating information (like renewing your ID)
myProfile.age = 21;  // Happy birthday!
myProfile.city = "New York";  // I moved!

// Adding new information
myProfile.hobby = "coding";
myProfile.petName = "Fluffy";

console.log("Updated profile:", myProfile);</code></pre>
                            <p>🎴 <em>Objects organize information with labels - like having a filing cabinet where each folder has a clear label!</em></p>
                        `,
                        ka: `
                            <h3>ობიექტები არის როგორც პირადობის მოწმობები ბევრი ინფორმაციით!</h3>
                            <p>წარმოიდგინეთ ობიექტი როგორც ადამიანის პირადობის მოწმობა - მასზე არის სახელი, ასაკი, მისამართი და ა.შ. ყოველ ინფორმაციას აქვს ეტიკეტი!</p>
                            
                            <pre><code class="language-javascript">// პროფილის შექმნა (როგორც პირადობის მოწმობა)
let myProfile = {
    name: "ლუკა",
    age: 20,
    city: "თბილისი",
    isStudent: true,
    favoriteColor: "ლურჯი"
};

// ინფორმაციის წაკითხვა (როგორც პირადობის მოწმობაზე ყურება)
console.log("გამარჯობა! მე ვარ " + myProfile.name);
console.log("მე ვარ " + myProfile.age + " წლის");
console.log("ვცხოვრობ " + myProfile.city + "-ში");

// ინფორმაციის განახლება (როგორც პირადობის განახლება)
myProfile.age = 21;  // გილოცავ დაბადების დღეს!
myProfile.city = "ნიუ იორკი";  // გადავედი!

// ახალი ინფორმაციის დამატება
myProfile.hobby = "კოდირება";
myProfile.petName = "ფლაფი";

console.log("განახლებული პროფილი:", myProfile);</code></pre>
                            <p>🎴 <em>ობიექტები ეტიკეტებით ინფორმაციას აწყობენ - როგორც საქაღალდე კარადა, სადაც ყოველ ფოლდერს აქვს მკაფიო ეტიკეტი!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎪 Mixing Arrays and Objects - Super Powers!",
                        ka: "🎪 მასივებისა და ობიექტების შერევა - ზეძალები!"
                    },
                    content: {
                        en: `
                            <h3>Combine arrays and objects for amazing data organization!</h3>
                            <pre><code class="language-javascript">// A person with hobbies (object containing an array)
let person = {
    name: "Luka",
    age: 20,
    hobbies: ["coding", "football", "gaming", "reading"],
    address: {
        city: "Tbilisi",
        country: "Georgia"
    }
};

console.log(person.name + " has " + person.hobbies.length + " hobbies!");

// Add a new hobby
person.hobbies.push("photography");
console.log("New hobby added! Now has:", person.hobbies);

// Create a list of friends (array of objects)
let friends = [
    { name: "Ana", age: 19, favoriteFood: "pizza" },
    { name: "Giorgi", age: 21, favoriteFood: "khachapuri" },
    { name: "Nino", age: 20, favoriteFood: "ice cream" }
];

console.log("My friends:");
for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    console.log(friend.name + " is " + friend.age + " and loves " + friend.favoriteFood);
}</code></pre>
                            <p>🌟 <em>Now you can organize any kind of information - people, movies, games, anything!</em></p>
                        `,
                        ka: `
                            <h3>შეაერთეთ მასივები და ობიექტები გასაოცარი მონაცემების ორგანიზაციისთვის!</h3>
                            <pre><code class="language-javascript">// ადამიანი ჰობებით (ობიექტი, რომელიც მასივს შეიცავს)
let person = {
    name: "ლუკა",
    age: 20,
    hobbies: ["კოდირება", "ფეხბურთი", "გეიმინგი", "კითხვა"],
    address: {
        city: "თბილისი",
        country: "საქართველო"
    }
};

console.log(person.name + "-ს აქვს " + person.hobbies.length + " ჰობი!");

// ახალი ჰობის დამატება
person.hobbies.push("ფოტოგრაფია");
console.log("ახალი ჰობი დამატებული! ახლა აქვს:", person.hobbies);

// მეგობრების სიის შექმნა (ობიექტების მასივი)
let friends = [
    { name: "ანა", age: 19, favoriteFood: "პიცა" },
    { name: "გიორგი", age: 21, favoriteFood: "ხაჭაპური" },
    { name: "ნინო", age: 20, favoriteFood: "ნაყინი" }
];

console.log("ჩემი მეგობრები:");
for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    console.log(friend.name + " არის " + friend.age + " წლის და უყვარს " + friend.favoriteFood);
}</code></pre>
                            <p>🌟 <em>ახლა შეგიძლიათ ნებისმიერი სახის ინფორმაციის ორგანიზება - ადამიანები, ფილმები, თამაშები, ყველაფერი!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Create Your Digital World!",
                ka: "შექმენით თქვენი ციფრული სამყარო!"
            },
            description: {
                en: "Time to build your own data collections! Think about things you like and organize them digitally.",
                ka: "დროა ააგოთ თქვენი საკუთარი მონაცემების კოლექციები! იფიქრეთ რამეზე, რაც გიყვართ და ციფრულად მოაწყვეთ."
            },
            task: {
                en: "1. Create an array of your favorite movies or songs\n2. Make an object about yourself with name, age, and favorite things\n3. Create an array of friend objects with their info\n4. Try adding new items to your arrays using push()\n5. Experiment with nested objects (objects inside objects!)",
                ka: "1. შექმენით თქვენი საყვარელი ფილმების ან სიმღერების მასივი\n2. გააკეთეთ ობიექტი თქვენს შესახებ სახელით, ასაკით და საყვარელი ნივთებით\n3. შექმენით მეგობრების ობიექტების მასივი მათი ინფორმაციით\n4. სცადეთ ახალი ელემენტების დამატება მასივებში push()-ის გამოყენებით\n5. ექსპერიმენტი ჩადგმული ობიექტებით (ობიექტები ობიექტების შიგნით!)"
            }
        }
    },

    advanced: {
        title: {
            en: "Advanced Functions",
            ka: "წინაშე გადგმული ფუნქციები"
        },
        description: {
            en: "Now you're ready for the ultimate combo - functions working with arrays and objects like a pro!",
            ka: "ახლა მზად ხართ საბოლოო კომბინაციისთვის - ფუნქციები მუშაობენ მასივებთან და ობიექტებთან როგორც პროფესიონალები!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🎯 Functions + Arrays = Dynamic Lists",
                        ka: "🎯 ფუნქციები + მასივები = დინამიური სიები"
                    },
                    content: {
                        en: `
                            <h3>Make your arrays smart with functions!</h3>
                            <p>Functions can organize, search, and modify your arrays automatically. It's like having a personal assistant for your lists!</p>
                            
                            <pre><code class="language-javascript">// Function to add items to a shopping list
function addToShoppingList(list, newItem) {
    list.push(newItem);
    console.log("Added " + newItem + " to the list!");
    return list;
}

// Function to find if we have something
function doWeHave(list, item) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            return "Yes! We have " + item + " ✅";
        }
    }
    return "Nope, we need to buy " + item + " 🛒";
}

// Function to count items
function countItems(list) {
    return "We have " + list.length + " items total";
}

// Let's use them!
let groceries = ["milk", "bread", "eggs"];
addToShoppingList(groceries, "cheese");
console.log(doWeHave(groceries, "milk"));
console.log(doWeHave(groceries, "cookies"));
console.log(countItems(groceries));</code></pre>
                            <p>🚀 <em>Functions make your arrays come alive - they can grow, search, and organize themselves!</em></p>
                        `,
                        ka: `
                            <h3>გახადეთ თქვენი მასივები გონიერი ფუნქციებით!</h3>
                            <p>ფუნქციებს შეუძლიათ ავტომატურად მოაწყონ, მოძებნონ და შეცვალონ თქვენი მასივები. ეს არის როგორც პირადი ასისტენტის ყოლა თქვენი სიებისთვის!</p>
                            
                            <pre><code class="language-javascript">// ფუნქცია სამაღაზიო სიაში ნივთების დასამატებლად
function addToShoppingList(list, newItem) {
    list.push(newItem);
    console.log("დავამატე " + newItem + " სიაში!");
    return list;
}

// ფუნქცია იმის სანახავად, გვაქვს თუ არა რაღაც
function doWeHave(list, item) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            return "კი! გვაქვს " + item + " ✅";
        }
    }
    return "არა, უნდა ვიყიდოთ " + item + " 🛒";
}

// ფუნქცია ნივთების დასათვლელად
function countItems(list) {
    return "გვაქვს " + list.length + " ნივთი სულ";
}

// ვიყენებთ მათ!
let groceries = ["რძე", "პური", "კვერცხი"];
addToShoppingList(groceries, "ყველი");
console.log(doWeHave(groceries, "რძე"));
console.log(doWeHave(groceries, "ნამცხვარი"));
console.log(countItems(groceries));</code></pre>
                            <p>🚀 <em>ფუნქციები თქვენს მასივებს სიცოცხლეს აძლევენ - მათ შეუძლიათ ზრდა, ძიება და საკუთარი ორგანიზება!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🏆 Functions + Objects = Smart Profiles",
                        ka: "🏆 ფუნქციები + ობიექტები = გონიერი პროფილები"
                    },
                    content: {
                        en: `
                            <h3>Give your objects superpowers with functions!</h3>
                            <p>Functions can update, modify, and enhance your objects automatically. Think of it as upgrading your digital profiles!</p>
                            
                            <pre><code class="language-javascript">// Function to create a student profile
function createStudent(name, age, grade) {
    return {
                        name: name,
                        age: age,
                        grade: grade,
                        subjects: [],
                        friends: []
                    };
                }
                
                // Function to add a subject
                function addSubject(student, subject, score) {
                    student.subjects.push({
                        name: subject,
                        score: score
                    });
                    console.log(student.name + " added " + subject + " with score " + score);
                }
                
                // Function to calculate average
                function getAverage(student) {
                    let total = 0;
                    for (let i = 0; i < student.subjects.length; i++) {
                        total += student.subjects[i].score;
                    }
                    return student.subjects.length > 0 ? total / student.subjects.length : 0;
                }
                
                // Let's create and use a student!
                let luka = createStudent("Luka", 20, "A");
                addSubject(luka, "Math", 95);
                addSubject(luka, "Programming", 98);
                addSubject(luka, "English", 87);
                
                console.log(luka.name + "'s average: " + getAverage(luka));
                console.log("Full profile:", luka);</code></pre>
                            <p>🎓 <em>Now your objects can evolve and update themselves through functions!</em></p>
                        `,
                        ka: `
                            <h3>მიეცით თქვენს ობიექტებს ზეძალები ფუნქციებით!</h3>
                            <p>ფუნქციებს შეუძლიათ ავტომატურად განაახლონ, შეცვალონ და გააუმჯობესონ თქვენი ობიექტები. იფიქრეთ ამაზე როგორც თქვენი ციფრული პროფილების განახლებაზე!</p>
                            
                            <pre><code class="language-javascript">// ფუნქცია სტუდენტის პროფილის შესაქმნელად
function createStudent(name, age, grade) {
    return {
        name: name,
        age: age,
        grade: grade,
        subjects: [],
        friends: []
    };
}

// ფუნქცია საგნის დასამატებლად
function addSubject(student, subject, score) {
    student.subjects.push({
        name: subject,
        score: score
    });
    console.log(student.name + "-მ დაამატა " + subject + " ქულით " + score);
}

// ფუნქცია საშუალოს გამოსათვლელად
function getAverage(student) {
    let total = 0;
    for (let i = 0; i < student.subjects.length; i++) {
        total += student.subjects[i].score;
    }
    return student.subjects.length > 0 ? total / student.subjects.length : 0;
}

// შევქმნათ და გამოვიყენოთ სტუდენტი!
let luka = createStudent("ლუკა", 20, "A");
addSubject(luka, "მათემატიკა", 95);
addSubject(luka, "პროგრამირება", 98);
addSubject(luka, "ინგლისური", 87);

console.log(luka.name + "-ის საშუალო: " + getAverage(luka));
console.log("სრული პროფილი:", luka);</code></pre>
                            <p>🎓 <em>ახლა თქვენს ობიექტებს შეუძლიათ ფუნქციების მეშვეობით განვითარება და საკუთარი განახლება!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🌟 Master Level: Everything Together!",
                        ka: "🌟 ოსტატის დონე: ყველაფერი ერთად!"
                    },
                    content: {
                        en: `
                            <h3>Combine everything you've learned for amazing programs!</h3>
                            <pre><code class="language-javascript">// A complete game character system!
function createCharacter(name, type) {
    return {
                        name: name,
                        type: type,
                        level: 1,
                        health: 100,
                        inventory: [],
                        skills: []
                    };
                }
                
                function addItem(character, item) {
                    character.inventory.push(item);
                    console.log(character.name + " found " + item + "! 🎒");
                }
                
                function levelUp(character) {
                    character.level += 1;
                    character.health += 20;
                    console.log("🎉 " + character.name + " reached level " + character.level + "!");
                }
                
                function showStats(character) {
                    console.log("📊 " + character.name + " the " + character.type);
                    console.log("Level: " + character.level);
                    console.log("Health: " + character.health);
                    console.log("Items: " + character.inventory.length);
                }
                
                // Create and play with a character!
                let hero = createCharacter("Alex", "Warrior");
                addItem(hero, "Magic Sword");
                addItem(hero, "Health Potion");
                levelUp(hero);
                showStats(hero);</code></pre>
                            <p>🎮 <em>Congratulations! You can now build complex, interactive programs that feel like real applications!</em></p>
                        `,
                        ka: `
                            <h3>შეაერთეთ ყველაფერი რისი სწავლაც გაქვთ გასაოცარი პროგრამებისთვის!</h3>
                            <pre><code class="language-javascript">// სრული სათამაშო პერსონაჟის სისტემა!
function createCharacter(name, type) {
    return {
        name: name,
        type: type,
        level: 1,
        health: 100,
        inventory: [],
        skills: []
    };
}

function addItem(character, item) {
    character.inventory.push(item);
    console.log(character.name + "-მ იპოვა " + item + "! 🎒");
}

function levelUp(character) {
    character.level += 1;
    character.health += 20;
    console.log("🎉 " + character.name + "-მ მიაღწია " + character.level + " დონეს!");
}

function showStats(character) {
    console.log("📊 " + character.name + " " + character.type);
    console.log("დონე: " + character.level);
    console.log("სიცოცხლე: " + character.health);
    console.log("ნივთები: " + character.inventory.length);
}

// შევქმნათ და ვითამაშოთ პერსონაჟით!
let hero = createCharacter("ალექსი", "მებრძოლი");
addItem(hero, "ჯადოსნური ხმალი");
addItem(hero, "სიცოცხლის წამალი");
levelUp(hero);
showStats(hero);</code></pre>
                            <p>🎮 <em>გილოცავთ! ახლა შეგიძლიათ ააგოთ რთული, ინტერაქტიული პროგრამები, რომლებიც ნამდვილ აპლიკაციებს ჰგვანან!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Your Dream Program!",
                ka: "ააგეთ თქვენი ოცნების პროგრამა!"
            },
            description: {
                en: "You're now a JavaScript master! Create something amazing that combines everything you've learned.",
                ka: "ახლა ხართ JavaScript-ის ოსტატი! შექმენით რაღაც გასაოცარი, რაც აერთიანებს ყველაფერს რისი სწავლაც გაქვთ."
            },
            task: {
                en: "1. Create a library system with books (objects) and functions to add/search\n2. Build a simple social media system with users and posts\n3. Make a pet care system where you can feed, play, and check pet status\n4. Design a music playlist manager with songs and playlists\n5. Ultimate Challenge: Create your own mini-game with characters, items, and actions!",
                ka: "1. შექმენით ბიბლიოთეკის სისტემა წიგნებით (ობიექტები) და ფუნქციებით დამატება/ძიებისთვის\n2. ააგეთ მარტივი სოციალური მედიის სისტემა მომხმარებლებითა და პოსტებით\n3. გააკეთეთ შინაური ცხოველების მოვლის სისტემა, სადაც შეგიძლიათ ჭამება, თამაში და მდგომარეობის შემოწმება\n4. შექმენით მუსიკალური პლეილისტის მენეჯერი სიმღერებით და პლეილისტებით\n5. საბოლოო გამოწვევა: შექმენით თქვენი საკუთარი მინი-თამაში პერსონაჟებით, ნივთებით და მოქმედებებით!"
            }
        }
    },

    "array-methods": {
        title: {
            en: "Advanced Array Methods"
        },
        description: {
            en: "Master powerful array methods like map, filter, and reduce - your data manipulation superpowers!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🔄 Map - Transform Every Item"
                    },
                    content: {
                        en: `
                            <h3>Map creates a new array by transforming each item!</h3>
                            <p>Think of map like a factory assembly line - every item goes in, gets transformed, and comes out changed!</p>
                            
                            <pre><code class="language-javascript">// Transform numbers
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log("Original:", numbers);
console.log("Squared:", squared);

// Transform prices with discount
let prices = [90, 45, 30];
let discounted = prices.map(price => price * 0.9);
console.log("Original prices:", prices);
console.log("Discounted:", discounted);

// Transform names to greetings
let names = ["Luka", "Ana", "Giorgi"];
let greetings = names.map(name => "Hello, " + name + "!");
console.log(greetings);</code></pre>
                            <p>🏭 <em>Map never changes the original array - it always creates a brand new one!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🔍 Filter - Find What You Need"
                    },
                    content: {
                        en: `
                            <h3>Filter creates a new array with only items that pass your test!</h3>
                            <p>Like having a bouncer at a club - only items that meet your criteria get through!</p>
                            
                            <pre><code class="language-javascript">// Filter odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// Filter adults
let users = [
    { name: "Luka", age: 20 },
    { name: "Ana", age: 17 },
    { name: "Giorgi", age: 25 }
];
let adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults);

// Filter expensive items
let products = [
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 100 },
    { name: "Laptop", price: 1200 }
];
let expensive = products.filter(product => product.price > 500);
console.log("Expensive items:", expensive);</code></pre>
                            <p>🚪 <em>Filter is like a smart doorman - it only lets through what you want!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎯 Reduce - Combine Everything"
                    },
                    content: {
                        en: `
                            <h3>Reduce takes an array and combines it into a single value!</h3>
                            <p>Like putting all ingredients in a blender to make one smoothie!</p>
                            
                            <pre><code class="language-javascript">// Sum all numbers
let numbers = [2, 4, 6, 7, 12];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// Find the biggest number
let biggestNumber = numbers.reduce((max, num) => {
    return num > max ? num : max;
}, numbers[0]);
console.log("Biggest:", biggestNumber);

// Count total characters in names
let names = ["Luka", "Ana", "Giorgi"];
let totalChars = names.reduce((total, name) => total + name.length, 0);
console.log("Total characters:", totalChars);

// Build a shopping summary
let cart = [
    { name: "Apples", price: 5, quantity: 3 },
    { name: "Bread", price: 2, quantity: 2 },
    { name: "Milk", price: 3, quantity: 1 }
];
let totalCost = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log("Total cost:", totalCost);</code></pre>
                            <p>🥤 <em>Reduce is like a blender - many ingredients become one result!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Practice Your Array Superpowers!"
            },
            description: {
                en: "Now use these powerful methods to manipulate data like a pro!"
            },
            task: {
                en: "1. Use map to double all numbers in [1,2,3,4,5]\n2. Use filter to find numbers greater than 3 in that same array\n3. Use reduce to sum all numbers in the array\n4. Create an array of student objects and use filter to find honor students (grade >= 90)\n5. Use map to create an array of just the student names"
            }
        }
    },

    typescript: {
        title: {
            en: "TypeScript Basics"
        },
        description: {
            en: "Learn TypeScript - JavaScript with superpowers! Add types to catch errors before they happen."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "📘 What is TypeScript?"
                    },
                    content: {
                        en: `
                            <h3>TypeScript is JavaScript with a safety net!</h3>
                            <p>Imagine JavaScript is like driving a car, and TypeScript is like having GPS, airbags, and lane assistance - same car, but much safer!</p>
                            
                            <h4>🛡️ Why TypeScript?</h4>
                            <ul>
                                <li>Catches mistakes before your code runs</li>
                                <li>Better auto-completion in your editor</li>
                                <li>Makes your code self-documenting</li>
                                <li>Easier to work in teams</li>
                            </ul>
                            
                            <pre><code class="language-typescript">// JavaScript (no safety net)
let name = "Luka";
name = 42; // This will cause problems later!

// TypeScript (with safety net)
let name: string = "Luka";
name = 42; // Error! TypeScript catches this immediately</code></pre>
                            <p>🛡️ <em>TypeScript is like having a helpful friend who catches your mistakes!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🏷️ Basic Types"
                    },
                    content: {
                        en: `
                            <h3>Tell TypeScript what kind of data you're using!</h3>
                            
                            <pre><code class="language-typescript">// Basic types
let name: string = "Luka";
let age: number = 20;
let isStudent: boolean = true;

// Arrays
let hobbies: string[] = ["Coding", "Gaming", "Reading"];
let scores: number[] = [95, 87, 92];

// Objects
let person: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "Luka",
    age: 20,
    isStudent: true
};

// Functions
function greet(name: string): string {
    return "Hello, " + name + "!";
}

const multiply = (a: number, b: number): number => a * b;

console.log(greet("Ana"));
console.log(multiply(5, 3));</code></pre>
                            <p>🏷️ <em>Types are like labels on boxes - they tell you what's inside!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "⚡ TypeScript in Action"
                    },
                    content: {
                        en: `
                            <h3>See how TypeScript makes your code better!</h3>
                            
                            <pre><code class="language-typescript">// Interface - like a blueprint
interface Student {
    name: string;
    age: number;
    grade: number;
    subjects: string[];
}

// Function with TypeScript magic
function createStudent(name: string, age: number, grade: number): Student {
    return {
        name: name,
        age: age,
        grade: grade,
        subjects: []
    };
}

function addSubject(student: Student, subject: string): void {
    student.subjects.push(subject);
    console.log(student.name + " added " + subject);
}

function getGradeStatus(grade: number): string {
    if (grade >= 90) return "Excellent!";
    if (grade >= 80) return "Good!";
    if (grade >= 70) return "Okay";
    return "Needs improvement";
}

// Using our typed functions
let luka = createStudent("Luka", 20, 95);
addSubject(luka, "Mathematics");
addSubject(luka, "Programming");

console.log(luka.name + " has " + luka.subjects.length + " subjects");
console.log("Grade status:", getGradeStatus(luka.grade));</code></pre>
                            <p>⚡ <em>TypeScript helps you build more reliable programs by catching errors early!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Practice TypeScript Safety!"
            },
            description: {
                en: "Create type-safe code that prevents bugs before they happen!"
            },
            task: {
                en: "1. Create variables with proper types for your name, age, and favorite hobbies\n2. Create an interface for a Book with title, author, and pages\n3. Write a function that takes two numbers and returns their sum with proper types\n4. Create an array of book objects using your interface\n5. Write a function that finds books with more than 300 pages"
            }
        }
    },

    dom: {
        title: {
            en: "DOM Manipulation"
        },
        description: {
            en: "Learn to control web pages! Make your websites interactive by changing content, styles, and responding to user actions."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🌐 What is the DOM?"
                    },
                    content: {
                        en: `
                            <h3>DOM is your bridge to control the webpage!</h3>
                            <p>Think of the DOM like the remote control for your TV - it lets you change channels, adjust volume, and control everything you see!</p>
                            
                            <h4>🎮 What you can do with DOM:</h4>
                            <ul>
                                <li>Change text and content</li>
                                <li>Modify styles and colors</li>
                                <li>Add or remove elements</li>
                                <li>Respond to clicks and user actions</li>
                            </ul>
                            
                            <pre><code class="language-javascript">// Finding elements (like finding the right TV channel)
let myDiv = document.getElementById('myDiv');
let myParagraph = document.querySelector('.myClass');

console.log("Found element:", myDiv);

// Changing content (like changing the channel)
myDiv.innerHTML = "I am new content!";
myParagraph.textContent = "Hello from JavaScript!";</code></pre>
                            <p>🎮 <em>DOM is like having a magic wand to control your webpage!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎨 Changing Styles and Content"
                    },
                    content: {
                        en: `
                            <h3>Make your webpage come alive with dynamic changes!</h3>
                            
                            <pre><code class="language-javascript">// Get an element to work with
let myElement = document.getElementById('myElement');

// Change the content
myElement.innerHTML = "Hello World!";
myElement.textContent = "Just text, no HTML";

// Change styles (like redecorating your room)
myElement.style.color = "red";
myElement.style.fontSize = "20px";
myElement.style.backgroundColor = "yellow";

// Add and remove CSS classes
myElement.classList.add("highlight");
myElement.classList.remove("old-style");

// Toggle a class on and off
myElement.classList.toggle("active");

// Multiple style changes at once
Object.assign(myElement.style, {
    color: "blue",
    fontSize: "24px",
    padding: "10px",
    borderRadius: "5px"
});</code></pre>
                            <p>🎨 <em>Changing styles is like being an interior designer for your webpage!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎯 Responding to User Actions"
                    },
                    content: {
                        en: `
                            <h3>Make your webpage respond to user clicks and actions!</h3>
                            
                            <pre><code class="language-javascript">// Responding to button clicks
let myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
    alert("Button was clicked!");
    console.log("User clicked the button!");
});

// More advanced click handler
let changeTextButton = document.getElementById('changeText');
let textElement = document.getElementById('paragraph');

changeTextButton.addEventListener('click', () => {
    textElement.textContent = "Text changed by JavaScript!";
    textElement.style.color = "green";
});

// Responding to form input
let nameInput = document.getElementById('nameInput');
nameInput.addEventListener('input', (event) => {
    console.log("User typed:", event.target.value);
    
    // Update another element with the typed text
    let output = document.getElementById('output');
    output.textContent = "Hello, " + event.target.value + "!";
});

// Example: Interactive counter
let count = 0;
let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('increment');

incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    
    if (count >= 10) {
        counter.style.color = "gold";
        counter.textContent = count + " 🎉";
    }
});</code></pre>
                            <p>🎯 <em>Event listeners are like having ears on your webpage - they hear user actions!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Interactive Elements!"
            },
            description: {
                en: "Create dynamic webpage elements that respond to user interactions!"
            },
            task: {
                en: "1. Create a button that changes a paragraph's text when clicked\n2. Make an input field that shows what you type in real-time\n3. Create a color changer that changes the background color\n4. Build a simple counter with + and - buttons\n5. Make a toggle button that hides/shows content"
            }
        }
    },

    events: {
        title: {
            en: "Events & Advanced DOM"
        },
        description: {
            en: "Master advanced DOM techniques! Create, modify, and remove elements dynamically for truly interactive experiences."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "⚡ Advanced Event Handling"
                    },
                    content: {
                        en: `
                            <h3>Master different types of events and the event object!</h3>
                            
                            <pre><code class="language-javascript">// Different event types
let button = document.getElementById('myButton');
let input = document.getElementById('myInput');

// Click events
button.addEventListener('click', () => {
    console.log("Button clicked!");
});

// Input events (real-time typing)
input.addEventListener('input', (event) => {
    console.log("User typed:", event.target.value);
});

// Mouse events
button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'lightblue';
});

button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '';
});

// Using the event object
button.addEventListener('click', (event) => {
    console.log("Event object:", event);
    console.log("Clicked element:", event.target);
    console.log("Click position:", event.clientX, event.clientY);
    
    // Prevent default behavior (useful for forms)
    event.preventDefault();
});</code></pre>
                            <p>⚡ <em>Events carry lots of useful information - like a detailed report of what happened!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🏗️ Creating Elements Dynamically"
                    },
                    content: {
                        en: `
                            <h3>Build and modify page elements on the fly!</h3>
                            
                            <pre><code class="language-javascript">// Creating new elements
let newDiv = document.createElement('div');
newDiv.textContent = "I'm a new div!";
newDiv.style.padding = "10px";
newDiv.style.backgroundColor = "lightgreen";

// Add the new element to the page
document.body.appendChild(newDiv);

// Creating more complex elements
let newCard = document.createElement('div');
newCard.className = 'card';
newCard.innerHTML = \`
    <h3>Dynamic Card</h3>
    <p>This card was created by JavaScript!</p>
    <button onclick="alert('Hello!')">Click me!</button>
\`;

// Insert it into a specific container
let container = document.getElementById('container');
container.appendChild(newCard);

// Removing elements
let elementToRemove = document.getElementById('removeMe');
elementToRemove.remove(); // Simple removal

// Or remove from parent
let parent = elementToRemove.parentNode;
parent.removeChild(elementToRemove);</code></pre>
                            <p>🏗️ <em>You're now a webpage architect - building and demolishing as needed!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "📝 Real Example: Dynamic To-Do List"
                    },
                    content: {
                        en: `
                            <h3>Put it all together with a working to-do list!</h3>
                            
                            <pre><code class="language-javascript">// To-Do List Implementation
let addButton = document.getElementById('addTaskButton');
let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

// Add new task function
function addTask() {
    let taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create task element
    let taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    taskItem.innerHTML = \`
        <span class="task-text">\${taskText}</span>
        <button class="complete-btn">✓</button>
        <button class="delete-btn">✗</button>
    \`;
    
    // Add event listeners to new buttons
    let completeBtn = taskItem.querySelector('.complete-btn');
    let deleteBtn = taskItem.querySelector('.delete-btn');
    
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });
    
    // Add to list and clear input
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

// Event listeners
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

console.log("To-Do List is ready!");</code></pre>
                            <p>📝 <em>Now you can create fully interactive web applications!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Dynamic Web Apps!"
            },
            description: {
                en: "Create interactive applications that users can modify in real-time!"
            },
            task: {
                en: "1. Build a dynamic shopping list where users can add and remove items\n2. Create a photo gallery where clicking images shows them larger\n3. Make a simple calculator with clickable number buttons\n4. Build a comment system where users can add and delete comments\n5. Create a color palette generator with clickable color squares"
            }
        }
    },

    async: {
        title: {
            en: "Async JavaScript"
        },
        description: {
            en: "Master asynchronous programming! Handle API calls, promises, and async operations like a pro."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "⏰ Understanding Asynchronous Code"
                    },
                    content: {
                        en: `
                            <h3>Async code is like ordering food delivery while doing other things!</h3>
                            <p>Instead of waiting at the restaurant, you order online and continue your day. When food arrives, you handle it!</p>
                            
                            <h4>🔄 Why Async?</h4>
                            <ul>
                                <li>Don't freeze the webpage while waiting for data</li>
                                <li>Handle multiple operations at once</li>
                                <li>Better user experience</li>
                                <li>Load data from servers without blocking</li>
                            </ul>
                            
                            <pre><code class="language-javascript">// Synchronous (blocking) - Bad!
console.log("Start");
// Imagine this takes 3 seconds...
// User can't do anything during this time!
console.log("End");

// Asynchronous (non-blocking) - Good!
console.log("Start");
setTimeout(() => {
    console.log("This happens after 2 seconds");
}, 2000);
console.log("End"); // This runs immediately!

// Real example: Loading data
console.log("Requesting weather data...");
fetch('https://api.weather.com/data')
    .then(response => response.json())
    .then(data => {
        console.log("Weather loaded:", data);
    });
console.log("Doing other things while waiting...");</code></pre>
                            <p>⏰ <em>Async is like being a master multitasker - doing many things without waiting!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🤝 Promises - Your Async Helpers"
                    },
                    content: {
                        en: `
                            <h3>Promises are like IOUs for future results!</h3>
                            <p>When you order food, you get a receipt (promise) that says "food will come." Later, you either get food (resolve) or a refund (reject)!</p>
                            
                            <pre><code class="language-javascript">// Creating a promise
let myPromise = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5; // 50% chance
    
    setTimeout(() => {
        if (success) {
            resolve('Success! Data loaded! 🎉');
        } else {
            reject('Oops! Something went wrong! 😅');
        }
    }, 2000);
});

// Using the promise
myPromise
    .then((result) => {
        console.log("Good news:", result);
    })
    .catch((error) => {
        console.log("Bad news:", error);
    })
    .finally(() => {
        console.log("Either way, we're done!");
    });

// Real example: Fetching user data
function loadUserProfile(userId) {
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "Luka Partenadze",
                    email: "luka@example.com"
                });
            } else {
                reject("Invalid user ID");
            }
        }, 1500);
    });
}

// Using our function
loadUserProfile(123)
    .then(user => {
        console.log("User loaded:", user.name);
        console.log("Email:", user.email);
    })
    .catch(error => {
        console.log("Failed to load user:", error);
    });</code></pre>
                            <p>🤝 <em>Promises help you handle success and failure gracefully!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🚀 Async/Await - The Modern Way"
                    },
                    content: {
                        en: `
                            <h3>Async/await makes asynchronous code look synchronous!</h3>
                            <p>It's like having a personal assistant who waits for things so you don't have to think about callbacks!</p>
                            
                            <pre><code class="language-javascript">// Old way with .then()
function loadDataOldWay() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log("Post title:", data.title);
            return fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);
        })
        .then(response => response.json())
        .then(user => {
            console.log("Author:", user.name);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

// New way with async/await
async function loadDataNewWay() {
    try {
        console.log("Loading post...");
        let postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let post = await postResponse.json();
        console.log("Post title:", post.title);
        
        console.log("Loading author...");
        let userResponse = await fetch('https://jsonplaceholder.typicode.com/users/' + post.userId);
        let user = await userResponse.json();
        console.log("Author:", user.name);
        
        return { post, user };
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

// Using async/await
async function displayPostWithAuthor() {
    console.log("Starting to load...");
    
    let result = await loadDataNewWay();
    
    if (result) {
        console.log("Success! Got post by", result.user.name);
    }
    
    console.log("All done!");
}

// Run it
displayPostWithAuthor();

// Multiple async operations
async function loadMultipleUsers() {
    try {
        let user1Promise = fetch('https://jsonplaceholder.typicode.com/users/1');
        let user2Promise = fetch('https://jsonplaceholder.typicode.com/users/2');
        let user3Promise = fetch('https://jsonplaceholder.typicode.com/users/3');
        
        // Wait for all to complete
        let responses = await Promise.all([user1Promise, user2Promise, user3Promise]);
        
        console.log("All users loaded!");
        for (let response of responses) {
            let user = await response.json();
            console.log("User:", user.name);
        }
    } catch (error) {
        console.log("Failed to load users:", error);
    }
}</code></pre>
                            <p>🚀 <em>Async/await is like having superpowers - complex async operations become simple!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Master Async Programming!"
            },
            description: {
                en: "Build applications that handle real-world data loading and API interactions!"
            },
            task: {
                en: "1. Create a promise that resolves with your favorite quote after 2 seconds\n2. Use fetch to load data from a public API (like JSONPlaceholder)\n3. Write an async function that loads and displays user information\n4. Handle errors gracefully with try/catch\n5. Load multiple pieces of data simultaneously with Promise.all"
            }
        }
    }
};

// Application State  
let currentTutorial = 'variables';

// Language switching functionality with improved performance
async function getCurrentContent(contentObj) {
    if (typeof contentObj === 'string') {
        // For string content, only translate if Georgian is requested
        if (currentLanguage === 'ka') {
            try {
                // Use improved translation service with pre-translated content
                return await translationService.translate(contentObj, 'en', 'ka');
            } catch (error) {
                console.warn('Translation failed, using original text');
                return contentObj;
            }
        }
        return contentObj;
    }
    
    // If we have the content in the requested language, return it immediately
    if (contentObj[currentLanguage]) {
        return contentObj[currentLanguage];
    }
    
    // If switching to Georgian and we don't have translation, auto-translate with improved service
    if (currentLanguage === 'ka' && contentObj.en) {
        try {
            const translation = await translationService.translate(contentObj.en, 'en', 'ka');
            // Cache the translation in the object for future use
            contentObj.ka = translation;
            return translation;
        } catch (error) {
            console.warn('Translation failed, using English content');
            return contentObj.en;
        }
    }
    
    // Fallback to English
    return contentObj.en || '';
}

async function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language option
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
    
    // Fast translation with progress indicator
    if (lang === 'ka') {
        showTranslationProgress();
        
        try {
            // Translate navigation menu titles first (instant for common terms)
            await updateNavigationTitles();
            
            // Reload current tutorial with new language
            await loadTutorial(currentTutorial);
        } catch (error) {
            console.error('Translation error:', error);
        } finally {
            hideTranslationProgress();
        }
    } else {
        // English - just reload without translation
        await loadTutorial(currentTutorial);
    }
}

function showTranslationProgress() {
    let indicator = document.querySelector('.translation-progress');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'translation-progress';
        indicator.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill"></div>
                <span>🇬🇪 თარგმნა...</span>
            </div>
        `;
        document.body.appendChild(indicator);
        
        // Add CSS for progress indicator
        const style = document.createElement('style');
        style.textContent = `
            .translation-progress {
                position: fixed;
                top: 70px;
                right: 20px;
                background: rgba(59, 130, 246, 0.95);
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                backdrop-filter: blur(10px);
                animation: slideIn 0.3s ease-out;
            }
            .progress-bar {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                font-weight: 500;
            }
            .progress-fill {
                width: 20px;
                height: 3px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 2px;
                overflow: hidden;
                position: relative;
            }
            .progress-fill::after {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: white;
                animation: progress 1.5s infinite;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes progress {
                to { left: 100%; }
            }
        `;
        document.head.appendChild(style);
    }
    indicator.style.display = 'block';
}

function hideTranslationProgress() {
    const indicator = document.querySelector('.translation-progress');
    if (indicator) {
        indicator.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
            indicator.style.display = 'none';
            indicator.style.animation = '';
        }, 300);
    }
    
    // Add slideOut animation
    const existingStyle = document.querySelector('style');
    if (existingStyle && !existingStyle.textContent.includes('@keyframes slideOut')) {
        existingStyle.textContent += `
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
    }
}

// Update navigation menu titles based on current language with batch translation
async function updateNavigationTitles() {
    const titleElements = document.querySelectorAll('.tutorial-title');
    
    if (currentLanguage === 'ka') {
        // Collect all titles that need translation
        const titlesToTranslate = [];
        const elementsToUpdate = [];
        
        titleElements.forEach(element => {
            const englishTitle = element.dataset.en;
            if (englishTitle) {
                // Check if we already have a cached translation
                if (element.dataset.ka) {
                    element.textContent = element.dataset.ka;
                } else {
                    titlesToTranslate.push(englishTitle);
                    elementsToUpdate.push(element);
                }
            }
        });
        
        // Translate all missing titles at once
        if (titlesToTranslate.length > 0) {
            try {
                const translations = await translationService.translateBatch(titlesToTranslate);
                
                elementsToUpdate.forEach((element, index) => {
                    const translation = translations[index];
                    element.dataset.ka = translation; // Cache it
                    element.textContent = translation;
                });
            } catch (error) {
                console.warn('Failed to translate navigation titles');
                // Fallback to English
                elementsToUpdate.forEach(element => {
                    element.textContent = element.dataset.en;
                });
            }
        }
    } else {
        // Use English
        titleElements.forEach(element => {
            element.textContent = element.dataset.en;
        });
    }
}

// DOM Elements
const tutorialTitle = document.getElementById('tutorialTitle');
const tutorialDescription = document.getElementById('tutorialDescription');
const tutorialContent = document.getElementById('tutorialContent');
const codeEditor = document.getElementById('codeEditor');
const consoleOutput = document.getElementById('consoleOutput');
const practiceContent = document.getElementById('practiceContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Button Elements
const runCodeBtn = document.getElementById('runCodeBtn');
const resetBtn = document.getElementById('resetBtn');
const copyCodeBtn = document.getElementById('copyCodeBtn');
const clearCodeBtn = document.getElementById('clearCodeBtn');
const clearConsoleBtn = document.getElementById('clearConsoleBtn');

// Initialize Application
document.addEventListener('DOMContentLoaded', async function() {
    await loadTutorial(currentTutorial);
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Tutorial navigation - query fresh each time to catch all items
    document.querySelectorAll('.tutorial-item').forEach(item => {
        item.addEventListener('click', async () => {
            const tutorial = item.dataset.tutorial;
            console.log('Clicked tutorial:', tutorial);
            await switchTutorial(tutorial);
        });
    });

    // Language switching
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', async () => {
            const lang = option.dataset.lang;
            await switchLanguage(lang);
        });
    });

    // Code execution
    runCodeBtn.addEventListener('click', runCode);
    resetBtn.addEventListener('click', resetCode);
    copyCodeBtn.addEventListener('click', copyCode);
    clearCodeBtn.addEventListener('click', clearCode);
    clearConsoleBtn.addEventListener('click', clearConsole);

    // Navigation buttons
    prevBtn.addEventListener('click', async () => await previousTutorial());
    nextBtn.addEventListener('click', async () => await nextTutorial());

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'Enter':
                    e.preventDefault();
                    runCode();
                    break;
                case 'r':
                    e.preventDefault();
                    resetCode();
                    break;
            }
        }
    });
}

// Load Tutorial Content
async function loadTutorial(tutorialKey) {
    console.log('Loading tutorial:', tutorialKey);
    console.log('Available tutorials:', Object.keys(tutorials));
    const tutorial = tutorials[tutorialKey];
    if (!tutorial) {
        console.error('Tutorial not found:', tutorialKey);
        return;
    }
    console.log('Found tutorial:', tutorial.title);

    currentTutorial = tutorialKey;

    try {
        // Update header with current language
        tutorialTitle.textContent = await getCurrentContent(tutorial.title);
        tutorialDescription.textContent = await getCurrentContent(tutorial.description);

        // Load tutorial content with current language
        let contentHTML = '';
        for (const section of tutorial.content.sections) {
            const sectionTitle = await getCurrentContent(section.title);
            const sectionContent = await getCurrentContent(section.content);
            contentHTML += `
                <div class="content-section">
                    <h2>${sectionTitle}</h2>
                    ${sectionContent}
                </div>
            `;
        }
        tutorialContent.innerHTML = contentHTML;

        // Clear code editor (start fresh)
        codeEditor.value = tutorial.startingCode;

        // Load practice task with current language
        const practiceTitle = await getCurrentContent(tutorial.practice.title);
        const practiceDescription = await getCurrentContent(tutorial.practice.description);
        const practiceTask = await getCurrentContent(tutorial.practice.task);
        
        const encouragement = currentLanguage === 'ka' ? 
            "💡 გახსოვდეთ: არასწორი გზა არ არსებობს - უბრალოდ ექსპერიმენტი გააკეთეთ და ისიამოვნეთ სწავლით!" :
            "💡 Remember: There's no right or wrong way - just experiment and have fun learning!";
        
        practiceContent.innerHTML = `
            <h4>${practiceTitle}</h4>
            <p class="practice-description">${practiceDescription}</p>
            <div class="practice-task">
                <h5>📝 ${currentLanguage === 'ka' ? 'თქვენი ამოცანა:' : 'Your Task:'}</h5>
                <pre>${practiceTask}</pre>
            </div>
            <p style="color: #64748b; font-style: italic; margin-top: 1rem;">
                ${encouragement}
            </p>
        `;

        // Clear console
        clearConsole();

        // Update navigation
        updateNavigation();
        updateActiveItem();

        // Highlight code blocks
        setTimeout(() => {
            if (window.Prism) {
                Prism.highlightAll();
            }
        }, 100);
        
    } catch (error) {
        console.error('Error loading tutorial:', error);
        // Fallback to English if translation fails
        if (currentLanguage === 'ka') {
            currentLanguage = 'en';
            await loadTutorial(tutorialKey);
        }
    }
}

// Switch Tutorial
async function switchTutorial(tutorialKey) {
    await loadTutorial(tutorialKey);
}

// Update Active Navigation Item
function updateActiveItem() {
    document.querySelectorAll('.tutorial-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.tutorial === currentTutorial) {
            item.classList.add('active');
        }
    });
}

// Update Navigation Buttons
function updateNavigation() {
    const tutorialKeys = Object.keys(tutorials);
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === tutorialKeys.length - 1;
}

// Navigation Functions
async function previousTutorial() {
    const tutorialKeys = Object.keys(tutorials);
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    if (currentIndex > 0) {
        await switchTutorial(tutorialKeys[currentIndex - 1]);
    }
}

async function nextTutorial() {
    const tutorialKeys = Object.keys(tutorials);
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    if (currentIndex < tutorialKeys.length - 1) {
        await switchTutorial(tutorialKeys[currentIndex + 1]);
    }
}

// Code Execution
function runCode() {
    const code = codeEditor.value;
    clearConsole();
    
    if (!code.trim()) {
        const message = currentLanguage === 'ka' ? 
            'ჯერ კოდი დაწერეთ, შემდეგ დააჭირეთ გაშვებას! 🚀' : 
            'Write some code first, then click Run! 🚀';
        addToConsole(message, 'info');
        return;
    }
    
    // Create a safe console for capturing output
    const capturedLogs = [];
    const originalConsole = console.log;
    
    try {
        // Override console.log to capture output
        console.log = (...args) => {
            capturedLogs.push(args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
        };
        
        // Execute the code
        eval(code);
        
        // Display captured output
        if (capturedLogs.length === 0) {
            const message = currentLanguage === 'ka' ? 
                'კოდი წარმატებით შესრულდა (გამოსატანი არ არის)' : 
                'Code executed successfully (no output)';
            addToConsole(message, 'info');
        } else {
            capturedLogs.forEach(log => addToConsole(log));
        }
        
    } catch (error) {
        const errorLabel = currentLanguage === 'ka' ? 'შეცდომა:' : 'Error:';
        addToConsole(`${errorLabel} ${error.message}`, 'error');
    } finally {
        // Restore original console.log
        console.log = originalConsole;
    }
}

// Code Management Functions
function resetCode() {
    const tutorial = tutorials[currentTutorial];
    codeEditor.value = tutorial.startingCode;
    clearConsole();
    if (tutorial.startingCode.trim()) {
        const message = currentLanguage === 'ka' ? 
            'კოდი განულდა საწყის მაგალითზე' : 
            'Code reset to original example';
        addToConsole(message, 'info');
    }
}

function copyCode() {
    if (!codeEditor.value.trim()) {
        const message = currentLanguage === 'ka' ? 
            'კოპირებისთვის კოდი არ არის! ჯერ რაღაც დაწერეთ 📝' : 
            'No code to copy! Write something first 📝';
        addToConsole(message, 'info');
        return;
    }
    
    codeEditor.select();
    navigator.clipboard.writeText(codeEditor.value).then(() => {
        const message = currentLanguage === 'ka' ? 
            'კოდი კლიპბორდში დაკოპირდა! 📋' : 
            'Code copied to clipboard! 📋';
        addToConsole(message, 'info');
    }).catch(() => {
        // Fallback for older browsers
        document.execCommand('copy');
        const message = currentLanguage === 'ka' ? 
            'კოდი კლიპბორდში დაკოპირდა! 📋' : 
            'Code copied to clipboard! 📋';
        addToConsole(message, 'info');
    });
}

function clearCode() {
    codeEditor.value = '';
    clearConsole();
}

function clearConsole() {
    consoleOutput.innerHTML = '';
}

// Console Output Functions
function addToConsole(message, type = 'normal') {
    const line = document.createElement('div');
    line.className = `console-line ${type}`;
    line.textContent = `> ${message}`;
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
} 