// Python Tutorial Navigation System
let currentTutorial = 'variables';
let currentLanguage = localStorage.getItem('language') || 'en';

// Python tutorials
const pythonTutorials = {
    variables: { 
        en: { title: "Python Variables & Basics", description: "Master Python fundamentals with variables, data types, and core programming concepts." },
        ka: { title: "Python ცვლადები და საფუძვლები", description: "დაეუფლეთ Python-ის საფუძვლებს ცვლადებით, მონაცემთა ტიპებით და ძირითადი პროგრამირების კონცეფციებით." }
    },
    lists_loops: { 
        en: { title: "Lists & Loops", description: "Learn to work with Python lists and control flow with loops." },
        ka: { title: "სიები და ციკლები", description: "ისწავლეთ Python-ის სიებთან მუშაობა და ციკლებით კონტროლის ნაკადი." }
    },
    functions_modules: { 
        en: { title: "Functions & Modules", description: "Create reusable code with functions and organize projects with modules." },
        ka: { title: "ფუნქციები და მოდულები", description: "შექმენით მრავალჯერ გამოსაყენებელი კოდი ფუნქციებით და მოაწყვეთ პროექტები მოდულებით." }
    },
    classes_objects: { 
        en: { title: "Classes & Objects", description: "Master object-oriented programming with Python classes and objects." },
        ka: { title: "კლასები და ობიექტები", description: "დაეუფლეთ ობიექტზე ორიენტირებულ პროგრამირებას Python კლასებითა და ობიექტებით." }
    },
    file_handling: { 
        en: { title: "File Handling", description: "Learn to read, write, and manipulate files in Python." },
        ka: { title: "ფაილების მართვა", description: "ისწავლეთ ფაილების კითხვა, ჩაწერა და მანიპულირება Python-ში." }
    },
    error_handling: { 
        en: { title: "Error Handling", description: "Handle errors gracefully with try-except blocks and debugging techniques." },
        ka: { title: "შეცდომების მართვა", description: "მართეთ შეცდომები ლამაზად try-except ბლოკებითა და გამართვის ტექნიკებით." }
    },
    data_structures: { 
        en: { title: "Data Structures", description: "Explore advanced data structures like dictionaries, sets, and tuples." },
        ka: { title: "მონაცემთა სტრუქტურები", description: "შეისწავლეთ გაღრმავებული მონაცემთა სტრუქტურები როგორიცაა ლექსიკონები, სეტები და tuple-ები." }
    },
    web_apis: { 
        en: { title: "Web & APIs", description: "Learn web development basics and API interaction with Python." },
        ka: { title: "ვები და API-ები", description: "ისწავლეთ ვებ განვითარების საფუძვლები და API-ებთან ინტერაქცია Python-ით." }
    },
    advanced_topics: { 
        en: { title: "Advanced Topics", description: "Explore decorators, generators, context managers, and design patterns." },
        ka: { title: "გაღრმავებული თემები", description: "შეისწავლეთ დეკორატორები, გენერატორები, კონტექსტის მენეჯერები და დიზაინის ნიმუშები." }
    },
    testing_debugging: { 
        en: { title: "Testing & Debugging", description: "Master testing frameworks, debugging techniques, and code quality practices." },
        ka: { title: "ტესტირება და გამართვა", description: "დაეუფლეთ ტესტირების ჩარჩოებს, გამართვის ტექნიკებს და კოდის ხარისხის პრაქტიკებს." }
    },
    data_science_ml: { 
        en: { title: "Data Science & ML", description: "Introduction to data science, machine learning, and statistical analysis." },
        ka: { title: "მონაცემთა მეცნიერება და ML", description: "შესავალი მონაცემთა მეცნიერებაში, მანქანურ სწავლებასა და სტატისტიკურ ანალიზში." }
    },
    projects_deployment: { 
        en: { title: "Projects & Deployment", description: "Build real-world projects and learn deployment strategies." },
        ka: { title: "პროექტები და გაშლა", description: "ააშენეთ რეალური პროექტები და ისწავლეთ გაშლის სტრატეგიები." }
    }
};

// Python tutorial order
const pythonTutorialOrder = ['variables', 'lists_loops', 'functions_modules', 'classes_objects', 'file_handling', 'error_handling', 'data_structures', 'web_apis', 'advanced_topics', 'testing_debugging', 'data_science_ml', 'projects_deployment'];

