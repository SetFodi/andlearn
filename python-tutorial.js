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
            concept: "Functions are named, reusable blocks of code that let you break large problems into smaller steps, keep your programs DRY (Don't Repeat Yourself) and communicate intent clearly. Modules act like **tool-boxes** – standalone `.py` files that group related functions, classes and variables so they can be imported wherever you need them. Together they help you build well-structured, maintainable Python projects.",
            examples: [
                { title: "Basic Function", code: 'def greet(name):\n    """Say hello to someone."""\n    return f"Hello, {name}!"\n\nprint(greet("Python"))', desc: "Defining and calling a simple function with a docstring" },
                { title: "Function With Defaults & Return Type", code: 'def power(base, exponent=2):\n    """Return base raised to the given power (defaults to square)."""\n    return base ** exponent\n\nprint(power(3))   # 9\nprint(power(2, 3)) # 8', desc: "Using default parameters and a return value" },
                { title: "Importing From a Module", code: 'import math\n\nnumber = 25\nroot = math.sqrt(number)\nprint(f"The square root of {number} is {root}")', desc: "Re-using functionality from the built-in math module" }
            ],
            practice: {
                title: "Practice Functions & Modules",
                tasks: [
                    "Write a function `is_prime(n)` that returns True if `n` is a prime number.",
                    "Create a module `geometry.py` with an `area_circle(r)` function, then import and use it in another script.",
                    "Refactor any repetitive code from a previous exercise into a reusable function.",
                    "Add meaningful docstrings to all of your functions and view them with `help()`."
                ]
            }
        },
        ka: {
            concept: "ფუნქციები არის დასახელებული, მრავალჯერ გამოსაყენებელი კოდის ბლოკები, რომლებიც გეხმარებათ დიდი პრობლემის გაყოფაში პატარა ნაბიჯებად და კოდის გამეორების თავიდან აცილებაში (DRY პრინციპი). მოდულები კი **ხელსაწყოების ყუთებია** — ცალკე `.py` ფაილები, რომლებიც აერთიანებს დაკავშირებულ ფუნქციებს, კლასებსა და ცვლადებს, რათა ისინი მარტივად გამოიყენოთ სხვისგან. ერთად ისინი ქმნიან კარგად სტრუქტურიან, ადვილად გასაუარე Python პროექტებს.",
            examples: [
                { title: "ძირითადი ფუნქცია", code: 'def greet(name):\n    """პრინტავს მოგესალმებით ტექსტს."""\n    return f"გამარჯობა, {name}!"\n\nprint(greet("Python"))', desc: "მარტივი ფუნქციის განსაზღვრა და გამოძახება docstring-ით" },
                { title: "ნაგულისხმები პარამეტრები", code: 'def power(base, exponent=2):\n    """აბრუნებს base-ის exponent ხარისხს (სტანდარტულად კვადრატი)."""\n    return base ** exponent\n\nprint(power(3))   # 9\nprint(power(2, 3)) # 8', desc: "ნაგულისხმები არგუმენტებისა და დაბრუნებული მნიშვნელობის გამოყენება" },
                { title: "მოდულიდან იმპორტი", code: 'import math\n\nnumber = 25\nroot = math.sqrt(number)\nprint(f"{number}-ის კვედრეულის ფესვი არის {root}")', desc: "math მოდულის ფუნქციის გამოყენება კოდის ხელახლა წერის გარეშე" }
            ],
            practice: {
                title: "ივარჯიშეთ ფუნქციებსა და მოდულებში",
                tasks: [
                    "`is_prime(n)` ფუნქციის დაწერა, რომელიც prime რიცხვს ამოწმებს.",
                    "შექმენით `geometry.py` მოდული `area_circle(r)` ფუნქციით და გამოიძახეთ იგი სხვა სკრიპტიდან.",
                    "გადაიტანეთ გამეორებადი კოდი წინა სავარჯიშოებიდან ცალკე ფუნქციაში.",
                    "ყველა თქვენს ფუნქციას დაუმატეთ დეტალური docstring-ები და გაუშვით `help()`-ით."
                ]
            }
        }
    },
    classes_objects: {
        en: {
            concept: "Classes are blueprints that describe the data (attributes) and behaviour (methods) of something in the real world. When you *instantiate* a class you create an **object** — a specific, live example of that blueprint. This is the heart of Object-Oriented Programming and lets you model complex systems in an intuitive, reusable way.",
            examples: [
                { title: "Simple Class", code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old"

luka = Person("Luka", 25)
print(luka.introduce())`, desc: "Creating and using an object" },
                { title: "Inheritance", code: 'class Vehicle:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n\nclass Car(Vehicle):\n    def honk(self):\n        return "Beep beep!"\n\nmy_car = Car("Tesla", "Model 3")\nprint(my_car.honk())', desc: "Reusing behaviour with subclassing" },
                { title: "Special Methods (__str__)", code: 'class Book:\n    def __init__(self, title):\n        self.title = title\n\n    def __str__(self):\n        return f"📖 {self.title}"\n\nprint(Book("Clean Code"))', desc: "Make your objects print nicely with dunder methods" }
            ],
            practice: {
                title: "Practice Classes & Objects",
                tasks: [
                    "Design a `BankAccount` class with `deposit()` and `withdraw()` methods and a `balance` attribute.",
                    "Create a `Student` subclass that extends `Person` with a `grade` attribute and override `introduce()`.",
                    "Implement a `__str__` method for the `Car` class that returns something like \"Tesla Model 3\".",
                    "Make a list of `Book` objects and write a loop that prints them one per line."
                ]
            }
        },
        ka: {
            concept: "კლასები არის გეგმები, რომლებიც აღწერენ მონაცემებს (ატრიბუტები) და ქცევას (მეთოდები) რეალური სამყაროს ობიექტებისთვის. კლასის *ინსტანციაციის* დროს მიიღება **ობიექტი** — ამ გეგმის კონკრეტული მაგალითი. ეს არის ობიექტზე ორიენტირებული პროგრამირების გული და საშუალებას გაძლევთ ინტუიტიურად, ხელახალი გამოყენების გზით ჩამოაყალიბოთ რთული სისტემები.",
            examples: [
                { title: "მარტივი კლასი", code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"გამარჯობა, მე ვარ {self.name} და {self.age} წლის ვარ"

luka = Person("ლუკა", 25)
print(luka.introduce())`, desc: "ობიექტის შექმნა და გამოყენება" },
                { title: "მემკვიდრეობა", code: 'class Vehicle:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n\nclass Car(Vehicle):\n    def honk(self):\n        return "ბიპ ბიპ!"\n\nmy_car = Car("Tesla", "Model 3")\nprint(my_car.honk())', desc: "ქცევის ხელახალი გამოყენება ქვეკლასით" },
                { title: "სპეციალური მეთოდი (__str__)", code: 'class Book:\n    def __init__(self, title):\n        self.title = title\n\n    def __str__(self):\n        return f"📖 {self.title}"\n\nprint(Book("Clean Code"))', desc: "ობიექტების ლამაზად დაბეჭდვა dunder მეთოდებით" }
            ],
            practice: {
                title: "ივარჯიშეთ კლასებსა და ობიექტებში",
                tasks: [
                    "`BankAccount` კლასის შექმნა `deposit()` და `withdraw()` მეთოდებით და `balance` ატრიბუტით.",
                    "`Student` ქვეკლასის შექმნა, რომელიც `Person`-ს ადიდებს `grade` ატრიბუტით და გადაფარეთ introduce().",
                    "`Car` კლასისთვის `__str__` მეთოდის განხორციელება, რომელიც აბრუნებს მაგალითად \"Tesla Model 3\".",
                    "შექმენით `Book` ობიექტების სია და დაბეჭდეთ თითოეული ცალკე სტრიქონზე."
                ]
            }
        }
    },
    file_handling: {
        en: {
            concept: "Files allow programs to remember information even after they stop running. In Python you open a file object with `open()`, read or write its contents, and finally close it (or better—let a `with` block close it for you). You'll meet the modes `'r'` (read), `'w'` (write / truncate), `'a'` (append) and `'b'` (binary). Mastering file I/O is the first step toward log processing, data pipelines and more.",
            examples: [
                { title: "Reading a Text File", code: 'with open("notes.txt", "r", encoding="utf-8") as f:\n    data = f.read()\nprint(data)', desc: "Safely reads the whole file and auto-closes it" },
                { title: "Writing Lines", code: 'lines = ["First\n", "Second\n", "Third\n"]\nwith open("output.txt", "w", encoding="utf-8") as f:\n    f.writelines(lines)', desc: "Creates / truncates a file and writes multiple lines" },
                { title: "CSV with the csv Module", code: 'import csv\nrows = [["name", "age"], ["Ana", 22], ["Giorgi", 24]]\nwith open("people.csv", "w", newline="", encoding="utf-8") as f:\n    writer = csv.writer(f)\n    writer.writerows(rows)', desc: "Structured file output using the standard library" }
            ],
            practice: {
                title: "Practice File Handling",
                tasks: [
                    "Create a diary.txt file and append a new line with today's date and mood.",
                    "Write a script that counts how many lines are in any file path you pass.",
                    "Read people.csv and print the names only.",
                    "Use `with` + `open` to copy the contents of one file into another." ]
            }
        },
        ka: {
            concept: "ფაილები პროგრამებს აძლევს საშუალებას შეინარჩუნონ ინფორმაცია გაშვების დასრულების შემდეგ. Python-ში ისინი იხსნება `open()` ფუნქციით, შემდეგ კითხულობთ ან წერთ, ბოლოს კი ხურავთ (ან `with` ბლოკი თვითონ ხურავს). მთავარი რეჟიმებია `'r'` (წაკითხვა), `'w'` (ჩაწერა / წაშლა), `'a'` (მიმატება) და `'b'` (ბინარული). ფაილური I/O აუცილებელი საფუძველია ლოგების დამუშავებისა და მონაცემთა пайპლაინებისთვის.",
            examples: [
                { title: "ტექსტური ფაილის წაკითხვა", code: 'with open("notes.txt", "r", encoding="utf-8") as f:\n    data = f.read()\nprint(data)', desc: "ფაილის უსაფრთხოდ წაკითხვა და ავტომატური დახურვა" },
                { title: "ხაზი ხაზზე ჩაწერა", code: 'lines = ["First\n", "Second\n", "Third\n"]\nwith open("output.txt", "w", encoding="utf-8") as f:\n    f.writelines(lines)', desc: "ახალი ფაილის შექმნა და რამდენიმე ხაზის ჩაწერა" },
                { title: "CSV ‑ csv მოდულით", code: 'import csv\nrows = [["name", "age"], ["Ana", 22], ["Giorgi", 24]]\nwith open("people.csv", "w", newline="", encoding="utf-8") as f:\n    writer = csv.writer(f)\n    writer.writerows(rows)', desc: "სტრუქტურირებული ფაილის ჩაწერა სტანდარტული ბიბლიოთეკით" }
            ],
            practice: {
                title: "ივარჯიშეთ ფაილებზე მუშაობაში",
                tasks: [
                    "შექმენით diary.txt და დაამატეთ დღიურის ახალი ხაზი დღევანდელი თარიღით.",
                    "დაწერეთ სკრიპტი, რომელიც კითხულობს სტრიქონების რაოდენობას ფაილში (ფაილის გზა გადაეცით).",
                    "წაიკითხეთ people.csv და დაბეჭდეთ მხოლოდ სახელები.",
                    "გამოიყენეთ `with` და `open` ერთი ფაილის შინაარსის მეორეში ასაკოპირებლად." ]
            }
        }
    },
    error_handling: {
        en: {
            concept: "Errors are inevitable—handling them gracefully keeps your program from crashing and gives users helpful feedback. In Python you wrap risky code in a `try`-`except` block, possibly adding `else` (no-error path) and `finally` (always runs). You can raise your own exceptions with `raise` and create custom exception classes for precise signalling.",
            examples: [
                { title: "Basic try / except", code: 'try:\n    num = int(input("Enter a number: "))\n    print(10 / num)\nexcept (ValueError, ZeroDivisionError) as e:\n    print("Problem:", e)', desc: "Catches conversion mistakes and division by zero" },
                { title: "Custom Exception", code: 'class TooSmallError(Exception):\n    pass\n\nvalue = 3\nif value < 5:\n    raise TooSmallError("Value must be >= 5")', desc: "Define and raise a domain-specific error" },
                { title: "try / except / else / finally", code: 'try:\n    f = open("data.txt")\nexcept FileNotFoundError:\n    print("File missing!")\nelse:\n    print("File has", len(f.read()), "bytes")\nfinally:\n    if "f" in locals():\n        f.close()', desc: "Clean-up code with finally" }
            ],
            practice: {
                title: "Practice Error Handling",
                tasks: [
                    "Wrap a square-root calculation in try/except to catch negative inputs.",
                    "Create and raise `PasswordTooShortError` if a password < 8 chars.",
                    "Add an `else` clause that runs when no exception occurs.",
                    "Use a `finally` block to always close a file or DB connection." ]
            }
        },
        ka: {
            concept: "შეცდომები გარდაუვალია — მათი მართვა პროგრამას ავარიული დახურვისგან იცავს და მომხმარებელს სასარგებლო შეტყობინებას აძლევს. Python-ში საშიში კოდი `try`-`except` ბლოკში შეფუთეთ, სურვილისამებრ დაუმატეთ `else` (შეცდომის გარეშე გზა) და `finally` (ყოველთვის შესრულდება). შეგიძლიათ საკუთარი გამონაკლისის აგდებაც (`raise`).",
            examples: [
                { title: "საბაზისო try / except", code: 'try:\n    num = int(input("შეიყვანეთ რიცხვი: "))\n    print(10 / num)\nexcept (ValueError, ZeroDivisionError) as e:\n    print("პრობლემა:", e)', desc: "კ catches კონვერტაციის შეცდომასა და ნულზე გაყოფას" },
                { title: "საკუთარი გამონაკლისი", code: 'class TooSmallError(Exception):\n    pass\n\nvalue = 3\nif value < 5:\n    raise TooSmallError("მნიშვნელობა უნდა იყოს >= 5")', desc: "დაუმატეთ დომენის სპეციფიკური შეცდომა" },
                { title: "try / except / else / finally", code: 'try:\n    f = open("data.txt")\nexcept FileNotFoundError:\n    print("ფაილი ვერ მოიძებნა!")\nelse:\n    print("ფაილის ბაიტი:", len(f.read()))\nfinally:\n    if "f" in locals():\n        f.close()', desc: "კოდის დასუფთავება finally-ით" }
            ],
            practice: { title: "ივარჯიშეთ შეცდომების მართვაში", tasks: [ "დაიჭირეთ უარყოფითი რიცხვის კვესის შემთხვევა.", "შექმენით `PasswordTooShortError` < 8 სიმბოლოზე.", "დაამატეთ `else` რომელიც შესრულდება შეცდომის გარეშე.", "გამოიყენეთ `finally` ფაილის დასახურად." ] }
        }
    },
    data_structures: {
        en: {
            concept: "Beyond lists and dicts, Python ships with powerful built-ins in `collections`—`namedtuple`, `deque`, `defaultdict`, `Counter`—plus sets, tuples and even frozen sets. Choosing the right structure makes code faster, clearer and less bug-prone.",
            examples: [
                { title: "Counter", code: 'from collections import Counter\ntext = "banana"\nprint(Counter(text))  # {"b":1,"a":3,"n":2}', desc: "Count frequencies with one line" },
                { title: "defaultdict", code: 'from collections import defaultdict\nwords = ["apple","banana","cherry","apricot"]\nby_letter = defaultdict(list)\nfor w in words:\n    by_letter[w[0]].append(w)\nprint(by_letter)', desc: "Group words without KeyError boilerplate" },
                { title: "deque", code: 'from collections import deque\nqueue = deque([1,2,3])\nqueue.append(4)\nqueue.popleft()  # 1\nprint(queue)', desc: "Fast queue operations on both ends" }
            ],
            practice: { title: "Practice Data Structures", tasks: [ "Use Counter to find the 3 most common letters in a string.", "Rewrite a list-build loop using list-comprehension.", "Store student grades in a dict and compute the average.", "Create a set of unique words from a sentence." ] }
        },
        ka: {
            concept: "სიებსა და ლექსიკონებზე მეტიც: Python-ს აქვს `collections` მოდულის ძლიერი სტრუქტურები — `namedtuple`, `deque`, `defaultdict`, `Counter` — ასევე set-ები, tuple-ები და frozen set-ები. სწორი სტრუქტურის არჩევა კოდს უფრო სწრაფს და გასაგებს ხდის.",
            examples: [
                { title: "Counter", code: 'from collections import Counter\ntext = "banana"\nprint(Counter(text))', desc: "სიმბოლოების სიხშირის დათვლა" },
                { title: "defaultdict", code: 'from collections import defaultdict\nwords = ["apple","banana","cherry","apricot"]\nby_letter = defaultdict(list)\nfor w in words:\n    by_letter[w[0]].append(w)\nprint(by_letter)', desc: "სიტყვების დალაგება პირველი ასოთი" },
                { title: "deque", code: 'from collections import deque\nqueue = deque([1,2,3])\nqueue.append(4)\nqueue.popleft()\nprint(queue)', desc: "სწრაფი რიგი ორმხრივი ოპერაციებით" }
            ],
            practice: { title: "ივარჯიშეთ მონაცემთა სტრუქტურებში", tasks: [ "Counter-ით იპოვეთ 3 ყველაზე ხშირი სიმბოლო.", "გადაწერეთ loop-ი list-comprehension-ად.", "შეინახეთ სტუდენტის ქულები dict-ში და გამოთვალეთ საშუალო.", "სტრიქონიდან შექმენით უნიკალური სიტყვების set." ] }
        }
    },
    web_apis: {
        en: {
            concept: "The `requests` library makes HTTP calls dead simple. Combine it with JSON parsing and you can integrate any REST API in minutes. Learn GET vs POST, status codes, headers and timeouts.",
            examples: [
                { title: "Simple GET", code: 'import requests\nresp = requests.get("https://api.github.com/repos/python/cpython")\nprint(resp.status_code, resp.json()["stargazers_count"])', desc: "Fetch public repo data" },
                { title: "POST a JSON payload", code: 'payload = {"name": "Luka", "age": 25}\nrequests.post("https://httpbin.org/post", json=payload)', desc: "Send JSON with one line" },
                { title: "Timeouts & Errors", code: 'try:\n    requests.get("https://example.com", timeout=0.5)\nexcept requests.Timeout:\n    print("Server too slow!")', desc: "Never hang forever" }
            ],
            practice: { title: "Practice Web APIs", tasks: [ "Call a public API (e.g., cat facts) and print one fact.", "POST form data to httpbin.org/post and print the JSON response.", "Handle a 404 error gracefully.", "Add a 1-second timeout to all your requests." ] }
        },
        ka: {
            concept: "`requests` ბიბლიოთეკა HTTP მოთხოვნებს ძალიან მარტივს ხდის. JSON-ის დამუშავებით minutes-ში ინტეგრირებთ ნებისმიერ REST API-ს. ისწავლეთ GET / POST, სტატუს კოდები, ჰედერები და timeouts.",
            examples: [
                { title: "მარტივი GET", code: 'import requests\nresp = requests.get("https://api.github.com/repos/python/cpython")\nprint(resp.status_code, resp.json()["stargazers_count"])', desc: "გithub API-ს გამოძახება" },
                { title: "POST JSON მონაცემი", code: 'payload = {"name": "Luka", "age": 25}\nrequests.post("https://httpbin.org/post", json=payload)', desc: "JSON გაგზავნა ერთ ხაზში" },
                { title: "Timeout & შეცდომები", code: 'try:\n    requests.get("https://example.com", timeout=0.5)\nexcept requests.Timeout:\n    print("სერვერი ძალიან ნელია")', desc: "არასოდეს დაელოდოთ უსასრულოდ" }
            ],
            practice: { title: "ივარჯიშეთ Web API-ებში", tasks: [ "გამოიძახეთ საჯარო API და დაბეჭდეთ ერთი ფაქტი.", "POST-ით გააგზავნეთ ფორმის მონაცემები httpbin-ზე.", "მართეთ 404 შეცდომა ელეგანტურად.", "ყველა request-ს დაურთეთ 1-წამიანი timeout." ] }
        }
    },
    advanced_topics: {
        en: {
            concept: "Decorators, generators and context managers let you write concise yet powerful abstractions. A decorator wraps a function to add behaviour, a generator yields values lazily, and a context manager guarantees clean-up.",
            examples: [
                { title: "Simple Decorator", code: 'def debug(fn):\n    def wrapper(*a, **kw):\n        print("Calling", fn.__name__)\n        return fn(*a, **kw)\n    return wrapper\n\n@debug\ndef add(a,b): return a+b\nadd(2,3)', desc: "Prints every invocation" },
                { title: "Generator", code: 'def count_up(limit):\n    n=0\n    while n<limit:\n         yield n\n         n+=1\nprint(list(count_up(5)))', desc: "Produces numbers on demand" },
                { title: "Context Manager", code: 'from contextlib import contextmanager\n@contextmanager\ndef open_upper(path):\n    f = open(path)\n    try: yield (line.upper() for line in f)\n    finally: f.close()', desc: "Custom `with` block" }
            ],
            practice: { title: "Practice Advanced Topics", tasks: [ "Write a decorator that memoizes function results.", "Create a generator that produces even numbers up to N.", "Build a context manager that times a code block.", "Combine all three in a mini-project." ] }
        },
        ka: {
            concept: "დეკორატორები, გენერატორები და context მენეჯერები concise მაგრამ ძლიერ აბსტრაქციებს ქმნის. დეკორატორი ფუნქციას დამატებით ქცევას მატებს, გენერატორი მნიშვნელობებს მოზომილად აბრუნებს, context მენეჯერი კი რესურსს ყოველთვის ხურავს.",
            examples: [
                { title: "მარტივი დეკორატორი", code: 'def debug(fn):\n    def wrapper(*a, **kw):\n        print("Calling", fn.__name__)\n        return fn(*a, **kw)\n    return wrapper', desc: "ფუნქციის გამოძახების დაბეჭდვა" },
                { title: "გენერატორი", code: 'def count_up(limit):\n    n=0\n    while n<limit:\n         yield n\n         n+=1', desc: "lazy რიცხვების გენერაცია" },
                { title: "Context Manager", code: 'from contextlib import contextmanager\n@contextmanager\ndef open_upper(path):\n    f = open(path)\n    try: yield (line.upper() for line in f)\n    finally: f.close()', desc: "საკუთარი `with` ბლოკი" }
            ],
            practice: { title: "გაღრმავებული თემების პრაქტიკა", tasks: [ "დაწერეთ memoization დეკორატორი.", "გენერატორი ლუწ რიცხვებზე.", "დაკონფიგურირეთ context მენეჯერი ტაიმერით.", "შეუთავსეთ სამივე ერთ პროექტში." ] }
        }
    },
    testing_debugging: {
        en: {
            concept: "Automated tests catch regressions before users do. Python's built-in `unittest` and third-party `pytest` let you write repeatable tests. For debugging, builtin `pdb` or IDE breakpoints allow step-through execution.",
            examples: [
                { title: "unittest example", code: 'import unittest\nfrom mymath import add\nclass TestAdd(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2,3),5)\nif __name__=="__main__":\n    unittest.main()', desc: "Minimal test case" },
                { title: "pytest assert", code: 'def add(a,b): return a+b\\n\\n# test function using pytest\\n\\n\\ndef test_add():\\n    assert add(2,3) == 5', desc: "Pytest style" },
                { title: "Using pdb", code: 'import pdb\nvalue=42\npdb.set_trace()  # drops into interactive debugger', desc: "Set breakpoint programmatically" }
            ],
            practice: { title: "Practice Testing & Debugging", tasks: [ "Write tests for a calculator module.", "Configure pytest to run on every save.", "Use pdb to inspect a bug in list manipulation.", "Add type hints then run mypy for static errors." ] }
        },
        ka: {
            concept: "ავტომატური ტესტები ბაგებს გამოშვებამდე იჭერს. გამოიყენეთ `unittest` ან `pytest` გამეორებადი ტესტებისთვის. Debug-ისთვის კი `pdb` ან IDE-ს breakpoints-ები.",
            examples: [
                { title: "unittest", code: 'import unittest\nclass TestSomething(unittest.TestCase):\n    ...', desc: "მინიმალური ტესტი" },
                { title: "pytest assert", code: 'def add(a,b): return a+b\\n\\n# pytest ტესტი\\n\\n\\ndef test_add():\\n    assert add(2,3) == 5', desc: "pytest სტილი" },
                { title: "pdb დაკვირვება", code: 'import pdb; pdb.set_trace()', desc: "debug breakpoint" }
            ],
            practice: { title: "ივარჯიშეთ ტესტირებასა და debug-ში", tasks: [ "შექმენით ტესტები კალკულატორზე.", "pytest ავტომატურად გაუშვით.", "გამოიყენეთ pdb ბაგის საპოვნელად.", "ჩამატეთ type hints და გაუშვით mypy." ] }
        }
    },
    data_science_ml: {
        en: {
            concept: "Pandas, NumPy and scikit-learn form the foundation of the Python data-science stack. You'll learn DataFrames, vectorized math and training simple machine-learning models.",
            examples: [
                { title: "Pandas DataFrame", code: 'import pandas as pd\nprint(pd.DataFrame({"a":[1,2],"b":[3,4]}))', desc: "Tabular data in two lines" },
                { title: "NumPy mean", code: 'import numpy as np\narr = np.array([1,2,3])\nprint(arr.mean())', desc: "Fast math on arrays" },
                { title: "scikit-learn model", code: 'from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1],[2],[3]])\ny = np.array([2,4,6])\nprint(LinearRegression().fit(X,y).predict([[4]]))', desc: "Tiny linear model" }
            ],
            practice: { title: "Practice Data Science", tasks: [ "Load a CSV into a DataFrame and print summary stats.", "Plot a bar chart with matplotlib.", "Train a LinearRegression on dummy data.", "Compute the correlation matrix of a DataFrame." ] }
        },
        ka: {
            concept: "Pandas, NumPy და scikit-learn ქმნიან Python-ის მონაცემთა მეცნიერების ბირთვს. ისწავლეთ DataFrame-ები, ვექტორული მათემატიკა და მარტივი ML მოდელები.",
            examples: [
                { title: "Pandas DataFrame", code: 'import pandas as pd\nprint(pd.DataFrame({"a":[1,2],"b":[3,4]}))', desc: "ცხრილის ფორმის მონაცემები" },
                { title: "NumPy საშუალო", code: 'import numpy as np\narr = np.array([1,2,3])\nprint(arr.mean())', desc: "სწრაფი მათემატიკა" },
                { title: "scikit-learn მოდელი", code: 'from sklearn.linear_model import LinearRegression\nimport numpy as np\n...', desc: "ლინექსური მათემატიკა და მარტივი ML მოდელები" }
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
    setupCodeEditor();
    
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

    // NEW: Update sidebar progress & lesson counter
    const totalLessons = pythonTutorialOrder.length;
    // Progress bar fill element (inner div of .progress-bar)
    const progressFill = document.querySelector('.progress-bar > div');
    if (progressFill) {
        const percentage = ((currentIndex + 1) / totalLessons) * 100;
        progressFill.style.width = `${percentage}%`;
    }
    // Numeric progress text (e.g., "3/12") – assume first .glass progress container span.text-xs
    const progressNumber = document.querySelector('.glass.rounded-xl span.text-xs');
    if (progressNumber) {
        progressNumber.textContent = `${currentIndex + 1}/${totalLessons}`;
    }
    // Bottom lesson counter ("Lesson X of Y") inside navigation section
    const lessonCounter = document.querySelector('.text-center span');
    if (lessonCounter) {
        lessonCounter.textContent = `Lesson ${currentIndex + 1} of ${totalLessons}`;
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

// Scroll progress indicator (use a unique variable name to avoid clashes with inline script)
if (!window.__pythonScrollIndicatorAttached) {
    const pyScrollIndicator = document.getElementById('scrollIndicator');
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (pyScrollIndicator) {
            pyScrollIndicator.style.width = scrollPercent + '%';
        }
    });
    window.__pythonScrollIndicatorAttached = true;
} 

// === Code Editor Utilities ===
function runPythonCode() {
    const codeInput = document.getElementById('codeEditor');
    const consoleOutput = document.getElementById('consoleOutput');
    if (!codeInput || !consoleOutput || typeof Sk === 'undefined') return;

    // Clear previous output
    consoleOutput.innerHTML = '';

    // Helper to write output
    const outf = (text) => {
        const line = document.createElement('div');
        line.textContent = text;
        consoleOutput.appendChild(line);
    };

    const builtinRead = (x) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined) {
            throw `File not found: '${x}'`;
        }
        return Sk.builtinFiles['files'][x];
    };

    Sk.configure({ output: outf, read: builtinRead, execLimit: 10000 });

    (async () => {
        try {
            await Sk.misceval.asyncToPromise(() => Sk.importMainWithBody('<stdin>', false, codeInput.value, true));
        } catch (err) {
            outf(err.toString());
        }
    })();
}

