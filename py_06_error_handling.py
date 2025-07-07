# Python Tutorial 06: Error Handling and Exceptions
# Python-ის გაკვეთილი 06: ცდომილებების მართვა და გამონაკლისები

"""
ეს გაკვეთილი მოიცავს:
- Understanding exceptions
- Try, except, else, finally blocks
- Built-in exception types
- Custom exceptions
- Exception handling best practices
- Debugging techniques
- Logging for error tracking
- Assert statements

This lesson covers:
- Understanding exceptions
- Try, except, else, finally blocks
- Built-in exception types
- Custom exceptions
- Exception handling best practices
- Debugging techniques
- Logging for error tracking
- Assert statements
"""

import logging
import traceback
import sys
from datetime import datetime

# 1. Basic Exception Handling / ბაზისური გამონაკლისების მართვა

def basic_exception_handling():
    """Demonstrate basic try-except blocks / ბაზისური try-except ბლოკების დემონსტრაცია"""
    
    print("1. Basic Exception Handling / ბაზისური გამონაკლისების მართვა:")
    
    # Simple try-except / მარტივი try-except
    try:
        number = int(input("Enter a number / შეიყვანეთ რიცხვი: "))
        result = 10 / number
        print(f"Result: 10 / {number} = {result}")
    except ValueError:
        print("Error: Invalid input. Please enter a valid number.")
        print("ცდომილება: არასწორი შეყვანა. გთხოვთ შეიყვანოთ სწორი რიცხვი.")
    except ZeroDivisionError:
        print("Error: Cannot divide by zero.")
        print("ცდომილება: ნულზე გაყოფა შეუძლებელია.")
    
    print("Program continues after exception handling\n")

def multiple_exceptions_demo():
    """Demonstrate handling multiple exceptions / რამდენიმე გამონაკლისის მართვის დემონსტრაცია"""
    
    print("2. Multiple Exceptions / რამდენიმე გამონაკლისი:")
    
    test_cases = [
        ("10", "2"),      # Valid case / სწორი შემთხვევა
        ("abc", "2"),     # ValueError
        ("10", "0"),      # ZeroDivisionError
        ("10", "def")     # ValueError in second input
    ]
    
    for i, (num1, num2) in enumerate(test_cases, 1):
        print(f"Test case {i}: {num1} / {num2}")
        try:
            a = int(num1)
            b = int(num2)
            result = a / b
            print(f"  Result: {result}")
        except ValueError as e:
            print(f"  ValueError: Invalid number format - {e}")
        except ZeroDivisionError as e:
            print(f"  ZeroDivisionError: Cannot divide by zero - {e}")
        except Exception as e:
            print(f"  Unexpected error: {e}")
        print()

# 2. Try-Except-Else-Finally / Try-Except-Else-Finally

def complete_exception_structure():
    """Demonstrate complete exception handling structure / სრული გამონაკლისების მართვის სტრუქტურის დემონსტრაცია"""
    
    print("3. Complete Exception Structure / სრული გამონაკლისების სტრუქტურა:")
    
    def safe_file_operation(filename, operation="read"):
        """Safe file operation with complete exception handling / უსაფრთხო ფაილის ოპერაცია სრული გამონაკლისების მართვით"""
        
        file_handle = None
        
        try:
            print(f"Attempting to {operation} file: {filename}")
            
            if operation == "write":
                file_handle = open(filename, "w", encoding="utf-8")
                file_handle.write("Test content / ტესტ შემცველობა\n")
                file_handle.write("გამარჯობა, Python!")
                print("File written successfully")
            
            elif operation == "read":
                file_handle = open(filename, "r", encoding="utf-8")
                content = file_handle.read()
                print(f"File content:\n{content}")
        
        except FileNotFoundError:
            print(f"Error: File '{filename}' not found")
            print(f"ცდომილება: ფაილი '{filename}' ვერ მოიძებნა")
        
        except PermissionError:
            print(f"Error: Permission denied for file '{filename}'")
            print(f"ცდომილება: '{filename}' ფაილზე წვდომა აკრძალულია")
        
        except Exception as e:
            print(f"Unexpected error: {e}")
            print(f"მოულოდნელი ცდომილება: {e}")
        
        else:
            print("File operation completed successfully")
            print("ფაილის ოპერაცია წარმატებით დასრულდა")
        
        finally:
            if file_handle:
                file_handle.close()
                print("File closed")
                print("ფაილი დაიხურა")
            print("Cleanup completed\n")
    
    # Test file operations / ფაილის ოპერაციების ტესტი
    safe_file_operation("test.txt", "write")
    safe_file_operation("test.txt", "read")
    safe_file_operation("nonexistent.txt", "read")
    
    # Clean up / გასუფთავება
    import os
    if os.path.exists("test.txt"):
        os.remove("test.txt")

