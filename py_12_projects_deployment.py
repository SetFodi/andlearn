# Python Tutorial 12: Real-World Projects and Deployment
# Python-ის გაკვეთილი 12: რეალური პროექტები და განლაგება

"""
ეს გაკვეთილი მოიცავს:
- Building complete applications
- Command-line tools and scripts
- Web development basics with Flask
- Database integration
- API development and consumption
- Package management and virtual environments
- Code organization and project structure
- Deployment strategies
- Best practices for production code

This lesson covers:
- Building complete applications
- Command-line tools and scripts
- Web development basics with Flask
- Database integration
- API development and consumption
- Package management and virtual environments
- Code organization and project structure
- Deployment strategies
- Best practices for production code
"""

import json
import sqlite3
import datetime
import argparse
import os
import sys
import hashlib
import uuid
from typing import Dict, List, Optional, Any
import urllib.parse
import urllib.request
from pathlib import Path

# 1. Command-Line Application / Command-Line აპლიკაცია

class TaskManager:
    """A simple task management application / მარტივი დავალებების მართვის აპლიკაცია"""
    
    def __init__(self, db_path="tasks.db"):
        """Initialize task manager with database / დავალებების მენეჯერის ინიციალიზაცია მონაცემთა ბაზით"""
        self.db_path = db_path
        self.init_database()
    
    def init_database(self):
        """Initialize SQLite database / SQLite მონაცემთა ბაზის ინიციალიზაცია"""
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS tasks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT NOT NULL,
                    description TEXT,
                    status TEXT DEFAULT 'pending',
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    completed_at TIMESTAMP
                )
            ''')
            
            conn.commit()
            conn.close()
        except sqlite3.Error as e:
            print(f"Database error: {e}")
    
    def add_task(self, title: str, description: str = "") -> int:
        """Add a new task / ახალი დავალების დამატება"""
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            cursor.execute(
                "INSERT INTO tasks (title, description) VALUES (?, ?)",
                (title, description)
            )
            
            task_id = cursor.lastrowid
            conn.commit()
            conn.close()
            
            print(f"✅ Task added with ID: {task_id}")
            return task_id
        except sqlite3.Error as e:
            print(f"Error adding task: {e}")
            return -1
    
    def list_tasks(self, status: Optional[str] = None) -> List[Dict]:
        """List all tasks or tasks with specific status / ყველა დავალების ან კონკრეტული სტატუსის დავალებების სია"""
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            if status:
                cursor.execute("SELECT * FROM tasks WHERE status = ? ORDER BY created_at DESC", (status,))
            else:
                cursor.execute("SELECT * FROM tasks ORDER BY created_at DESC")
            
            columns = [description[0] for description in cursor.description]
            tasks = [dict(zip(columns, row)) for row in cursor.fetchall()]
            
            conn.close()
            return tasks
        except sqlite3.Error as e:
            print(f"Error listing tasks: {e}")
            return []
    
    def complete_task(self, task_id: int) -> bool:
        """Mark task as completed / დავალების დასრულებულად მონიშვნა"""
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            cursor.execute(
                "UPDATE tasks SET status = 'completed', completed_at = CURRENT_TIMESTAMP WHERE id = ?",
                (task_id,)
            )
            
            if cursor.rowcount > 0:
                print(f"✅ Task {task_id} marked as completed")
                success = True
            else:
                print(f"❌ Task {task_id} not found")
                success = False
            
            conn.commit()
            conn.close()
            return success
        except sqlite3.Error as e:
            print(f"Error completing task: {e}")
            return False
    
    def delete_task(self, task_id: int) -> bool:
        """Delete a task / დავალების წაშლა"""
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
            
            if cursor.rowcount > 0:
                print(f"🗑️ Task {task_id} deleted")
                success = True
            else:
                print(f"❌ Task {task_id} not found")
                success = False
            
            conn.commit()
            conn.close()
            return success
        except sqlite3.Error as e:
            print(f"Error deleting task: {e}")
            return False

def command_line_demo():
    """Demonstrate command-line application / Command-line აპლიკაციის დემონსტრაცია"""
    
    print("1. Command-Line Task Manager / Command-Line დავალებების მენეჯერი:")
    
    # Create task manager / დავალებების მენეჯერის შექმნა
    task_manager = TaskManager(":memory:")  # Use in-memory database for demo
    
    # Add some tasks / რამდენიმე დავალების დამატება
    task_manager.add_task("Complete Python tutorial", "Finish all 12 lessons")
    task_manager.add_task("Build a web app", "Create a Flask application")
    task_manager.add_task("Learn deployment", "Deploy app to cloud")
    
    # List all tasks / ყველა დავალების სია
    print("\nAll tasks:")
    tasks = task_manager.list_tasks()
    for task in tasks:
        status_emoji = "✅" if task['status'] == 'completed' else "⏳"
        print(f"{status_emoji} [{task['id']}] {task['title']} - {task['status']}")
    
    # Complete a task / დავალების დასრულება
    task_manager.complete_task(1)
    
    # List pending tasks / მოლოდინში მყოფი დავალებების სია
    print("\nPending tasks:")
    pending_tasks = task_manager.list_tasks('pending')
    for task in pending_tasks:
        print(f"⏳ [{task['id']}] {task['title']}")

# 2. Web Application with Mock Flask / ვებ აპლიკაცია Mock Flask-ით

class MockFlaskApp:
    """Mock Flask application for demonstration / მოდელი Flask აპლიკაცია დემონსტრაციისთვის"""
    
    def __init__(self, name):
        self.name = name
        self.routes = {}
        self.users = {}  # Simple in-memory user storage
    
    def route(self, path, methods=['GET']):
        """Decorator to register routes / დეკორატორი რუტების რეგისტრაციისთვის"""
        def decorator(func):
            self.routes[path] = {'function': func, 'methods': methods}
            return func
        return decorator
    
    def run(self, debug=False):
        """Mock run method / მოდელი run მეთოდი"""
        print(f"🚀 Mock Flask app '{self.name}' would be running on http://localhost:5000")
        print(f"Registered routes: {list(self.routes.keys())}")
    
    def request_handler(self, path, method='GET', data=None):
        """Mock request handler / მოდელი request handler"""
        if path in self.routes and method in self.routes[path]['methods']:
            return self.routes[path]['function'](data)
        else:
            return {'error': 'Route not found', 'status': 404}

class UserManager:
    """User management system / მომხმარებლების მართვის სისტემა"""
    
    def __init__(self):
        self.users = {}
        self.sessions = {}
    
    def register_user(self, username: str, email: str, password: str) -> Dict:
        """Register a new user / ახალი მომხმარებლის რეგისტრაცია"""
        if username in self.users:
            return {'success': False, 'message': 'Username already exists'}
        
        # Simple password hashing (in real apps, use proper libraries)
        # მარტივი პაროლის ჰეშირება (რეალურ აპებში გამოიყენეთ შესაბამისი ბიბლიოთეკები)
        password_hash = hashlib.sha256(password.encode()).hexdigest()
        
        user_id = str(uuid.uuid4())
        self.users[username] = {
            'id': user_id,
            'username': username,
            'email': email,
            'password_hash': password_hash,
            'created_at': datetime.datetime.now().isoformat()
        }
        
        return {'success': True, 'message': 'User registered successfully', 'user_id': user_id}
    
    def login_user(self, username: str, password: str) -> Dict:
        """Login user / მომხმარებლის შესვლა"""
        if username not in self.users:
            return {'success': False, 'message': 'User not found'}
        
        password_hash = hashlib.sha256(password.encode()).hexdigest()
        
        if self.users[username]['password_hash'] != password_hash:
            return {'success': False, 'message': 'Invalid password'}
        
        # Create session / სესიის შექმნა
        session_id = str(uuid.uuid4())
        self.sessions[session_id] = {
            'user_id': self.users[username]['id'],
            'username': username,
            'created_at': datetime.datetime.now().isoformat()
        }
        
        return {'success': True, 'message': 'Login successful', 'session_id': session_id}
    
    def get_user_info(self, session_id: str) -> Dict:
        """Get user info by session / სესიის მიხედვით მომხმარებლის ინფორმაციის მიღება"""
        if session_id not in self.sessions:
            return {'success': False, 'message': 'Invalid session'}
        
        username = self.sessions[session_id]['username']
        user_info = self.users[username].copy()
        del user_info['password_hash']  # Don't return password hash
        
        return {'success': True, 'user': user_info}

def web_application_demo():
    """Demonstrate web application structure / ვებ აპლიკაციის სტრუქტურის დემონსტრაცია"""
    
    print("\n2. Web Application Demo / ვებ აპლიკაციის დემო:")
    
    # Create Flask-like app / Flask-ის მსგავსი აპის შექმნა
    app = MockFlaskApp("TaskManager Web")
    user_manager = UserManager()
    task_manager = TaskManager(":memory:")
    
    # Define routes / რუტების განსაზღვრა
    @app.route('/')
    def home(data=None):
        return {
            'message': 'Welcome to Task Manager',
            'endpoints': ['/register', '/login', '/tasks', '/add_task']
        }
    
    @app.route('/register', methods=['POST'])
    def register(data):
        if not data or 'username' not in data:
            return {'error': 'Username required', 'status': 400}
        
        result = user_manager.register_user(
            data.get('username'),
            data.get('email', ''),
            data.get('password', '')
        )
        return result
    
    @app.route('/login', methods=['POST'])
    def login(data):
        if not data or 'username' not in data:
            return {'error': 'Username required', 'status': 400}
        
        result = user_manager.login_user(
            data.get('username'),
            data.get('password', '')
        )
        return result
    
    @app.route('/tasks', methods=['GET'])
    def get_tasks(data=None):
        tasks = task_manager.list_tasks()
        return {'tasks': tasks}
    
    @app.route('/add_task', methods=['POST'])
    def add_task(data):
        if not data or 'title' not in data:
            return {'error': 'Task title required', 'status': 400}
        
        task_id = task_manager.add_task(
            data.get('title'),
            data.get('description', '')
        )
        
        if task_id > 0:
            return {'success': True, 'task_id': task_id}
        else:
            return {'error': 'Failed to create task', 'status': 500}
    
    # Test the application / აპლიკაციის ტესტირება
    print("Testing web application endpoints:")
    
    # Test home page / მთავარი გვერდის ტესტი
    home_response = app.request_handler('/')
    print(f"Home page: {home_response}")
    
    # Test user registration / მომხმარებლის რეგისტრაციის ტესტი
    register_data = {'username': 'testuser', 'email': 'test@example.com', 'password': 'password123'}
    register_response = app.request_handler('/register', 'POST', register_data)
    print(f"Registration: {register_response}")
    
    # Test login / შესვლის ტესტი
    login_data = {'username': 'testuser', 'password': 'password123'}
    login_response = app.request_handler('/login', 'POST', login_data)
    print(f"Login: {login_response}")
    
    # Test adding task / დავალების დამატების ტესტი
    task_data = {'title': 'Test task', 'description': 'This is a test task'}
    task_response = app.request_handler('/add_task', 'POST', task_data)
    print(f"Add task: {task_response}")
    
    # Test getting tasks / დავალებების მიღების ტესტი
    tasks_response = app.request_handler('/tasks')
    print(f"Get tasks: {tasks_response}")

# 3. API Development and Consumption / API-ის შემუშავება და მოხმარება

class MockAPIClient:
    """Mock API client for external services / მოდელი API კლიენტი გარე სერვისებისთვის"""
    
    def __init__(self, base_url: str):
        self.base_url = base_url
        self.headers = {'Content-Type': 'application/json'}
    
    def get(self, endpoint: str) -> Dict:
        """Mock GET request / მოდელი GET რექვესტი"""
        url = f"{self.base_url}{endpoint}"
        print(f"Mock GET request to: {url}")
        
        # Simulate different responses based on endpoint
        # სხვადასხვა response-ის სიმულაცია endpoint-ის მიხედვით
        if 'weather' in endpoint:
            return {
                'temperature': 22,
                'humidity': 65,
                'condition': 'sunny',
                'location': 'Tbilisi'
            }
        elif 'users' in endpoint:
            return {
                'users': [
                    {'id': 1, 'name': 'John Doe', 'email': 'john@example.com'},
                    {'id': 2, 'name': 'Jane Smith', 'email': 'jane@example.com'}
                ]
            }
        else:
            return {'error': 'Endpoint not found'}
    
    def post(self, endpoint: str, data: Dict) -> Dict:
        """Mock POST request / მოდელი POST რექვესტი"""
        url = f"{self.base_url}{endpoint}"
        print(f"Mock POST request to: {url} with data: {data}")
        
        if 'create_user' in endpoint:
            return {
                'success': True,
                'user_id': 123,
                'message': 'User created successfully'
            }
        else:
            return {'success': False, 'message': 'Unknown endpoint'}

class WeatherService:
    """Weather service using external API / ამინდის სერვისი გარე API-ით"""
    
    def __init__(self):
        self.api_client = MockAPIClient("https://api.weather.com/v1/")
    
    def get_current_weather(self, city: str) -> Dict:
        """Get current weather for city / ქალაქისთვის მიმდინარე ამინდის მიღება"""
        try:
            response = self.api_client.get(f"weather/current?city={city}")
            return {
                'success': True,
                'data': response
            }
        except Exception as e:
            return {
                'success': False,
                'error': str(e)
            }
    
    def format_weather_report(self, weather_data: Dict) -> str:
        """Format weather data into readable report / ამინდის მონაცემების წაკითხვადი რეპორტად ფორმატირება"""
        if not weather_data.get('success'):
            return "Weather data unavailable"
        
        data = weather_data['data']
        return f"""
🌤️ Weather Report for {data.get('location', 'Unknown')}
Temperature: {data.get('temperature', 'N/A')}°C
Humidity: {data.get('humidity', 'N/A')}%
Condition: {data.get('condition', 'N/A').title()}
        """.strip()

def api_development_demo():
    """Demonstrate API development and consumption / API-ის შემუშავებისა და მოხმარების დემონსტრაცია"""
    
    print("\n3. API Development and Consumption / API-ის შემუშავება და მოხმარება:")
    
    # Weather service example / ამინდის სერვისის მაგალითი
    weather_service = WeatherService()
    
    print("Getting weather data:")
    weather_data = weather_service.get_current_weather("Tbilisi")
    weather_report = weather_service.format_weather_report(weather_data)
    print(weather_report)
    
    # API client for user management / API კლიენტი მომხმარებლების მართვისთვის
    user_api = MockAPIClient("https://api.myapp.com/v1/")
    
    print("\nTesting user API:")
    
    # Get users / მომხმარებლების მიღება
    users_response = user_api.get("users")
    print(f"Users: {users_response}")
    
    # Create new user / ახალი მომხმარებლის შექმნა
    new_user_data = {
        'name': 'New User',
        'email': 'newuser@example.com',
        'role': 'user'
    }
    create_response = user_api.post("create_user", new_user_data)
    print(f"Create user response: {create_response}")

# 4. Package Management and Project Structure / პაკეტების მართვა და პროექტის სტრუქტურა

class ProjectStructureManager:
    """Manage project structure and dependencies / პროექტის სტრუქტურისა და დამოკიდებულებების მართვა"""
    
    def __init__(self, project_name: str):
        self.project_name = project_name
        self.dependencies = []
        self.dev_dependencies = []
    
    def create_project_structure(self) -> Dict:
        """Create recommended project structure / რეკომენდებული პროექტის სტრუქტურის შექმნა"""
        structure = {
            self.project_name: {
                "src": {
                    f"{self.project_name}": {
                        "__init__.py": "",
                        "main.py": "# Main application entry point",
                        "models": {
                            "__init__.py": "",
                            "user.py": "# User model",
                            "task.py": "# Task model"
                        },
                        "views": {
                            "__init__.py": "",
                            "api.py": "# API endpoints",
                            "web.py": "# Web views"
                        },
                        "utils": {
                            "__init__.py": "",
                            "helpers.py": "# Helper functions",
                            "validators.py": "# Input validators"
                        }
                    }
                },
                "tests": {
                    "__init__.py": "",
                    "test_models.py": "# Model tests",
                    "test_api.py": "# API tests",
                    "test_utils.py": "# Utility tests"
                },
                "docs": {
                    "README.md": "# Project Documentation",
                    "API.md": "# API Documentation"
                },
                "requirements.txt": "# Production dependencies",
                "requirements-dev.txt": "# Development dependencies",
                "setup.py": "# Package setup",
                ".gitignore": "# Git ignore file",
                "Dockerfile": "# Docker configuration",
                "docker-compose.yml": "# Docker Compose configuration"
            }
        }
        return structure
    
    def add_dependency(self, package: str, version: str = "", dev: bool = False):
        """Add a dependency / დამოკიდებულების დამატება"""
        dependency = f"{package}{version}"
        
        if dev:
            self.dev_dependencies.append(dependency)
            print(f"Added dev dependency: {dependency}")
        else:
            self.dependencies.append(dependency)
            print(f"Added dependency: {dependency}")
    
    def generate_requirements(self) -> Dict[str, List[str]]:
        """Generate requirements files content / requirements ფაილების შინაარსის გენერაცია"""
        return {
            "requirements.txt": self.dependencies,
            "requirements-dev.txt": self.dependencies + self.dev_dependencies
        }
    
    def print_project_structure(self, structure: Dict, indent: int = 0):
        """Print project structure in tree format / პროექტის სტრუქტურის ხის ფორმატში ბეჭდვა"""
        for name, content in structure.items():
            print("  " * indent + f"📁 {name}/" if isinstance(content, dict) else "  " * indent + f"📄 {name}")
            if isinstance(content, dict):
                self.print_project_structure(content, indent + 1)

def project_structure_demo():
    """Demonstrate project structure management / პროექტის სტრუქტურის მართვის დემონსტრაცია"""
    
    print("\n4. Project Structure and Dependencies / პროექტის სტრუქტურა და დამოკიდებულები:")
    
    # Create project manager / პროექტის მენეჯერის შექმნა
    project = ProjectStructureManager("my_task_app")
    
    # Add dependencies / დამოკიდებულებების დამატება
    project.add_dependency("flask", ">=2.0.0")
    project.add_dependency("sqlite3")
    project.add_dependency("requests", ">=2.25.0")
    project.add_dependency("pytest", ">=6.0.0", dev=True)
    project.add_dependency("black", ">=21.0.0", dev=True)
    
    # Generate project structure / პროექტის სტრუქტურის გენერაცია
    structure = project.create_project_structure()
    
    print("Recommended project structure:")
    project.print_project_structure(structure)
    
    # Generate requirements / requirements-ების გენერაცია
    requirements = project.generate_requirements()
    print(f"\nRequirements files:")
    for filename, deps in requirements.items():
        print(f"\n{filename}:")
        for dep in deps:
            print(f"  {dep}")

# 5. Deployment and Production Best Practices / განლაგება და პროდუქციის საუკეთესო პრაქტიკები

class DeploymentManager:
    """Manage deployment configuration / განლაგების კონფიგურაციის მართვა"""
    
    def __init__(self, app_name: str):
        self.app_name = app_name
        self.config = {
            'development': {
                'DEBUG': True,
                'DATABASE_URL': 'sqlite:///dev.db',
                'SECRET_KEY': 'dev-secret-key'
            },
            'production': {
                'DEBUG': False,
                'DATABASE_URL': 'postgresql://user:pass@host:port/db',
                'SECRET_KEY': 'production-secret-key'
            }
        }
    
    def generate_dockerfile(self) -> str:
        """Generate Dockerfile content / Dockerfile შინაარსის გენერაცია"""
        return f"""
# Use Python 3.9 slim image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy requirements first (for better caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 5000

# Run the application
CMD ["python", "src/{self.app_name}/main.py"]
        """.strip()
    
    def generate_docker_compose(self) -> str:
        """Generate docker-compose.yml content / docker-compose.yml შინაარსის გენერაცია"""
        return f"""
version: '3.8'

services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - FLASK_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/{self.app_name}
    depends_on:
      - db
    volumes:
      - ./logs:/app/logs

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB={self.app_name}
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
        """.strip()
    
    def generate_deployment_script(self) -> str:
        """Generate deployment script / განლაგების სკრიპტის გენერაცია"""
        return f"""
#!/bin/bash

# Deployment script for {self.app_name}
# განლაგების სკრიპტი {self.app_name}-ისთვის

echo "🚀 Starting deployment for {self.app_name}..."

# Pull latest code
echo "📥 Pulling latest code..."
git pull origin main

# Build Docker image
echo "🏗️ Building Docker image..."
docker build -t {self.app_name}:latest .

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Start new containers
echo "▶️ Starting new containers..."
docker-compose up -d

# Run database migrations (if needed)
echo "🗃️ Running database migrations..."
docker-compose exec app python -m alembic upgrade head

# Health check
echo "🏥 Performing health check..."
sleep 10
curl -f http://localhost:5000/health || exit 1

echo "✅ Deployment completed successfully!"
        """.strip()
    
    def create_health_check_endpoint(self) -> str:
        """Create health check endpoint code / health check endpoint-ის კოდის შექმნა"""
        return """
@app.route('/health')
def health_check():
    '''Health check endpoint for deployment monitoring'''
    try:
        # Check database connection
        # მონაცემთა ბაზის კავშირის შემოწმება
        conn = sqlite3.connect(DATABASE_PATH)
        conn.execute('SELECT 1')
        conn.close()
        
        return {
            'status': 'healthy',
            'timestamp': datetime.datetime.now().isoformat(),
            'version': '1.0.0',
            'database': 'connected'
        }, 200
    except Exception as e:
        return {
            'status': 'unhealthy',
            'error': str(e),
            'timestamp': datetime.datetime.now().isoformat()
        }, 500
        """.strip()

def deployment_demo():
    """Demonstrate deployment preparation / განლაგების მომზადების დემონსტრაცია"""
    
    print("\n5. Deployment and Production Best Practices / განლაგება და პროდუქციის საუკეთესო პრაქტიკები:")
    
    # Create deployment manager / განლაგების მენეჯერის შექმნა
    deploy_manager = DeploymentManager("task_manager")
    
    print("Generated deployment files:")
    
    # Dockerfile
    print("\n📄 Dockerfile:")
    print(deploy_manager.generate_dockerfile())
    
    # Docker Compose
    print("\n📄 docker-compose.yml:")
    print(deploy_manager.generate_docker_compose())
    
    # Health check endpoint
    print("\n📄 Health check endpoint:")
    print(deploy_manager.create_health_check_endpoint())
    
    # Deployment best practices / განლაგების საუკეთესო პრაქტიკები
    best_practices = [
        "🔒 Use environment variables for secrets / გამოიყენეთ environment variables-ები საიდუმლოებისთვის",
        "📝 Implement comprehensive logging / შექმენით ყოვლისმომცველი ლოგირება",
        "🏥 Add health check endpoints / დაამატეთ health check endpoints-ები",
        "🔄 Use database migrations / გამოიყენეთ მონაცემთა ბაზის მიგრაციები",
        "🐳 Containerize with Docker / გამოიყენეთ კონტეინერიზაცია Docker-ით",
        "🔧 Set up CI/CD pipelines / მოაწყვეთ CI/CD pipelines-ები",
        "📊 Monitor application performance / აკონტროლეთ აპლიკაციის წარმადობა",
        "🔐 Implement proper authentication / შექმენით შესაბამისი ავთენტიფიკაცია",
        "🧪 Write comprehensive tests / დაწერეთ ყოვლისმომცველი ტესტები",
        "📋 Document APIs and deployment process / დააოკუმენტირეთ API-ები და განლაგების პროცესი"
    ]
    
    print(f"\n📋 Deployment Best Practices:")
    for practice in best_practices:
        print(f"  {practice}")

def main():
    """Main function to demonstrate real-world Python development / მთავარი ფუნქცია რეალური Python-ის განვითარების დემონსტრაციისთვის"""
    
    print("=== Python Real-World Projects and Deployment Tutorial ===")
    print("=== Python რეალური პროექტებისა და განლაგების გაკვეთილი ===")
    
    command_line_demo()
    web_application_demo()
    api_development_demo()
    project_structure_demo()
    deployment_demo()

if __name__ == "__main__":
    main()

print("\n📚 Python Real-World Projects and Deployment lesson completed!")
print("📚 Python რეალური პროექტებისა და განლაგების გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით complete REST API Flask-ით database integration-ით
Task 1: Create a complete REST API with Flask including database integration

2. დავალება 2: აღსმენეთ CLI tool-ი argparse-ით რთული ფუნქციონალით
Task 2: Build a CLI tool with argparse having complex functionality

3. დავალება 3: შექმენით microservice architecture რამდენიმე service-ით
Task 3: Create a microservice architecture with multiple services

4. დავალება 4: იმპლემენტაცია გაუკეთეთ CI/CD pipeline GitHub Actions-ით
Task 4: Implement a CI/CD pipeline with GitHub Actions

5. დავალება 5: დაწერეთ comprehensive documentation და deployment guide
Task 5: Write comprehensive documentation and deployment guide

Final Project / ფინალური პროექტი:
შექმენით სრული web application task management-ისთვის, მომხმარებლების რეგისტრაციით, 
authentication-ით, API-ით, tests-ით და deployment configuration-ით.

Create a complete web application for task management with user registration,
authentication, API, tests, and deployment configuration.
""" 