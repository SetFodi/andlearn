# Python Tutorial 03: Functions and Modules
# Python-ის გაკვეთილი 03: ფუნქციები და მოდულები

"""
ეს გაკვეთილი მოიცავს:
- Function definitions and parameters
- Return values and scope
- Lambda functions
- Modules and imports
- Packages and namespaces
- Built-in functions
- Function decorators (basics)

This lesson covers:
- Function definitions and parameters
- Return values and scope
- Lambda functions
- Modules and imports
- Packages and namespaces
- Built-in functions
- Function decorators (basics)
"""

# 1. Basic Function Definition / ფუნქციის ბაზისური განსაზღვრა

def greet_user(name):
    """
    Simple function that greets a user / მარტივი ფუნქცია რომელიც ეუბნება მომხმარებელს
    """
    return f"Hello, {name}! Welcome to our programming course!"

def greet_user_georgian(name):
    """Georgian greeting function / ქართული მისალმების ფუნქცია"""
    return f"გამარჯობა, {name}! კეთილი იყოს შენი მობრძანება ჩვენს პროგრამირების კურსზე!"

# 2. Functions with Parameters / პარამეტრებიანი ფუნქციები

def calculate_area(length, width):
    """Calculate rectangle area / მართკუთხედის ფართობის გამოთვლა"""
    area = length * width
    print(f"Rectangle with length {length} and width {width} has area: {area}")
    return area

def calculate_circle_area(radius, pi=3.14159):
    """Calculate circle area with default parameter / წრის ფართობის გამოთვლა ნაგულისხმევი პარამეტრით"""
    area = pi * radius * radius
    print(f"Circle with radius {radius} has area: {area:.2f}")
    return area

# 3. Variable Arguments / ცვლადი არგუმენტები

def sum_numbers(*args):
    """Sum any number of arguments / ნებისმიერი რაოდენობის არგუმენტების შეკრება"""
    total = sum(args)
    print(f"Sum of {args} = {total}")
    return total

def print_student_info(**kwargs):
    """Print student information using keyword arguments / სტუდენტის ინფორმაციის ბეჭდვა keyword arguments-ით"""
    print("Student Information / სტუდენტის ინფორმაცია:")
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

# 4. Lambda Functions / ლამბდა ფუნქციები

# Simple lambda functions / მარტივი ლამბდა ფუნქციები
square = lambda x: x ** 2
add_numbers = lambda a, b: a + b
is_even = lambda num: num % 2 == 0

# Using lambda with built-in functions / ლამბდას გამოყენება ჩაშენებულ ფუნქციებთან
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print("Original numbers / ორიგინალი რიცხვები:", numbers)
print("Squared numbers / კვადრატში აყვანილი რიცხვები:", list(map(square, numbers)))
print("Even numbers / ლუწი რიცხვები:", list(filter(is_even, numbers)))

# 5. Scope and Global Variables / ხედვადობა და გლობალური ცვლადები

global_counter = 0  # Global variable / გლობალური ცვლადი

def increment_counter():
    """Increment global counter / გლობალური მთვლელის გაზრდა"""
    global global_counter
    global_counter += 1
    print(f"Counter incremented to: {global_counter}")

def local_scope_example():
    """Example of local scope / ლოკალური ხედვადობის მაგალითი"""
    local_variable = "This is local / ეს ლოკალურია"
    print(f"Inside function: {local_variable}")
    
    def nested_function():
        nested_variable = "This is nested / ეს ჩაშენებულია"
        print(f"Inside nested function: {nested_variable}")
        print(f"Can access local: {local_variable}")
    
    nested_function()

# 6. Higher-Order Functions / უმაღლესი რიგის ფუნქციები

def apply_operation(numbers, operation):
    """Apply an operation to a list of numbers / ოპერაციის გამოყენება რიცხვების სიაზე"""
    result = []
    for num in numbers:
        result.append(operation(num))
    return result

def create_multiplier(factor):
    """Create a multiplier function / მამრავლი ფუნქციის შექმნა"""
    def multiplier(x):
        return x * factor
    return multiplier

# 7. Function Decorators (Basic) / ფუნქციის დეკორატორები (ბაზისური)