# 3. Built-in Exception Types / ჩაშენებული გამონაკლისების ტიპები

def builtin_exceptions_demo():
    """Demonstrate various built-in exceptions / სხვადასხვა ჩაშენებული გამონაკლისის დემონსტრაცია"""
    
    print("4. Built-in Exception Types / ჩაშენებული გამონაკლისების ტიპები:")
    
    # Dictionary of exception examples / გამონაკლისების მაგალითების ლექსიკონი
    exception_examples = {
        "ValueError": lambda: int("abc"),
        "TypeError": lambda: "string" + 5,
        "IndexError": lambda: [1, 2, 3][10],
        "KeyError": lambda: {"a": 1}["b"],
        "AttributeError": lambda: "string".nonexistent_method(),
        "ZeroDivisionError": lambda: 10 / 0,
        "FileNotFoundError": lambda: open("nonexistent.txt", "r"),
        "ImportError": lambda: __import__("nonexistent_module")
    }
    
    for exception_name, func in exception_examples.items():
        try:
            print(f"Testing {exception_name}:")
            func()
        except Exception as e:
            print(f"  Caught {type(e).__name__}: {e}")
        print()

# 4. Custom Exceptions / მორგებული გამონაკლისები

class CustomError(Exception):
    """Base custom exception / ბაზისური მორგებული გამონაკლისი"""
    pass

class ValidationError(CustomError):
    """Exception for validation errors / ვალიდაციის ცდომილებებისთვის გამონაკლისი"""
    
    def __init__(self, field, value, message):
        self.field = field
        self.value = value
        self.message = message
        super().__init__(f"Validation failed for '{field}': {message} (value: {value})")

class BusinessLogicError(CustomError):
    """Exception for business logic errors / ბიზნეს ლოგიკის ცდომილებებისთვის გამონაკლისი"""
    
    def __init__(self, operation, reason):
        self.operation = operation
        self.reason = reason
        super().__init__(f"Business logic error in '{operation}': {reason}")

class DatabaseError(CustomError):
    """Exception for database operations / მონაცემთა ბაზის ოპერაციებისთვის გამონაკლისი"""
    
    def __init__(self, query, error_code, message):
        self.query = query
        self.error_code = error_code
        self.message = message
        super().__init__(f"Database error {error_code}: {message}")

def custom_exceptions_demo():
    """Demonstrate custom exceptions / მორგებული გამონაკლისების დემონსტრაცია"""
    
    print("5. Custom Exceptions / მორგებული გამონაკლისები:")
    
    # User validation example / მომხმარებლის ვალიდაციის მაგალითი
    def validate_user(name, age, email):
        """Validate user data / მომხმარებლის მონაცემების ვალიდაცია"""
        
        if not name or len(name) < 2:
            raise ValidationError("name", name, "Name must be at least 2 characters")
        
        if age < 0 or age > 120:
            raise ValidationError("age", age, "Age must be between 0 and 120")
        
        if "@" not in email:
            raise ValidationError("email", email, "Email must contain @ symbol")
        
        return True
    
    # Test custom exceptions / მორგებული გამონაკლისების ტესტი
    test_users = [
        ("John", 25, "john@example.com"),  # Valid
        ("A", 25, "a@example.com"),        # Invalid name
        ("Bob", -5, "bob@example.com"),    # Invalid age
        ("Alice", 30, "alice.example.com") # Invalid email
    ]
    
    for name, age, email in test_users:
        try:
            validate_user(name, age, email)
            print(f"✓ User {name} is valid")
        except ValidationError as e:
            print(f"✗ Validation error: {e}")
            print(f"  Field: {e.field}, Value: {e.value}")
        except Exception as e:
            print(f"✗ Unexpected error: {e}")
        print()

# 5. Exception Chaining / გამონაკლისების ჯაჭვი

