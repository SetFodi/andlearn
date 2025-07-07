# ===== PYTHON LISTS AND LOOPS =====
# ქართული: Python სიები და ციკლები

print("Learning Python Lists and Loops!")
print("ვისწავლით Python-ის სიებს და ციკლებს!")

# 1. What are Lists? (რა არის სიები?)
# Lists are collections of items that can store multiple values
# სიები არის ელემენტების კოლექციები, რომლებიც შეიძლება შეინახოს მრავალი მნიშვნელობა

# Creating lists (სიების შექმნა)
courses = ["JavaScript", "Python", "React", "TypeScript"]
numbers = [1, 2, 3, 4, 5]
mixed_list = ["Ana", 20, True, 3.14]  # Lists can contain different types
empty_list = []

print("Courses:", courses)
print("Numbers:", numbers)
print("Mixed list:", mixed_list)
print("Empty list:", empty_list)

# 2. Accessing List Items (სიის ელემენტების წვდომა)

students = ["ლუკა", "ანა", "გიორგი", "ნინო", "დავითი"]

# Positive indexing (starts from 0)
print("First student:", students[0])
print("Second student:", students[1])
print("Third student:", students[2])

# Negative indexing (starts from end)
print("Last student:", students[-1])
print("Second to last:", students[-2])

# Getting list length
print(f"Total students: {len(students)}")

# 3. Slicing Lists (სიების ნაწილების ამოღება)

grades = [85, 92, 78, 96, 87, 74, 89]

print("All grades:", grades)
print("First 3 grades:", grades[0:3])  # or grades[:3]
print("Last 3 grades:", grades[-3:])   # or grades[4:]
print("Middle grades:", grades[2:5])
print("Every other grade:", grades[::2])  # Step by 2

# 4. Modifying Lists (სიების შეცვლა)

programming_languages = ["Python", "JavaScript"]

# Adding items
programming_languages.append("TypeScript")  # Add to end
programming_languages.insert(0, "HTML")     # Insert at position 0
programming_languages.extend(["CSS", "React"])  # Add multiple items

print("After additions:", programming_languages)

# Removing items
programming_languages.remove("HTML")        # Remove specific item
popped_item = programming_languages.pop()   # Remove and return last item
print("Removed last item:", popped_item)
print("After removals:", programming_languages)

# Changing items
programming_languages[0] = "Python 3"
print("After change:", programming_languages)

# 5. List Methods (სიის მეთოდები)

scores = [85, 92, 78, 96, 87, 92, 74]

print("Original scores:", scores)
print("Maximum score:", max(scores))
print("Minimum score:", min(scores))
print("Sum of scores:", sum(scores))
print("Average score:", sum(scores) / len(scores))
print("Count of 92:", scores.count(92))
print("Index of 96:", scores.index(96))

# Sorting
scores_copy = scores.copy()  # Make a copy
scores_copy.sort()           # Sort in place
print("Sorted scores:", scores_copy)

scores_reverse = sorted(scores, reverse=True)  # New sorted list
print("Reverse sorted:", scores_reverse)

# 6. For Loops (for ციკლები)

print("\n=== For Loops ===")

# Basic for loop
cities = ["თბილისი", "ბათუმი", "ქუთაისი", "რუსთავი"]

print("Georgian cities:")
for city in cities:
    print(f"- {city}")

# Loop with index
print("\nCities with numbers:")
for i, city in enumerate(cities):
    print(f"{i + 1}. {city}")

# Loop through range
print("\nNumbers 1 to 5:")
for number in range(1, 6):
    print(f"Number: {number}")

# Loop with step
print("\nEven numbers from 0 to 10:")
for number in range(0, 11, 2):
    print(number, end=" ")
print()  # New line

# 7. While Loops (while ციკლები)

print("\n=== While Loops ===")

# Basic while loop
countdown = 5
print("Countdown:")
while countdown > 0:
    print(f"{countdown}...")
    countdown -= 1
