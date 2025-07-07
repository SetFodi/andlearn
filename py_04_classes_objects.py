# Python Tutorial 04: Classes and Objects (OOP)
# Python-ის გაკვეთილი 04: კლასები და ობიექტები (ობიექტზე ორიენტირებული პროგრამირება)

"""
ეს გაკვეთილი მოიცავს:
- Class definition and instantiation
- Instance variables and methods
- Constructor (__init__)
- Instance vs Class variables
- Encapsulation (private/protected)
- Inheritance
- Method overriding
- Polymorphism
- Special methods (__str__, __repr__, etc.)

This lesson covers:
- Class definition and instantiation
- Instance variables and methods
- Constructor (__init__)
- Instance vs Class variables
- Encapsulation (private/protected)
- Inheritance
- Method overriding
- Polymorphism
- Special methods (__str__, __repr__, etc.)
"""

# 1. Basic Class Definition / კლასის ბაზისური განსაზღვრა

class Student:
    """Basic student class / ბაზისური სტუდენტის კლასი"""
    
    # Class variable / კლასის ცვლადი
    school_name = "AndLearn Programming Academy"
    total_students = 0
    
    def __init__(self, name, age, student_id):
        """Constructor method / კონსტრუქტორი მეთოდი"""
        self.name = name  # Instance variable / ინსტანსის ცვლადი
        self.age = age
        self.student_id = student_id
        self.grades = []
        self.enrollment_date = "2024-01-01"
        
        # Increment total students / სტუდენტების რაოდენობის გაზრდა
        Student.total_students += 1
    
    def add_grade(self, subject, grade):
        """Add a grade for a subject / ქულის დამატება საგნისთვის"""
        self.grades.append({"subject": subject, "grade": grade})
        print(f"Grade {grade} added for {subject}")
    
    def get_average_grade(self):
        """Calculate average grade / საშუალო ქულის გამოთვლა"""
        if not self.grades:
            return 0
        total = sum(grade_info["grade"] for grade_info in self.grades)
        return total / len(self.grades)
    
    def display_info(self):
        """Display student information / სტუდენტის ინფორმაციის ჩვენება"""
        print(f"Student: {self.name}")
        print(f"Age: {self.age}")
        print(f"ID: {self.student_id}")
        print(f"School: {self.school_name}")
        print(f"Average Grade: {self.get_average_grade():.2f}")
    
    # Special methods / სპეციალური მეთოდები
    def __str__(self):
        """String representation / სტრინგისმაგვარი წარმოდგენა"""
        return f"Student({self.name}, {self.age}, ID: {self.student_id})"
    
    def __repr__(self):
        """Developer-friendly representation / დეველოპერისთვის გასაგები წარმოდგენა"""
        return f"Student(name='{self.name}', age={self.age}, student_id='{self.student_id}')"

# 2. Encapsulation Example / ენკაფსულაციის მაგალითი

class BankAccount:
    """Bank account with encapsulation / საბანკო ანგარიში ენკაფსულაციით"""
    
    def __init__(self, account_number, initial_balance=0):
        self.account_number = account_number
        self.__balance = initial_balance  # Private variable / პრივატული ცვლადი
        self._transaction_history = []     # Protected variable / დაცული ცვლადი
    
    def deposit(self, amount):
        """Deposit money / ფულის შეტანა"""
        if amount > 0:
            self.__balance += amount
            self._transaction_history.append(f"Deposited: ${amount}")
            print(f"Deposited ${amount}. New balance: ${self.__balance}")
        else:
            print("Deposit amount must be positive")
    
    def withdraw(self, amount):
        """Withdraw money / ფულის გამოტანა"""
        if amount > 0:
            if self.__balance >= amount:
                self.__balance -= amount
                self._transaction_history.append(f"Withdrew: ${amount}")
                print(f"Withdrew ${amount}. New balance: ${self.__balance}")
            else:
                print("Insufficient funds")
        else:
            print("Withdrawal amount must be positive")
    
    def get_balance(self):
        """Get current balance / მიმდინარე ბალანსის მიღება"""
        return self.__balance
    
    def get_transaction_history(self):
        """Get transaction history / ტრანზაქციების ისტორიის მიღება"""
        return self._transaction_history.copy()
    
    def __str__(self):
        return f"Account {self.account_number}: ${self.__balance}"

# 3. Inheritance / მემკვიდრეობა

