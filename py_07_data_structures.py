# Python Tutorial 07: Advanced Data Structures
# Python-ის გაკვეთილი 07: გაღრმავებული მონაცემთა სტრუქტურები

"""
ეს გაკვეთილი მოიცავს:
- Collections module (deque, Counter, defaultdict, OrderedDict)
- Sets and set operations
- Advanced list and dictionary operations
- Tuples and named tuples
- Data classes
- Enums
- Stack and Queue implementations
- Trees and graphs (basic)

This lesson covers:
- Collections module (deque, Counter, defaultdict, OrderedDict)
- Sets and set operations
- Advanced list and dictionary operations
- Tuples and named tuples
- Data classes
- Enums
- Stack and Queue implementations
- Trees and graphs (basic)
"""

from collections import deque, Counter, defaultdict, OrderedDict, namedtuple
from dataclasses import dataclass, field
from enum import Enum, auto
from typing import List, Dict, Optional, Any
import heapq
import json

# 1. Collections Module / Collections მოდული

def collections_demo():
    """Demonstrate collections module / Collections მოდულის დემონსტრაცია"""
    
    print("1. Collections Module / Collections მოდული:")
    
    # Counter - for counting elements / Counter - ელემენტების დასათვლელად
    print("Counter - Element counting / ელემენტების რაოდენობის დათვლა:")
    text = "გამარჯობა hello world python programming"
    letter_count = Counter(text.replace(" ", ""))
    print(f"Letter frequencies: {letter_count}")
    print(f"Most common 3 letters: {letter_count.most_common(3)}")
    
    # Counter with lists / Counter სიებთან
    fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
    fruit_count = Counter(fruits)
    print(f"Fruit count: {fruit_count}")
    
    # defaultdict - dictionaries with default values / defaultdict - default ღირებულებებიანი ლექსიკონები
    print("\ndefaultdict - Default values / ნაგულისხმევი ღირებულებები:")
    
    # Group words by first letter / სიტყვების დაჯგუფება პირველი ასოით
    words = ["apple", "banana", "cherry", "apricot", "blueberry", "avocado"]
    grouped = defaultdict(list)
    
    for word in words:
        grouped[word[0]].append(word)
    
    print("Words grouped by first letter:")
    for letter, word_list in grouped.items():
        print(f"  {letter}: {word_list}")
    
    # deque - double-ended queue / deque - ორმხრივი რიგი
    print("\ndeque - Double-ended queue / ორმხრივი რიგი:")
    dq = deque([1, 2, 3])
    dq.appendleft(0)    # Add to left / მარცხენა მხარეს დამატება
    dq.append(4)        # Add to right / მარჯვენა მხარეს დამატება
    print(f"Deque: {dq}")
    
    left_item = dq.popleft()    # Remove from left / მარცხნიდან ამოღება
    right_item = dq.pop()       # Remove from right / მარჯვნიდან ამოღება
    print(f"Removed left: {left_item}, right: {right_item}")
    print(f"Remaining deque: {dq}")
    
    # OrderedDict - preserves insertion order / OrderedDict - შეყვანის თანმიმდევრობის შენარჩუნება
    print("\nOrderedDict - Preserves order / თანმიმდევრობის შენარჩუნება:")
    regular_dict = {}
    ordered_dict = OrderedDict()
    
    items = [("first", 1), ("second", 2), ("third", 3)]
    for key, value in items:
        regular_dict[key] = value
        ordered_dict[key] = value
    
    print(f"OrderedDict: {ordered_dict}")
    
    # Move to end / ბოლოში გადატანა
    ordered_dict.move_to_end("first")
    print(f"After moving 'first' to end: {ordered_dict}")

# 2. Advanced Set Operations / გაღრმავებული Set ოპერაციები

