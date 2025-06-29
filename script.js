// Application State
let currentLanguage = 'en';

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
    }
};

// Application State  
let currentTutorial = 'variables';

// Language switching functionality
function getCurrentContent(contentObj) {
    if (typeof contentObj === 'string') {
        return contentObj;
    }
    return contentObj[currentLanguage] || contentObj.en;
}

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language option
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
    
    // Reload current tutorial with new language
    loadTutorial(currentTutorial);
}

// DOM Elements
const tutorialItems = document.querySelectorAll('.tutorial-item');
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
document.addEventListener('DOMContentLoaded', function() {
    loadTutorial(currentTutorial);
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Tutorial navigation
    tutorialItems.forEach(item => {
        item.addEventListener('click', () => {
            const tutorial = item.dataset.tutorial;
            switchTutorial(tutorial);
        });
    });

    // Language switching
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            switchLanguage(lang);
        });
    });

    // Code execution
    runCodeBtn.addEventListener('click', runCode);
    resetBtn.addEventListener('click', resetCode);
    copyCodeBtn.addEventListener('click', copyCode);
    clearCodeBtn.addEventListener('click', clearCode);
    clearConsoleBtn.addEventListener('click', clearConsole);

    // Navigation buttons
    prevBtn.addEventListener('click', previousTutorial);
    nextBtn.addEventListener('click', nextTutorial);

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
function loadTutorial(tutorialKey) {
    const tutorial = tutorials[tutorialKey];
    if (!tutorial) return;

    currentTutorial = tutorialKey;

    // Update header with current language
    tutorialTitle.textContent = getCurrentContent(tutorial.title);
    tutorialDescription.textContent = getCurrentContent(tutorial.description);

    // Load tutorial content with current language
    let contentHTML = '';
    tutorial.content.sections.forEach(section => {
        contentHTML += `
            <div class="content-section">
                <h2>${getCurrentContent(section.title)}</h2>
                ${getCurrentContent(section.content)}
            </div>
        `;
    });
    tutorialContent.innerHTML = contentHTML;

    // Clear code editor (start fresh)
    codeEditor.value = tutorial.startingCode;

    // Load practice task with current language
    const encouragement = currentLanguage === 'ka' ? 
        "💡 გახსოვდეთ: არასწორი გზა არ არსებობს - უბრალოდ ექსპერიმენტი გააკეთეთ და ისიამოვნეთ სწავლით!" :
        "💡 Remember: There's no right or wrong way - just experiment and have fun learning!";
    
    practiceContent.innerHTML = `
        <h4>${getCurrentContent(tutorial.practice.title)}</h4>
        <p class="practice-description">${getCurrentContent(tutorial.practice.description)}</p>
        <div class="practice-task">
            <h5>📝 ${currentLanguage === 'ka' ? 'თქვენი ამოცანა:' : 'Your Task:'}</h5>
            <pre>${getCurrentContent(tutorial.practice.task)}</pre>
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
}

// Switch Tutorial
function switchTutorial(tutorialKey) {
    loadTutorial(tutorialKey);
}

// Update Active Navigation Item
function updateActiveItem() {
    tutorialItems.forEach(item => {
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
function previousTutorial() {
    const tutorialKeys = Object.keys(tutorials);
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    if (currentIndex > 0) {
        switchTutorial(tutorialKeys[currentIndex - 1]);
    }
}

function nextTutorial() {
    const tutorialKeys = Object.keys(tutorials);
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    if (currentIndex < tutorialKeys.length - 1) {
        switchTutorial(tutorialKeys[currentIndex + 1]);
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