print("🚀 Launch!")

# User input simulation with while loop
attempts = 0
max_attempts = 3
correct_password = "python123"

print("\nPassword checker simulation:")
while attempts < max_attempts:
    # Simulating user input
    if attempts == 0:
        password = "wrong"
    elif attempts == 1:
        password = "still_wrong"
    else:
        password = "python123"
    
    print(f"Attempt {attempts + 1}: Entering '{password}'")
    
    if password == correct_password:
        print("✅ Access granted!")
        break
    else:
        attempts += 1
        remaining = max_attempts - attempts
        if remaining > 0:
            print(f"❌ Wrong password. {remaining} attempts remaining.")
        else:
            print("❌ Access denied. Too many failed attempts.")

# 8. List Comprehensions (სიების შეგროვება)

print("\n=== List Comprehensions ===")

# Traditional way
squares = []
for number in range(1, 6):
    squares.append(number ** 2)
print("Squares (traditional):", squares)

# List comprehension way (more Pythonic)
squares_comp = [number ** 2 for number in range(1, 6)]
print("Squares (comprehension):", squares_comp)

# With conditions
even_squares = [num ** 2 for num in range(1, 11) if num % 2 == 0]
print("Even squares:", even_squares)

# String manipulation
names = ["ana", "luka", "giorgi", "nino"]
capitalized = [name.capitalize() for name in names]
print("Capitalized names:", capitalized)

# 9. Nested Loops (ჩადგმული ციკლები)

print("\n=== Nested Loops ===")

# Multiplication table
print("Multiplication table (2x2):")
for i in range(1, 3):
    for j in range(1, 3):
        result = i * j
        print(f"{i} × {j} = {result}")

# Matrix-like structure
students_grades = [
    ["ლუკა", 85, 92, 78],
    ["ანა", 90, 88, 95],
    ["გიორგი", 87, 84, 91]
]

print("\nStudent grades:")
for student_data in students_grades:
    name = student_data[0]
    grades = student_data[1:]
    average = sum(grades) / len(grades)
    print(f"{name}: {grades} → Average: {average:.1f}")

# 10. Practical Example: Grade Management System

print("\n=== Grade Management System ===")

class SimpleGradeBook:
    def __init__(self):
        self.students = []
        self.grades = {}
    
    def add_student(self, name):
        if name not in self.students:
            self.students.append(name)
            self.grades[name] = []
            print(f"Added student: {name}")
        else:
            print(f"Student {name} already exists")
    
    def add_grade(self, name, grade):
        if name in self.students:
            self.grades[name].append(grade)
            print(f"Added grade {grade} for {name}")
        else:
            print(f"Student {name} not found")
    
    def get_average(self, name):
        if name in self.students and self.grades[name]:
            return sum(self.grades[name]) / len(self.grades[name])
        return 0
    
    def display_all(self):
        print("\n📊 Grade Report:")
        for student in self.students:
            student_grades = self.grades[student]
            if student_grades:
                average = self.get_average(student)
                print(f"{student}: {student_grades} → Average: {average:.1f}")
            else:
                print(f"{student}: No grades yet")

# Using the grade management system
gradebook = SimpleGradeBook()

# Add students and grades
gradebook.add_student("ლუკა ფარტენაძე")
gradebook.add_student("ანა გელაშვილი")
gradebook.add_student("გიორგი მელაძე")

# Add some grades
gradebook.add_grade("ლუკა ფარტენაძე", 85)
gradebook.add_grade("ლუკა ფარტენაძე", 92)
gradebook.add_grade("ლუკა ფარტენაძე", 78)

gradebook.add_grade("ანა გელაშვილი", 95)
gradebook.add_grade("ანა გელაშვილი", 88)
gradebook.add_grade("ანა გელაშვილი", 92)