def advanced_sets_demo():
    """Demonstrate advanced set operations / გაღრმავებული set ოპერაციების დემონსტრაცია"""
    
    print("\n2. Advanced Set Operations / გაღრმავებული Set ოპერაციები:")
    
    # Creating sets / Set-ების შექმნა
    python_students = {"Ana", "Giorgi", "Nino", "Luka", "Mari"}
    javascript_students = {"Giorgi", "Nino", "Saba", "Tako", "Nika"}
    math_students = {"Ana", "Luka", "Saba", "Gio", "Nana"}
    
    print(f"Python students: {python_students}")
    print(f"JavaScript students: {javascript_students}")
    print(f"Math students: {math_students}")
    
    # Set operations / Set ოპერაციები
    print("\nSet Operations:")
    
    # Union - students in any course / Union - ნებისმიერ კურსზე მყოფი სტუდენტები
    all_students = python_students | javascript_students | math_students
    print(f"All students (union): {all_students}")
    
    # Intersection - students in both Python and JavaScript / Intersection - Python-ისა და JavaScript-ის სტუდენტები
    both_prog_languages = python_students & javascript_students
    print(f"Students in both programming courses: {both_prog_languages}")
    
    # Difference - Python students not in JavaScript / Difference - Python სტუდენტები რომლებიც არ არიან JavaScript-ში
    python_only = python_students - javascript_students
    print(f"Python only students: {python_only}")
    
    # Symmetric difference - students in exactly one programming course / Symmetric difference - მხოლოდ ერთ პროგრამირების კურსზე
    one_prog_course = python_students ^ javascript_students
    print(f"Students in exactly one programming course: {one_prog_course}")
    
    # Advanced set methods / გაღრმავებული set მეთოდები
    print("\nAdvanced Set Methods:")
    
    # Check if one set is subset of another / შემოწმება არის თუ არა ერთი set მეორის ქვეყნული
    small_group = {"Ana", "Giorgi"}
    print(f"Is {small_group} subset of Python students? {small_group.issubset(python_students)}")
    
    # Check if sets are disjoint / შემოწმება არიან თუ არა sets გამიჯნული
    new_students = {"Temuri", "Mariam"}
    print(f"Are new students disjoint from existing? {new_students.isdisjoint(all_students)}")

# 3. Named Tuples / Named Tuples

def named_tuples_demo():
    """Demonstrate named tuples / Named tuples-ის დემონსტრაცია"""
    
    print("\n3. Named Tuples / Named Tuples:")
    
    # Create named tuple types / Named tuple ტიპების შექმნა
    Student = namedtuple('Student', ['name', 'age', 'grade', 'subject'])
    Point = namedtuple('Point', ['x', 'y'])
    Color = namedtuple('Color', ['red', 'green', 'blue'])
    
    # Create instances / ინსტანსების შექმნა
    student1 = Student("Ana", 20, 95, "Python")
    student2 = Student("Giorgi", 19, 88, "JavaScript")
    
    print(f"Student 1: {student1}")
    print(f"Student name: {student1.name}, Grade: {student1.grade}")
    
    # Named tuples are immutable / Named tuples იმუტებელია
    print("\nNamed tuples properties:")
    print(f"Student fields: {student1._fields}")
    print(f"As dictionary: {student1._asdict()}")
    
    # Replace method (creates new instance) / Replace მეთოდი (ახალ ინსტანსს ქმნის)
    updated_student = student1._replace(grade=97)
    print(f"Updated student: {updated_student}")
    
    # Using with geometric operations / გეომეტრიული ოპერაციებთან გამოყენება
    print("\nGeometric operations with named tuples:")
    p1 = Point(3, 4)
    p2 = Point(6, 8)
    
    def distance(point1, point2):
        """Calculate distance between two points / ორ წერტილს შორის მანძილის გამოთვლა"""
        return ((point2.x - point1.x)**2 + (point2.y - point1.y)**2)**0.5
    
    print(f"Distance between {p1} and {p2}: {distance(p1, p2):.2f}")
    
    # Color manipulation / ფერების მანიპულაცია
    red = Color(255, 0, 0)
    green = Color(0, 255, 0)
    print(f"Red color: {red}")
    print(f"Green color: {green}")

# 4. Data Classes / Data Classes

@dataclass
class StudentRecord:
    """Student record using dataclass / სტუდენტის ჩანაწერი dataclass-ის გამოყენებით"""
    
    name: str
    age: int
    email: str
    grades: List[float] = field(default_factory=list)
    enrolled: bool = True
    metadata: Dict[str, Any] = field(default_factory=dict)
    
    def __post_init__(self):
        """Post-initialization processing / ინიციალიზაციის შემდგომი დამუშავება"""
        if "@" not in self.email:
            raise ValueError("Invalid email format")
        self.metadata["created_date"] = "2024-01-01"
    
    def add_grade(self, grade: float) -> None:
        """Add a grade / ქულის დამატება"""
        if 0 <= grade <= 100:
            self.grades.append(grade)
        else:
            raise ValueError("Grade must be between 0 and 100")
    
    def average_grade(self) -> float:
        """Calculate average grade / საშუალო ქულის გამოთვლა"""
        return sum(self.grades) / len(self.grades) if self.grades else 0.0
    
    def is_passing(self) -> bool:
        """Check if student is passing / შემოწმება გადის თუ არა სტუდენტი"""
        return self.average_grade() >= 60.0