// UI translations
const uiText = {
    en: {
        'nav-home': 'Home',
        'nav-categories': 'Categories',
        'python': 'Python',
        'py-comprehensive': 'Comprehensive Programming',
        'py-progress-text': 'comprehensive lessons covering Python from basics to advanced concepts',
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced'
    },
    ka: {
        'nav-home': 'მთავარი',
        'nav-categories': 'კატეგორიები',
        'python': 'Python',
        'py-comprehensive': 'ყოვლისმომცველი პროგრამირება',
        'py-progress-text': 'ყოვლისმომცველი გაკვეთილები Python-ის შესწავლისთვის საწყისებიდან გაღრმავებულ კონცეფციებამდე',
        'beginner': 'დამწყები',
        'intermediate': 'საშუალო',
        'advanced': 'გაღრმავებული'
    }
};

// Python tutorial content
const pythonTutorialContent = {
    variables: {
        en: {
            concept: "Python variables are containers that store data values. Unlike some programming languages, Python has no command for declaring variables - they are created when you first assign a value to them. Python is dynamically typed, meaning you don't need to specify the data type.",
            examples: [
                { title: "Creating Variables", code: '# String variable\nname = "Luka"\nprint(f"Hello, {name}!")\n\n# Integer variable\nage = 20\nprint(f"You are {age} years old")\n\n# Float variable\nheight = 1.75\nprint(f"Height: {height}m")', desc: "Basic variable creation and string formatting" },
                { title: "Data Types", code: '# Check data types\nname = "Python"\nage = 30\nis_student = True\ngrade = 95.5\n\nprint(type(name))      # <class \'str\'>\nprint(type(age))       # <class \'int\'>\nprint(type(is_student)) # <class \'bool\'>\nprint(type(grade))     # <class \'float\'>', desc: "Python automatically determines data types" },
                { title: "Multiple Assignment", code: '# Assign multiple variables\nx, y, z = 1, 2, 3\nprint(f"x={x}, y={y}, z={z}")\n\n# Same value to multiple variables\na = b = c = "Python"\nprint(f"a={a}, b={b}, c={c}")', desc: "Efficient ways to assign variables" }
            ],
            practice: {
                title: "Practice Python Variables",
                tasks: [
                    "Create variables for your name, age, and favorite programming language",
                    "Use f-strings to create a personalized message",
                    "Calculate how many days old you are (age × 365)",
                    "Experiment with different data types and print their types using type()"
                ]
            }
        },
        ka: {
            concept: "Python-ის ცვლადები არის კონტეინერები რომლებიც ინახავს მონაცემთა მნიშვნელობებს. სხვა პროგრამირების ენებისგან განსხვავებით, Python-ს არ აქვს ბრძანება ცვლადების გამოცხადებისთვის - ისინი იქმნება მაშინ, როცა პირველად მიანიჭებთ მათ მნიშვნელობას. Python არის დინამიურად ტიპიზებული, რაც ნიშნავს რომ არ გჭირდებათ მონაცემთა ტიპის მითითება.",
            examples: [
                { title: "ცვლადების შექმნა", code: '# სტრინგის ცვლადი\nname = "ლუკა"\nprint(f"გამარჯობა, {name}!")\n\n# მთელი რიცხვის ცვლადი\nage = 20\nprint(f"თქვენ ხართ {age} წლის")\n\n# რეალური რიცხვის ცვლადი\nheight = 1.75\nprint(f"სიმაღლე: {height}მ")', desc: "ძირითადი ცვლადების შექმნა და სტრინგის ფორმატირება" },
                { title: "მონაცემთა ტიპები", code: '# შეამოწმეთ მონაცემთა ტიპები\nname = "Python"\nage = 30\nis_student = True\ngrade = 95.5\n\nprint(type(name))      # <class \'str\'>\nprint(type(age))       # <class \'int\'>\nprint(type(is_student)) # <class \'bool\'>\nprint(type(grade))     # <class \'float\'>', desc: "Python ავტომატურად განსაზღვრავს მონაცემთა ტიპებს" },
                { title: "მრავალი მინიჭება", code: '# მრავალი ცვლადის მინიჭება\nx, y, z = 1, 2, 3\nprint(f"x={x}, y={y}, z={z}")\n\n# ერთი მნიშვნელობა მრავალ ცვლადზე\na = b = c = "Python"\nprint(f"a={a}, b={b}, c={c}")', desc: "ცვლადების მინიჭების ეფექტური გზები" }
            ],
            practice: {
                title: "ივარჯიშეთ Python ცვლადებში",
                tasks: [
                    "შექმენით ცვლადები თქვენი სახელის, ასაკისა და საყვარელი პროგრამირების ენისთვის",
                    "გამოიყენეთ f-strings პერსონალიზებული მესიჯის შესაქმნელად",
                    "გამოთვალეთ რამდენი დღის ხართ (ასაკი × 365)",
                    "ექსპერიმენტირებდით სხვადასხვა მონაცემთა ტიპებით და დაბეჭდეთ მათი ტიპები type()-ის გამოყენებით"
                ]
            }
        }
    },
    lists_loops: {
        en: {
            concept: "Python lists are ordered collections that can store multiple items. Lists are mutable, meaning you can change them after creation. Loops allow you to iterate through lists and perform repetitive tasks efficiently.",
            examples: [
                { title: "Creating Lists", code: '# Empty list\nfruits = []\n\n# List with items\ncolors = ["red", "green", "blue"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = ["hello", 42, True, 3.14]\n\nprint(f"Colors: {colors}")\nprint(f"First color: {colors[0]}")\nprint(f"Last color: {colors[-1]}")', desc: "Different ways to create and access lists" },
                { title: "List Methods", code: '# Adding items\nfruits = ["apple", "banana"]\nfruits.append("orange")  # Add to end\nfruits.insert(1, "mango")  # Insert at index\n\n# Removing items\nfruits.remove("banana")  # Remove by value\nlast_fruit = fruits.pop()  # Remove and return last\n\nprint(f"Fruits: {fruits}")\nprint(f"Removed: {last_fruit}")', desc: "Common list operations" },
                { title: "For Loops", code: '# Loop through list\nstudents = ["Ana", "Giorgi", "Mariam"]\n\nfor student in students:\n    print(f"Hello, {student}!")\n\n# Loop with index\nfor i, student in enumerate(students):\n    print(f"{i+1}. {student}")', desc: "Iterate through lists with for loops" }
            ],
            practice: {
                title: "Master Lists and Loops",
                tasks: [
                    "Create a list of your favorite movies and print each one",
                    "Add new movies to the list using append() and insert()",
                    "Remove a movie from the list and print the updated list",
                    "Use a for loop to print movies with their position numbers"
                ]
            }
        },
        ka: {
            concept: "Python-ის სიები არის დალაგებული კოლექციები რომლებსაც შეუძლიათ მრავალი ელემენტის შენახვა. სიები არის ცვლადი, რაც ნიშნავს რომ შეგიძლიათ შეცვალოთ ისინი შექმნის შემდეგ. ციკლები საშუალებას გაძლევთ განიმეოროთ სიები და ეფექტურად შეასრულოთ მეორადი ამოცანები.",
            examples: [
                { title: "სიების შექმნა", code: '# ცარიელი სია\nfruits = []\n\n# სია ელემენტებით\ncolors = ["წითელი", "მწვანე", "ლურჯი"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = ["გამარჯობა", 42, True, 3.14]\n\nprint(f"ფერები: {colors}")\nprint(f"პირველი ფერი: {colors[0]}")\nprint(f"ბოლო ფერი: {colors[-1]}")', desc: "სიების შექმნისა და წვდომის სხვადასხვა გზები" },
                { title: "სიის მეთოდები", code: '# ელემენტების დამატება\nfruits = ["ვაშლი", "ბანანი"]\nfruits.append("ნარინჯი")  # ბოლოში დამატება\nfruits.insert(1, "მანგო")  # კონკრეტულ ინდექსზე ჩასმა\n\n# ელემენტების წაშლა\nfruits.remove("ბანანი")  # მნიშვნელობით წაშლა\nlast_fruit = fruits.pop()  # ბოლო ელემენტის წაშლა და დაბრუნება\n\nprint(f"ხილი: {fruits}")\nprint(f"წაშლილი: {last_fruit}")', desc: "სიის ჩვეულებრივი ოპერაციები" },
                { title: "For ციკლები", code: '# სიაში გადაადგილება\nstudents = ["ანა", "გიორგი", "მარიამი"]\n\nfor student in students:\n    print(f"გამარჯობა, {student}!")\n\n# ციკლი ინდექსით\nfor i, student in enumerate(students):\n    print(f"{i+1}. {student}")', desc: "სიებში გადაადგილება for ციკლებით" }
            ],
            practice: {
                title: "დაეუფლეთ სიებს და ციკლებს",
                tasks: [
                    "შექმენით სია თქვენი საყვარელი ფილმებისა და დაბეჭდეთ თითოეული",
                    "დაამატეთ ახალი ფილმები სიაში append() და insert()-ის გამოყენებით",
                    "წაშალეთ ფილმი სიიდან და დაბეჭდეთ განახლებული სია",
                    "გამოიყენეთ for ციკლი ფილმების დასაბეჭდად მათი პოზიციის ნომრებით"
                ]
            }
        }
    },
    // Add minimal content for other tutorials to prevent errors
    functions_modules: {
        en: {
            concept: "Functions in Python are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.",
            examples: [
                { title: "Basic Function", code: 'def greet(name):\n    return f"Hello, {name}!"\n\nresult = greet("Python")\nprint(result)', desc: "Creating and calling a simple function" }
            ],
            practice: { title: "Practice Functions", tasks: ["Create a function that adds two numbers", "Create a function that checks if a number is even"] }
        },
        ka: {
            concept: "Python-ის ფუნქციები არის კოდის მრავალჯერ გამოსაყენებელი ბლოკები რომლებიც ასრულებენ კონკრეტულ ამოცანებს.",
            examples: [
                { title: "ძირითადი ფუნქცია", code: 'def greet(name):\n    return f"გამარჯობა, {name}!"\n\nresult = greet("Python")\nprint(result)', desc: "მარტივი ფუნქციის შექმნა და გამოძახება" }
            ],
            practice: { title: "ივარჯიშეთ ფუნქციებში", tasks: ["შექმენით ფუნქცია რომელიც ორ რიცხვს დაამატებს", "შექმენით ფუნქცია რომელიც შეამოწმებს რიცხვი ლუწია თუ არა"] }
        }
    },
    classes_objects: {
        en: {
            concept: "Classes are blueprints for creating objects. Objects are instances of classes that contain data and methods.",
            examples: [
                { title: "Basic Class", code: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f"Hi, I\'m {self.name} and I\'m {self.age} years old"\n\nperson = Person("Luka", 25)\nprint(person.introduce())', desc: "Creating a simple class with methods" }
            ],
            practice: { title: "Practice Classes", tasks: ["Create a Car class with make, model, and year attributes", "Add a method to display car information"] }
        },
        ka: {
            concept: "კლასები არის ობიექტების შექმნის გეგმები. ობიექტები არის კლასების ინსტანციები რომლებიც შეიცავენ მონაცემებსა და მეთოდებს.",
            examples: [
                { title: "ძირითადი კლასი", code: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f"გამარჯობა, მე ვარ {self.name} და {self.age} წლის ვარ"\n\nperson = Person("ლუკა", 25)\nprint(person.introduce())', desc: "მარტივი კლასის შექმნა მეთოდებით" }
            ],
            practice: { title: "ივარჯიშეთ კლასებში", tasks: ["შექმენით Car კლასი make, model და year ატრიბუტებით", "დაამატეთ მეთოდი მანქანის ინფორმაციის საჩვენებლად"] }
        }
    },
    file_handling: {
        en: {
            concept: "File handling in Python allows you to read from and write to files, enabling data persistence in your applications.",
            examples: [
                { title: "Reading Files", code: '# Reading a file\nwith open("example.txt", "r") as file:\n    content = file.read()\n    print(content)\n\n# Reading line by line\nwith open("example.txt", "r") as file:\n    for line in file:\n        print(line.strip())', desc: "Different ways to read files" }
            ],
            practice: { title: "Practice File Handling", tasks: ["Create a text file and write your favorite quotes", "Read the file and display each quote"] }
        },
        ka: {
            concept: "Python-ში ფაილების მართვა საშუალებას გაძლევთ წაიკითხოთ და ჩაწეროთ ფაილები, რაც უზრუნველყოფს მონაცემების შენარჩუნებას თქვენს აპლიკაციებში.",
            examples: [
                { title: "ფაილების კითხვა", code: '# ფაილის კითხვა\nwith open("example.txt", "r") as file:\n    content = file.read()\n    print(content)\n\n# ხაზ-ხაზ კითხვა\nwith open("example.txt", "r") as file:\n    for line in file:\n        print(line.strip())', desc: "ფაილების კითხვის სხვადასხვა გზები" }
            ],
            practice: { title: "ივარჯიშეთ ფაილების მართვაში", tasks: ["შექმენით ტექსტური ფაილი და ჩაწერეთ თქვენი საყვარელი ციტატები", "წაიკითხეთ ფაილი და აჩვენეთ თითოეული ციტატა"] }
        }
    },
    error_handling: {
        en: {
            concept: "Error handling helps your programs gracefully deal with unexpected situations using try-except blocks.",
            examples: [
                { title: "Basic Try-Except", code: 'try:\n    number = int(input("Enter a number: "))\n    result = 10 / number\n    print(f"Result: {result}")\nexcept ValueError:\n    print("That\'s not a valid number!")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")', desc: "Handling different types of errors" }
            ],
            practice: { title: "Practice Error Handling", tasks: ["Create a program that safely converts user input to integers", "Handle file not found errors when reading files"] }
        },
        ka: {
            concept: "შეცდომების მართვა ეხმარება თქვენს პროგრამებს ლამაზად გაუმკლავდნენ მოულოდნელ სიტუაციებს try-except ბლოკების გამოყენებით.",
            examples: [
                { title: "ძირითადი Try-Except", code: 'try:\n    number = int(input("შეიყვანეთ რიცხვი: "))\n    result = 10 / number\n    print(f"შედეგი: {result}")\nexcept ValueError:\n    print("ეს არ არის სწორი რიცხვი!")\nexcept ZeroDivisionError:\n    print("ნულზე გაყოფა შეუძლებელია!")', desc: "სხვადასხვა ტიპის შეცდომების მართვა" }
            ],
            practice: { title: "ივარჯიშეთ შეცდომების მართვაში", tasks: ["შექმენით პროგრამა რომელიც უსაფრთხოდ გარდაქმნის მომხმარებლის შეყვანას მთელ რიცხვებად", "მართეთ ფაილის ვერ იპოვნება შეცდომები ფაილების კითხვისას"] }
        }
    },
    data_structures: {
        en: {
            concept: "Python offers various data structures like dictionaries, sets, and tuples for efficient data organization.",
            examples: [
                { title: "Dictionaries", code: 'student = {\n    "name": "Ana",\n    "age": 20,\n    "grades": [95, 87, 92]\n}\n\nprint(student["name"])\nstudent["major"] = "Computer Science"\nprint(student)', desc: "Using dictionaries to store key-value pairs" }
            ],
            practice: { title: "Practice Data Structures", tasks: ["Create a dictionary to store information about your favorite book", "Use sets to find unique elements in a list"] }
        },
        ka: {
            concept: "Python გთავაზობთ სხვადასხვა მონაცემთა სტრუქტურებს როგორიცაა ლექსიკონები, სეტები და tuple-ები ეფექტური მონაცემთა ორგანიზაციისთვის.",
            examples: [
                { title: "ლექსიკონები", code: 'student = {\n    "name": "ანა",\n    "age": 20,\n    "grades": [95, 87, 92]\n}\n\nprint(student["name"])\nstudent["major"] = "კომპიუტერული მეცნიერება"\nprint(student)', desc: "ლექსიკონების გამოყენება key-value წყვილების შესანახად" }
            ],
            practice: { title: "ივარჯიშეთ მონაცემთა სტრუქტურებში", tasks: ["შექმენით ლექსიკონი თქვენი საყვარელი წიგნის ინფორმაციის შესანახად", "გამოიყენეთ სეტები სიაში უნიკალური ელემენტების საპოვნელად"] }
        }
    },
    web_apis: {
        en: {
            concept: "Learn to interact with web APIs and build web applications using Python frameworks.",
            examples: [
                { title: "HTTP Requests", code: 'import requests\n\nresponse = requests.get("https://api.github.com/users/octocat")\ndata = response.json()\nprint(f"User: {data[\'login\']}")\nprint(f"Repos: {data[\'public_repos\']}")', desc: "Making HTTP requests to APIs" }
            ],
            practice: { title: "Practice Web APIs", tasks: ["Make a request to a weather API", "Parse JSON data from an API response"] }
        },
        ka: {
            concept: "ისწავლეთ ვებ API-ებთან ინტერაქცია და ვებ აპლიკაციების აშენება Python ჩარჩოების გამოყენებით.",
            examples: [
                { title: "HTTP მოთხოვნები", code: 'import requests\n\nresponse = requests.get("https://api.github.com/users/octocat")\ndata = response.json()\nprint(f"მომხმარებელი: {data[\'login\']}")\nprint(f"რეპოზიტორიები: {data[\'public_repos\']}")', desc: "HTTP მოთხოვნების გაკეთება API-ებისთვის" }
            ],
            practice: { title: "ივარჯიშეთ ვებ API-ებში", tasks: ["გააკეთეთ მოთხოვნა ამინდის API-სთვის", "გააანალიზეთ JSON მონაცემები API-ს პასუხიდან"] }
        }
    },
    advanced_topics: {
        en: {
            concept: "Explore advanced Python concepts like decorators, generators, and context managers.",
            examples: [
                { title: "Decorators", code: 'def my_decorator(func):\n    def wrapper():\n        print("Before function")\n        func()\n        print("After function")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()', desc: "Using decorators to modify function behavior" }
            ],
            practice: { title: "Practice Advanced Topics", tasks: ["Create a decorator that measures function execution time", "Write a generator that yields fibonacci numbers"] }
        },
        ka: {
            concept: "შეისწავლეთ Python-ის გაღრმავებული კონცეფციები როგორიცაა დეკორატორები, გენერატორები და კონტექსტის მენეჯერები.",
            examples: [
                { title: "დეკორატორები", code: 'def my_decorator(func):\n    def wrapper():\n        print("ფუნქციის წინ")\n        func()\n        print("ფუნქციის შემდეგ")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("გამარჯობა!")\n\nsay_hello()', desc: "დეკორატორების გამოყენება ფუნქციის ქცევის შესაცვლელად" }
            ],
            practice: { title: "ივარჯიშეთ გაღრმავებულ თემებში", tasks: ["შექმენით დეკორატორი რომელიც იზომავს ფუნქციის შესრულების დროს", "დაწერეთ გენერატორი რომელიც აბრუნებს ფიბონაჩის რიცხვებს"] }
        }
    },
    testing_debugging: {
        en: {
            concept: "Learn to write tests and debug your Python code effectively using testing frameworks and debugging tools.",
            examples: [
                { title: "Unit Testing", code: 'import unittest\n\ndef add_numbers(a, b):\n    return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add_numbers(self):\n        self.assertEqual(add_numbers(2, 3), 5)\n        self.assertEqual(add_numbers(-1, 1), 0)\n\nif __name__ == "__main__":\n    unittest.main()', desc: "Writing unit tests for your functions" }
            ],
            practice: { title: "Practice Testing", tasks: ["Write tests for a calculator function", "Use debugging techniques to find and fix bugs"] }
        },
        ka: {
            concept: "ისწავლეთ ტესტების წერა და თქვენი Python კოდის ეფექტური გამართვა ტესტირების ჩარჩოებისა და დებაგინგ ინსტრუმენტების გამოყენებით.",
            examples: [
                { title: "Unit Testing", code: 'import unittest\n\ndef add_numbers(a, b):\n    return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add_numbers(self):\n        self.assertEqual(add_numbers(2, 3), 5)\n        self.assertEqual(add_numbers(-1, 1), 0)\n\nif __name__ == "__main__":\n    unittest.main()', desc: "თქვენი ფუნქციებისთვის unit ტესტების წერა" }
            ],
            practice: { title: "ივარჯიშეთ ტესტირებაში", tasks: ["დაწერეთ ტესტები კალკულატორის ფუნქციისთვის", "გამოიყენეთ დებაგინგ ტექნიკები ბაგების საპოვნელად და გამოსასწორებლად"] }
        }
    },
    data_science_ml: {
        en: {
            concept: "Introduction to data science and machine learning concepts using Python libraries like pandas and scikit-learn.",
            examples: [
                { title: "Data Analysis", code: 'import pandas as pd\n\n# Create a simple dataset\ndata = {\n    "name": ["Alice", "Bob", "Charlie"],\n    "age": [25, 30, 35],\n    "salary": [50000, 60000, 70000]\n}\n\ndf = pd.DataFrame(data)\nprint(df)\nprint(f"Average age: {df[\'age\'].mean()}")', desc: "Basic data analysis with pandas" }
            ],
            practice: { title: "Practice Data Science", tasks: ["Analyze a dataset and find basic statistics", "Create visualizations of your data"] }
        },
        ka: {
            concept: "შესავალი მონაცემთა მეცნიერებისა და მანქანური სწავლების კონცეფციებში Python ბიბლიოთეკების როგორიცაა pandas და scikit-learn გამოყენებით.",
            examples: [
                { title: "მონაცემთა ანალიზი", code: 'import pandas as pd\n\n# მარტივი მონაცემთა ნაკრების შექმნა\ndata = {\n    "name": ["ალისა", "ბობი", "ჩარლი"],\n    "age": [25, 30, 35],\n    "salary": [50000, 60000, 70000]\n}\n\ndf = pd.DataFrame(data)\nprint(df)\nprint(f"საშუალო ასაკი: {df[\'age\'].mean()}")', desc: "ძირითადი მონაცემთა ანალიზი pandas-ით" }
            ],
            practice: { title: "ივარჯიშეთ მონაცემთა მეცნიერებაში", tasks: ["გააანალიზეთ მონაცემთა ნაკრები და იპოვეთ ძირითადი სტატისტიკა", "შექმენით თქვენი მონაცემების ვიზუალიზაცია"] }
        }
    },
    projects_deployment: {
        en: {
            concept: "Learn to build complete Python projects and deploy them to production environments.",
            examples: [
                { title: "Simple Web App", code: 'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello, World!"\n\n@app.route("/user/<name>")\ndef user(name):\n    return f"Hello, {name}!"\n\nif __name__ == "__main__":\n    app.run(debug=True)', desc: "Creating a simple web application with Flask" }
            ],
            practice: { title: "Practice Projects", tasks: ["Build a simple web application", "Deploy your application to a cloud platform"] }
        },
        ka: {
            concept: "ისწავლეთ სრული Python პროექტების აშენება და მათი გაშლა საწარმოო გარემოებში.",
            examples: [
                { title: "მარტივი ვებ აპლიკაცია", code: 'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "გამარჯობა, მსოფლიო!"\n\n@app.route("/user/<name>")\ndef user(name):\n    return f"გამარჯობა, {name}!"\n\nif __name__ == "__main__":\n    app.run(debug=True)', desc: "მარტივი ვებ აპლიკაციის შექმნა Flask-ით" }
            ],
            practice: { title: "ივარჯიშეთ პროექტებში", tasks: ["ააშენეთ მარტივი ვებ აპლიკაცია", "გაშალეთ თქვენი აპლიკაცია ღრუბლოვან პლატფორმაზე"] }
        }
    }
};

// Expose functions to window object so they can be called from HTML
window.currentTutorial = currentTutorial;
window.currentLanguage = currentLanguage;
window.loadTutorial = loadTutorial;
window.updateLanguage = updateLanguage;
window.navigateNext = navigateNext;
window.navigatePrevious = navigatePrevious;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupLanguage();
    updateLanguage();
    setupThemeToggle();
    
    // Apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    
    // Load the first tutorial by default
    loadTutorial('variables');
    const firstTutorial = document.querySelector('.tutorial-item[data-tutorial="variables"]');
    if (firstTutorial) {
        setActive(firstTutorial);
    }
});