def timer_decorator(func):
    """Decorator to measure function execution time / დეკორატორი ფუნქციის შესრულების დროის გასაზომად"""
    import time
    
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    
    return wrapper

@timer_decorator
def slow_function():
    """Function that takes some time / ფუნქცია რომელიც დრო ნიშნავს"""
    import time
    time.sleep(1)
    return "Task completed / დავალება დასრულდა"

# 8. Built-in Functions Examples / ჩაშენებული ფუნქციების მაგალითები

def built_in_functions_demo():
    """Demonstrate various built-in functions / სხვადასხვა ჩაშენებული ფუნქციის დემონსტრაცია"""
    
    # Numbers for demonstration / რიცხვები დემონსტრაციისთვის
    sample_numbers = [10, 25, 5, 40, 15, 30]
    
    print("Built-in Functions Demo / ჩაშენებული ფუნქციების დემო:")
    print(f"Numbers: {sample_numbers}")
    print(f"Length: {len(sample_numbers)}")
    print(f"Sum: {sum(sample_numbers)}")
    print(f"Max: {max(sample_numbers)}")
    print(f"Min: {min(sample_numbers)}")
    print(f"Sorted: {sorted(sample_numbers)}")
    print(f"Reversed: {sorted(sample_numbers, reverse=True)}")
    
    # String functions / სტრინგის ფუნქციები
    text = "Hello Python World"
    print(f"\nString functions / სტრინგის ფუნქციები:")
    print(f"Original: {text}")
    print(f"Length: {len(text)}")
    print(f"Uppercase: {text.upper()}")
    print(f"Words: {text.split()}")

# 9. Module Example (simulating import) / მოდულის მაგალითი
# Note: In a real scenario, this would be in a separate file
# შენიშვნა: რეალურ სცენარში ეს იქნებოდა ცალკე ფაილში

class MathUtils:
    """Utility class for mathematical operations / მათემატიკური ოპერაციების უტილიტი კლასი"""
    
    @staticmethod
    def factorial(n):
        """Calculate factorial / ფაქტორიალის გამოთვლა"""
        if n <= 1:
            return 1
        return n * MathUtils.factorial(n - 1)
    
    @staticmethod
    def fibonacci(n):
        """Generate fibonacci sequence / ფიბონაჩის თანმიმდევრობის გენერირება"""
        if n <= 0:
            return []
        elif n == 1:
            return [0]
        elif n == 2:
            return [0, 1]
        
        fib_sequence = [0, 1]
        for i in range(2, n):
            fib_sequence.append(fib_sequence[i-1] + fib_sequence[i-2])
        return fib_sequence
    
    @staticmethod
    def is_prime(num):
        """Check if number is prime / შემოწმება არის თუ არა რიცხვი მარტივი"""
        if num < 2:
            return False
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        return True

# 10. Main Execution / მთავარი შესრულება

