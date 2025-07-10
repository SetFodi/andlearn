// React Tutorial Navigation System
let currentTutorial = 'react_basics';
let currentLanguage = localStorage.getItem('language') || 'en';

// React tutorials
const reactTutorials = {
    react_basics: { 
        en: { title: "React Basics", description: "Setting up and understanding React" },
        ka: { title: "React საფუძვლები", description: "React-ის დაყენება და გაგება" }
    },
    react_components: { 
        en: { title: "React Components", description: "Building reusable UI components" },
        ka: { title: "React კომპონენტები", description: "მრავალჯერ გამოსაყენებელი UI კომპონენტების აგება" }
    },
    react_props: { 
        en: { title: "React Props", description: "Passing data between components" },
        ka: { title: "React Props", description: "მონაცემების გადაცემა კომპონენტებს შორის" }
    },
    react_state: { 
        en: { title: "React State", description: "Managing dynamic data with useState" },
        ka: { title: "React State", description: "დინამიური მონაცემების მართვა useState-ით" }
    },
    react_events: { 
        en: { title: "Event Handling in React", description: "Handling user interactions" },
        ka: { title: "Event-ების მართვა React-ში", description: "მომხმარებლის ინტერაქციების დამუშავება" }
    },
    react_conditional: { 
        en: { title: "Conditional Rendering", description: "Show different UI based on conditions" },
        ka: { title: "პირობითი რენდერინგი", description: "სხვადასხვა UI-ის ჩვენება პირობების მიხედვით" }
    },
    react_lists: { 
        en: { title: "Lists and Keys", description: "Rendering dynamic lists efficiently" },
        ka: { title: "სიები და Key-ები", description: "დინამიური სიების ეფექტურად რენდერინგი" }
    },
    react_forms: { 
        en: { title: "Forms & Validation", description: "Handling user input and validation" },
        ka: { title: "ფორმები და ვალიდაცია", description: "მომხმარებლის შეყვანის დამუშავება და ვალიდაცია" }
    },
    react_useeffect: { 
        en: { title: "useEffect Hook", description: "Side effects and lifecycle" },
        ka: { title: "useEffect Hook", description: "გვერდითი ეფექტები და ცხოვრების ციკლი" }
    },
    react_context: { 
        en: { title: "Context API", description: "Global state management" },
        ka: { title: "Context API", description: "გლობალური state-ის მართვა" }
    },
    react_router: { 
        en: { title: "React Router", description: "Navigation and routing" },
        ka: { title: "React Router", description: "ნავიგაცია და მარშრუტიზაცია" }
    }
};

// React tutorial order
const reactTutorialOrder = ['react_basics', 'react_components', 'react_props', 'react_state', 'react_events', 'react_conditional', 'react_lists', 'react_forms', 'react_useeffect', 'react_context', 'react_router'];

// UI translations
const uiText = {
    en: {
        'nav-home': 'Home',
        'nav-categories': 'Categories',
        'react': 'React',
        'react-interactive': 'Interactive Tutorials',
        'react-progress-text': 'tutorials to master React from basics to advanced concepts',
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced'
    },
    ka: {
        'nav-home': 'მთავარი',
        'nav-categories': 'კატეგორიები',
        'react': 'React',
        'react-interactive': 'ინტერაქტიული გაკვეთილები',
        'react-progress-text': 'გაკვეთილი React-ის დასაუფლებლად საწყისებიდან გაღრმავებულ კონცეფციებამდე',
        'beginner': 'დამწყები',
        'intermediate': 'საშუალო',
        'advanced': 'გაღრმავებული'
    }
};

