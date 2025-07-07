# Python Tutorial 10: Testing and Debugging
# Python-ის გაკვეთილი 10: ტესტირება და განლაგება

"""
ეს გაკვეთილი მოიცავს:
- Unit testing with unittest and pytest
- Test-driven development (TDD)
- Debugging techniques and tools
- Logging for debugging
- Code profiling and performance analysis
- Integration testing
- Mocking and test doubles
- Automated testing best practices

This lesson covers:
- Unit testing with unittest and pytest
- Test-driven development (TDD)
- Debugging techniques and tools
- Logging for debugging
- Code profiling and performance analysis
- Integration testing
- Mocking and test doubles
- Automated testing best practices
"""

import unittest
import logging
import cProfile
import timeit
import traceback
import sys
from unittest.mock import Mock, patch, MagicMock
from typing import List, Dict, Any
import tempfile
import os

# 1. Unit Testing with unittest / unittest-ით ერთეული ტესტირება

class Calculator:
    """Simple calculator class for testing demonstration / მარტივი კალკულატორის კლასი ტესტირების დემონსტრაციისთვის"""
    
    def add(self, a, b):
        """Add two numbers / ორი რიცხვის დამატება"""
        return a + b
    
    def subtract(self, a, b):
        """Subtract two numbers / ორი რიცხვის გამოკლება"""
        return a - b
    
    def multiply(self, a, b):
        """Multiply two numbers / ორი რიცხვის გამრავლება"""
        return a * b
    
    def divide(self, a, b):
        """Divide two numbers / ორი რიცხვის გაყოფა"""
        if b == 0:
            raise ValueError("Cannot divide by zero / ნულზე გაყოფა შეუძლებელია")
        return a / b
    
    def power(self, base, exponent):
        """Calculate power / ხარისხის გამოთვლა"""
        return base ** exponent

class TestCalculator(unittest.TestCase):
    """Unit tests for Calculator class / Calculator კლასის ერთეული ტესტები"""
    
    def setUp(self):
        """Set up test fixtures / ტესტის ფიქსტურების მომზადება"""
        self.calc = Calculator()
    
    def test_add(self):
        """Test addition / დამატების ტესტი"""
        self.assertEqual(self.calc.add(2, 3), 5)
        self.assertEqual(self.calc.add(-1, 1), 0)
        self.assertEqual(self.calc.add(0, 0), 0)
    
    def test_subtract(self):
        """Test subtraction / გამოკლების ტესტი"""
        self.assertEqual(self.calc.subtract(5, 3), 2)
        self.assertEqual(self.calc.subtract(0, 0), 0)
        self.assertEqual(self.calc.subtract(-1, -1), 0)
    
    def test_multiply(self):
        """Test multiplication / გამრავლების ტესტი"""
        self.assertEqual(self.calc.multiply(3, 4), 12)
        self.assertEqual(self.calc.multiply(0, 5), 0)
        self.assertEqual(self.calc.multiply(-2, 3), -6)
    
    def test_divide(self):
        """Test division / გაყოფის ტესტი"""
        self.assertEqual(self.calc.divide(10, 2), 5)
        self.assertEqual(self.calc.divide(9, 3), 3)
        self.assertAlmostEqual(self.calc.divide(1, 3), 0.3333333333333333)
    
    def test_divide_by_zero(self):
        """Test division by zero exception / ნულზე გაყოფის გამონაკლისის ტესტი"""
        with self.assertRaises(ValueError):
            self.calc.divide(5, 0)
    
    def test_power(self):
        """Test power calculation / ხარისხის გამოთვლის ტესტი"""
        self.assertEqual(self.calc.power(2, 3), 8)
        self.assertEqual(self.calc.power(5, 0), 1)
        self.assertEqual(self.calc.power(10, 2), 100)
    
    def tearDown(self):
        """Clean up after tests / ტესტების შემდეგ გასუფთავება"""
        # Usually not needed for simple classes / ჩვეულებრივ არ არის საჭირო მარტივი კლასებისთვის
        pass

# 2. Test-Driven Development Example / Test-Driven Development მაგალითი