class Person:
    """Base person class / ბაზისური პიროვნების კლასი"""
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        """Person introduction / პიროვნების წარდგენა"""
        return f"Hi, I'm {self.name} and I'm {self.age} years old."
    
    def have_birthday(self):
        """Celebrate birthday / დაბადების დღის აღნიშვნა"""
        self.age += 1
        print(f"Happy birthday to {self.name}! Now {self.age} years old.")

class Teacher(Person):
    """Teacher class inheriting from Person / მასწავლებლის კლასი რომელიც მემკვიდრეობით იღებს Person-ისგან"""
    
    def __init__(self, name, age, subject, years_experience):
        super().__init__(name, age)  # Call parent constructor / მშობელი კონსტრუქტორის გამოძახება
        self.subject = subject
        self.years_experience = years_experience
        self.students = []
    
    def introduce(self):
        """Override parent method / მშობელი მეთოდის გადაფარვა"""
        return f"Hello, I'm {self.name}, a {self.subject} teacher with {self.years_experience} years of experience."
    
    def teach_lesson(self, lesson_topic):
        """Teach a lesson / გაკვეთილის ჩატარება"""
        print(f"Teacher {self.name} is teaching: {lesson_topic}")
    
    def add_student(self, student_name):
        """Add student to class / სტუდენტის კლასში დამატება"""
        self.students.append(student_name)
        print(f"Student {student_name} added to {self.name}'s class")

class ProgrammingStudent(Student):
    """Programming student with additional features / პროგრამირების სტუდენტი დამატებითი ფუნქციებით"""
    
    def __init__(self, name, age, student_id, programming_language):
        super().__init__(name, age, student_id)
        self.programming_language = programming_language
        self.projects = []
        self.coding_hours = 0
    
    def add_project(self, project_name, difficulty_level):
        """Add programming project / პროგრამირების პროექტის დამატება"""
        project = {
            "name": project_name,
            "difficulty": difficulty_level,
            "completed": False
        }
        self.projects.append(project)
        print(f"Project '{project_name}' added with difficulty level: {difficulty_level}")
    
    def complete_project(self, project_name):
        """Mark project as completed / პროექტის დასრულებულად მონიშვნა"""
        for project in self.projects:
            if project["name"] == project_name:
                project["completed"] = True
                print(f"Project '{project_name}' completed!")
                return
        print(f"Project '{project_name}' not found")
    
    def add_coding_hours(self, hours):
        """Add coding practice hours / კოდინგის პრაქტიკის საათების დამატება"""
        self.coding_hours += hours
        print(f"Added {hours} coding hours. Total: {self.coding_hours} hours")
    
    def display_info(self):
        """Override parent method with additional info / მშობელი მეთოდის გადაფარვა დამატებითი ინფორმაციით"""
        super().display_info()
        print(f"Programming Language: {self.programming_language}")
        print(f"Coding Hours: {self.coding_hours}")
        print(f"Projects: {len(self.projects)} total, {sum(1 for p in self.projects if p['completed'])} completed")

# 4. Polymorphism Example / პოლიმორფიზმის მაგალითი

class Shape:
    """Base shape class / ბაზისური ფიგურის კლასი"""
    
    def __init__(self, name):
        self.name = name
    
    def area(self):
        """Calculate area - to be overridden / ფართობის გამოთვლა - გადაფარული იქნება"""
        raise NotImplementedError("Subclass must implement area method")
    
    def perimeter(self):
        """Calculate perimeter - to be overridden / პერიმეტრის გამოთვლა - გადაფარული იქნება"""
        raise NotImplementedError("Subclass must implement perimeter method")

class Rectangle(Shape):
    """Rectangle shape / მართკუთხედი ფიგურა"""
    
    def __init__(self, length, width):
        super().__init__("Rectangle")
        self.length = length
        self.width = width
    
    def area(self):
        return self.length * self.width
    
    def perimeter(self):
        return 2 * (self.length + self.width)
    
    def __str__(self):
        return f"Rectangle({self.length}x{self.width})"

class Circle(Shape):
    """Circle shape / წრე ფიგურა"""
    
    def __init__(self, radius):
        super().__init__("Circle")
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius
    
    def __str__(self):
        return f"Circle(radius={self.radius})"