function resetCode() {
    const codeInput = document.getElementById('codeEditor');
    if (codeInput) codeInput.value = '';
    clearConsole();
}

function clearConsole() {
    const consoleOutput = document.getElementById('consoleOutput');
    if (consoleOutput) consoleOutput.innerHTML = '';
}

function setupCodeEditor() {
    const runBtn        = document.getElementById('runCodeBtn');
    const resetBtn      = document.getElementById('resetBtn');
    const copyBtn       = document.getElementById('copyCodeBtn');
    const clearCodeBtn  = document.getElementById('clearCodeBtn');
    const clearConsoleB = document.getElementById('clearConsoleBtn');

    if (runBtn)        runBtn.addEventListener('click', runPythonCode);
    if (resetBtn)      resetBtn.addEventListener('click', resetCode);
    if (clearConsoleB) clearConsoleB.addEventListener('click', clearConsole);
    if (clearCodeBtn)  clearCodeBtn.addEventListener('click', () => {
        const codeInput = document.getElementById('codeEditor');
        if (codeInput) codeInput.value = '';
    });
    if (copyBtn)  copyBtn.addEventListener('click', () => {
        const codeInput = document.getElementById('codeEditor');
        if (codeInput) navigator.clipboard.writeText(codeInput.value || '');
    });
} 