gradebook.add_grade("გიორგი მელაძე", 87)
gradebook.add_grade("გიორგი მელაძე", 84)

# Display results
gradebook.display_all()

# ===== PRACTICE TASKS =====

print("\n=== Practice Tasks ===")

# Task 1: Shopping List Manager
print("Task 1: Shopping List")
shopping_list = []

# Add items
items_to_add = ["bread", "milk", "eggs", "cheese", "apples"]
for item in items_to_add:
    shopping_list.append(item)
    print(f"Added {item} to shopping list")

print(f"Shopping list: {shopping_list}")
print(f"Total items: {len(shopping_list)}")

# Remove an item
shopping_list.remove("milk")
print(f"After removing milk: {shopping_list}")

# Task 2: Number Analysis
print("\nTask 2: Number Analysis")
numbers = [12, 25, 8, 33, 19, 41, 6, 28, 15]

# Find even and odd numbers
even_numbers = []
odd_numbers = []

for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)
    else:
        odd_numbers.append(num)

print(f"Original numbers: {numbers}")
print(f"Even numbers: {even_numbers}")
print(f"Odd numbers: {odd_numbers}")
print(f"Sum of even: {sum(even_numbers)}")
print(f"Sum of odd: {sum(odd_numbers)}")

# Task 3: Password Generator (Simple)
print("\nTask 3: Simple Pattern Generator")
patterns = []

for i in range(1, 6):
    pattern = "*" * i
    patterns.append(pattern)
    print(pattern)

print(f"All patterns: {patterns}")

# Task 4: Grade Letter Assignment
print("\nTask 4: Grade Letters")
numeric_grades = [95, 87, 76, 92, 84, 69, 58, 91]
letter_grades = []

for grade in numeric_grades:
    if grade >= 90:
        letter = "A"
    elif grade >= 80:
        letter = "B"
    elif grade >= 70:
        letter = "C"
    elif grade >= 60:
        letter = "D"
    else:
        letter = "F"
    
    letter_grades.append(letter)
    print(f"{grade} → {letter}")

print(f"Letter grades: {letter_grades}")

# Count letter frequencies
letter_counts = {}
for letter in letter_grades:
    if letter in letter_counts:
        letter_counts[letter] += 1
    else:
        letter_counts[letter] = 1

print("Grade distribution:")
for letter, count in letter_counts.items():
    print(f"Grade {letter}: {count} students")

# Task 5: List Statistics
print("\nTask 5: List Statistics")
test_scores = [78, 85, 92, 69, 84, 91, 76, 88, 95, 82]

print(f"Test scores: {test_scores}")
print(f"Number of scores: {len(test_scores)}")
print(f"Highest score: {max(test_scores)}")
print(f"Lowest score: {min(test_scores)}")
print(f"Average score: {sum(test_scores) / len(test_scores):.1f}")

# Find above and below average
average = sum(test_scores) / len(test_scores)
above_average = [score for score in test_scores if score > average]
below_average = [score for score in test_scores if score < average]

print(f"Above average ({average:.1f}): {above_average}")
print(f"Below average: {below_average}")

print("\n🎉 Great job! You've mastered Python lists and loops!")
print("🎉 მშვენიერია! დაეუფლეთ Python-ის სიებს და ციკლებს!")

# Key Concepts Learned:
# 1. Creating and accessing lists
# 2. List methods (append, remove, sort, etc.)
# 3. For loops and while loops
# 4. List slicing and indexing
# 5. List comprehensions
# 6. Nested loops
# 7. Practical applications

# ძირითადი კონცეფციები რასაც ვისწავლეთ:
# 1. სიების შექმნა და წვდომა
# 2. სიის მეთოდები
# 3. For და while ციკლები
# 4. სიების დაჭრა და ინდექსირება
# 5. სიების შეგროვება (comprehensions)
# 6. ჩადგმული ციკლები
# 7. პრაქტიკული გამოყენება 