class Triangle(Shape):
    """Triangle shape / სამკუთხედი ფიგურა"""
    
    def __init__(self, side1, side2, side3):
        super().__init__("Triangle")
        self.side1 = side1
        self.side2 = side2
        self.side3 = side3
    
    def area(self):
        # Using Heron's formula / ჰერონის ფორმულის გამოყენება
        s = self.perimeter() / 2
        return (s * (s - self.side1) * (s - self.side2) * (s - self.side3)) ** 0.5
    
    def perimeter(self):
        return self.side1 + self.side2 + self.side3
    
    def __str__(self):
        return f"Triangle({self.side1}, {self.side2}, {self.side3})"

# 5. Class Methods and Static Methods / კლასის მეთოდები და სტატიკური მეთოდები

class MathCalculator:
    """Calculator with class and static methods / კალკულატორი კლასისა და სტატიკური მეთოდებით"""
    
    pi = 3.14159
    calculations_count = 0
    
    def __init__(self):
        self.history = []
    
    @classmethod
    def get_calculations_count(cls):
        """Get total calculations performed / ჯამში შესრულებული გამოთვლების რაოდენობის მიღება"""
        return cls.calculations_count
    
    @staticmethod
    def add(a, b):
        """Static method for addition / სტატიკური მეთოდი შეკრებისთვის"""
        MathCalculator.calculations_count += 1
        return a + b
    
    @staticmethod
    def multiply(a, b):
        """Static method for multiplication / სტატიკური მეთოდი გამრავლებისთვის"""
        MathCalculator.calculations_count += 1
        return a * b
    
    @classmethod
    def circle_area(cls, radius):
        """Class method to calculate circle area / კლასის მეთოდი წრის ფართობის გამოსათვლელად"""
        cls.calculations_count += 1
        return cls.pi * radius ** 2

# 6. Property Decorators / Property დეკორატორები

class Temperature:
    """Temperature class with property decorators / ტემპერატურის კლასი property დეკორატორებით"""
    
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        """Get temperature in Celsius / ტემპერატურის მიღება ცელსიუსში"""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """Set temperature in Celsius / ტემპერატურის დაყენება ცელსიუსში"""
        if value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        """Get temperature in Fahrenheit / ტემპერატურის მიღება ფარენგეიტში"""
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """Set temperature in Fahrenheit / ტემპერატურის დაყენება ფარენგეიტში"""
        self.celsius = (value - 32) * 5/9
    
    @property
    def kelvin(self):
        """Get temperature in Kelvin / ტემპერატურის მიღება კელვინში"""
        return self._celsius + 273.15
    
    def __str__(self):
        return f"{self._celsius}°C ({self.fahrenheit:.1f}°F, {self.kelvin:.1f}K)"

# 7. Example Usage and Demonstrations / გამოყენების მაგალითები და დემონსტრაციები

def demonstrate_classes():
    """Demonstrate all OOP concepts / ყველა OOP კონცეფციის დემონსტრაცია"""
    
    print("=== Python Classes and Objects Tutorial ===")
    print("=== Python-ის კლასები და ობიექტები ===\n")
    
    # Basic class usage / ბაზისური კლასის გამოყენება
    print("1. Basic Class Usage / ბაზისური კლასის გამოყენება:")
    student1 = Student("Alice", 20, "S001")
    student1.add_grade("Math", 95)
    student1.add_grade("Physics", 88)
    student1.display_info()
    print(f"String representation: {student1}")
    print(f"Total students: {Student.total_students}\n")
    
    # Encapsulation / ენკაფსულაცია
    print("2. Encapsulation / ენკაფსულაცია:")
    account = BankAccount("ACC123", 1000)
    account.deposit(500)
    account.withdraw(200)
    print(f"Current balance: ${account.get_balance()}")
    print(f"Transaction history: {account.get_transaction_history()}\n")
    
    # Inheritance / მემკვიდრეობა
    print("3. Inheritance / მემკვიდრეობა:")
    teacher = Teacher("Dr. Smith", 45, "Computer Science", 15)
    print(teacher.introduce())
    teacher.teach_lesson("Object-Oriented Programming")
    teacher.add_student("Alice")
    teacher.have_birthday()
    print()
    
    # Advanced inheritance / გაღრმავებული მემკვიდრეობა
    print("4. Advanced Inheritance / გაღრმავებული მემკვიდრეობა:")
    prog_student = ProgrammingStudent("Bob", 22, "PS001", "Python")
    prog_student.add_grade("Programming", 92)
    prog_student.add_project("Web Scraper", "Intermediate")
    prog_student.add_project("GUI Calculator", "Beginner")
    prog_student.complete_project("GUI Calculator")
    prog_student.add_coding_hours(25)
    prog_student.display_info()
    print()
    
    # Polymorphism / პოლიმორფიზმი
    print("5. Polymorphism / პოლიმორფიზმი:")
    shapes = [
        Rectangle(5, 3),
        Circle(4),
        Triangle(3, 4, 5)
    ]
    
    for shape in shapes:
        print(f"{shape}")
        print(f"  Area: {shape.area():.2f}")
        print(f"  Perimeter: {shape.perimeter():.2f}")
    print()
    
    # Class and static methods / კლასის და სტატიკური მეთოდები
    print("6. Class and Static Methods / კლასის და სტატიკური მეთოდები:")
    print(f"Addition: 5 + 3 = {MathCalculator.add(5, 3)}")
    print(f"Multiplication: 4 * 7 = {MathCalculator.multiply(4, 7)}")
    print(f"Circle area (r=5): {MathCalculator.circle_area(5):.2f}")
    print(f"Total calculations: {MathCalculator.get_calculations_count()}")
    print()
    
    # Property decorators / Property დეკორატორები
    print("7. Property Decorators / Property დეკორატორები:")
    temp = Temperature(25)
    print(f"Initial temperature: {temp}")
    temp.fahrenheit = 86
    print(f"After setting Fahrenheit to 86: {temp}")
    temp.celsius = 0
    print(f"After setting Celsius to 0: {temp}")
    print()