function setupNavigation() {
    document.querySelectorAll('.tutorial-item').forEach(item => {
        item.addEventListener('click', function() {
            const tutorial = this.dataset.tutorial;
            if (pythonTutorialContent[tutorial]) {
                loadTutorial(tutorial);
                setActive(this);
            }
        });
    });
    
    // Setup navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', navigatePrevious);
    if (nextBtn) nextBtn.addEventListener('click', navigateNext);
}

function setupLanguage() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageBtn) {
        languageBtn.addEventListener('click', () => {
            languageDropdown.classList.toggle('hidden');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (languageBtn && !languageBtn.contains(e.target)) {
            languageDropdown.classList.add('hidden');
        }
    });
    
    // Language selection
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.dataset.lang;
            const flag = option.querySelector('span').textContent;
            const langText = lang === 'en' ? 'EN' : 'KA';
            
            document.getElementById('currentFlag').textContent = flag;
            document.getElementById('currentLang').textContent = langText;
            languageDropdown.classList.add('hidden');
            
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            updateLanguage();
            loadTutorial(currentTutorial); // Reload current tutorial in new language
        });
    });
}

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

function loadTutorial(name) {
    currentTutorial = name;
    const titleContent = pythonTutorials[name];
    const detailContent = pythonTutorialContent[name];
    
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
    // Remove active state from all items
    document.querySelectorAll('.tutorial-item').forEach(tutorialItem => {
        tutorialItem.classList.remove('border-blue-500', 'text-blue-700', 'dark:text-blue-300', 'shadow-lg');
        tutorialItem.classList.add('hover:bg-gray-100', 'dark:hover:bg-gray-700');
        tutorialItem.style.animation = '';
    });
    
    // Add active state to current item
    item.classList.add('border-blue-500', 'text-blue-700', 'dark:text-blue-300', 'shadow-lg');
    item.classList.remove('hover:bg-gray-100', 'dark:hover:bg-gray-700');
    item.style.animation = 'pulse-glow 2s infinite';
}

