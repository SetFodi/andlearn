# ===== PYTHON VARIABLES AND BASICS =====
# ქართული: Python ცვლადები და საფუძვლები

# What is Python? (რა არის Python?)
# Python is a beginner-friendly programming language that's easy to read and write
# Python არის დამწყებთათვის მოსახერხებელი პროგრამირების ენა, რომელიც ადვილად იკითხება და იწერება

print("Welcome to Python! / მოგესალმებით Python-ში!")

# 1. Variables and Basic Data Types (ცვლადები და ძირითადი ტიპები)

# Strings (სტრინგები)
name = "ლუკა ფარტენაძე"
course = "Python Programming"
university = "Georgian Technical University"

print("Name:", name)
print("Course:", course)
print("University:", university)

# Numbers (რიცხვები)
age = 20
height = 1.75  # meters
score = 95.5
temperature = -5

print("Age:", age)
print("Height:", height, "meters")
print("Score:", score, "%")
print("Temperature:", temperature, "°C")

# Booleans (ბულეები - მართალი/მცდარი)
is_student = True
has_completed = False
is_online = True

print("Is student?", is_student)
print("Has completed?", has_completed)
print("Is online?", is_online)

# 2. Python is Dynamic (Python არის დინამიური)
# You don't need to declare variable types - Python figures it out automatically
# არ გჭირდებათ ცვლადების ტიპების გამოცხადება - Python თავად გაარკვევს

variable = "I'm a string"
print("Variable:", variable, "| Type:", type(variable))

variable = 42
print("Variable:", variable, "| Type:", type(variable))

variable = True
print("Variable:", variable, "| Type:", type(variable))

# 3. String Operations (სტრინგის ოპერაციები)

first_name = "ანა"
last_name = "გელაშვილი"

# Concatenation (შეერთება)
full_name = first_name + " " + last_name
print("Full name:", full_name)

# F-strings (modern way - f-სტრინგები)
greeting = f"გამარჯობა, {first_name}! როგორ ხარ?"
print(greeting)

# String methods (სტრინგის მეთოდები)
message = "hello world python"
print("Original:", message)
print("Uppercase:", message.upper())
print("Capitalize:", message.capitalize())
print("Title case:", message.title())
print("Replace:", message.replace("world", "beautiful world"))

# 4. Numbers and Math Operations (რიცხვები და მათემატიკური ოპერაციები)

# Basic math operations
a = 10
b = 3

print(f"{a} + {b} = {a + b}")  # Addition
print(f"{a} - {b} = {a - b}")  # Subtraction
print(f"{a} * {b} = {a * b}")  # Multiplication
print(f"{a} / {b} = {a / b}")  # Division (always gives float)
print(f"{a} // {b} = {a // b}")  # Floor division (integer result)
print(f"{a} % {b} = {a % b}")  # Modulus (remainder)
print(f"{a} ** {b} = {a ** b}")  # Exponentiation (power)

# Working with floats
price = 29.99
tax_rate = 0.18  # 18% tax
total = price * (1 + tax_rate)
print(f"Price: {price} GEL")
print(f"Tax rate: {tax_rate * 100}%")
print(f"Total with tax: {total:.2f} GEL")  # :.2f formats to 2 decimal places

# 5. Getting User Input (მომხმარებლისგან შეყვანის მიღება)

print("\n=== User Input Example ===")
# Note: In real programs, we'd use input(), but for this example we'll simulate

# Simulating user input
user_name = "ნინო"  # input("What's your name? / როგორია შენი სახელი? ")
user_age = "19"     # input("How old are you? / რამდენი წლისა ხარ? ")

# Convert string to integer
age_number = int(user_age)
birth_year = 2024 - age_number

print(f"გამარჯობა, {user_name}!")
print(f"You are {age_number} years old")
print(f"You were born in approximately {birth_year}")

# 6. Comments and Documentation (კომენტარები და დოკუმენტაცია)

# This is a single line comment
# ეს არის ერთი ხაზის კომენტარი

"""
This is a multi-line comment (docstring)
ეს არის მრავალხაზიანი კომენტარი
You can write multiple lines here
შეგიძლიათ დაწეროთ მრავალი ხაზი აქ
"""

def greet_user(name):
    """
    This function greets a user by name
    ეს ფუნქცია მისალმებს მომხმარებელს სახელით
    
    Args:
        name (str): The name of the user
    
    Returns:
        str: A greeting message
    """
    return f"გამარჯობა, {name}! კეთილი იყოს შენი მობრძანება Python-ში!"

print(greet_user("ლუკა"))

# 7. Basic Input Validation (ძირითადი შეყვანის ვალიდაცია)

def safe_int_input(prompt, default=0):
    """Safely convert string input to integer"""
    try:
        # In real program: user_input = input(prompt)
        user_input = "25"  # Simulating user input
        return int(user_input)
    except ValueError:
        print(f"Invalid input! Using default value: {default}")
        return default

print("\n=== Safe Input Example ===")
student_age = safe_int_input("Enter your age: ", 18)
print(f"Your age: {student_age}")

# 8. Working with Multiple Variables (მრავალი ცვლადის გამოყენება)

# Multiple assignment
x, y, z = 1, 2, 3
print(f"x = {x}, y = {y}, z = {z}")

