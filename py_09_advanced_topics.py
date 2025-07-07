# Python Tutorial 09: Advanced Programming Topics
# Python-ის გაკვეთილი 09: გაღრმავებული პროგრამირების თემები

"""
ეს გაკვეთილი მოიცავს:
- Decorators and closures
- Generators and iterators
- Context managers
- Metaclasses basics
- Design patterns
- Functional programming concepts
- Advanced Python features
- Performance optimization

This lesson covers:
- Decorators and closures
- Generators and iterators  
- Context managers
- Metaclasses basics
- Design patterns
- Functional programming concepts
- Advanced Python features
- Performance optimization
"""

import functools
import time
import threading
from abc import ABC, abstractmethod
from typing import Any, Iterator, Generator, Callable
from contextlib import contextmanager

# 1. Decorators and Closures / დეკორატორები და Closures

def simple_decorator_demo():
    """Demonstrate basic decorators / ბაზისური დეკორატორების დემონსტრაცია"""
    
    print("1. Decorators and Closures / დეკორატორები და Closures:")
    
    # Basic decorator / ბაზისური დეკორატორი
    def timer_decorator(func):
        """Decorator to measure function execution time / დეკორატორი ფუნქციის შესრულების დროის გასაზომად"""
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            start_time = time.time()
            result = func(*args, **kwargs)
            end_time = time.time()
            print(f"Function {func.__name__} took {end_time - start_time:.4f} seconds")
            return result
        return wrapper
    
    # Using the decorator / დეკორატორის გამოყენება
    @timer_decorator
    def slow_function():
        """A function that takes some time / ფუნქცია რომელიც დროს მოითხოვს"""
        time.sleep(0.1)
        return "Operation completed"
    
    result = slow_function()
    print(f"Result: {result}")
    
    # Decorator with parameters / პარამეტრებიანი დეკორატორი
    def retry_decorator(max_attempts=3):
        """Decorator that retries function on failure / დეკორატორი რომელიც განაახლებს ფუნქციას წარუმატებლობისას"""
        def decorator(func):
            @functools.wraps(func)
            def wrapper(*args, **kwargs):
                for attempt in range(max_attempts):
                    try:
                        return func(*args, **kwargs)
                    except Exception as e:
                        if attempt == max_attempts - 1:
                            raise
                        print(f"Attempt {attempt + 1} failed: {e}")
                        time.sleep(0.1)
            return wrapper
        return decorator
    
    @retry_decorator(max_attempts=2)
    def unreliable_function(should_fail=False):
        """Function that might fail / ფუნქცია რომელიც შეიძლება ვერ იმუშაოს"""
        if should_fail:
            raise ValueError("Simulated failure")
        return "Success!"
    
    try:
        result = unreliable_function(should_fail=False)
        print(f"Reliable call result: {result}")
    except:
        print("Function failed after retries")

# 2. Generators and Iterators / გენერატორები და იტერატორები

def generators_demo():
    """Demonstrate generators and iterators / გენერატორებისა და იტერატორების დემონსტრაცია"""
    
    print("\n2. Generators and Iterators / გენერატორები და იტერატორები:")
    
    # Simple generator / მარტივი გენერატორი
    def countdown_generator(start):
        """Generator that counts down / გენერატორი რომელიც ითვლის უკუღმა"""
        while start > 0:
            yield start
            start -= 1
        yield "Launch!"
    
    print("Countdown generator:")
    for value in countdown_generator(5):
        print(f"  {value}")
    
    # Generator expression / გენერატორის გამოსახულება
    squares_gen = (x**2 for x in range(1, 6))
    print("Squares generator:", list(squares_gen))
    
    # Fibonacci generator / ფიბონაჩის გენერატორი
    def fibonacci_generator(limit):
        """Generate Fibonacci sequence / ფიბონაჩის თანმიმდევრობის გენერაცია"""
        a, b = 0, 1
        count = 0
        while count < limit:
            yield a
            a, b = b, a + b
            count += 1
    
    print("Fibonacci sequence (first 10):")
    fib_gen = fibonacci_generator(10)
    print("  ", list(fib_gen))
    
    # Custom iterator class / მორგებული იტერატორის კლასი
    class NumberRange:
        """Custom iterator for number ranges / მორგებული იტერატორი რიცხვების რეინჯისთვის"""
        
        def __init__(self, start, end, step=1):
            self.current = start
            self.end = end
            self.step = step
        
        def __iter__(self):
            return self
        
        def __next__(self):
            if self.current >= self.end:
                raise StopIteration
            current = self.current
            self.current += self.step
            return current
    
    print("Custom iterator (2 to 10, step 2):")
    custom_range = NumberRange(2, 10, 2)
    print("  ", list(custom_range))