def main():
    """Main function to demonstrate all concepts / მთავარი ფუნქცია ყველა კონცეფციის დემონსტრაციისთვის"""
    
    print("=== Python Functions and Modules Tutorial ===")
    print("=== Python-ის ფუნქციები და მოდულები ===\n")
    
    # Basic functions / ბაზისური ფუნქციები
    print("1. Basic Functions / ბაზისური ფუნქციები:")
    print(greet_user("Alice"))
    print(greet_user_georgian("ანა"))
    
    # Function parameters / ფუნქციის პარამეტრები
    print("\n2. Function Parameters / ფუნქციის პარამეტრები:")
    calculate_area(5, 3)
    calculate_circle_area(7)
    
    # Variable arguments / ცვლადი არგუმენტები
    print("\n3. Variable Arguments / ცვლადი არგუმენტები:")
    sum_numbers(1, 2, 3, 4, 5)
    print_student_info(name="John", age=20, major="Computer Science", gpa=3.8)
    
    # Lambda functions / ლამბდა ფუნქციები
    print("\n4. Lambda Functions / ლამბდა ფუნქციები:")
    print(f"Square of 5: {square(5)}")
    print(f"Add 10 + 15: {add_numbers(10, 15)}")
    print(f"Is 8 even? {is_even(8)}")
    
    # Scope examples / ხედვადობის მაგალითები
    print("\n5. Scope Examples / ხედვადობის მაგალითები:")
    increment_counter()
    increment_counter()
    local_scope_example()
    
    # Higher-order functions / უმაღლესი რიგის ფუნქციები
    print("\n6. Higher-Order Functions / უმაღლესი რიგის ფუნქციები:")
    numbers = [1, 2, 3, 4, 5]
    doubled = apply_operation(numbers, lambda x: x * 2)
    print(f"Doubled numbers: {doubled}")
    
    triple_multiplier = create_multiplier(3)
    print(f"Triple of 7: {triple_multiplier(7)}")
    
    # Decorators / დეკორატორები
    print("\n7. Decorators / დეკორატორები:")
    result = slow_function()
    print(f"Result: {result}")
    
    # Built-in functions / ჩაშენებული ფუნქციები
    print("\n8. Built-in Functions / ჩაშენებული ფუნქციები:")
    built_in_functions_demo()
    
    # Math utilities / მათემატიკური უტილიტები
    print("\n9. Math Utilities / მათემატიკური უტილიტები:")
    print(f"Factorial of 5: {MathUtils.factorial(5)}")
    print(f"First 8 Fibonacci numbers: {MathUtils.fibonacci(8)}")
    print(f"Is 17 prime? {MathUtils.is_prime(17)}")
    print(f"Is 20 prime? {MathUtils.is_prime(20)}")
    
    # Practice exercises / პრაქტიკული ვარჯიშები
    print("\n10. Practice Exercises / პრაქტიკული ვარჯიშები:")
    practice_exercises()

def practice_exercises():
    """Practice exercises for functions / ფუნქციების პრაქტიკული ვარჯიშები"""
    
    # Exercise 1: Temperature converter / ვარჯიში 1: ტემპერატურის კონვერტერი
    def celsius_to_fahrenheit(celsius):
        return (celsius * 9/5) + 32
    
    def fahrenheit_to_celsius(fahrenheit):
        return (fahrenheit - 32) * 5/9
    
    print("Temperature Conversion / ტემპერატურის კონვერტაცია:")
    print(f"25°C = {celsius_to_fahrenheit(25):.1f}°F")
    print(f"77°F = {fahrenheit_to_celsius(77):.1f}°C")
    
    # Exercise 2: List operations / ვარჯიში 2: სიის ოპერაციები
    def find_average(numbers):
        if not numbers:
            return 0
        return sum(numbers) / len(numbers)
    
    def find_second_largest(numbers):
        if len(numbers) < 2:
            return None
        unique_numbers = list(set(numbers))
        unique_numbers.sort(reverse=True)
        return unique_numbers[1] if len(unique_numbers) > 1 else unique_numbers[0]
    
    test_numbers = [10, 5, 8, 3, 9, 1, 7]
    print(f"\nList Operations / სიის ოპერაციები:")
    print(f"Numbers: {test_numbers}")
    print(f"Average: {find_average(test_numbers):.2f}")
    print(f"Second largest: {find_second_largest(test_numbers)}")

# Run the main function / მთავარი ფუნქციის გაშვება
if __name__ == "__main__":
    main()

print("\n📚 Python Functions and Modules lesson completed!")
print("📚 Python-ის ფუნქციებისა და მოდულების გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით ფუნქცია რომელიც გადაყრის ტემპერატურას Kelvin-იდან Celsius-ში და Fahrenheit-ში
Task 1: Create a function that converts temperature from Kelvin to Celsius and Fahrenheit

2. დავალება 2: შექმენით დეკორატორი რომელიც ითვლის ფუნქციის გამოძახების რაოდენობას
Task 2: Create a decorator that counts the number of function calls

3. დავალება 3: შექმენით ფუნქცია რომელიც იღებს ტექსტს და აბრუნებს სიტყვების სიხშირეს
Task 3: Create a function that takes text and returns word frequency

4. დავალება 4: შექმენით calculator კლასი რომელიც იქნება static მეთოდებით
Task 4: Create a calculator class with static methods

5. დავალება 5: შექმენით ფუნქცია რომელიც აგენერირებს პაროლებს მოცემული პარამეტრებით
Task 5: Create a function that generates passwords with given parameters
""" 