def exception_chaining_demo():
    """Demonstrate exception chaining / გამონაკლისების ჯაჭვის დემონსტრაცია"""
    
    print("6. Exception Chaining / გამონაკლისების ჯაჭვი:")
    
    def process_data(data):
        """Process data with exception chaining / მონაცემების დამუშავება გამონაკლისების ჯაჭვით"""
        try:
            # Simulate data processing / მონაცემების დამუშავების იმიტაცია
            if not isinstance(data, dict):
                raise TypeError("Data must be a dictionary")
            
            required_fields = ["id", "name", "value"]
            for field in required_fields:
                if field not in data:
                    raise KeyError(f"Missing required field: {field}")
            
            # Simulate calculation error / გამოთვლის ცდომილების იმიტაცია
            result = 100 / data["value"]
            return result
            
        except (TypeError, KeyError) as e:
            # Chain the exception / გამონაკლისის ჯაჭვი
            raise BusinessLogicError("data_processing", str(e)) from e
        except ZeroDivisionError as e:
            raise BusinessLogicError("calculation", "Division by zero in value field") from e
    
    # Test exception chaining / გამონაკლისების ჯაჭვის ტესტი
    test_data = [
        {"id": 1, "name": "test", "value": 10},  # Valid
        "invalid_data",                          # TypeError
        {"id": 1, "name": "test"},              # KeyError
        {"id": 1, "name": "test", "value": 0}   # ZeroDivisionError
    ]
    
    for i, data in enumerate(test_data, 1):
        try:
            result = process_data(data)
            print(f"Test {i}: Success - Result: {result}")
        except BusinessLogicError as e:
            print(f"Test {i}: Business Logic Error - {e}")
            if e.__cause__:
                print(f"  Caused by: {type(e.__cause__).__name__}: {e.__cause__}")
        print()

# 6. Logging for Error Tracking / ცდომილებების თვალყურის დევნებისთვის ლოგირება

def setup_logging():
    """Setup logging configuration / ლოგირების კონფიგურაციის მომზადება"""
    
    # Create logger / ლოგერის შექმნა
    logger = logging.getLogger("error_demo")
    logger.setLevel(logging.DEBUG)
    
    # Create console handler / კონსოლის handler-ის შექმნა
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)
    
    # Create file handler / ფაილის handler-ის შექმნა
    file_handler = logging.FileHandler("error_log.txt", encoding="utf-8")
    file_handler.setLevel(logging.DEBUG)
    
    # Create formatter / formatter-ის შექმნა
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )
    console_handler.setFormatter(formatter)
    file_handler.setFormatter(formatter)
    
    # Add handlers to logger / logger-ს handler-ების დამატება
    logger.addHandler(console_handler)
    logger.addHandler(file_handler)
    
    return logger

def logging_demo():
    """Demonstrate logging for error tracking / ცდომილებების თვალყურის დევნებისთვის ლოგირების დემონსტრაცია"""
    
    print("7. Logging for Error Tracking / ცდომილებების თვალყურის დევნება:")
    
    logger = setup_logging()
    
    def risky_operation(operation_type):
        """Simulate risky operations with logging / რისკიანი ოპერაციების იმიტაცია ლოგირებით"""
        
        logger.info(f"Starting operation: {operation_type}")
        
        try:
            if operation_type == "divide_by_zero":
                result = 10 / 0
            elif operation_type == "invalid_access":
                data = [1, 2, 3]
                return data[10]
            elif operation_type == "type_error":
                return "string" + 5
            elif operation_type == "success":
                return 42
            
        except Exception as e:
            logger.error(f"Error in {operation_type}: {type(e).__name__}: {e}")
            logger.debug(f"Traceback:\n{traceback.format_exc()}")
            raise
        
        else:
            logger.info(f"Operation {operation_type} completed successfully")
        
        finally:
            logger.debug(f"Cleanup for operation: {operation_type}")
    
    # Test different operations / სხვადასხვა ოპერაციების ტესტი
    operations = ["success", "divide_by_zero", "invalid_access", "type_error"]
    
    for op in operations:
        try:
            result = risky_operation(op)
            print(f"Operation {op}: Success")
        except Exception as e:
            print(f"Operation {op}: Failed - {type(e).__name__}")
        print()
    
    # Clean up log file / ლოგ ფაილის გასუფთავება
    import os
    if os.path.exists("error_log.txt"):
        os.remove("error_log.txt")

# 7. Assert Statements / Assert განცხადებები

def assert_demo():
    """Demonstrate assert statements / Assert განცხადებების დემონსტრაცია"""
    
    print("8. Assert Statements / Assert განცხადებები:")
    
    def calculate_average(numbers):
        """Calculate average with assertions / საშუალოს გამოთვლა assertions-ით"""
        
        # Pre-condition assertions / წინა პირობების assertions
        assert isinstance(numbers, list), "Input must be a list"
        assert len(numbers) > 0, "List cannot be empty"
        assert all(isinstance(n, (int, float)) for n in numbers), "All elements must be numbers"
        
        average = sum(numbers) / len(numbers)
        
        # Post-condition assertion / შემდგომი პირობის assertion
        assert isinstance(average, (int, float)), "Average must be a number"
        
        return average
    
    # Test assert statements / Assert განცხადებების ტესტი
    test_cases = [
        [1, 2, 3, 4, 5],     # Valid
        [],                   # Empty list
        [1, 2, "3", 4],      # Invalid type
        "not a list"         # Wrong type
    ]
    
    for i, test_case in enumerate(test_cases, 1):
        try:
            result = calculate_average(test_case)
            print(f"Test {i}: Average = {result}")
        except AssertionError as e:
            print(f"Test {i}: Assertion failed - {e}")
        except Exception as e:
            print(f"Test {i}: Error - {type(e).__name__}: {e}")
        print()