class BankAccount:
    """Bank account class developed using TDD / ბანკის ანგარიშის კლასი TDD-ით შემუშავებული"""
    
    def __init__(self, initial_balance=0):
        """Initialize account with initial balance / ანგარიშის ინიციალიზაცია საწყისი ბალანსით"""
        if initial_balance < 0:
            raise ValueError("Initial balance cannot be negative / საწყისი ბალანსი არ შეიძლება იყოს უარყოფითი")
        self._balance = initial_balance
        self._transaction_history = []
    
    def deposit(self, amount):
        """Deposit money to account / ფულის შეტანა ანგარიშზე"""
        if amount <= 0:
            raise ValueError("Deposit amount must be positive / შეტანილი თანხა უნდა იყოს დადებითი")
        self._balance += amount
        self._transaction_history.append(f"Deposited: {amount}")
        return self._balance
    
    def withdraw(self, amount):
        """Withdraw money from account / ფულის გამოტანა ანგარიშიდან"""
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive / გამოტანილი თანხა უნდა იყოს დადებითი")
        if amount > self._balance:
            raise ValueError("Insufficient funds / არასაკმარისი თანხები")
        self._balance -= amount
        self._transaction_history.append(f"Withdrew: {amount}")
        return self._balance
    
    @property
    def balance(self):
        """Get current balance / მიმდინარე ბალანსის მიღება"""
        return self._balance
    
    def get_transaction_history(self):
        """Get transaction history / ტრანზაქციების ისტორიის მიღება"""
        return self._transaction_history.copy()

class TestBankAccount(unittest.TestCase):
    """TDD tests for BankAccount / BankAccount-ის TDD ტესტები"""
    
    def test_initial_balance_zero(self):
        """Test account starts with zero balance / ტესტი რომ ანგარიში იწყება ნულოვანი ბალანსით"""
        account = BankAccount()
        self.assertEqual(account.balance, 0)
    
    def test_initial_balance_positive(self):
        """Test account with positive initial balance / ტესტი ანგარიშისთვის დადებითი საწყისი ბალანსით"""
        account = BankAccount(100)
        self.assertEqual(account.balance, 100)
    
    def test_initial_balance_negative_raises_error(self):
        """Test negative initial balance raises error / ტესტი რომ უარყოფითი საწყისი ბალანსი იწვევს შეცდომას"""
        with self.assertRaises(ValueError):
            BankAccount(-50)
    
    def test_deposit_positive_amount(self):
        """Test depositing positive amount / დადებითი თანხის შეტანის ტესტი"""
        account = BankAccount(100)
        new_balance = account.deposit(50)
        self.assertEqual(new_balance, 150)
        self.assertEqual(account.balance, 150)
    
    def test_deposit_zero_or_negative_raises_error(self):
        """Test depositing zero or negative amount raises error / ნული ან უარყოფითი თანხის შეტანა იწვევს შეცდომას"""
        account = BankAccount()
        with self.assertRaises(ValueError):
            account.deposit(0)
        with self.assertRaises(ValueError):
            account.deposit(-10)
    
    def test_withdraw_valid_amount(self):
        """Test withdrawing valid amount / სწორი თანხის გამოტანის ტესტი"""
        account = BankAccount(100)
        new_balance = account.withdraw(30)
        self.assertEqual(new_balance, 70)
        self.assertEqual(account.balance, 70)
    
    def test_withdraw_more_than_balance_raises_error(self):
        """Test withdrawing more than balance raises error / ბალანსზე მეტის გამოტანა იწვევს შეცდომას"""
        account = BankAccount(50)
        with self.assertRaises(ValueError):
            account.withdraw(100)
    
    def test_transaction_history(self):
        """Test transaction history tracking / ტრანზაქციების ისტორიის თვალთვალის ტესტი"""
        account = BankAccount(100)
        account.deposit(50)
        account.withdraw(25)
        
        history = account.get_transaction_history()
        self.assertEqual(len(history), 2)
        self.assertIn("Deposited: 50", history)
        self.assertIn("Withdrew: 25", history)

# 3. Debugging Techniques / გამართვის ტექნიკები