# Swapping variables (ცვლადების გაცვლა)
a = "Hello"
b = "World"
print(f"Before swap: a = {a}, b = {b}")

a, b = b, a  # Python makes swapping easy!
print(f"After swap: a = {a}, b = {b}")

# 9. Constants (კონსტანტები)
# Python doesn't have true constants, but we use UPPERCASE by convention
# Python-ს არ აქვს ნამდვილი კონსტანტები, მაგრამ ვიყენებთ UPPERCASE კონვენციით

PI = 3.14159
MAX_STUDENTS = 30
UNIVERSITY_NAME = "Georgian Technical University"
DEFAULT_LANGUAGE = "Georgian"

print(f"π = {PI}")
print(f"Maximum students per class: {MAX_STUDENTS}")
print(f"University: {UNIVERSITY_NAME}")

# 10. Practical Example: Student Profile Calculator

print("\n=== Student Profile Calculator ===")

# Student information
student_name = "გიორგი მელაძე"
birth_year = 2004
current_year = 2024
subjects = 5
total_credits = 120

# Calculations
current_age = current_year - birth_year
credits_per_subject = total_credits / subjects
graduation_year = current_year + 4  # Assuming 4-year program

# Display results
print(f"Student Profile:")
print(f"Name: {student_name}")
print(f"Age: {current_age} years old")
print(f"Credits per subject: {credits_per_subject}")
print(f"Expected graduation: {graduation_year}")

# Grade calculator
assignment_score = 85
midterm_score = 78
final_score = 92

# Weighted average (assuming 30% assignments, 30% midterm, 40% final)
final_grade = (assignment_score * 0.3) + (midterm_score * 0.3) + (final_score * 0.4)

print(f"\nGrade Calculation:")
print(f"Assignment: {assignment_score}")
print(f"Midterm: {midterm_score}")
print(f"Final: {final_score}")
print(f"Overall Grade: {final_grade:.1f}")

# Grade letter
if final_grade >= 90:
    letter_grade = "A"
elif final_grade >= 80:
    letter_grade = "B"
elif final_grade >= 70:
    letter_grade = "C"
elif final_grade >= 60:
    letter_grade = "D"
else:
    letter_grade = "F"

print(f"Letter Grade: {letter_grade}")

# ===== PRACTICE TASKS =====

print("\n=== Practice Tasks ===")

# Task 1: Personal Information Calculator
first_name = "ანა"
last_name = "წითლაძე"
birth_year = 2003
favorite_number = 7

current_age = 2024 - birth_year
double_age = current_age * 2
age_plus_favorite = current_age + favorite_number

print(f"Task 1 - Personal Info:")
print(f"Full name: {first_name} {last_name}")
print(f"Current age: {current_age}")
print(f"Double age: {double_age}")
print(f"Age + favorite number: {age_plus_favorite}")

# Task 2: Shopping Calculator
item1_name = "JavaScript Book"
item1_price = 29.99

item2_name = "Python Book"
item2_price = 34.99

item3_name = "Coffee Mug"
item3_price = 12.50

# Calculate totals
subtotal = item1_price + item2_price + item3_price
tax_rate = 0.18  # 18% VAT in Georgia
tax_amount = subtotal * tax_rate
total = subtotal + tax_amount

print(f"\nTask 2 - Shopping Cart:")
print(f"{item1_name}: {item1_price} GEL")
print(f"{item2_name}: {item2_price} GEL")
print(f"{item3_name}: {item3_price} GEL")
print(f"Subtotal: {subtotal:.2f} GEL")
print(f"Tax ({tax_rate*100}%): {tax_amount:.2f} GEL")
print(f"Total: {total:.2f} GEL")

# Task 3: Temperature Converter
celsius = 25
fahrenheit = (celsius * 9/5) + 32
kelvin = celsius + 273.15

print(f"\nTask 3 - Temperature Conversion:")
print(f"{celsius}°C = {fahrenheit}°F = {kelvin:.1f}K")

# Task 4: Time Calculator
total_minutes = 150  # Study time in minutes
hours = total_minutes // 60
remaining_minutes = total_minutes % 60

print(f"\nTask 4 - Time Calculation:")
print(f"Total study time: {total_minutes} minutes")
print(f"That's {hours} hours and {remaining_minutes} minutes")

# Key Python Concepts Learned:
# 1. Variables don't need type declarations
# 2. F-strings for easy string formatting
# 3. Multiple assignment and swapping
# 4. Basic math operations
# 5. Type conversion (str to int, etc.)
# 6. Comments and docstrings
# 7. Input validation
# 8. Constants convention

# ძირითადი Python კონცეფციები რასაც ვისწავლეთ:
# 1. ცვლადებს არ სჭირდებათ ტიპის გამოცხადება
# 2. F-სტრინგები სტრინგების ფორმატირებისთვის  
# 3. მრავალი ასაინმენტი და გაცვლა
# 4. ძირითადი მათემატიკური ოპერაციები
# 5. ტიპის გარდაქმნა
# 6. კომენტარები და დოკსტრინგები
# 7. შეყვანის ვალიდაცია
# 8. კონსტანტების კონვენცია

print("\n🎉 Congratulations! You've completed Python Basics!")
print("🎉 გილოცავთ! დაასრულეთ Python-ის საფუძვლები!") 