# 8. Debugging Techniques / გამართვის ტექნიკები

def debugging_demo():
    """Demonstrate debugging techniques / გამართვის ტექნიკების დემონსტრაცია"""
    
    print("9. Debugging Techniques / გამართვის ტექნიკები:")
    
    def debug_function(x, y):
        """Function with debugging output / ფუნქცია გამართვის გამოტანით"""
        
        print(f"DEBUG: Function called with x={x}, y={y}")
        print(f"DEBUG: Type of x: {type(x)}, Type of y: {type(y)}")
        
        try:
            # Add debug information / გამართვის ინფორმაციის დამატება
            print(f"DEBUG: Attempting to perform x / y")
            result = x / y
            print(f"DEBUG: Result = {result}")
            return result
            
        except Exception as e:
            print(f"DEBUG: Exception occurred: {type(e).__name__}")
            print(f"DEBUG: Exception message: {e}")
            print(f"DEBUG: Current locals: {locals()}")
            
            # Print traceback / traceback-ის ბეჭდვა
            print("DEBUG: Traceback:")
            traceback.print_exc()
            
            raise
    
    # Test debugging / გამართვის ტესტი
    try:
        debug_function(10, 2)
        debug_function(10, 0)  # This will cause an error
    except Exception as e:
        print(f"Final error handling: {e}")

# 9. Error Recovery Strategies / ცდომილებებისგან აღდგენის სტრატეგიები

def error_recovery_demo():
    """Demonstrate error recovery strategies / ცდომილებებისგან აღდგენის სტრატეგიების დემონსტრაცია"""
    
    print("10. Error Recovery Strategies / ცდომილებებისგან აღდგენის სტრატეგიები:")
    
    def robust_divide(x, y, default=None):
        """Division with error recovery / გაყოფა ცდომილებებისგან აღდგენით"""
        try:
            return x / y
        except ZeroDivisionError:
            if default is not None:
                print(f"Warning: Division by zero, returning default value: {default}")
                return default
            else:
                print("Error: Division by zero, no default value provided")
                raise
        except TypeError:
            print("Error: Invalid types for division")
            raise
    
    def retry_operation(func, max_retries=3, delay=1):
        """Retry operation with exponential backoff / ოპერაციის გამეორება exponential backoff-ით"""
        import time
        
        for attempt in range(max_retries):
            try:
                return func()
            except Exception as e:
                print(f"Attempt {attempt + 1} failed: {e}")
                if attempt < max_retries - 1:
                    wait_time = delay * (2 ** attempt)
                    print(f"Retrying in {wait_time} seconds...")
                    time.sleep(wait_time)
                else:
                    print("All retry attempts failed")
                    raise
    
    # Test error recovery / ცდომილებებისგან აღდგენის ტესტი
    print("Testing robust division:")
    print(f"10 / 2 = {robust_divide(10, 2)}")
    print(f"10 / 0 with default = {robust_divide(10, 0, default=float('inf'))}")
    
    try:
        robust_divide(10, 0)  # No default
    except ZeroDivisionError:
        print("Handled division by zero without default")

# Main execution / მთავარი შესრულება

def main():
    """Main function to demonstrate all error handling concepts / მთავარი ფუნქცია ყველა ცდომილებების მართვის კონცეფციის დემონსტრაციისთვის"""
    
    print("=== Python Error Handling Tutorial ===")
    print("=== Python-ის ცდომილებების მართვის გაკვეთილი ===\n")
    
    # Comment out the input function for automated testing
    # basic_exception_handling()
    multiple_exceptions_demo()
    complete_exception_structure()
    builtin_exceptions_demo()
    custom_exceptions_demo()
    exception_chaining_demo()
    logging_demo()
    assert_demo()
    debugging_demo()
    error_recovery_demo()

if __name__ == "__main__":
    main()

print("\n📚 Python Error Handling lesson completed!")
print("📚 Python-ის ცდომილებების მართვის გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით მორგებული Exception კლასი web API errors-ისთვის
Task 1: Create a custom Exception class for web API errors

2. დავალება 2: შექმენით ფუნქცია რომელიც უსაფრთხოდ კითხულობს JSON ფაილებს
Task 2: Create a function that safely reads JSON files

3. დავალება 3: შექმენით retry decorator-ი failed operations-ისთვის
Task 3: Create a retry decorator for failed operations

4. დავალება 4: შექმენით comprehensive error logger კლასი
Task 4: Create a comprehensive error logger class

5. დავალება 5: შექმენით data validation system custom exceptions-ით
Task 5: Create a data validation system with custom exceptions
""" 