def debugging_demo():
    """Demonstrate debugging techniques / გამართვის ტექნიკების დემონსტრაცია"""
    
    print("\n3. Debugging Techniques / გამართვის ტექნიკები:")
    
    # Using print statements for debugging / print განცხადებების გამოყენება გამართვისთვის
    def buggy_function(numbers):
        """Function with intentional bugs for debugging / ფუნქცია განზრახ შეცდომებით გამართვისთვის"""
        print(f"DEBUG: Input numbers: {numbers}")  # Debug print
        
        total = 0
        for i, num in enumerate(numbers):
            print(f"DEBUG: Processing index {i}, value {num}")  # Debug print
            if num > 0:
                total += num
            print(f"DEBUG: Current total: {total}")  # Debug print
        
        return total
    
    result = buggy_function([1, -2, 3, 0, 4])
    print(f"Result: {result}")
    
    # Using assertions for debugging / assertions-ის გამოყენება გამართვისთვის
    def validate_input(data):
        """Function with assertions / ფუნქცია assertions-ით"""
        assert isinstance(data, list), f"Expected list, got {type(data)}"
        assert len(data) > 0, "List cannot be empty"
        assert all(isinstance(x, (int, float)) for x in data), "All elements must be numbers"
        
        return sum(data) / len(data)
    
    try:
        avg = validate_input([1, 2, 3, 4, 5])
        print(f"Average: {avg}")
    except AssertionError as e:
        print(f"Assertion failed: {e}")
    
    # Exception handling for debugging / გამონაკლისების დამუშავება გამართვისთვის
    def safe_divide(a, b):
        """Safe division with detailed error info / უსაფრთხო გაყოფა დეტალური შეცდომის ინფორმაციით"""
        try:
            result = a / b
            return result
        except ZeroDivisionError as e:
            print(f"Error: {e}")
            print(f"Traceback: {traceback.format_exc()}")
            return None
        except TypeError as e:
            print(f"Type Error: {e}")
            print(f"Arguments: a={a} (type: {type(a)}), b={b} (type: {type(b)})")
            return None
    
    print(f"Safe divide 10/2: {safe_divide(10, 2)}")
    print(f"Safe divide 10/0: {safe_divide(10, 0)}")

# 4. Logging for Debugging / ლოგირება გამართვისთვის

def logging_demo():
    """Demonstrate logging for debugging / ლოგირების დემონსტრაცია გამართვისთვის"""
    
    print("\n4. Logging for Debugging / ლოგირება გამართვისთვის:")
    
    # Configure logging / ლოგირების კონფიგურაცია
    logging.basicConfig(
        level=logging.DEBUG,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.StreamHandler(),  # Console output
        ]
    )
    
    logger = logging.getLogger(__name__)
    
    def process_user_data(user_data):
        """Process user data with detailed logging / მომხმარებლის მონაცემების დამუშავება დეტალური ლოგირებით"""
        
        logger.info(f"Starting to process user data: {user_data}")
        
        try:
            # Validate input / შეყვანის ვალიდაცია
            if not isinstance(user_data, dict):
                logger.error(f"Invalid input type: expected dict, got {type(user_data)}")
                raise TypeError("User data must be a dictionary")
            
            logger.debug(f"Input validation passed")
            
            # Process required fields / აუცილებელი ველების დამუშავება
            required_fields = ['name', 'email', 'age']
            for field in required_fields:
                if field not in user_data:
                    logger.warning(f"Missing required field: {field}")
                    raise KeyError(f"Missing required field: {field}")
                
                logger.debug(f"Field '{field}' found with value: {user_data[field]}")
            
            # Business logic / ბიზნეს ლოგიკა
            name = user_data['name'].strip()
            email = user_data['email'].lower()
            age = int(user_data['age'])
            
            logger.info(f"Processed user: {name}, {email}, age {age}")
            
            if age < 18:
                logger.warning(f"User {name} is under 18: {age}")
            
            result = {
                'processed_name': name,
                'processed_email': email,
                'processed_age': age,
                'is_adult': age >= 18
            }
            
            logger.info(f"Successfully processed user data")
            return result
            
        except Exception as e:
            logger.error(f"Error processing user data: {e}")
            logger.debug(f"Full traceback: {traceback.format_exc()}")
            raise
    
    # Test with valid data / ტესტი ვალიდური მონაცემებით
    try:
        valid_user = {'name': '  John Doe  ', 'email': 'JOHN@EXAMPLE.COM', 'age': '25'}
        result = process_user_data(valid_user)
        print(f"Processing result: {result}")
    except Exception as e:
        print(f"Error: {e}")
    
    # Test with invalid data / ტესტი არასწორი მონაცემებით
    try:
        invalid_user = {'name': 'Jane', 'email': 'jane@example.com'}  # Missing age
        result = process_user_data(invalid_user)
    except Exception as e:
        print(f"Expected error for invalid data: {e}")

