# Python Tutorial 05: File Handling and I/O Operations
# Python-ის გაკვეთილი 05: ფაილთან მუშაობა და I/O ოპერაციები

"""
ეს გაკვეთილი მოიცავს:
- File opening and closing
- Reading and writing files
- Different file modes
- Working with CSV files
- JSON file handling
- Error handling with files
- Context managers (with statement)
- File and directory operations

This lesson covers:
- File opening and closing
- Reading and writing files
- Different file modes
- Working with CSV files
- JSON file handling
- Error handling with files
- Context managers (with statement)
- File and directory operations
"""

import os
import json
import csv
from datetime import datetime

# 1. Basic File Operations / ფაილის ბაზისური ოპერაციები

def basic_file_operations():
    """Demonstrate basic file read/write operations / ფაილის ბაზისური წაკითხვა/ჩაწერის ოპერაციების დემონსტრაცია"""
    
    print("1. Basic File Operations / ბაზისური ფაილის ოპერაციები:")
    
    # Writing to a file / ფაილში ჩაწერა
    filename = "sample.txt"
    
    # Method 1: Traditional way / მეთოდი 1: ტრადიციული გზა
    file = open(filename, "w", encoding="utf-8")
    file.write("გამარჯობა, ეს არის Python-ის ფაილის მაგალითი!\n")
    file.write("Hello, this is a Python file example!\n")
    file.write("ეს ტექსტი ჩაიწერა Python-ით.\n")
    file.close()
    
    # Reading from file / ფაილიდან წაკითხვა
    file = open(filename, "r", encoding="utf-8")
    content = file.read()
    print("File content:")
    print(content)
    file.close()
    
    # Clean up / გასუფთავება
    if os.path.exists(filename):
        os.remove(filename)

def context_manager_examples():
    """Demonstrate context managers (with statement) / კონტექსტ მენეჯერების დემონსტრაცია"""
    
    print("\n2. Context Managers (with statement) / კონტექსტ მენეჯერები:")
    
    filename = "context_example.txt"
    
    # Writing with context manager / კონტექსტ მენეჯერით ჩაწერა
    with open(filename, "w", encoding="utf-8") as file:
        file.write("ეს ტექსტი ჩაიწერა context manager-ით\n")
        file.write("This text was written using context manager\n")
        file.write("ფაილი ავტომატურად დაიხურება\n")
        file.write("File will be automatically closed\n")
    
    # Reading with context manager / კონტექსტ მენეჯერით წაკითხვა
    with open(filename, "r", encoding="utf-8") as file:
        print("Reading line by line:")
        for line_number, line in enumerate(file, 1):
            print(f"Line {line_number}: {line.strip()}")
    
    # Clean up / გასუფთავება
    if os.path.exists(filename):
        os.remove(filename)

# 2. Different File Modes / სხვადასხვა ფაილის რეჟიმი

def file_modes_demo():
    """Demonstrate different file opening modes / სხვადასხვა ფაილის გახსნის რეჟიმის დემონსტრაცია"""
    
    print("\n3. File Modes / ფაილის რეჟიმები:")
    
    filename = "modes_example.txt"
    
    # Write mode ('w') - overwrites existing file / ჩაწერის რეჟიმი - არსებული ფაილის გადაწერა
    with open(filename, "w", encoding="utf-8") as file:
        file.write("პირველი ხაზი\nFirst line\n")
    
    # Append mode ('a') - adds to existing file / დამატების რეჟიმი - არსებულ ფაილში დამატება
    with open(filename, "a", encoding="utf-8") as file:
        file.write("მეორე ხაზი (დამატებული)\nSecond line (appended)\n")
    
    # Read mode ('r') - read only / წაკითხვის რეჟიმი
    with open(filename, "r", encoding="utf-8") as file:
        content = file.read()
        print("File content after append:")
        print(content)
    
    # Read and write mode ('r+') / წაკითხვისა და ჩაწერის რეჟიმი
    with open(filename, "r+", encoding="utf-8") as file:
        file.seek(0)  # Go to beginning / დასაწყისში გადასვლა
        existing_content = file.read()
        file.seek(0)
        file.write("განახლებული შემცველობა\nUpdated content\n")
        file.write(existing_content)
    
    # Final read / საბოლოო წაკითხვა
    with open(filename, "r", encoding="utf-8") as file:
        print("Final file content:")
        print(file.read())
    
    # Clean up / გასუფთავება
    if os.path.exists(filename):
        os.remove(filename)