// React tutorial content
const reactTutorialContent = {
    react_basics: {
        en: {
            concept: "React is a JavaScript library for building user interfaces. It allows you to create reusable components and manage state efficiently. Think of it as building blocks for creating interactive web applications!",
            examples: [
                { title: "Create React App", code: 'npx create-react-app my-app\ncd my-app\nnpm start', desc: "Start a new React project" },
                { title: "Project Structure", code: 'src/\n  App.js       // Main component\n  index.js     // Entry point\n  index.css    // Styles\npublic/\n  index.html   // HTML template', desc: "Understanding the file structure" },
                { title: "Development Server", code: 'npm start\n// Opens http://localhost:3000', desc: "Start the development server" }
            ],
            practice: {
                title: "Setup Your First React App",
                tasks: [
                    "Create a new React app using create-react-app",
                    "Explore the project structure (src, public, node_modules)",
                    "Start the development server with npm start",
                    "Open the app in your browser and see the default React page"
                ]
            }
        },
        ka: {
            concept: "React არის JavaScript ბიბლიოთეკა მომხმარებლის ინტერფეისების ასაშენებლად. ის საშუალებას გაძლევთ შექმნათ მრავალჯერ გამოსაყენებელი კომპონენტები და ეფექტურად მართოთ state. იფიქრეთ ამაზე როგორც სამშენებლო ბლოკებზე ინტერაქტიული ვებ აპლიკაციების შესაქმნელად!",
            examples: [
                { title: "React აპის შექმნა", code: 'npx create-react-app my-app\ncd my-app\nnpm start', desc: "დაიწყეთ ახალი React პროექტი" },
                { title: "პროექტის სტრუქტურა", code: 'src/\n  App.js       // მთავარი კომპონენტი\n  index.js     // შესასვლელი წერტილი\n  index.css    // სტილები\npublic/\n  index.html   // HTML ტემპლეიტი', desc: "ფაილების სტრუქტურის გაგება" },
                { title: "განვითარების სერვერი", code: 'npm start\n// იხსნება http://localhost:3000', desc: "განვითარების სერვერის გაშვება" }
            ],
            practice: {
                title: "მოამზადეთ თქვენი პირველი React აპი",
                tasks: [
                    "შექმენით ახალი React აპი create-react-app-ის გამოყენებით",
                    "გამოიკვლიეთ პროექტის სტრუქტურა (src, public, node_modules)",
                    "გაუშვით განვითარების სერვერი npm start-ით",
                    "გახსენით აპი ბრაუზერში და ნახეთ ნაგულისხმევი React გვერდი"
                ]
            }
        }
    },
    react_components: {
        en: {
            concept: "Components are the building blocks of React applications. They are like custom HTML elements that you can reuse throughout your app. Functional components are the modern way to create components in React.",
            examples: [
                { title: "Functional Component", code: 'function Welcome() {\n  return <h1>Hello, World!</h1>;\n}', desc: "A simple component that returns JSX" },
                { title: "Using JSX", code: 'function UserCard() {\n  return (\n    <div className="card">\n      <h2>John Doe</h2>\n      <p>Web Developer</p>\n    </div>\n  );\n}', desc: "JSX lets you write HTML-like code in JavaScript" },
                { title: "Using Components", code: 'function App() {\n  return (\n    <div>\n      <Welcome />\n      <UserCard />\n    </div>\n  );\n}', desc: "Use components like HTML tags" }
            ],
            practice: {
                title: "Create Your First Components",
                tasks: [
                    "Create a functional component called Header that returns an h1 with your name",
                    "Create a Footer component with copyright information",
                    "Use both components in your App component",
                    "Experiment with different JSX elements (divs, paragraphs, etc.)"
                ]
            }
        },
        ka: {
            concept: "კომპონენტები არის React აპლიკაციების სამშენებლო ბლოკები. ისინი არის მორგებული HTML ელემენტების მსგავსი რომლებიც შეგიძლიათ მრავალჯერ გამოიყენოთ თქვენს აპში. ფუნქციური კომპონენტები არის თანამედროვე გზა კომპონენტების შესაქმნელად React-ში.",
            examples: [
                { title: "ფუნქციური კომპონენტი", code: 'function Welcome() {\n  return <h1>გამარჯობა, მსოფლიო!</h1>;\n}', desc: "მარტივი კომპონენტი რომელიც აბრუნებს JSX-ს" },
                { title: "JSX-ის გამოყენება", code: 'function UserCard() {\n  return (\n    <div className="card">\n      <h2>ჯონ დოუ</h2>\n      <p>ვებ დეველოპერი</p>\n    </div>\n  );\n}', desc: "JSX საშუალებას გაძლევთ დაწეროთ HTML-ის მსგავსი კოდი JavaScript-ში" },
                { title: "კომპონენტების გამოყენება", code: 'function App() {\n  return (\n    <div>\n      <Welcome />\n      <UserCard />\n    </div>\n  );\n}', desc: "გამოიყენეთ კომპონენტები HTML ტეგების მსგავსად" }
            ],
            practice: {
                title: "შექმენით თქვენი პირველი კომპონენტები",
                tasks: [
                    "შექმენით ფუნქციური კომპონენტი სახელად Header რომელიც აბრუნებს h1-ს თქვენი სახელით",
                    "შექმენით Footer კომპონენტი საავტორო უფლებების ინფორმაციით",
                    "გამოიყენეთ ორივე კომპონენტი თქვენს App კომპონენტში",
                    "ექსპერიმენტირებდით სხვადასხვა JSX ელემენტებით (div-ები, პარაგრაფები, და ა.შ.)"
                ]
            }
        }
    },
    react_props: {
        en: {
            concept: "Props (properties) are how you pass data from parent components to child components. Think of props as arguments to a function - they allow you to make components reusable and dynamic.",
            examples: [
                { title: "Passing Props", code: 'function Greeting(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\n\n// Usage:\n<Greeting name="Alice" />', desc: "Pass data to components using props" },
                { title: "Multiple Props", code: 'function UserInfo(props) {\n  return (\n    <div>\n      <h2>{props.name}</h2>\n      <p>Age: {props.age}</p>\n      <p>City: {props.city}</p>\n    </div>\n  );\n}', desc: "Components can receive multiple props" },
                { title: "Using Props", code: 'function App() {\n  return (\n    <div>\n      <UserInfo name="John" age={25} city="Tbilisi" />\n      <UserInfo name="Jane" age={30} city="Batumi" />\n    </div>\n  );\n}', desc: "Reuse components with different data" }
            ],
            practice: {
                title: "Master Props",
                tasks: [
                    "Create a PersonCard component that accepts name, age, and hobby as props",
                    "Use the PersonCard component multiple times with different props",
                    "Create a Button component that accepts text and color props",
                    "Experiment with passing different types of data (strings, numbers, booleans)"
                ]
            }
        },
        ka: {
            concept: "Props (თვისებები) არის გზა თუ როგორ გადაიცემა მონაცემები მშობელი კომპონენტებიდან შვილ კომპონენტებზე. იფიქრეთ props-ებზე როგორც ფუნქციის არგუმენტებზე - ისინი საშუალებას გაძლევთ გახადოთ კომპონენტები მრავალჯერ გამოსაყენებელი და დინამიური.",
            examples: [
                { title: "Props-ების გადაცემა", code: 'function Greeting(props) {\n  return <h1>გამარჯობა, {props.name}!</h1>;\n}\n\n// გამოყენება:\n<Greeting name="ალისი" />', desc: "გადაიცემით მონაცემები კომპონენტებზე props-ების გამოყენებით" },
                { title: "მრავალი Props", code: 'function UserInfo(props) {\n  return (\n    <div>\n      <h2>{props.name}</h2>\n      <p>ასაკი: {props.age}</p>\n      <p>ქალაქი: {props.city}</p>\n    </div>\n  );\n}', desc: "კომპონენტებს შეუძლიათ მიიღონ მრავალი props" },
                { title: "Props-ების გამოყენება", code: 'function App() {\n  return (\n    <div>\n      <UserInfo name="ჯონი" age={25} city="თბილისი" />\n      <UserInfo name="ჯეინი" age={30} city="ბათუმი" />\n    </div>\n  );\n}', desc: "მრავალჯერ გამოიყენეთ კომპონენტები სხვადასხვა მონაცემებით" }
            ],
            practice: {
                title: "დაეუფლეთ Props-ებს",
                tasks: [
                    "შექმენით PersonCard კომპონენტი რომელიც იღებს name, age და hobby props-ებს",
                    "გამოიყენეთ PersonCard კომპონენტი მრავალჯერ სხვადასხვა props-ებით",
                    "შექმენით Button კომპონენტი რომელიც იღებს text და color props-ებს",
                    "ექსპერიმენტირებდით სხვადასხვა ტიპის მონაცემების გადაცემაში (strings, numbers, booleans)"
                ]
            }
        }
    },
    react_state: {
        en: {
            concept: "State allows components to have changing data that affects what gets rendered. useState is a React Hook that lets you add state to functional components. When state changes, the component re-renders automatically.",
            examples: [
                { title: "Basic useState", code: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}', desc: "Manage changing data with useState" },
                { title: "State with Strings", code: 'function NameInput() {\n  const [name, setName] = useState("");\n  \n  return (\n    <div>\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <p>Hello, {name}!</p>\n    </div>\n  );\n}', desc: "Handle text input with state" },
                { title: "Multiple State Variables", code: 'function UserProfile() {\n  const [name, setName] = useState("");\n  const [age, setAge] = useState(0);\n  const [isVisible, setIsVisible] = useState(true);\n  \n  return (\n    <div>\n      {isVisible && (\n        <div>\n          <p>Name: {name}</p>\n          <p>Age: {age}</p>\n        </div>\n      )}\n    </div>\n  );\n}', desc: "Use multiple state variables" }
            ],
            practice: {
                title: "Practice State Management",
                tasks: [
                    "Create a counter component that can increment and decrement",
                    "Build a text input that shows what you type in real-time",
                    "Create a toggle button that shows/hides content",
                    "Build a simple form with multiple input fields using state"
                ]
            }
        },
        ka: {
            concept: "State საშუალებას აძლევს კომპონენტებს ჰქონდეთ ცვალებადი მონაცემები რაც გავლენას ახდენს იმაზე რა რენდერდება. useState არის React Hook რომელიც საშუალებას გაძლევთ დაამატოთ state ფუნქციურ კომპონენტებს. როცა state იცვლება, კომპონენტი ავტომატურად ხელახლა რენდერდება.",
            examples: [
                { title: "ძირითადი useState", code: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>რაოდენობა: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        გაზრდა\n      </button>\n    </div>\n  );\n}', desc: "მართეთ ცვალებადი მონაცემები useState-ით" },
                { title: "State სტრინგებით", code: 'function NameInput() {\n  const [name, setName] = useState("");\n  \n  return (\n    <div>\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <p>გამარჯობა, {name}!</p>\n    </div>\n  );\n}', desc: "დაამუშავეთ ტექსტის შეყვანა state-ით" },
                { title: "მრავალი State ცვლადი", code: 'function UserProfile() {\n  const [name, setName] = useState("");\n  const [age, setAge] = useState(0);\n  const [isVisible, setIsVisible] = useState(true);\n  \n  return (\n    <div>\n      {isVisible && (\n        <div>\n          <p>სახელი: {name}</p>\n          <p>ასაკი: {age}</p>\n        </div>\n      )}\n    </div>\n  );\n}', desc: "გამოიყენეთ მრავალი state ცვლადი" }
            ],
            practice: {
                title: "გაივარჯიშეთ State მართვაში",
                tasks: [
                    "შექმენით counter კომპონენტი რომელსაც შეუძლია გაზრდა და შემცირება",
                    "ააშენეთ ტექსტის შეყვანის ველი რომელიც რეალურ დროში აჩვენებს რასაც ბეჭდავთ",
                    "შექმენით toggle ღილაკი რომელიც აჩვენებს/მალავს შინაარსს",
                    "ააშენეთ მარტივი ფორმა მრავალი შეყვანის ველით state-ის გამოყენებით"
                ]
            }
        }
    },
    react_events: {
        en: {
            concept: "Event handling in React lets you respond to user interactions like clicks, form submissions, and input changes. React uses synthetic events that work consistently across different browsers.",
            examples: [
                { title: "Click Events", code: 'function ClickButton() {\n  const handleClick = () => {\n    alert("Button clicked!");\n  };\n  \n  return (\n    <button onClick={handleClick}>\n      Click me!\n    </button>\n  );\n}', desc: "Handle button clicks" },
                { title: "Form Handling", code: 'function ContactForm() {\n  const [email, setEmail] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("Email:", email);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}', desc: "Handle form submissions" },
                { title: "Controlled Components", code: 'function ControlledInput() {\n  const [value, setValue] = useState("");\n  \n  return (\n    <div>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        placeholder="Type here..."\n      />\n      <button onClick={() => setValue("")}>\n        Clear\n      </button>\n    </div>\n  );\n}', desc: "Control input fields with state" }
            ],
            practice: {
                title: "Master Event Handling",
                tasks: [
                    "Create a button that changes the background color when clicked",
                    "Build a form that captures user input and displays it",
                    "Create a controlled input field with a clear button",
                    "Build a counter with increment, decrement, and reset buttons"
                ]
            }
        },
        ka: {
            concept: "Event-ების მართვა React-ში საშუალებას გაძლევთ ჩაერთოთ მომხმარებლის ინტერაქციებში როგორიცაა clicks, ფორმის გაგზავნა და შეყვანის ცვლილებები. React იყენებს სინთეტიკ event-ებს რომლებიც ერთნაირად მუშაობენ სხვადასხვა ბრაუზერში.",
            examples: [
                { title: "Click Event-ები", code: 'function ClickButton() {\n  const handleClick = () => {\n    alert("ღილაკზე დააჭირეს!");\n  };\n  \n  return (\n    <button onClick={handleClick}>\n      დააჭირეთ!\n    </button>\n  );\n}', desc: "ღილაკზე დაჭერის დამუშავება" },
                { title: "ფორმის მართვა", code: 'function ContactForm() {\n  const [email, setEmail] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("ემეილი:", email);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n      <button type="submit">გაგზავნა</button>\n    </form>\n  );\n}', desc: "ფორმის გაგზავნის დამუშავება" },
                { title: "კონტროლირებადი კომპონენტები", code: 'function ControlledInput() {\n  const [value, setValue] = useState("");\n  \n  return (\n    <div>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        placeholder="აქ ბეჭდეთ..."\n      />\n      <button onClick={() => setValue("")}>\n        გაწმენდა\n      </button>\n    </div>\n  );\n}', desc: "შეყვანის ველების კონტროლი state-ით" }
            ],
            practice: {
                title: "დაეუფლეთ Event მართვას",
                tasks: [
                    "შექმენით ღილაკი რომელიც ცვლის ფონის ფერს დაჭერისას",
                    "ააშენეთ ფორმა რომელიც იღებს მომხმარებლის შეყვანას და აჩვენებს მას",
                    "შექმენით კონტროლირებადი შეყვანის ველი გაწმენდის ღილაკით",
                    "ააშენეთ counter გაზრდის, შემცირებისა და ნულზე დაბრუნების ღილაკებით"
                ]
            }
        }
    },
    react_conditional: {
        en: {
            concept: "Conditional rendering allows you to show different content based on certain conditions. You can use if-else statements, ternary operators, or logical AND (&&) to conditionally render components or elements.",
            examples: [
                { title: "Ternary Operator", code: 'function WelcomeMessage({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn ? (\n        <h1>Welcome back!</h1>\n      ) : (\n        <h1>Please sign in</h1>\n      )}\n    </div>\n  );\n}', desc: "Show different content based on condition" },
                { title: "Logical AND (&&)", code: 'function Notification({ hasMessages }) {\n  return (\n    <div>\n      <h2>Dashboard</h2>\n      {hasMessages && (\n        <div className="alert">\n          You have new messages!\n        </div>\n      )}\n    </div>\n  );\n}', desc: "Show content only when condition is true" },
                { title: "If-Else with State", code: 'function LoginForm() {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n  \n  if (isLoggedIn) {\n    return <h1>Welcome to your dashboard!</h1>;\n  }\n  \n  return (\n    <button onClick={() => setIsLoggedIn(true)}>\n      Login\n    </button>\n  );\n}', desc: "Use if-else statements for complex conditions" }
            ],
            practice: {
                title: "Master Conditional Rendering",
                tasks: [
                    "Create a component that shows different messages for day/night",
                    "Build a toggle component that shows/hides content with a button",
                    "Create a user profile that shows different info for admin vs regular user",
                    "Build a loading component that shows a spinner while data is being fetched"
                ]
            }
        },
        ka: {
            concept: "პირობითი რენდერინგი საშუალებას გაძლევთ აჩვენოთ სხვადასხვა შინაარსი გარკვეული პირობების საფუძველზე. შეგიძლიათ გამოიყენოთ if-else განცხადებები, ternary ოპერატორები, ან ლოგიკური AND (&&) კომპონენტების ან ელემენტების პირობითად რენდერისთვის.",
            examples: [
                { title: "Ternary ოპერატორი", code: 'function WelcomeMessage({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn ? (\n        <h1>კეთილი იყოს თქვენი დაბრუნება!</h1>\n      ) : (\n        <h1>გთხოვთ შეხვიდეთ</h1>\n      )}\n    </div>\n  );\n}', desc: "აჩვენეთ სხვადასხვა შინაარსი პირობის საფუძველზე" },
                { title: "ლოგიკური AND (&&)", code: 'function Notification({ hasMessages }) {\n  return (\n    <div>\n      <h2>პანელი</h2>\n      {hasMessages && (\n        <div className="alert">\n          თქვენ გაქვთ ახალი შეტყობინებები!\n        </div>\n      )}\n    </div>\n  );\n}', desc: "აჩვენეთ შინაარსი მხოლოდ მაშინ როცა პირობა ჭეშმარიტია" },
                { title: "If-Else State-ით", code: 'function LoginForm() {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n  \n  if (isLoggedIn) {\n    return <h1>კეთილი იყოს თქვენი პანელზე მობრძანება!</h1>;\n  }\n  \n  return (\n    <button onClick={() => setIsLoggedIn(true)}>\n      შესვლა\n    </button>\n  );\n}', desc: "გამოიყენეთ if-else განცხადებები რთული პირობებისთვის" }
            ],
            practice: {
                title: "დაეუფლეთ პირობით რენდერინგს",
                tasks: [
                    "შექმენით კომპონენტი რომელიც აჩვენებს სხვადასხვა შეტყობინებებს დღე/ღამისთვის",
                    "ააშენეთ toggle კომპონენტი რომელიც აჩვენებს/მალავს შინაარსს ღილაკით",
                    "შექმენით მომხმარებლის პროფილი რომელიც აჩვენებს სხვადასხვა ინფორმაციას ადმინისა და ჩვეულებრივი მომხმარებლისთვის",
                    "ააშენეთ ჩატვირთვის კომპონენტი რომელიც აჩვენებს spinner-ს მონაცემების ჩატვირთვისას"
                ]
            }
        }
    },
    react_lists: {
        en: {
            concept: "When you need to render multiple items, React requires a unique 'key' prop for each item. Keys help React identify which items have changed, been added, or removed, making updates more efficient.",
            examples: [
                { title: "Basic List", code: 'function ItemList() {\n  const items = ["Apple", "Banana", "Cherry"];\n  \n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}', desc: "Render a simple list with map()" },
                { title: "List with Objects", code: 'function UserList() {\n  const users = [\n    {id: 1, name: "John", age: 25},\n    {id: 2, name: "Jane", age: 30},\n    {id: 3, name: "Bob", age: 35}\n  ];\n  \n  return (\n    <ul>\n      {users.map(user => (\n        <li key={user.id}>\n          {user.name} (Age: {user.age})\n        </li>\n      ))}\n    </ul>\n  );\n}', desc: "Use unique IDs as keys for better performance" },
                { title: "Dynamic List with State", code: 'function TodoList() {\n  const [todos, setTodos] = useState([\n    {id: 1, text: "Learn React", done: false},\n    {id: 2, text: "Build a project", done: false}\n  ]);\n  \n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id} style={{textDecoration: todo.done ? "line-through" : "none"}}>\n          {todo.text}\n        </li>\n      ))}\n    </ul>\n  );\n}', desc: "Combine lists with state for dynamic content" }
            ],
            practice: {
                title: "Practice with Lists and Keys",
                tasks: [
                    "Create a list of your favorite movies with title and year",
                    "Build a product list component that shows name, price, and description",
                    "Create a dynamic todo list where you can add and remove items",
                    "Experiment with filtering lists based on search input"
                ]
            }
        },
        ka: {
            concept: "როცა გჭირდებათ მრავალი ელემენტის რენდერი, React მოითხოვს უნიკალურ 'key' prop-ს თითოეული ელემენტისთვის. Key-ები ეხმარება React-ს იდენტიფიცირება რომელი ელემენტები შეიცვალა, დაემატა, ან წაიშალა, რაც განახლებებს უფრო ეფექტურს ხდის.",
            examples: [
                { title: "ძირითადი სია", code: 'function ItemList() {\n  const items = ["ვაშლი", "ბანანი", "ალუბალი"];\n  \n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}', desc: "მარტივი სიის რენდერი map()-ით" },
                { title: "ობიექტების სია", code: 'function UserList() {\n  const users = [\n    {id: 1, name: "ჯონი", age: 25},\n    {id: 2, name: "ჯეინი", age: 30},\n    {id: 3, name: "ბობი", age: 35}\n  ];\n  \n  return (\n    <ul>\n      {users.map(user => (\n        <li key={user.id}>\n          {user.name} (ასაკი: {user.age})\n        </li>\n      ))}\n    </ul>\n  );\n}', desc: "გამოიყენეთ უნიკალური ID-ები key-ებად უკეთესი პერფორმანსისთვის" },
                { title: "დინამიური სია State-ით", code: 'function TodoList() {\n  const [todos, setTodos] = useState([\n    {id: 1, text: "ისწავლეთ React", done: false},\n    {id: 2, text: "ააშენეთ პროექტი", done: false}\n  ]);\n  \n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id} style={{textDecoration: todo.done ? "line-through" : "none"}}>\n          {todo.text}\n        </li>\n      ))}\n    </ul>\n  );\n}', desc: "შეაერთეთ სიები state-ით დინამიური შინაარსისთვის" }
            ],
            practice: {
                title: "გაივარჯიშეთ სიებსა და Key-ებში",
                tasks: [
                    "შექმენით თქვენი საყვარელი ფილმების სია სათაურითა და წლით",
                    "ააშენეთ პროდუქტების სიის კომპონენტი რომელიც აჩვენებს სახელს, ფასს და აღწერილობას",
                    "შექმენით დინამიური todo სია სადაც შეგიძლიათ ელემენტების დამატება და წაშლა",
                    "ექსპერიმენტირებდით სიების ფილტრაციაში საძიებო შეყვანის საფუძველზე"
                ]
            }
        }
    },
    react_forms: {
        en: {
            concept: "Forms in React use controlled components where form data is handled by React state. This gives you full control over form inputs and enables real-time validation, formatting, and dynamic behavior.",
            examples: [
                { title: "Controlled Input", code: 'function NameForm() {\n  const [name, setName] = useState("");\n  \n  return (\n    <form>\n      <input\n        type="text"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder="Enter your name"\n      />\n      <p>Hello, {name}!</p>\n    </form>\n  );\n}', desc: "Control input values with state" },
                { title: "Form Submission", code: 'function ContactForm() {\n  const [email, setEmail] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("Email:", email);\n    alert(`Message sent to: ${email}`);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <button type="submit">Send</button>\n    </form>\n  );\n}', desc: "Handle form submission with validation" },
                { title: "Form Validation", code: 'function UserForm() {\n  const [email, setEmail] = useState("");\n  const [error, setError] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (!email.includes("@")) {\n      setError("Please enter a valid email");\n    } else {\n      setError("");\n      alert("Form submitted successfully!");\n    }\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder="Enter email"\n      />\n      {error && <p style={{color: "red"}}>{error}</p>}\n      <button type="submit">Submit</button>\n    </form>\n  );\n}', desc: "Add custom validation with error messages" }
            ],
            practice: {
                title: "Master React Forms",
                tasks: [
                    "Create a login form with username and password fields",
                    "Build a registration form with multiple fields and validation",
                    "Create a survey form with different input types (text, radio, checkbox)",
                    "Build a contact form with real-time character counting"
                ]
            }
        },
        ka: {
            concept: "React-ში ფორმები იყენებენ კონტროლირებად კომპონენტებს სადაც ფორმის მონაცემები მართავს React state. ეს გაძლევთ სრულ კონტროლს ფორმის შეყვანებზე და საშუალებას აძლევს რეალურ დროის ვალიდაციას, ფორმატირებას და დინამიურ ქცევას.",
            examples: [
                { title: "კონტროლირებადი შეყვანა", code: 'function NameForm() {\n  const [name, setName] = useState("");\n  \n  return (\n    <form>\n      <input\n        type="text"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder="შეიყვანეთ თქვენი სახელი"\n      />\n      <p>გამარჯობა, {name}!</p>\n    </form>\n  );\n}', desc: "შეყვანის მნიშვნელობების კონტროლი state-ით" },
                { title: "ფორმის გაგზავნა", code: 'function ContactForm() {\n  const [email, setEmail] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("ემეილი:", email);\n    alert(`შეტყობინება გაიგზავნა: ${email}`);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <button type="submit">გაგზავნა</button>\n    </form>\n  );\n}', desc: "ფორმის გაგზავნის დამუშავება ვალიდაციით" },
                { title: "ფორმის ვალიდაცია", code: 'function UserForm() {\n  const [email, setEmail] = useState("");\n  const [error, setError] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (!email.includes("@")) {\n      setError("გთხოვთ შეიყვანოთ სწორი ემეილი");\n    } else {\n      setError("");\n      alert("ფორმა წარმატებით გაიგზავნა!");\n    }\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder="შეიყვანეთ ემეილი"\n      />\n      {error && <p style={{color: "red"}}>{error}</p>}\n      <button type="submit">გაგზავნა</button>\n    </form>\n  );\n}', desc: "დაამატეთ მორგებული ვალიდაცია შეცდომების შეტყობინებებით" }
            ],
            practice: {
                title: "დაეუფლეთ React ფორმებს",
                tasks: [
                    "შექმენით შესვლის ფორმა მომხმარებლის სახელისა და პაროლის ველებით",
                    "ააშენეთ რეგისტრაციის ფორმა მრავალი ველითა და ვალიდაციით",
                    "შექმენით გამოკითხვის ფორმა სხვადასხვა შეყვანის ტიპებით (ტექსტი, რადიო, checkbox)",
                    "ააშენეთ კონტაქტის ფორმა რეალურ დროის სიმბოლოების დათვლით"
                ]
            }
        }
    },
    react_useeffect: {
        en: {
            concept: "useEffect is a React Hook that lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in class components.",
            examples: [
                { title: "Basic useEffect", code: 'import { useState, useEffect } from "react";\n\nfunction DataFetcher() {\n  const [data, setData] = useState(null);\n  \n  useEffect(() => {\n    fetch("https://jsonplaceholder.typicode.com/posts/1")\n      .then(response => response.json())\n      .then(data => setData(data));\n  }, []); // Empty dependency array = runs once\n  \n  return (\n    <div>\n      {data ? <h1>{data.title}</h1> : <p>Loading...</p>}\n    </div>\n  );\n}', desc: "Fetch data when component mounts" },
                { title: "Cleanup with useEffect", code: 'function Timer() {\n  const [seconds, setSeconds] = useState(0);\n  \n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(prev => prev + 1);\n    }, 1000);\n    \n    // Cleanup function\n    return () => clearInterval(interval);\n  }, []); // Runs once, cleans up when unmounting\n  \n  return <div>Timer: {seconds} seconds</div>;\n}', desc: "Clean up timers and subscriptions" },
                { title: "Effect with Dependencies", code: 'function UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  \n  useEffect(() => {\n    if (userId) {\n      fetch(`/api/users/${userId}`)\n        .then(response => response.json())\n        .then(userData => setUser(userData));\n    }\n  }, [userId]); // Re-run when userId changes\n  \n  return (\n    <div>\n      {user ? <h1>{user.name}</h1> : <p>Select a user</p>}\n    </div>\n  );\n}', desc: "Run effect when specific values change" }
            ],
            practice: {
                title: "Practice useEffect",
                tasks: [
                    "Create a component that fetches weather data on mount",
                    "Build a timer that counts up and can be paused/resumed",
                    "Create a window resize listener that updates component state",
                    "Build a search component that fetches results as user types (with debouncing)"
                ]
            }
        },
        ka: {
            concept: "useEffect არის React Hook რომელიც საშუალებას გაძლევთ შეასრულოთ გვერდითი ეფექტები ფუნქციურ კომპონენტებში. ის ასრულებს იმავე მიზანს როგორც componentDidMount, componentDidUpdate და componentWillUnmount ერთად კლასის კომპონენტებში.",
            examples: [
                { title: "ძირითადი useEffect", code: 'import { useState, useEffect } from "react";\n\nfunction DataFetcher() {\n  const [data, setData] = useState(null);\n  \n  useEffect(() => {\n    fetch("https://jsonplaceholder.typicode.com/posts/1")\n      .then(response => response.json())\n      .then(data => setData(data));\n  }, []); // ცარიელი dependency array = ერთხელ მუშაობს\n  \n  return (\n    <div>\n      {data ? <h1>{data.title}</h1> : <p>იტვირთება...</p>}\n    </div>\n  );\n}', desc: "მონაცემების მოძიება კომპონენტის mount-ისას" },
                { title: "გაწმენდა useEffect-ით", code: 'function Timer() {\n  const [seconds, setSeconds] = useState(0);\n  \n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(prev => prev + 1);\n    }, 1000);\n    \n    // გაწმენდის ფუნქცია\n    return () => clearInterval(interval);\n  }, []); // ერთხელ მუშაობს, იწმინდება unmount-ისას\n  \n  return <div>ტაიმერი: {seconds} წამი</div>;\n}', desc: "ტაიმერებისა და subscription-ების გაწმენდა" },
                { title: "ეფექტი Dependency-ებით", code: 'function UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  \n  useEffect(() => {\n    if (userId) {\n      fetch(`/api/users/${userId}`)\n        .then(response => response.json())\n        .then(userData => setUser(userData));\n    }\n  }, [userId]); // ხელახლა მუშაობს userId-ის შეცვლისას\n  \n  return (\n    <div>\n      {user ? <h1>{user.name}</h1> : <p>აირჩიეთ მომხმარებელი</p>}\n    </div>\n  );\n}', desc: "ეფექტის გაშვება კონკრეტული მნიშვნელობების შეცვლისას" }
            ],
            practice: {
                title: "გაივარჯიშეთ useEffect-ში",
                tasks: [
                    "შექმენით კომპონენტი რომელიც mount-ზე იძიებს ამინდის მონაცემებს",
                    "ააშენეთ ტაიმერი რომელიც ითვლის ზევით და შეიძლება დაპაუზდეს/განახლდეს",
                    "შექმენით window resize listener რომელიც განაახლებს კომპონენტის state-ს",
                    "ააშენეთ საძიებო კომპონენტი რომელიც იძიებს შედეგებს მომხმარებლის ბეჭდვისას (debouncing-ით)"
                ]
            }
        }
    },
    react_context: {
        en: {
            concept: "React Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered 'global' for a tree of React components.",
            examples: [
                { title: "Creating Context", code: 'import { createContext, useContext, useState } from "react";\n\n// Create Context\nconst ThemeContext = createContext();\n\n// Provider Component\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState("light");\n  \n  const toggleTheme = () => {\n    setTheme(theme === "light" ? "dark" : "light");\n  };\n  \n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}', desc: "Create context and provider" },
                { title: "Using Context", code: 'function ThemeButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  \n  return (\n    <button\n      onClick={toggleTheme}\n      style={{\n        backgroundColor: theme === "light" ? "#fff" : "#333",\n        color: theme === "light" ? "#333" : "#fff"\n      }}\n    >\n      Toggle Theme (Current: {theme})\n    </button>\n  );\n}', desc: "Consume context with useContext" },
                { title: "App with Context", code: 'function App() {\n  return (\n    <ThemeProvider>\n      <div>\n        <h1>My App</h1>\n        <ThemeButton />\n        <Content />\n      </div>\n    </ThemeProvider>\n  );\n}\n\nfunction Content() {\n  const { theme } = useContext(ThemeContext);\n  \n  return (\n    <div style={{ color: theme === "light" ? "#333" : "#fff" }}>\n      Content that responds to theme changes!\n    </div>\n  );\n}', desc: "Use context throughout your app" }
            ],
            practice: {
                title: "Practice Context API",
                tasks: [
                    "Create a user authentication context with login/logout functions",
                    "Build a shopping cart context that manages cart items",
                    "Create a language context for internationalization",
                    "Build a notification context for app-wide messages"
                ]
            }
        },
        ka: {
            concept: "React Context უზრუნველყოფს გზას მონაცემების გადაცემისთვის კომპონენტების ხეზე მანუალურად props-ების გადაცემის გარეშე ყველა დონეზე. ის არის შექმნილი იმ მონაცემების გასაზიარებლად რომლებიც შეიძლება ჩაითვალოს 'გლობალურად' React კომპონენტების ხისთვის.",
            examples: [
                { title: "Context-ის შექმნა", code: 'import { createContext, useContext, useState } from "react";\n\n// Context-ის შექმნა\nconst ThemeContext = createContext();\n\n// Provider კომპონენტი\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState("light");\n  \n  const toggleTheme = () => {\n    setTheme(theme === "light" ? "dark" : "light");\n  };\n  \n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}', desc: "შექმენით context და provider" },
                { title: "Context-ის გამოყენება", code: 'function ThemeButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  \n  return (\n    <button\n      onClick={toggleTheme}\n      style={{\n        backgroundColor: theme === "light" ? "#fff" : "#333",\n        color: theme === "light" ? "#333" : "#fff"\n      }}\n    >\n      თემის გადართვა (მიმდინარე: {theme})\n    </button>\n  );\n}', desc: "მოიხმარეთ context useContext-ით" },
                { title: "აპი Context-ით", code: 'function App() {\n  return (\n    <ThemeProvider>\n      <div>\n        <h1>ჩემი აპი</h1>\n        <ThemeButton />\n        <Content />\n      </div>\n    </ThemeProvider>\n  );\n}\n\nfunction Content() {\n  const { theme } = useContext(ThemeContext);\n  \n  return (\n    <div style={{ color: theme === "light" ? "#333" : "#fff" }}>\n      შინაარსი რომელიც რეაგირებს თემის ცვლილებებზე!\n    </div>\n  );\n}', desc: "გამოიყენეთ context მთელ აპში" }
            ],
            practice: {
                title: "გაივარჯიშეთ Context API-ში",
                tasks: [
                    "შექმენით მომხმარებლის ავთენტიფიკაციის context შესვლა/გამოსვლის ფუნქციებით",
                    "ააშენეთ საყიდლების კალათის context რომელიც მართავს კალათის ელემენტებს",
                    "შექმენით ენის context ინტერნაციონალიზაციისთვის",
                    "ააშენეთ შეტყობინებების context მთელი აპის შეტყობინებებისთვის"
                ]
            }
        }
    },
    react_router: {
        en: {
            concept: "React Router enables navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. It's essential for building single-page applications (SPAs).",
            examples: [
                { title: "Basic Router Setup", code: 'import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";\n\nfunction App() {\n  return (\n    <Router>\n      <nav>\n        <Link to="/">Home</Link> | \n        <Link to="/about">About</Link> | \n        <Link to="/contact">Contact</Link>\n      </nav>\n      \n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n        <Route path="/contact" element={<Contact />} />\n      </Routes>\n    </Router>\n  );\n}', desc: "Set up basic routing with multiple pages" },
                { title: "Navigation Components", code: 'function Home() {\n  return <h1>Welcome to Home Page</h1>;\n}\n\nfunction About() {\n  return (\n    <div>\n      <h1>About Us</h1>\n      <p>This is the about page content.</p>\n    </div>\n  );\n}\n\nfunction Contact() {\n  return (\n    <div>\n      <h1>Contact Us</h1>\n      <p>Email: contact@example.com</p>\n    </div>\n  );\n}', desc: "Create different page components" },
                { title: "Navigation Bar", code: 'function Navbar() {\n  return (\n    <nav style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>\n      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>\n      <Link to="/about" style={{ marginRight: "20px" }}>About</Link>\n      <Link to="/contact">Contact</Link>\n    </nav>\n  );\n}\n\n// Use in App component\nfunction App() {\n  return (\n    <Router>\n      <Navbar />\n      <div style={{ padding: "20px" }}>\n        <Routes>\n          <Route path="/" element={<Home />} />\n          <Route path="/about" element={<About />} />\n          <Route path="/contact" element={<Contact />} />\n        </Routes>\n      </div>\n    </Router>\n  );\n}', desc: "Create a reusable navigation component" }
            ],
            practice: {
                title: "Master React Router",
                tasks: [
                    "Create a multi-page portfolio website with Home, Projects, and About pages",
                    "Build a blog with a list page and individual post pages",
                    "Create a dashboard with different sections (Profile, Settings, Analytics)",
                    "Build an e-commerce site with product listing and product detail pages"
                ]
            }
        },
        ka: {
            concept: "React Router უზრუნველყოფს ნავიგაციას სხვადასხვა კომპონენტების ხედებს შორის React აპლიკაციაში, საშუალებას აძლევს ბრაუზერის URL-ის შეცვლას, და UI-ს URL-თან სინქრონიზებულად ინახავს. ის აუცილებელია single-page applications (SPAs) ასაშენებლად.",
            examples: [
                { title: "ძირითადი Router დაყენება", code: 'import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";\n\nfunction App() {\n  return (\n    <Router>\n      <nav>\n        <Link to="/">მთავარი</Link> | \n        <Link to="/about">ჩვენ შესახებ</Link> | \n        <Link to="/contact">კონტაქტი</Link>\n      </nav>\n      \n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n        <Route path="/contact" element={<Contact />} />\n      </Routes>\n    </Router>\n  );\n}', desc: "მოამზადეთ ძირითადი routing მრავალი გვერდით" },
                { title: "ნავიგაციის კომპონენტები", code: 'function Home() {\n  return <h1>კეთილი იყოს თქვენი მობრძანება მთავარ გვერდზე</h1>;\n}\n\nfunction About() {\n  return (\n    <div>\n      <h1>ჩვენ შესახებ</h1>\n      <p>ეს არის "ჩვენ შესახებ" გვერდის შინაარსი.</p>\n    </div>\n  );\n}\n\nfunction Contact() {\n  return (\n    <div>\n      <h1>დაგვიკავშირდით</h1>\n      <p>ემეილი: contact@example.com</p>\n    </div>\n  );\n}', desc: "შექმენით სხვადასხვა გვერდის კომპონენტები" },
                { title: "ნავიგაციის ზოლი", code: 'function Navbar() {\n  return (\n    <nav style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>\n      <Link to="/" style={{ marginRight: "20px" }}>მთავარი</Link>\n      <Link to="/about" style={{ marginRight: "20px" }}>ჩვენ შესახებ</Link>\n      <Link to="/contact">კონტაქტი</Link>\n    </nav>\n  );\n}\n\n// გამოიყენეთ App კომპონენტში\nfunction App() {\n  return (\n    <Router>\n      <Navbar />\n      <div style={{ padding: "20px" }}>\n        <Routes>\n          <Route path="/" element={<Home />} />\n          <Route path="/about" element={<About />} />\n          <Route path="/contact" element={<Contact />} />\n        </Routes>\n      </div>\n    </Router>\n  );\n}', desc: "შექმენით მრავალჯერ გამოსაყენებელი ნავიგაციის კომპონენტი" }
            ],
            practice: {
                title: "დაეუფლეთ React Router-ს",
                tasks: [
                    "შექმენით მრავალგვერდიანი პორტფოლიო ვებსაიტი მთავარი, პროექტებისა და \"ჩვენ შესახებ\" გვერდებით",
                    "ააშენეთ ბლოგი სიის გვერდითა და ინდივიდუალური პოსტების გვერდებით",
                    "შექმენით დეშბორდი სხვადასხვა სექციებით (პროფილი, პარამეტრები, ანალიტიკა)",
                    "ააშენეთ ელექტრონული კომერციის საიტი პროდუქტების სიითა და პროდუქტის დეტალების გვერდებით"
                ]
            }
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupLanguage();
    updateLanguage();
    setupThemeToggle();
    setupCodeEditor();
    
    // Apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    
    // Load the first tutorial by default
    loadTutorial('react_basics');
    const firstTutorial = document.querySelector('.tutorial-item[data-tutorial="react_basics"]');
    if (firstTutorial) {
        setActive(firstTutorial);
    }
});