@dataclass(frozen=True)  # Immutable dataclass / იმუტებელი dataclass
class Course:
    """Immutable course record / იმუტებელი კურსის ჩანაწერი"""
    
    name: str
    code: str
    credits: int
    instructor: str

def dataclasses_demo():
    """Demonstrate data classes / Data classes-ის დემონსტრაცია"""
    
    print("\n4. Data Classes / Data Classes:")
    
    # Create student records / სტუდენტების ჩანაწერების შექმნა
    student1 = StudentRecord("Ana Beridze", 20, "ana@example.com")
    student2 = StudentRecord("Giorgi Gelashvili", 19, "giorgi@example.com")
    
    # Add grades / ქულების დამატება
    student1.add_grade(95)
    student1.add_grade(88)
    student1.add_grade(92)
    
    student2.add_grade(76)
    student2.add_grade(82)
    student2.add_grade(79)
    
    print(f"Student 1: {student1.name}")
    print(f"  Average grade: {student1.average_grade():.1f}")
    print(f"  Is passing: {student1.is_passing()}")
    
    print(f"Student 2: {student2.name}")
    print(f"  Average grade: {student2.average_grade():.1f}")
    print(f"  Is passing: {student2.is_passing()}")
    
    # Create course / კურსის შექმნა
    python_course = Course("Python Programming", "CS101", 3, "Dr. Smith")
    print(f"\nCourse: {python_course}")
    
    # Demonstrate immutability / იმუტებელობის დემონსტრაცია
    try:
        python_course.name = "Advanced Python"  # This will fail
    except AttributeError as e:
        print(f"Cannot modify frozen dataclass: {e}")

# 5. Enums / Enums

class Status(Enum):
    """Student status enumeration / სტუდენტის სტატუსის ენუმერაცია"""
    ENROLLED = "enrolled"
    GRADUATED = "graduated"
    SUSPENDED = "suspended"
    TRANSFERRED = "transferred"

class Priority(Enum):
    """Task priority enumeration / დავალების პრიორიტეტის ენუმერაცია"""
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    CRITICAL = 4

class Color(Enum):
    """Color enumeration with auto values / ფერების ენუმერაცია ავტომატური ღირებულებებით"""
    RED = auto()
    GREEN = auto()
    BLUE = auto()
    YELLOW = auto()

def enums_demo():
    """Demonstrate enums / Enums-ის დემონსტრაცია"""
    
    print("\n5. Enums / Enums:")
    
    # Using status enum / სტატუს enum-ის გამოყენება
    student_status = Status.ENROLLED
    print(f"Student status: {student_status}")
    print(f"Status name: {student_status.name}")
    print(f"Status value: {student_status.value}")
    
    # Enum comparison / Enum-ების შედარება
    if student_status == Status.ENROLLED:
        print("Student is currently enrolled")
    
    # Priority enum / Priority enum
    task_priority = Priority.HIGH
    print(f"\nTask priority: {task_priority}")
    print(f"Priority level: {task_priority.value}")
    
    # Iterate through enum values / Enum ღირებულებების გამოყოფა
    print("\nAll priorities:")
    for priority in Priority:
        print(f"  {priority.name}: {priority.value}")
    
    # Auto enum / Auto enum
    print("\nColors with auto values:")
    for color in Color:
        print(f"  {color.name}: {color.value}")

# 6. Stack and Queue Implementations / Stack და Queue იმპლემენტაციები

class Stack:
    """Stack implementation using list / Stack იმპლემენტაცია list-ის გამოყენებით"""
    
    def __init__(self):
        self._items = []
    
    def push(self, item):
        """Add item to top of stack / ელემენტის stack-ის თავზე დამატება"""
        self._items.append(item)
    
    def pop(self):
        """Remove and return top item / თავზე მყოფი ელემენტის ამოღება და დაბრუნება"""
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._items.pop()
    
    def peek(self):
        """Return top item without removing / თავზე მყოფი ელემენტის დაბრუნება ამოღების გარეშე"""
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self._items[-1]
    
    def is_empty(self):
        """Check if stack is empty / შემოწმება ცარიელია თუ არა stack"""
        return len(self._items) == 0
    
    def size(self):
        """Return stack size / Stack-ის ზომის დაბრუნება"""
        return len(self._items)
    
    def __str__(self):
        return f"Stack({self._items})"