function updateLanguage() {
    // Update UI text elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (uiText[currentLanguage] && uiText[currentLanguage][key]) {
            element.textContent = uiText[currentLanguage][key];
        }
    });
    
    // Update current language display
    const currentLang = document.getElementById('currentLang');
    const currentFlag = document.getElementById('currentFlag');
    
    if (currentLang && currentFlag) {
        if (currentLanguage === 'en') {
            currentLang.textContent = 'EN';
            currentFlag.textContent = '🇺🇸';
        } else {
            currentLang.textContent = 'KA';
            currentFlag.textContent = '🇬🇪';
        }
    }
}

function updateTutorialContent(tutorialName) {
    const content = pythonTutorialContent[tutorialName];
    if (!content || !content[currentLanguage]) return;
    
    const tutorialContent = document.getElementById('tutorialContent');
    if (!tutorialContent) return;
    
    const langContent = content[currentLanguage];
    
    let contentHTML = `
        <div class="content-section mb-8">
            <h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">🐍 ${langContent.concept ? 'Concept' : 'კონცეფცია'}</h2>
            <div class="content-text prose dark:prose-invert max-w-none">
                <p class="text-lg mb-4">${langContent.concept}</p>
            </div>
        </div>
    `;
    
    if (langContent.examples && langContent.examples.length > 0) {
        contentHTML += `
            <div class="content-section">
                <h2 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">💻 ${currentLanguage === 'en' ? 'Examples' : 'მაგალითები'}</h2>
        `;
        
        langContent.examples.forEach((example, index) => {
            contentHTML += `
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">${example.title}</h3>
                    <div class="code-block rounded-lg p-4 mb-2">
                        <pre class="text-sm overflow-x-auto"><code>${escapeHtml(example.code)}</code></pre>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">${example.desc}</p>
                </div>
            `;
        });
        
        contentHTML += '</div>';
    }
    
    tutorialContent.innerHTML = contentHTML;
}