// Theme toggle functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

function setupNavigation() {
    document.querySelectorAll('.tutorial-item').forEach(item => {
        item.addEventListener('click', function() {
            const tutorial = this.dataset.tutorial;
            if (reactTutorialContent[tutorial]) {
                loadTutorial(tutorial);
                setActive(this);
            }
        });
    });
}

function setupLanguage() {
    // Add dropdown toggle functionality
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageBtn && languageDropdown) {
        // Toggle dropdown
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.add('hidden');
            }
        });
    }
    
    // Handle language selection
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            currentLanguage = this.dataset.lang;
            localStorage.setItem('language', currentLanguage);
            updateLanguage();
            if (reactTutorialContent[currentTutorial]) {
                loadTutorial(currentTutorial);
            }
            if (languageDropdown) {
                languageDropdown.classList.add('hidden');
            }
            showToast();
        });
    });
}

function loadTutorial(name) {
    currentTutorial = name;
    const titleContent = reactTutorials[name];
    const detailContent = reactTutorialContent[name];
    
    if (!titleContent || !detailContent) {
        console.log('Tutorial not found:', name);
        return;
    }
    
    const title = document.getElementById('tutorialTitle');
    const desc = document.getElementById('tutorialDescription');
    
    if (title) title.textContent = titleContent[currentLanguage].title;
    if (desc) desc.textContent = titleContent[currentLanguage].description;
    
    // Update the tutorial content section with dynamic content
    updateTutorialContent(name);
    
    // Update the practice task section
    updatePracticeTask(name);
    
    // Update navigation buttons
    updateNavigationButtons();
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

function updateNavigationButtons() {
    const totalLessons = reactTutorialOrder.length;
    ensureProgressUI(totalLessons);
    const currentIndex = reactTutorialOrder.indexOf(currentTutorial);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Update previous button
    if (prevBtn) {
        if (currentIndex === 0) {
            prevBtn.className = 'flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors opacity-50 cursor-not-allowed';
            prevBtn.disabled = true;
        } else {
            prevBtn.className = 'flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors';
            prevBtn.disabled = false;
        }
    }
    
    // Update next button
    if (nextBtn) {
        if (currentIndex === reactTutorialOrder.length - 1) {
            nextBtn.className = 'flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors opacity-50 cursor-not-allowed';
            nextBtn.disabled = true;
        } else {
            nextBtn.className = 'flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors';
            nextBtn.disabled = false;
        }
    }

    // NEW: Progress update
    const progressFill = document.getElementById('reactProgressFill');
    if (progressFill) {
        progressFill.style.width = `${((currentIndex + 1) / totalLessons) * 100}%`;
    }
    const progressNumber = document.getElementById('reactProgressNumber');
    if (progressNumber) {
        progressNumber.textContent = `${currentIndex + 1}/${totalLessons}`;
    }
    const lessonCounter = document.querySelector('.text-center span');
    if (lessonCounter) {
        lessonCounter.textContent = `Lesson ${currentIndex + 1} of ${totalLessons}`;
    }
}

// HTML escape function to prevent HTML injection in code examples
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function updateTutorialContent(tutorialName) {
    const content = reactTutorialContent[tutorialName];
    if (!content) return;
    
    const tutorialContent = document.getElementById('tutorialContent');
    if (!tutorialContent) return;
    
    const langContent = content[currentLanguage];
    
    tutorialContent.innerHTML = `
        <!-- Concept Section -->
        <div class="content-section mb-8">
            <h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">🎯 ${currentLanguage === 'ka' ? 'კონცეფცია' : 'Concept'}</h2>
            <div class="content-text prose dark:prose-invert max-w-none">
                <p class="text-lg mb-4">${langContent.concept}</p>
            </div>
        </div>

        <!-- Examples Section -->
        <div class="content-section">
            <h2 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">💡 ${currentLanguage === 'ka' ? 'მაგალითები' : 'Examples'}</h2>
            <div class="content-text prose dark:prose-invert max-w-none">
                <div class="grid gap-4 mb-6">
                    ${langContent.examples.map((example, index) => `
                        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">${example.title}</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-2">${example.desc}</p>
                            <pre class="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto"><code>${escapeHtml(example.code)}</code></pre>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function updatePracticeTask(tutorialName) {
    const content = reactTutorialContent[tutorialName];
    if (!content) return;
    
    const practiceContent = document.getElementById('practiceContent');
    if (!practiceContent) return;
    
    const langContent = content[currentLanguage];
    
    practiceContent.innerHTML = `
        <h4 class="text-lg font-bold text-green-800 dark:text-green-200 mb-3">💻 ${langContent.practice.title}</h4>
        <div class="practice-task">
            <div class="content-text">
                <p class="mb-4"><strong>${currentLanguage === 'ka' ? 'თქვენი დავალება:' : 'Your Task:'}</strong></p>
                <ol class="list-decimal pl-6 space-y-2 mb-4">
                    ${langContent.practice.tasks.map(task => `<li>${escapeHtml(task)}</li>`).join('')}
                </ol>
                <p class="text-sm text-gray-600 dark:text-gray-400">${currentLanguage === 'ka' ? 'სცადეთ ქვემოთ მოცემულ კოდის რედაქტორში!' : 'Try it in the code editor below!'}</p>
            </div>
        </div>
        <p class="text-gray-500 italic mt-4">
            💡 ${currentLanguage === 'ka' ? 'გახსოვდეთ: არ არის სწორი ან არასწორი გზა - უბრალოდ ექსპერიმენტირებდით და ისწავლეთ სიამოვნებით!' : 'Remember: There\'s no right or wrong way - just experiment and have fun learning!'}
        </p>
    `;
}

// Code editor functions
function setupCodeEditor() {
    const runBtn = document.getElementById('runCodeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const clearBtn = document.getElementById('clearConsoleBtn');
    const clearCodeBtn = document.getElementById('clearCodeBtn');
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (runBtn) runBtn.addEventListener('click', runCode);
    if (resetBtn) resetBtn.addEventListener('click', resetCode);
    if (clearBtn) clearBtn.addEventListener('click', clearConsole);
    if (clearCodeBtn) clearCodeBtn.addEventListener('click', clearCode);
    if (copyCodeBtn) copyCodeBtn.addEventListener('click', copyCode);
    if (prevBtn) prevBtn.addEventListener('click', navigatePrevious);
    if (nextBtn) nextBtn.addEventListener('click', navigateNext);

    // Initialize code editor
    resetCode();
}

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
        editor.value = '// Start coding here...\n// Try React examples or write your own code!\n\nconsole.log("Hello, React!");';
    }
    clearConsole();
}

function clearConsole() {
    const output = document.getElementById('consoleOutput');
    if (output) {
        output.innerHTML = '<div class="text-gray-500">// Console output will appear here...</div>';
    }
}

function clearCode() {
    const editor = document.getElementById('codeEditor');
    if (editor) {
        editor.value = '';
    }
}

function copyCode() {
    const editor = document.getElementById('codeEditor');
    if (editor) {
        editor.select();
        document.execCommand('copy');
        showToast();
    }
}

function navigatePrevious() {
    const currentIndex = reactTutorialOrder.indexOf(currentTutorial);
    if (currentIndex > 0) {
        const prevTutorial = reactTutorialOrder[currentIndex - 1];
        loadTutorial(prevTutorial);
        const prevTutorialItem = document.querySelector(`.tutorial-item[data-tutorial="${prevTutorial}"]`);
        if (prevTutorialItem) {
            setActive(prevTutorialItem);
        }
    }
}

function navigateNext() {
    const currentIndex = reactTutorialOrder.indexOf(currentTutorial);
    if (currentIndex < reactTutorialOrder.length - 1) {
        const nextTutorial = reactTutorialOrder[currentIndex + 1];
        loadTutorial(nextTutorial);
        const nextTutorialItem = document.querySelector(`.tutorial-item[data-tutorial="${nextTutorial}"]`);
        if (nextTutorialItem) {
            setActive(nextTutorialItem);
        }
    }
}

function ensureProgressUI(totalLessons) {
    // Container where progress should live (inside sidebar p-6)
    const sidebarHeader = document.querySelector('nav.w-80 .p-6');
    if (!sidebarHeader) return;
    // Look for existing progress glass container
    let progressBox = sidebarHeader.querySelector('.glass.rounded-xl');
    if (!progressBox) {
        // Build new container to match other pages
        progressBox = document.createElement('div');
        progressBox.className = 'glass rounded-xl p-4 border border-blue-200/30 dark:border-blue-800/30 enhanced-hover';
        progressBox.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-semibold text-blue-700 dark:text-blue-300">Progress</span>
                <span class="text-xs text-blue-600 dark:text-blue-400" id="reactProgressNumber">1/${totalLessons}</span>
            </div>
            <div class="progress-bar h-2 mb-2" style="width:100%">
                <div class="h-full bg-blue-400 rounded-full" id="reactProgressFill" style="width:${(1/totalLessons)*100}%"></div>
            </div>
            <p class="text-sm text-blue-700 dark:text-blue-300">
                <strong>${totalLessons}</strong> <span data-translate="react-progress-text">tutorials to master React from basics to advanced concepts</span>
            </p>`;
        // Replace old static paragraph if exists
        const oldPara = sidebarHeader.querySelector('div.bg-blue-50');
        if (oldPara) oldPara.replaceWith(progressBox); else sidebarHeader.appendChild(progressBox);
    }
}