class Queue:
    """Queue implementation using deque / Queue იმპლემენტაცია deque-ის გამოყენებით"""
    
    def __init__(self):
        self._items = deque()
    
    def enqueue(self, item):
        """Add item to rear of queue / ელემენტის queue-ის ბოლოში დამატება"""
        self._items.append(item)
    
    def dequeue(self):
        """Remove and return front item / წინა ელემენტის ამოღება და დაბრუნება"""
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self._items.popleft()
    
    def front(self):
        """Return front item without removing / წინა ელემენტის დაბრუნება ამოღების გარეშე"""
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self._items[0]
    
    def is_empty(self):
        """Check if queue is empty / შემოწმება ცარიელია თუ არა queue"""
        return len(self._items) == 0
    
    def size(self):
        """Return queue size / Queue-ის ზომის დაბრუნება"""
        return len(self._items)
    
    def __str__(self):
        return f"Queue({list(self._items)})"

def stack_queue_demo():
    """Demonstrate stack and queue / Stack და queue-ის დემონსტრაცია"""
    
    print("\n6. Stack and Queue / Stack და Queue:")
    
    # Stack demonstration / Stack-ის დემონსტრაცია
    print("Stack operations:")
    stack = Stack()
    
    # Push items / ელემენტების დამატება
    for item in ["first", "second", "third"]:
        stack.push(item)
        print(f"  Pushed: {item}, Stack: {stack}")
    
    # Pop items / ელემენტების ამოღება
    while not stack.is_empty():
        item = stack.pop()
        print(f"  Popped: {item}, Stack: {stack}")
    
    # Queue demonstration / Queue-ის დემონსტრაცია
    print("\nQueue operations:")
    queue = Queue()
    
    # Enqueue items / ელემენტების დამატება
    for item in ["first", "second", "third"]:
        queue.enqueue(item)
        print(f"  Enqueued: {item}, Queue: {queue}")
    
    # Dequeue items / ელემენტების ამოღება
    while not queue.is_empty():
        item = queue.dequeue()
        print(f"  Dequeued: {item}, Queue: {queue}")

# 7. Priority Queue using heapq / Priority Queue heapq-ის გამოყენებით

class PriorityQueue:
    """Priority queue implementation / Priority queue იმპლემენტაცია"""
    
    def __init__(self):
        self._queue = []
        self._index = 0
    
    def push(self, item, priority):
        """Add item with priority / ელემენტის პრიორიტეტით დამატება"""
        heapq.heappush(self._queue, (priority, self._index, item))
        self._index += 1
    
    def pop(self):
        """Remove and return highest priority item / ყველაზე მაღალი პრიორიტეტის ელემენტის ამოღება"""
        if self.is_empty():
            raise IndexError("Priority queue is empty")
        return heapq.heappop(self._queue)[-1]
    
    def is_empty(self):
        """Check if queue is empty / შემოწმება ცარიელია თუ არა queue"""
        return len(self._queue) == 0
    
    def size(self):
        """Return queue size / Queue-ის ზომის დაბრუნება"""
        return len(self._queue)

def priority_queue_demo():
    """Demonstrate priority queue / Priority queue-ის დემონსტრაცია"""
    
    print("\n7. Priority Queue / Priority Queue:")
    
    pq = PriorityQueue()
    
    # Add tasks with priorities / დავალებების პრიორიტეტებით დამატება
    tasks = [
        ("Complete homework", 2),
        ("Buy groceries", 3),
        ("Call dentist", 1),
        ("Prepare presentation", 1),
        ("Walk the dog", 4)
    ]
    
    print("Adding tasks:")
    for task, priority in tasks:
        pq.push(task, priority)
        print(f"  Added: '{task}' with priority {priority}")
    
    print("\nProcessing tasks by priority:")
    while not pq.is_empty():
        task = pq.pop()
        print(f"  Processing: '{task}'")

# 8. Simple Graph Implementation / მარტივი Graph იმპლემენტაცია