function updatePracticeTask(tutorialName) {
    const content = pythonTutorialContent[tutorialName];
    if (!content || !content[currentLanguage] || !content[currentLanguage].practice) return;
    
    const practiceContent = document.getElementById('practiceContent');
    if (!practiceContent) return;
    
    const practice = content[currentLanguage].practice;
    
    let practiceHTML = `
        <h4 class="text-lg font-bold text-green-800 dark:text-green-200 mb-3">🎯 ${practice.title}</h4>
        <div class="practice-task">
            <div class="content-text">
                <ol class="list-decimal pl-6 space-y-2 mb-4">
    `;
    
    practice.tasks.forEach(task => {
        practiceHTML += `<li>${task}</li>`;
    });
    
    practiceHTML += `
                </ol>
                <p class="text-sm text-gray-600 dark:text-gray-400">${currentLanguage === 'en' ? 'Experiment with different concepts and build your Python skills!' : 'ექსპერიმენტირებდით სხვადასხვა კონცეფციებით და განავითარეთ თქვენი Python უნარები!'}</p>
            </div>
        </div>
    `;
    
    practiceContent.innerHTML = practiceHTML;
}

function updateNavigationButtons() {
    const currentIndex = pythonTutorialOrder.indexOf(currentTutorial);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
        if (currentIndex > 0) {
            const prevTutorial = pythonTutorialOrder[currentIndex - 1];
            const prevTitle = pythonTutorials[prevTutorial][currentLanguage].title;
            prevBtn.querySelector('span').textContent = `Previous: ${prevTitle.split(' ')[0]}`;
        }
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentIndex === pythonTutorialOrder.length - 1;
        if (currentIndex < pythonTutorialOrder.length - 1) {
            const nextTutorial = pythonTutorialOrder[currentIndex + 1];
            const nextTitle = pythonTutorials[nextTutorial][currentLanguage].title;
            nextBtn.querySelector('span').textContent = `Next: ${nextTitle.split(' ')[0]}`;
        }
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function navigatePrevious() {
    const currentIndex = pythonTutorialOrder.indexOf(currentTutorial);
    if (currentIndex > 0) {
        const prevTutorial = pythonTutorialOrder[currentIndex - 1];
        loadTutorial(prevTutorial);
        const prevTutorialItem = document.querySelector(`.tutorial-item[data-tutorial="${prevTutorial}"]`);
        if (prevTutorialItem) {
            setActive(prevTutorialItem);
        }
    }
}

function navigateNext() {
    const currentIndex = pythonTutorialOrder.indexOf(currentTutorial);
    if (currentIndex < pythonTutorialOrder.length - 1) {
        const nextTutorial = pythonTutorialOrder[currentIndex + 1];
        loadTutorial(nextTutorial);
        const nextTutorialItem = document.querySelector(`.tutorial-item[data-tutorial="${nextTutorial}"]`);
        if (nextTutorialItem) {
            setActive(nextTutorialItem);
        }
    }
}

// Scroll progress indicator
const scrollIndicator = document.getElementById('scrollIndicator');
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollIndicator) {
        scrollIndicator.style.width = scrollPercent + '%';
    }
}); 