# 8. Practice Exercises / პრაქტიკული ვარჯიშები

class Car:
    """Practice exercise: Car class / პრაქტიკული ვარჯიში: მანქანის კლასი"""
    
    def __init__(self, make, model, year, mileage=0):
        self.make = make
        self.model = model
        self.year = year
        self.mileage = mileage
        self.is_running = False
    
    def start_engine(self):
        """Start the car engine / მანქანის ძრავის ჩართვა"""
        if not self.is_running:
            self.is_running = True
            print(f"{self.make} {self.model} engine started")
        else:
            print("Engine is already running")
    
    def stop_engine(self):
        """Stop the car engine / მანქანის ძრავის გაჩერება"""
        if self.is_running:
            self.is_running = False
            print(f"{self.make} {self.model} engine stopped")
        else:
            print("Engine is already stopped")
    
    def drive(self, distance):
        """Drive the car / მანქანით სიარული"""
        if self.is_running:
            self.mileage += distance
            print(f"Drove {distance} km. Total mileage: {self.mileage} km")
        else:
            print("Cannot drive. Engine is not running.")
    
    def __str__(self):
        return f"{self.year} {self.make} {self.model} ({self.mileage} km)"

def practice_exercises():
    """Practice exercises / პრაქტიკული ვარჯიშები"""
    print("Practice Exercises / პრაქტიკული ვარჯიშები:")
    
    # Car class demonstration / მანქანის კლასის დემონსტრაცია
    car = Car("Toyota", "Camry", 2020, 15000)
    print(f"Car: {car}")
    car.start_engine()
    car.drive(50)
    car.stop_engine()
    car.drive(25)  # This should not work
    print()

# Main execution / მთავარი შესრულება
if __name__ == "__main__":
    demonstrate_classes()
    practice_exercises()

print("📚 Python Classes and Objects lesson completed!")
print("📚 Python-ის კლასებისა და ობიექტების გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით Library კლასი Book კლასებით რომლებიც შეიცავენ წიგნების მენეჯმენტს
Task 1: Create a Library class with Book classes that manage books

2. დავალება 2: შექმენით Animal ბაზისური კლასი და მისი შვილი კლასები (Dog, Cat, Bird)
Task 2: Create an Animal base class and its child classes (Dog, Cat, Bird)

3. დავალება 3: შექმენით ShoppingCart კლასი Product კლასებით ონლაინ მაღაზიისთვის
Task 3: Create a ShoppingCart class with Product classes for an online store

4. დავალება 4: შექმენით Employee კლასი და მისი სპეციალიზებული ვერსიები (Manager, Developer, etc.)
Task 4: Create an Employee class and its specialized versions (Manager, Developer, etc.)

5. დავალება 5: შექმენით Game კლასი Player კლასით რომელიც ხელს უწყობს მარტივ თამაშს
Task 5: Create a Game class with Player class that supports a simple game
""" 