# 3. Context Managers / კონტექსტ მენეჯერები

def context_managers_demo():
    """Demonstrate context managers / კონტექსტ მენეჯერების დემონსტრაცია"""
    
    print("\n3. Context Managers / კონტექსტ მენეჯერები:")
    
    # Simple context manager using contextlib / მარტივი კონტექსტ მენეჯერი contextlib-ით
    @contextmanager
    def timer_context(operation_name):
        """Context manager for timing operations / კონტექსტ მენეჯერი ოპერაციების დროის გასაზომად"""
        start_time = time.time()
        print(f"Starting {operation_name}...")
        try:
            yield
        finally:
            end_time = time.time()
            print(f"Finished {operation_name} in {end_time - start_time:.4f} seconds")
    
    # Using context manager / კონტექსტ მენეჯერის გამოყენება
    with timer_context("mathematical calculation"):
        result = sum(i**2 for i in range(1000))
        print(f"Sum of squares: {result}")
    
    # Class-based context manager / კლასზე დაფუძნებული კონტექსტ მენეჯერი
    class DatabaseConnection:
        """Mock database connection context manager / მოდელი მონაცემთა ბაზის კავშირის კონტექსტ მენეჯერი"""
        
        def __init__(self, db_name):
            self.db_name = db_name
            self.connected = False
        
        def __enter__(self):
            print(f"Connecting to database: {self.db_name}")
            self.connected = True
            return self
        
        def __exit__(self, exc_type, exc_val, exc_tb):
            print(f"Closing connection to: {self.db_name}")
            self.connected = False
            if exc_type:
                print(f"Error occurred: {exc_val}")
                return False  # Don't suppress the exception
        
        def execute_query(self, query):
            if not self.connected:
                raise RuntimeError("Database not connected")
            print(f"Executing query: {query}")
            return f"Results for: {query}"
    
    # Using the database context manager / მონაცემთა ბაზის კონტექსტ მენეჯერის გამოყენება
    with DatabaseConnection("user_database") as db:
        result = db.execute_query("SELECT * FROM users")
        print(f"Query result: {result}")

# 4. Design Patterns / დიზაინის პატერნები