# 5. Mocking and Test Doubles / მოკინგი და ტესტის დუბლები

class EmailService:
    """Email service for testing mocking / ელფოსტის სერვისი მოკინგის ტესტირებისთვის"""
    
    def send_email(self, to, subject, body):
        """Send email (would actually send in real implementation) / ელფოსტის გაგზავნა"""
        # In real implementation, this would send actual email
        # რეალურ იმპლემენტაციაში ეს გაგზავნიდა რეალურ ელფოსტას
        raise NotImplementedError("Real email sending not implemented")

class UserRegistration:
    """User registration service that depends on email service / მომხმარებლის რეგისტრაციის სერვისი"""
    
    def __init__(self, email_service: EmailService):
        self.email_service = email_service
        self.users = []
    
    def register_user(self, username, email):
        """Register a new user / ახალი მომხმარებლის რეგისტრაცია"""
        
        # Check if user already exists / შემოწმება თუ მომხმარებელი უკვე არსებობს
        for user in self.users:
            if user['email'] == email:
                raise ValueError("User with this email already exists")
        
        # Create user / მომხმარებლის შექმნა
        user = {'username': username, 'email': email}
        self.users.append(user)
        
        # Send welcome email / მისალმების ელფოსტის გაგზავნა
        self.email_service.send_email(
            to=email,
            subject="Welcome!",
            body=f"Welcome {username}! Your account has been created."
        )
        
        return user

class TestUserRegistration(unittest.TestCase):
    """Tests for user registration with mocking / მომხმარებლის რეგისტრაციის ტესტები მოკინგით"""
    
    def setUp(self):
        """Set up test with mock email service / ტესტის მომზადება მოკ ელფოსტის სერვისით"""
        self.mock_email_service = Mock()
        self.registration = UserRegistration(self.mock_email_service)
    
    def test_successful_registration(self):
        """Test successful user registration / წარმატებული მომხმარებლის რეგისტრაციის ტესტი"""
        
        # Register user / მომხმარებლის რეგისტრაცია
        result = self.registration.register_user("testuser", "test@example.com")
        
        # Verify user was created / შემოწმება რომ მომხმარებელი შეიქმნა
        self.assertEqual(result['username'], "testuser")
        self.assertEqual(result['email'], "test@example.com")
        self.assertEqual(len(self.registration.users), 1)
        
        # Verify email was sent / შემოწმება რომ ელფოსტა გაიგზავნა
        self.mock_email_service.send_email.assert_called_once_with(
            to="test@example.com",
            subject="Welcome!",
            body="Welcome testuser! Your account has been created."
        )
    
    def test_duplicate_email_registration(self):
        """Test registration with duplicate email / რეგისტრაციის ტესტი დუბლირებული ელფოსტით"""
        
        # Register first user / პირველი მომხმარებლის რეგისტრაცია
        self.registration.register_user("user1", "test@example.com")
        
        # Try to register second user with same email / მეორე მომხმარებლის რეგისტრაციის მცდელობა იგივე ელფოსტით
        with self.assertRaises(ValueError):
            self.registration.register_user("user2", "test@example.com")
        
        # Verify only one user exists / შემოწმება რომ მხოლოდ ერთი მომხმარებელი არსებობს
        self.assertEqual(len(self.registration.users), 1)
        
        # Verify email was sent only once / შემოწმება რომ ელფოსტა გაიგზავნა მხოლოდ ერთხელ
        self.assertEqual(self.mock_email_service.send_email.call_count, 1)

# 6. Performance Profiling / წარმადობის პროფილირება