class Graph:
    """Simple graph implementation / მარტივი graph იმპლემენტაცია"""
    
    def __init__(self):
        self._adjacency_list = defaultdict(list)
    
    def add_edge(self, from_vertex, to_vertex, weight=1):
        """Add edge between vertices / წიბოების დამატება ვერტექსებს შორის"""
        self._adjacency_list[from_vertex].append((to_vertex, weight))
    
    def add_undirected_edge(self, vertex1, vertex2, weight=1):
        """Add undirected edge / მიუმართავი წიბოს დამატება"""
        self.add_edge(vertex1, vertex2, weight)
        self.add_edge(vertex2, vertex1, weight)
    
    def get_neighbors(self, vertex):
        """Get neighbors of vertex / ვერტექსის მეზობლების მიღება"""
        return self._adjacency_list[vertex]
    
    def vertices(self):
        """Get all vertices / ყველა ვერტექსის მიღება"""
        return list(self._adjacency_list.keys())
    
    def has_edge(self, from_vertex, to_vertex):
        """Check if edge exists / შემოწმება არსებობს თუ არა წიბო"""
        neighbors = self._adjacency_list[from_vertex]
        return any(neighbor[0] == to_vertex for neighbor in neighbors)
    
    def bfs(self, start_vertex):
        """Breadth-first search / სიგანეზე ძებნა"""
        visited = set()
        queue = Queue()
        queue.enqueue(start_vertex)
        result = []
        
        while not queue.is_empty():
            vertex = queue.dequeue()
            if vertex not in visited:
                visited.add(vertex)
                result.append(vertex)
                
                for neighbor, _ in self._adjacency_list[vertex]:
                    if neighbor not in visited:
                        queue.enqueue(neighbor)
        
        return result
    
    def dfs(self, start_vertex):
        """Depth-first search / სიღრმეზე ძებნა"""
        visited = set()
        stack = Stack()
        stack.push(start_vertex)
        result = []
        
        while not stack.is_empty():
            vertex = stack.pop()
            if vertex not in visited:
                visited.add(vertex)
                result.append(vertex)
                
                for neighbor, _ in self._adjacency_list[vertex]:
                    if neighbor not in visited:
                        stack.push(neighbor)
        
        return result
    
    def __str__(self):
        result = []
        for vertex, neighbors in self._adjacency_list.items():
            neighbor_str = ", ".join(f"{n}({w})" for n, w in neighbors)
            result.append(f"{vertex}: [{neighbor_str}]")
        return "\n".join(result)

def graph_demo():
    """Demonstrate graph operations / Graph ოპერაციების დემონსტრაცია"""
    
    print("\n8. Graph Implementation / Graph იმპლემენტაცია:")
    
    # Create graph / Graph-ის შექმნა
    graph = Graph()
    
    # Add edges / წიბოების დამატება
    cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Zugdidi"]
    connections = [
        ("Tbilisi", "Rustavi", 20),
        ("Tbilisi", "Kutaisi", 220),
        ("Kutaisi", "Batumi", 150),
        ("Kutaisi", "Zugdidi", 100),
        ("Batumi", "Zugdidi", 80)
    ]
    
    for city1, city2, distance in connections:
        graph.add_undirected_edge(city1, city2, distance)
    
    print("Graph connections:")
    print(graph)
    
    # BFS and DFS / BFS და DFS
    start_city = "Tbilisi"
    print(f"\nBFS from {start_city}: {graph.bfs(start_city)}")
    print(f"DFS from {start_city}: {graph.dfs(start_city)}")

# Main execution / მთავარი შესრულება

def main():
    """Main function to demonstrate all data structures / მთავარი ფუნქცია ყველა მონაცემთა სტრუქტურის დემონსტრაციისთვის"""
    
    print("=== Python Advanced Data Structures Tutorial ===")
    print("=== Python-ის გაღრმავებული მონაცემთა სტრუქტურების გაკვეთილი ===")
    
    collections_demo()
    advanced_sets_demo()
    named_tuples_demo()
    dataclasses_demo()
    enums_demo()
    stack_queue_demo()
    priority_queue_demo()
    graph_demo()

if __name__ == "__main__":
    main()

print("\n📚 Python Advanced Data Structures lesson completed!")
print("📚 Python-ის გაღრმავებული მონაცემთა სტრუქტურების გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით LRU Cache dataclass-ისა და deque-ის გამოყენებით
Task 1: Implement an LRU Cache using dataclass and deque

2. დავალება 2: შექმენით Binary Tree კლასი insertion და search მეთოდებით
Task 2: Create a Binary Tree class with insertion and search methods

3. დავალება 3: შექმენით Hash Table იმპლემენტაცია collision handling-ით
Task 3: Implement a Hash Table with collision handling

4. დავალება 4: შექმენით Trie (Prefix Tree) string searching-ისთვის
Task 4: Implement a Trie (Prefix Tree) for string searching

5. დავალება 5: შექმენით Graph კლასი shortest path algorithm-ით
Task 5: Create a Graph class with shortest path algorithm
""" 