def design_patterns_demo():
    """Demonstrate common design patterns / ჩვეულებრივი დიზაინის პატერნების დემონსტრაცია"""
    
    print("\n4. Design Patterns / დიზაინის პატერნები:")
    
    # Singleton Pattern / Singleton პატერნი
    class Singleton:
        """Singleton pattern implementation / Singleton პატერნის იმპლემენტაცია"""
        
        _instance = None
        _initialized = False
        
        def __new__(cls):
            if cls._instance is None:
                cls._instance = super().__new__(cls)
            return cls._instance
        
        def __init__(self):
            if not self._initialized:
                self.data = "Singleton data"
                self._initialized = True
        
        def get_data(self):
            return self.data
    
    # Test singleton / Singleton-ის ტესტი
    s1 = Singleton()
    s2 = Singleton()
    print(f"Singleton test - same instance: {s1 is s2}")
    print(f"Singleton data: {s1.get_data()}")
    
    # Observer Pattern / Observer პატერნი
    class Observable:
        """Observable subject in observer pattern / Observable სუბიექტი observer პატერნში"""
        
        def __init__(self):
            self._observers = []
            self._state = None
        
        def attach(self, observer):
            """Add observer / observer-ის დამატება"""
            self._observers.append(observer)
        
        def detach(self, observer):
            """Remove observer / observer-ის ამოღება"""
            self._observers.remove(observer)
        
        def notify(self):
            """Notify all observers / ყველა observer-ის შეტყობინება"""
            for observer in self._observers:
                observer.update(self._state)
        
        def set_state(self, state):
            """Update state and notify observers / მდგომარეობის განახლება და observer-ების შეტყობინება"""
            self._state = state
            self.notify()
    
    class Observer:
        """Observer in observer pattern / Observer observer პატერნში"""
        
        def __init__(self, name):
            self.name = name
        
        def update(self, state):
            """Called when observable changes / იძახება როცა observable იცვლება"""
            print(f"Observer {self.name} notified: state changed to {state}")
    
    # Test observer pattern / Observer პატერნის ტესტი
    subject = Observable()
    observer1 = Observer("Observer1")
    observer2 = Observer("Observer2")
    
    subject.attach(observer1)
    subject.attach(observer2)
    
    print("Observer pattern test:")
    subject.set_state("State A")
    subject.set_state("State B")
    
    # Strategy Pattern / Strategy პატერნი
    class SortStrategy(ABC):
        """Abstract strategy for sorting / აბსტრაქტული სტრატეგია დასორტირებისთვის"""
        
        @abstractmethod
        def sort(self, data):
            pass
    
    class BubbleSort(SortStrategy):
        """Bubble sort strategy / Bubble sort სტრატეგია"""
        
        def sort(self, data):
            arr = data.copy()
            n = len(arr)
            for i in range(n):
                for j in range(0, n - i - 1):
                    if arr[j] > arr[j + 1]:
                        arr[j], arr[j + 1] = arr[j + 1], arr[j]
            return arr
    
    class QuickSort(SortStrategy):
        """Quick sort strategy / Quick sort სტრატეგია"""
        
        def sort(self, data):
            if len(data) <= 1:
                return data
            pivot = data[len(data) // 2]
            left = [x for x in data if x < pivot]
            middle = [x for x in data if x == pivot]
            right = [x for x in data if x > pivot]
            return self.sort(left) + middle + self.sort(right)
    
    class SortContext:
        """Context that uses sorting strategy / კონტექსტი რომელიც იყენებს დასორტირების სტრატეგიას"""
        
        def __init__(self, strategy: SortStrategy):
            self.strategy = strategy
        
        def set_strategy(self, strategy: SortStrategy):
            self.strategy = strategy
        
        def sort(self, data):
            return self.strategy.sort(data)
    
    # Test strategy pattern / Strategy პატერნის ტესტი
    data = [64, 34, 25, 12, 22, 11, 90]
    print(f"\nStrategy pattern test - Original data: {data}")
    
    context = SortContext(BubbleSort())
    result1 = context.sort(data)
    print(f"Bubble sort result: {result1}")
    
    context.set_strategy(QuickSort())
    result2 = context.sort(data)
    print(f"Quick sort result: {result2}")

# 5. Functional Programming / ფუნქციური პროგრამირება

def functional_programming_demo():
    """Demonstrate functional programming concepts / ფუნქციური პროგრამირების კონცეფციების დემონსტრაცია"""
    
    print("\n5. Functional Programming / ფუნქციური პროგრამირება:")
    
    # Higher-order functions / უმაღლესი რიგის ფუნქციები
    def apply_operation(numbers, operation):
        """Apply operation to all numbers / ოპერაციის გამოყენება ყველა რიცხვზე"""
        return [operation(x) for x in numbers]
    
    def square(x):
        return x ** 2
    
    def cube(x):
        return x ** 3
    
    numbers = [1, 2, 3, 4, 5]
    print(f"Original numbers: {numbers}")
    print(f"Squared: {apply_operation(numbers, square)}")
    print(f"Cubed: {apply_operation(numbers, cube)}")
    
    # Lambda functions with map, filter, reduce / Lambda ფუნქციები map, filter, reduce-თან
    from functools import reduce
    
    # Map example / Map მაგალითი
    doubled = list(map(lambda x: x * 2, numbers))
    print(f"Doubled using map: {doubled}")
    
    # Filter example / Filter მაგალითი
    evens = list(filter(lambda x: x % 2 == 0, numbers))
    print(f"Even numbers: {evens}")
    
    # Reduce example / Reduce მაგალითი
    product = reduce(lambda x, y: x * y, numbers)
    print(f"Product of all numbers: {product}")
    
    # Function composition / ფუნქციების კომპოზიცია
    def compose(*functions):
        """Compose multiple functions / რამდენიმე ფუნქციის კომპოზიცია"""
        return lambda x: reduce(lambda acc, f: f(acc), functions, x)
    
    # Create composed function / კომპოზირებული ფუნქციის შექმნა
    add_one = lambda x: x + 1
    multiply_by_two = lambda x: x * 2
    composed = compose(add_one, multiply_by_two, square)
    
    print(f"Composed function (5): {composed(5)}")  # ((5 + 1) * 2) ** 2
    
    # Partial function application / ნაწილობრივი ფუნქციის გამოყენება
    def power(base, exponent):
        return base ** exponent
    
    square_func = functools.partial(power, exponent=2)
    cube_func = functools.partial(power, exponent=3)
    
    print(f"Partial application - square of 4: {square_func(4)}")
    print(f"Partial application - cube of 3: {cube_func(3)}")

# 6. Metaclasses Basics / Metaclasses-ის საფუძვლები

def metaclasses_demo():
    """Demonstrate basic metaclass concepts / ბაზისური metaclass კონცეფციების დემონსტრაცია"""
    
    print("\n6. Metaclasses Basics / Metaclasses-ის საფუძვლები:")
    
    # Simple metaclass / მარტივი metaclass
    class SingletonMeta(type):
        """Metaclass that creates singleton instances / Metaclass რომელიც ქმნის singleton ინსტანსებს"""
        
        _instances = {}
        
        def __call__(cls, *args, **kwargs):
            if cls not in cls._instances:
                cls._instances[cls] = super().__call__(*args, **kwargs)
            return cls._instances[cls]
    
    class DatabaseManager(metaclass=SingletonMeta):
        """Database manager using singleton metaclass / მონაცემთა ბაზის მენეჯერი singleton metaclass-ით"""
        
        def __init__(self):
            self.connections = []
        
        def add_connection(self, connection):
            self.connections.append(connection)
            print(f"Added connection: {connection}")
        
        def get_connection_count(self):
            return len(self.connections)
    
    # Test metaclass singleton / Metaclass singleton-ის ტესტი
    db1 = DatabaseManager()
    db2 = DatabaseManager()
    
    print(f"Metaclass singleton test - same instance: {db1 is db2}")
    
    db1.add_connection("connection1")
    print(f"Connection count from db2: {db2.get_connection_count()}")
    
    # Attribute validation metaclass / ატრიბუტების ვალიდაციის metaclass
    class ValidatedMeta(type):
        """Metaclass that validates class attributes / Metaclass რომელიც ვალიდაციას უკეთებს კლასის ატრიბუტებს"""
        
        def __new__(mcs, name, bases, attrs):
            # Validate that all methods have docstrings / შემოწმება რომ ყველა მეთოდს აქვს docstring
            for key, value in attrs.items():
                if callable(value) and not key.startswith('_') and not getattr(value, '__doc__'):
                    print(f"Warning: Method {key} in class {name} has no docstring")
            
            return super().__new__(mcs, name, bases, attrs)
    
    class ValidatedClass(metaclass=ValidatedMeta):
        """Class with validated methods / კლასი ვალიდირებული მეთოდებით"""
        
        def method_with_doc(self):
            """This method has documentation / ამ მეთოდს აქვს დოკუმენტაცია"""
            return "documented"
        
        def method_without_doc(self):
            return "undocumented"

# 7. Performance Optimization / წარმადობის ოპტიმიზაცია

def performance_demo():
    """Demonstrate performance optimization techniques / წარმადობის ოპტიმიზაციის ტექნიკების დემონსტრაცია"""
    
    print("\n7. Performance Optimization / წარმადობის ოპტიმიზაცია:")
    
    # Memoization decorator / Memoization დეკორატორი
    def memoize(func):
        """Decorator for memoization / დეკორატორი memoization-ისთვის"""
        cache = {}
        
        @functools.wraps(func)
        def wrapper(*args):
            if args in cache:
                return cache[args]
            result = func(*args)
            cache[args] = result
            return result
        return wrapper
    
    @memoize
    def fibonacci(n):
        """Fibonacci with memoization / ფიბონაჩი memoization-ით"""
        if n < 2:
            return n
        return fibonacci(n - 1) + fibonacci(n - 2)
    
    # Test memoization performance / Memoization წარმადობის ტესტი
    start_time = time.time()
    result = fibonacci(30)
    end_time = time.time()
    print(f"Fibonacci(30) with memoization: {result}")
    print(f"Time taken: {end_time - start_time:.4f} seconds")
    
    # List comprehension vs loop performance / List comprehension vs loop წარმადობა
    def test_performance():
        """Compare list comprehension vs traditional loop / List comprehension vs ტრადიციული loop-ის შედარება"""
        n = 100000
        
        # List comprehension / List comprehension
        start_time = time.time()
        squares_comp = [i**2 for i in range(n)]
        comp_time = time.time() - start_time
        
        # Traditional loop / ტრადიციული loop
        start_time = time.time()
        squares_loop = []
        for i in range(n):
            squares_loop.append(i**2)
        loop_time = time.time() - start_time
        
        print(f"List comprehension time: {comp_time:.4f} seconds")
        print(f"Traditional loop time: {loop_time:.4f} seconds")
        print(f"Comprehension is {loop_time/comp_time:.2f}x faster")
    
    test_performance()
    
    # Generator vs list memory usage / Generator vs list მეხსიერების გამოყენება
    import sys
    
    def memory_comparison():
        """Compare memory usage of generator vs list / Generator vs list მეხსიერების გამოყენების შედარება"""
        
        # List / სია
        list_data = [i**2 for i in range(10000)]
        list_size = sys.getsizeof(list_data)
        
        # Generator / გენერატორი
        gen_data = (i**2 for i in range(10000))
        gen_size = sys.getsizeof(gen_data)
        
        print(f"List memory usage: {list_size} bytes")
        print(f"Generator memory usage: {gen_size} bytes")
        print(f"List uses {list_size/gen_size:.0f}x more memory")
    
    memory_comparison()

# Main execution / მთავარი შესრულება

def main():
    """Main function to demonstrate advanced Python topics / მთავარი ფუნქცია გაღრმავებული Python თემების დემონსტრაციისთვის"""
    
    print("=== Python Advanced Topics Tutorial ===")
    print("=== Python-ის გაღრმავებული თემების გაკვეთილი ===")
    
    simple_decorator_demo()
    generators_demo()
    context_managers_demo()
    design_patterns_demo()
    functional_programming_demo()
    metaclasses_demo()
    performance_demo()

if __name__ == "__main__":
    main()

print("\n📚 Python Advanced Topics lesson completed!")
print("📚 Python-ის გაღრმავებული თემების გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით caching decorator-ი TTL (time-to-live) ფუნქციონალით
Task 1: Create a caching decorator with TTL (time-to-live) functionality

2. დავალება 2: შექმენით custom context manager-ი database transactions-ისთვის
Task 2: Create a custom context manager for database transactions

3. დავალება 3: იმპლემენტაცია გაუკეთეთ Factory pattern-ს სხვადასხვა ტიპის objects-ისთვის
Task 3: Implement the Factory pattern for different types of objects

4. დავალება 4: შექმენით generator-ი infinite sequence-ისთვის memory-efficient გზით
Task 4: Create a generator for infinite sequences in a memory-efficient way

5. დავალება 5: შექმენით metaclass-ი automatic property validation-ისთვის
Task 5: Create a metaclass for automatic property validation
""" 