def performance_demo():
    """Demonstrate performance profiling / წარმადობის პროფილირების დემონსტრაცია"""
    
    print("\n6. Performance Profiling / წარმადობის პროფილირება:")
    
    # Simple timing / მარტივი დროის გაზომვა
    def slow_function():
        """Function that takes some time / ფუნქცია რომელიც დროს მოითხოვს"""
        total = 0
        for i in range(100000):
            total += i ** 2
        return total
    
    def fast_function():
        """Optimized version / ოპტიმიზირებული ვერსია"""
        return sum(i ** 2 for i in range(100000))
    
    # Time comparison / დროის შედარება
    slow_time = timeit.timeit(slow_function, number=10)
    fast_time = timeit.timeit(fast_function, number=10)
    
    print(f"Slow function time: {slow_time:.4f} seconds")
    print(f"Fast function time: {fast_time:.4f} seconds")
    print(f"Speed improvement: {slow_time/fast_time:.2f}x")
    
    # Memory usage demonstration / მეხსიერების გამოყენების დემონსტრაცია
    def memory_heavy_function():
        """Function that uses a lot of memory / ფუნქცია რომელიც ბევრ მეხსიერებას იყენებს"""
        big_list = [i for i in range(1000000)]
        return len(big_list)
    
    def memory_efficient_function():
        """Memory efficient version / მეხსიერებით ეფექტური ვერსია"""
        count = 0
        for i in range(1000000):
            count += 1
        return count
    
    print(f"Memory heavy result: {memory_heavy_function()}")
    print(f"Memory efficient result: {memory_efficient_function()}")

# Main test runner / მთავარი ტესტის გამშვები

def run_all_tests():
    """Run all unit tests / ყველა ერთეული ტესტის გაშვება"""
    
    print("=== Running Unit Tests ===")
    print("=== ერთეული ტესტების გაშვება ===")
    
    # Create test suite / ტესტის ნაკრების შექმნა
    test_suite = unittest.TestSuite()
    
    # Add test cases / ტესტ შემთხვევების დამატება
    test_suite.addTest(unittest.makeSuite(TestCalculator))
    test_suite.addTest(unittest.makeSuite(TestBankAccount))
    test_suite.addTest(unittest.makeSuite(TestUserRegistration))
    
    # Run tests / ტესტების გაშვება
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(test_suite)
    
    # Print summary / შეჯამების ბეჭდვა
    print(f"\nTests run: {result.testsRun}")
    print(f"Failures: {len(result.failures)}")
    print(f"Errors: {len(result.errors)}")
    
    if result.failures:
        print("\nFailures:")
        for test, traceback in result.failures:
            print(f"  {test}: {traceback}")
    
    if result.errors:
        print("\nErrors:")
        for test, traceback in result.errors:
            print(f"  {test}: {traceback}")

def main():
    """Main function to demonstrate testing and debugging / მთავარი ფუნქცია ტესტირებისა და გამართვის დემონსტრაციისთვის"""
    
    print("=== Python Testing and Debugging Tutorial ===")
    print("=== Python ტესტირებისა და გამართვის გაკვეთილი ===")
    
    debugging_demo()
    logging_demo()
    performance_demo()
    
    # Run tests at the end / ტესტების გაშვება ბოლოს
    run_all_tests()

if __name__ == "__main__":
    main()

print("\n📚 Python Testing and Debugging lesson completed!")
print("📚 Python ტესტირებისა და გამართვის გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით comprehensive test suite TodoList კლასისთვის TDD approach-ით
Task 1: Create a comprehensive test suite for a TodoList class using TDD approach

2. დავალება 2: იმპლემენტაცია გაუკეთეთ custom logging formatter-ი დეტალური debug ინფორმაციისთვის
Task 2: Implement a custom logging formatter for detailed debug information

3. დავალება 3: შექმენით performance benchmark suite რამდენიმე algorithm-ის შესადარებლად
Task 3: Create a performance benchmark suite to compare several algorithms

4. დავალება 4: გამოიყენეთ mocking რეალური API calls-ის ტესტირებისთვის
Task 4: Use mocking to test real API calls

5. დავალება 5: შექმენით integration test რომელიც ტესტავს მთელ workflow-ს
Task 5: Create an integration test that tests an entire workflow
""" 