# 3. CSV File Handling / CSV ფაილთან მუშაობა

def csv_operations():
    """Demonstrate CSV file operations / CSV ფაილის ოპერაციების დემონსტრაცია"""
    
    print("\n4. CSV File Operations / CSV ფაილის ოპერაციები:")
    
    filename = "students.csv"
    
    # Sample student data / სტუდენტების მაგალითი მონაცემები
    students_data = [
        ["სახელი/Name", "ასაკი/Age", "ქულა/Grade", "საგანი/Subject"],
        ["ანა/Ana", "20", "95", "მათემატიკა/Math"],
        ["გიორგი/Giorgi", "19", "88", "ფიზიკა/Physics"],
        ["ნინო/Nino", "21", "92", "ქიმია/Chemistry"],
        ["ლუკა/Luka", "20", "86", "ბიოლოგია/Biology"]
    ]
    
    # Writing CSV file / CSV ფაილის ჩაწერა
    with open(filename, "w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerows(students_data)
    
    print(f"CSV file '{filename}' created with student data")
    
    # Reading CSV file / CSV ფაილის წაკითხვა
    print("Reading CSV file:")
    with open(filename, "r", encoding="utf-8") as file:
        reader = csv.reader(file)
        for row_number, row in enumerate(reader):
            if row_number == 0:
                print("Headers:", row)
            else:
                print(f"Student {row_number}: {row}")
    
    # Reading CSV as dictionary / CSV-ის წაკითხვა dictionary-ის სახით
    print("\nReading CSV as dictionary:")
    with open(filename, "r", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for student in reader:
            print(f"Student: {student}")
    
    # Adding new data to CSV / CSV-ში ახალი მონაცემების დამატება
    new_student = ["მარიამი/Mariami", "22", "94", "ისტორია/History"]
    with open(filename, "a", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow(new_student)
    
    print("Added new student to CSV")
    
    # Clean up / გასუფთავება
    if os.path.exists(filename):
        os.remove(filename)

# 4. JSON File Handling / JSON ფაილთან მუშაობა

def json_operations():
    """Demonstrate JSON file operations / JSON ფაილის ოპერაციების დემონსტრაცია"""
    
    print("\n5. JSON File Operations / JSON ფაილის ოპერაციები:")
    
    filename = "data.json"
    
    # Sample data structure / მაგალითი მონაცემთა სტრუქტურა
    data = {
        "course": {
            "name": "Python Programming / Python პროგრამირება",
            "instructor": "გიორგი/Giorgi",
            "duration_weeks": 12,
            "students": [
                {
                    "id": 1,
                    "name": "ანა/Ana",
                    "email": "ana@example.com",
                    "grades": [95, 88, 92],
                    "enrolled": True
                },
                {
                    "id": 2,
                    "name": "ლუკა/Luka", 
                    "email": "luka@example.com",
                    "grades": [86, 90, 85],
                    "enrolled": True
                }
            ]
        },
        "created_date": datetime.now().isoformat(),
        "version": "1.0"
    }
    
    # Writing JSON file / JSON ფაილის ჩაწერა
    with open(filename, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=2, ensure_ascii=False)
    
    print(f"JSON file '{filename}' created")
    
    # Reading JSON file / JSON ფაილის წაკითხვა
    with open(filename, "r", encoding="utf-8") as file:
        loaded_data = json.load(file)
    
    print("Loaded JSON data:")
    print(f"Course: {loaded_data['course']['name']}")
    print(f"Instructor: {loaded_data['course']['instructor']}")
    print(f"Number of students: {len(loaded_data['course']['students'])}")
    
    # Accessing nested data / ჩაშენებული მონაცემების წვდომა
    for student in loaded_data['course']['students']:
        avg_grade = sum(student['grades']) / len(student['grades'])
        print(f"Student: {student['name']}, Average Grade: {avg_grade:.1f}")
    
    # Modifying and saving JSON / JSON-ის შეცვლა და შენახვა
    loaded_data['course']['students'].append({
        "id": 3,
        "name": "ნინო/Nino",
        "email": "nino@example.com", 
        "grades": [92, 89, 94],
        "enrolled": True
    })
    
    with open(filename, "w", encoding="utf-8") as file:
        json.dump(loaded_data, file, indent=2, ensure_ascii=False)
    
    print("Added new student to JSON file")
    
    # Clean up / გასუფთავება
    if os.path.exists(filename):
        os.remove(filename)

# 5. Error Handling with Files / ფაილებთან მუშაობისას ცდომილებების მართვა

def file_error_handling():
    """Demonstrate error handling with file operations / ფაილების ოპერაციებთან ცდომილებების მართვის დემონსტრაცია"""
    
    print("\n6. File Error Handling / ფაილებთან ცდომილებების მართვა:")
    
    # Trying to read non-existent file / არ არსებული ფაილის წაკითხვის მცდელობა
    try:
        with open("nonexistent.txt", "r") as file:
            content = file.read()
    except FileNotFoundError:
        print("Error: File not found / ცდომილება: ფაილი ვერ მოიძებნა")
    except PermissionError:
        print("Error: Permission denied / ცდომილება: წვდომა აკრძალულია")
    except Exception as e:
        print(f"Unexpected error: {e}")
    
    # Safe file reading function / ფაილის უსაფრთხო წაკითხვის ფუნქცია
    def safe_read_file(filename):
        """Safely read file with error handling / ფაილის უსაფრთხო წაკითხვა ცდომილებების მართვით"""
        try:
            with open(filename, "r", encoding="utf-8") as file:
                return file.read()
        except FileNotFoundError:
            print(f"File '{filename}' not found")
            return None
        except PermissionError:
            print(f"Permission denied to read '{filename}'")
            return None
        except UnicodeDecodeError:
            print(f"Encoding error reading '{filename}'")
            return None
        except Exception as e:
            print(f"Unexpected error reading '{filename}': {e}")
            return None
    
    # Test safe reading / უსაფრთხო წაკითხვის ტესტი
    result = safe_read_file("test.txt")
    if result is not None:
        print("File content:", result)

# 6. Directory Operations / დირექტორიის ოპერაციები

def directory_operations():
    """Demonstrate directory operations / დირექტორიის ოპერაციების დემონსტრაცია"""
    
    print("\n7. Directory Operations / დირექტორიის ოპერაციები:")
    
    # Current directory / მიმდინარე დირექტორია
    current_dir = os.getcwd()
    print(f"Current directory: {current_dir}")
    
    # List files in directory / დირექტორიაში ფაილების ჩამონათვალი
    print("Files in current directory:")
    for item in os.listdir("."):
        if os.path.isfile(item):
            size = os.path.getsize(item)
            print(f"  File: {item} ({size} bytes)")
        elif os.path.isdir(item):
            print(f"  Directory: {item}")
    
    # Create and work with directories / დირექტორიების შექმნა და მუშაობა
    test_dir = "test_directory"
    
    if not os.path.exists(test_dir):
        os.makedirs(test_dir)
        print(f"Created directory: {test_dir}")
    
    # Create files in directory / დირექტორიაში ფაილების შექმნა
    test_file = os.path.join(test_dir, "test_file.txt")
    with open(test_file, "w", encoding="utf-8") as file:
        file.write("ეს ფაილია ტესტ დირექტორიაში\nThis is a file in test directory")
    
    # Check if file exists / ფაილის არსებობის შემოწმება
    if os.path.exists(test_file):
        print(f"File created: {test_file}")
        print(f"File size: {os.path.getsize(test_file)} bytes")
    
    # Clean up / გასუფთავება
    if os.path.exists(test_file):
        os.remove(test_file)
    if os.path.exists(test_dir):
        os.rmdir(test_dir)
        print(f"Cleaned up: {test_dir}")

# 7. Log File Example / ლოგ ფაილის მაგალითი

class FileLogger:
    """Simple file logger class / მარტივი ფაილის ლოგერის კლასი"""
    
    def __init__(self, log_file="app.log"):
        self.log_file = log_file
    
    def log(self, level, message):
        """Log message with timestamp / მესიჯის ლოგირება დროის ბეჭდით"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_entry = f"[{timestamp}] {level}: {message}\n"
        
        try:
            with open(self.log_file, "a", encoding="utf-8") as file:
                file.write(log_entry)
        except Exception as e:
            print(f"Failed to write to log: {e}")
    
    def info(self, message):
        """Log info message / ინფორმაციული მესიჯის ლოგირება"""
        self.log("INFO", message)
    
    def error(self, message):
        """Log error message / ცდომილების მესიჯის ლოგირება"""
        self.log("ERROR", message)
    
    def warning(self, message):
        """Log warning message / გაფრთხილების მესიჯის ლოგირება"""
        self.log("WARNING", message)
    
    def read_logs(self):
        """Read and return log entries / ლოგ ჩანაწერების წაკითხვა და დაბრუნება"""
        try:
            with open(self.log_file, "r", encoding="utf-8") as file:
                return file.read()
        except FileNotFoundError:
            return "No log file found"
        except Exception as e:
            return f"Error reading log: {e}"
    
    def clear_logs(self):
        """Clear log file / ლოგ ფაილის გასუფთავება"""
        try:
            with open(self.log_file, "w", encoding="utf-8") as file:
                file.write("")
            return "Log file cleared"
        except Exception as e:
            return f"Error clearing log: {e}"

def logger_demo():
    """Demonstrate file logger / ფაილის ლოგერის დემონსტრაცია"""
    
    print("\n8. File Logger Demo / ფაილის ლოგერის დემო:")
    
    logger = FileLogger("demo.log")
    
    # Log different types of messages / სხვადასხვა ტიპის მესიჯების ლოგირება
    logger.info("Application started / აპლიკაცია დაიწყო")
    logger.info("User logged in / მომხმარებელი შევიდა")
    logger.warning("Low disk space / დისკზე ადგილი ნაკლებია")
    logger.error("Database connection failed / მონაცემთა ბაზასთან კავშირი ვერ დამყარდა")
    logger.info("Application shutdown / აპლიკაციის დახურვა")
    
    # Read and display logs / ლოგების წაკითხვა და ჩვენება
    print("Log entries:")
    print(logger.read_logs())
    
    # Clean up / გასუფთავება
    if os.path.exists("demo.log"):
        os.remove("demo.log")

# 8. Main Function / მთავარი ფუნქცია

def main():
    """Main function to demonstrate all file operations / მთავარი ფუნქცია ყველა ფაილის ოპერაციის დემონსტრაციისთვის"""
    
    print("=== Python File Handling Tutorial ===")
    print("=== Python-ის ფაილთან მუშაობის გაკვეთილი ===")
    
    basic_file_operations()
    context_manager_examples()
    file_modes_demo()
    csv_operations()
    json_operations()
    file_error_handling()
    directory_operations()
    logger_demo()

# Practice Exercises / პრაქტიკული ვარჯიშები

def practice_exercises():
    """Practice exercises for file handling / ფაილთან მუშაობის პრაქტიკული ვარჯიშები"""
    
    print("\n=== Practice Exercises / პრაქტიკული ვარჯიშები ===")
    
    # Exercise 1: Word counter / ვარჯიში 1: სიტყვების მთვლელი
    def count_words_in_file(text):
        """Count words in text / ტექსტში სიტყვების რაოდენობის დაითვლა"""
        words = text.split()
        word_count = {}
        for word in words:
            # Remove punctuation / პუნქტუაციის წაშლა
            clean_word = word.strip(".,!?;:").lower()
            word_count[clean_word] = word_count.get(clean_word, 0) + 1
        return word_count
    
    # Example text / მაგალითი ტექსტი
    sample_text = """
    Python is a powerful programming language.
    Python is easy to learn and use.
    Many developers love Python because it's versatile.
    """
    
    word_counts = count_words_in_file(sample_text)
    print("Word frequency:")
    for word, count in sorted(word_counts.items()):
        if count > 1:
            print(f"  {word}: {count}")

# Run main function / მთავარი ფუნქციის გაშვება
if __name__ == "__main__":
    main()
    practice_exercises()

print("\n📚 Python File Handling lesson completed!")
print("📚 Python-ის ფაილთან მუშაობის გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით კონტაქტების მენეჯერი რომელიც ინახავს მონაცემებს JSON ფაილში
Task 1: Create a contact manager that stores data in a JSON file

2. დავალება 2: შექმენით CSV ფაილის ანალიზატორი რომელიც გამოთვლის სტატისტიკებს
Task 2: Create a CSV file analyzer that calculates statistics

3. დავალება 3: შექმენით ფაილების backup სისტემა
Task 3: Create a file backup system

4. დავალება 4: შექმენით ლოგ ანალიზატორი რომელიც ეძებს errors და warnings
Task 4: Create a log analyzer that searches for errors and warnings

5. დავალება 5: შექმენით კონფიგურაციის ფაილების მენეჯერი
Task 5: Create a configuration file manager
""" 