# Python Tutorial 08: Web Development and APIs
# Python-ის გაკვეთილი 08: ვებ განვითარება და API-ები

"""
ეს გაკვეთილი მოიცავს:
- HTTP requests with requests library
- REST API consumption
- JSON data handling
- Web scraping basics
- Flask web framework basics
- API authentication
- Error handling for web requests
- Async requests

This lesson covers:
- HTTP requests with requests library
- REST API consumption
- JSON data handling
- Web scraping basics
- Flask web framework basics
- API authentication
- Error handling for web requests
- Async requests
"""

import requests
import json
import time
from urllib.parse import urljoin, urlparse
from datetime import datetime
import xml.etree.ElementTree as ET

# Mock Flask for demonstration (would normally import flask)
# This is a simplified version for educational purposes

# 1. HTTP Requests with requests library / HTTP მოთხოვნები requests ბიბლიოთეკით

def basic_http_requests():
    """Demonstrate basic HTTP requests / ბაზისური HTTP მოთხოვნების დემონსტრაცია"""
    
    print("1. Basic HTTP Requests / ბაზისური HTTP მოთხოვნები:")
    
    # GET request example / GET მოთხოვნის მაგალითი
    try:
        print("Making GET request to JSONPlaceholder API...")
        response = requests.get('https://jsonplaceholder.typicode.com/posts/1')
        
        print(f"Status code: {response.status_code}")
        print(f"Content type: {response.headers.get('content-type')}")
        
        if response.status_code == 200:
            data = response.json()
            print("Response data:")
            print(f"  Title: {data.get('title')}")
            print(f"  Body: {data.get('body')[:50]}...")
        
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
    
    # POST request example / POST მოთხოვნის მაგალითი
    try:
        print("\nMaking POST request...")
        new_post = {
            'title': 'Python Tutorial Post / Python-ის გაკვეთილის პოსტი',
            'body': 'Learning web development with Python / Python-ით ვებ განვითარების სწავლა',
            'userId': 1
        }
        
        response = requests.post(
            'https://jsonplaceholder.typicode.com/posts',
            json=new_post,
            headers={'Content-Type': 'application/json'}
        )
        
        if response.status_code == 201:
            created_post = response.json()
            print("Post created successfully:")
            print(f"  ID: {created_post.get('id')}")
            print(f"  Title: {created_post.get('title')}")
        
    except requests.exceptions.RequestException as e:
        print(f"POST request failed: {e}")

def advanced_http_requests():
    """Demonstrate advanced HTTP request features / გაღრმავებული HTTP მოთხოვნების ფუნქციების დემონსტრაცია"""
    
    print("\n2. Advanced HTTP Requests / გაღრმავებული HTTP მოთხოვნები:")
    
    # Request with parameters / პარამეტრებიანი მოთხოვნა
    try:
        params = {
            'userId': 1,
            '_limit': 3
        }
        
        response = requests.get(
            'https://jsonplaceholder.typicode.com/posts',
            params=params,
            timeout=10
        )
        
        print(f"Request URL: {response.url}")
        posts = response.json()
        print(f"Retrieved {len(posts)} posts")
        
        for post in posts:
            print(f"  - {post['title'][:30]}...")
    
    except requests.exceptions.Timeout:
        print("Request timed out")
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
    
    # Request with custom headers / მორგებული headers-ებიანი მოთხოვნა
    try:
        headers = {
            'User-Agent': 'Python Tutorial Bot 1.0',
            'Accept': 'application/json',
            'Accept-Language': 'ka-GE,en'
        }
        
        response = requests.get(
            'https://jsonplaceholder.typicode.com/users/1',
            headers=headers
        )
        
        if response.status_code == 200:
            user = response.json()
            print(f"\nUser info:")
            print(f"  Name: {user.get('name')}")
            print(f"  Email: {user.get('email')}")
            print(f"  City: {user.get('address', {}).get('city')}")
    
    except requests.exceptions.RequestException as e:
        print(f"Request with headers failed: {e}")

# 2. Session Management / Session მართვა

class APIClient:
    """API client with session management / API კლიენტი session მართვით"""
    
    def __init__(self, base_url, api_key=None):
        self.base_url = base_url
        self.session = requests.Session()
        
        # Set default headers / ნაგულისხმევი headers-ების დაყენება
        self.session.headers.update({
            'User-Agent': 'Python Tutorial API Client',
            'Accept': 'application/json'
        })
        
        if api_key:
            self.session.headers.update({
                'Authorization': f'Bearer {api_key}'
            })
    
    def get(self, endpoint, **kwargs):
        """Make GET request / GET მოთხოვნის გაკეთება"""
        url = urljoin(self.base_url, endpoint)
        return self.session.get(url, **kwargs)
    
    def post(self, endpoint, data=None, **kwargs):
        """Make POST request / POST მოთხოვნის გაკეთება"""
        url = urljoin(self.base_url, endpoint)
        return self.session.post(url, json=data, **kwargs)
    
    def put(self, endpoint, data=None, **kwargs):
        """Make PUT request / PUT მოთხოვნის გაკეთება"""
        url = urljoin(self.base_url, endpoint)
        return self.session.put(url, json=data, **kwargs)
    
    def delete(self, endpoint, **kwargs):
        """Make DELETE request / DELETE მოთხოვნის გაკეთება"""
        url = urljoin(self.base_url, endpoint)
        return self.session.delete(url, **kwargs)
    
    def close(self):
        """Close session / Session-ის დახურვა"""
        self.session.close()

def api_client_demo():
    """Demonstrate API client usage / API კლიენტის გამოყენების დემონსტრაცია"""
    
    print("\n3. API Client with Session / API კლიენტი Session-ით:")
    
    # Create API client / API კლიენტის შექმნა
    client = APIClient('https://jsonplaceholder.typicode.com/')
    
    try:
        # Get all posts / ყველა პოსტის მიღება
        response = client.get('posts', params={'_limit': 5})
        if response.status_code == 200:
            posts = response.json()
            print(f"Retrieved {len(posts)} posts using session")
        
        # Create new post / ახალი პოსტის შექმნა
        new_post_data = {
            'title': 'Session Example / Session-ის მაგალითი',
            'body': 'This post was created using a session / ეს პოსტი შეიქმნა session-ის გამოყენებით',
            'userId': 1
        }
        
        response = client.post('posts', data=new_post_data)
        if response.status_code == 201:
            print("Post created using session")
        
        # Update post / პოსტის განახლება
        update_data = {
            'title': 'Updated Title / განახლებული სათაური',
            'body': 'Updated content / განახლებული შინაარსი',
            'userId': 1
        }
        
        response = client.put('posts/1', data=update_data)
        if response.status_code == 200:
            print("Post updated using session")
    
    except requests.exceptions.RequestException as e:
        print(f"API request failed: {e}")
    
    finally:
        client.close()

# 3. Error Handling for Web Requests / ვებ მოთხოვნებისთვის ცდომილებების მართვა

def robust_web_requests():
    """Demonstrate robust error handling for web requests / ვებ მოთხოვნებისთვის მძლავრი ცდომილებების მართვის დემონსტრაცია"""
    
    print("\n4. Robust Error Handling / მძლავრი ცდომილებების მართვა:")
    
    def make_request_with_retry(url, max_retries=3, backoff_factor=1):
        """Make request with retry logic / მოთხოვნის გაკეთება retry ლოგიკით"""
        
        for attempt in range(max_retries):
            try:
                print(f"  Attempt {attempt + 1} for {url}")
                response = requests.get(url, timeout=5)
                response.raise_for_status()  # Raise an exception for bad status codes
                return response
                
            except requests.exceptions.HTTPError as e:
                print(f"    HTTP Error: {e}")
                if response.status_code == 404:
                    print("    Resource not found, not retrying")
                    break
                    
            except requests.exceptions.ConnectionError:
                print("    Connection error")
                
            except requests.exceptions.Timeout:
                print("    Request timed out")
                
            except requests.exceptions.RequestException as e:
                print(f"    Request error: {e}")
            
            if attempt < max_retries - 1:
                wait_time = backoff_factor * (2 ** attempt)
                print(f"    Waiting {wait_time} seconds before retry...")
                time.sleep(wait_time)
        
        print("    All retry attempts failed")
        return None
    
    # Test with various URLs / სხვადასხვა URL-ების ტესტი
    test_urls = [
        'https://jsonplaceholder.typicode.com/posts/1',  # Should work
        'https://jsonplaceholder.typicode.com/posts/999',  # Should return 404
        'https://invalid-domain-that-does-not-exist.com',  # Should fail connection
    ]
    
    for url in test_urls:
        print(f"\nTesting URL: {url}")
        response = make_request_with_retry(url)
        if response:
            print(f"  Success: {response.status_code}")
        else:
            print("  Failed after all retries")

# 4. JSON Data Processing / JSON მონაცემების დამუშავება

def json_processing_demo():
    """Demonstrate JSON data processing / JSON მონაცემების დამუშავების დემონსტრაცია"""
    
    print("\n5. JSON Data Processing / JSON მონაცემების დამუშავება:")
    
    try:
        # Fetch complex JSON data / რთული JSON მონაცემების მიღება
        response = requests.get('https://jsonplaceholder.typicode.com/users')
        users = response.json()
        
        print(f"Processing {len(users)} users:")
        
        # Extract specific information / კონკრეტული ინფორმაციის ამოღება
        processed_users = []
        for user in users:
            processed_user = {
                'id': user['id'],
                'name': user['name'],
                'username': user['username'],
                'email': user['email'],
                'city': user['address']['city'],
                'company': user['company']['name'],
                'website': user.get('website', 'N/A'),
                'lat': float(user['address']['geo']['lat']),
                'lng': float(user['address']['geo']['lng'])
            }
            processed_users.append(processed_user)
        
        # Analyze data / მონაცემების ანალიზი
        print("\nData Analysis:")
        print(f"  Total users: {len(processed_users)}")
        
        # Find users by city / ქალაქის მიხედვით მომხმარებლების პოვნა
        cities = {}
        for user in processed_users:
            city = user['city']
            if city not in cities:
                cities[city] = []
            cities[city].append(user['name'])
        
        print("  Users by city:")
        for city, names in cities.items():
            print(f"    {city}: {', '.join(names)}")
        
        # Save processed data / დამუშავებული მონაცემების შენახვა
        output_data = {
            'processed_date': datetime.now().isoformat(),
            'total_users': len(processed_users),
            'users': processed_users,
            'statistics': {
                'cities': list(cities.keys()),
                'city_count': len(cities)
            }
        }
        
        with open('processed_users.json', 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
        print("  Data saved to processed_users.json")
    
    except requests.exceptions.RequestException as e:
        print(f"Failed to fetch user data: {e}")
    except json.JSONDecodeError as e:
        print(f"Failed to parse JSON: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")

# 5. Simple Web Scraping / მარტივი ვებ სკრეპინგი

def simple_web_scraping():
    """Demonstrate simple web scraping techniques / მარტივი ვებ სკრეპინგის ტექნიკების დემონსტრაცია"""
    
    print("\n6. Simple Web Scraping / მარტივი ვებ სკრეპინგი:")
    
    try:
        # Fetch a simple webpage / მარტივი ვებგვერდის მიღება
        response = requests.get('https://httpbin.org/html')
        
        if response.status_code == 200:
            html_content = response.text
            print("HTML content retrieved successfully")
            print(f"Content length: {len(html_content)} characters")
            
            # Simple text extraction (without BeautifulSoup for this example)
            # მარტივი ტექსტის ამოღება (BeautifulSoup-ის გარეშე ამ მაგალითისთვის)
            import re
            
            # Extract title / სათაურის ამოღება
            title_match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
            if title_match:
                title = title_match.group(1)
                print(f"Page title: {title}")
            
            # Extract links / ბმულების ამოღება
            link_pattern = r'<a[^>]*href=["\']([^"\']*)["\'][^>]*>(.*?)</a>'
            links = re.findall(link_pattern, html_content, re.IGNORECASE | re.DOTALL)
            
            if links:
                print("Links found:")
                for href, text in links[:5]:  # Show first 5 links
                    clean_text = re.sub(r'<[^>]+>', '', text).strip()
                    print(f"  {href}: {clean_text}")
    
    except requests.exceptions.RequestException as e:
        print(f"Web scraping failed: {e}")

# 6. Rate Limiting and Respectful Scraping / Rate Limiting და პატივისცემის სკრეპინგი

class RateLimitedSession:
    """Session with rate limiting / Session rate limiting-ით"""
    
    def __init__(self, requests_per_second=1):
        self.session = requests.Session()
        self.min_interval = 1.0 / requests_per_second
        self.last_request_time = 0
    
    def get(self, url, **kwargs):
        """Rate-limited GET request / Rate-limited GET მოთხოვნა"""
        self._wait_if_needed()
        return self.session.get(url, **kwargs)
    
    def post(self, url, **kwargs):
        """Rate-limited POST request / Rate-limited POST მოთხოვნა"""
        self._wait_if_needed()
        return self.session.post(url, **kwargs)
    
    def _wait_if_needed(self):
        """Wait if needed to respect rate limit / Rate limit-ის პატივისცემისთვის დაცდომა"""
        current_time = time.time()
        time_since_last = current_time - self.last_request_time
        
        if time_since_last < self.min_interval:
            sleep_time = self.min_interval - time_since_last
            time.sleep(sleep_time)
        
        self.last_request_time = time.time()
    
    def close(self):
        """Close session / Session-ის დახურვა"""
        self.session.close()

def rate_limiting_demo():
    """Demonstrate rate limiting / Rate limiting-ის დემონსტრაცია"""
    
    print("\n7. Rate Limiting / Rate Limiting:")
    
    # Create rate-limited session (1 request per 2 seconds)
    session = RateLimitedSession(requests_per_second=0.5)
    
    try:
        urls = [
            'https://jsonplaceholder.typicode.com/posts/1',
            'https://jsonplaceholder.typicode.com/posts/2',
            'https://jsonplaceholder.typicode.com/posts/3'
        ]
        
        print("Making rate-limited requests...")
        for i, url in enumerate(urls, 1):
            start_time = time.time()
            response = session.get(url)
            end_time = time.time()
            
            print(f"  Request {i}: {response.status_code} (took {end_time - start_time:.2f}s)")
    
    except requests.exceptions.RequestException as e:
        print(f"Rate-limited request failed: {e}")
    
    finally:
        session.close()

# 7. Mock Flask Web Framework Basics / Flask ვებ Framework-ის საფუძვლები (Mock)

class MockFlaskApp:
    """Mock Flask application for demonstration / Mock Flask აპლიკაცია დემონსტრაციისთვის"""
    
    def __init__(self, name):
        self.name = name
        self.routes = {}
        self.users = [
            {'id': 1, 'name': 'Ana', 'email': 'ana@example.com'},
            {'id': 2, 'name': 'Giorgi', 'email': 'giorgi@example.com'}
        ]
    
    def route(self, path, methods=['GET']):
        """Decorator to register routes / Decorator-ი route-ების რეგისტრაციისთვის"""
        def decorator(func):
            self.routes[path] = {'function': func, 'methods': methods}
            return func
        return decorator
    
    def simulate_request(self, path, method='GET', data=None):
        """Simulate HTTP request / HTTP მოთხოვნის იმიტაცია"""
        if path in self.routes:
            route_info = self.routes[path]
            if method in route_info['methods']:
                return route_info['function'](data)
        return {'error': 'Route not found'}, 404

def flask_demo():
    """Demonstrate Flask-like web framework / Flask-ის მსგავსი ვებ framework-ის დემონსტრაცია"""
    
    print("\n8. Web Framework Basics / ვებ Framework-ის საფუძვლები:")
    
    app = MockFlaskApp('tutorial_app')
    
    # Define routes / Route-ების განსაზღვრა
    @app.route('/')
    def home(data=None):
        return {
            'message': 'Welcome to Python Web Tutorial / მოგესალმებათ Python ვებ გაკვეთილი',
            'endpoints': ['/users', '/users/<id>']
        }
    
    @app.route('/users')
    def get_users(data=None):
        return {
            'users': app.users,
            'count': len(app.users)
        }
    
    @app.route('/users/<id>')
    def get_user(data=None):
        if data and 'id' in data:
            user_id = int(data['id'])
            user = next((u for u in app.users if u['id'] == user_id), None)
            if user:
                return user
            else:
                return {'error': 'User not found'}, 404
        return {'error': 'User ID required'}, 400
    
    @app.route('/users', methods=['POST'])
    def create_user(data=None):
        if data and 'name' in data and 'email' in data:
            new_user = {
                'id': len(app.users) + 1,
                'name': data['name'],
                'email': data['email']
            }
            app.users.append(new_user)
            return new_user, 201
        return {'error': 'Name and email required'}, 400
    
    # Simulate requests / მოთხოვნების იმიტაცია
    print("Simulating web requests:")
    
    # GET home page / მთავარი გვერდის GET
    response = app.simulate_request('/')
    print(f"GET /: {response}")
    
    # GET users / მომხმარებლების GET
    response = app.simulate_request('/users')
    print(f"GET /users: {response}")
    
    # GET specific user / კონკრეტული მომხმარებლის GET
    response = app.simulate_request('/users/<id>', data={'id': '1'})
    print(f"GET /users/1: {response}")
    
    # POST new user / ახალი მომხმარებლის POST
    new_user_data = {'name': 'Nino', 'email': 'nino@example.com'}
    response = app.simulate_request('/users', method='POST', data=new_user_data)
    print(f"POST /users: {response}")

# 8. Data Validation for APIs / API-ებისთვის მონაცემების ვალიდაცია

class APIValidator:
    """API data validator / API მონაცემების ვალიდატორი"""
    
    @staticmethod
    def validate_email(email):
        """Validate email format / Email ფორმატის ვალიდაცია"""
        import re
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(pattern, email) is not None
    
    @staticmethod
    def validate_user_data(data):
        """Validate user data / მომხმარებლის მონაცემების ვალიდაცია"""
        errors = []
        
        if not data.get('name'):
            errors.append("Name is required")
        elif len(data['name']) < 2:
            errors.append("Name must be at least 2 characters")
        
        if not data.get('email'):
            errors.append("Email is required")
        elif not APIValidator.validate_email(data['email']):
            errors.append("Invalid email format")
        
        if 'age' in data:
            try:
                age = int(data['age'])
                if age < 0 or age > 120:
                    errors.append("Age must be between 0 and 120")
            except ValueError:
                errors.append("Age must be a number")
        
        return len(errors) == 0, errors

def validation_demo():
    """Demonstrate API validation / API ვალიდაციის დემონსტრაცია"""
    
    print("\n9. API Data Validation / API მონაცემების ვალიდაცია:")
    
    test_data = [
        {'name': 'Ana', 'email': 'ana@example.com', 'age': 25},
        {'name': 'B', 'email': 'invalid-email', 'age': 'not-a-number'},
        {'email': 'missing@name.com'},
        {'name': 'Valid User', 'email': 'user@domain.com'}
    ]
    
    for i, data in enumerate(test_data, 1):
        is_valid, errors = APIValidator.validate_user_data(data)
        print(f"Test {i}: {data}")
        if is_valid:
            print("  ✓ Valid")
        else:
            print("  ✗ Invalid:")
            for error in errors:
                print(f"    - {error}")
        print()

# Main execution / მთავარი შესრულება

def main():
    """Main function to demonstrate web development concepts / მთავარი ფუნქცია ვებ განვითარების კონცეფციების დემონსტრაციისთვის"""
    
    print("=== Python Web Development and APIs Tutorial ===")
    print("=== Python-ის ვებ განვითარებისა და API-ების გაკვეთილი ===")
    
    basic_http_requests()
    advanced_http_requests()
    api_client_demo()
    robust_web_requests()
    json_processing_demo()
    simple_web_scraping()
    rate_limiting_demo()
    flask_demo()
    validation_demo()
    
    # Clean up created files / შექმნილი ფაილების გასუფთავება
    import os
    if os.path.exists('processed_users.json'):
        os.remove('processed_users.json')

if __name__ == "__main__":
    main()

print("\n📚 Python Web Development and APIs lesson completed!")
print("📚 Python-ის ვებ განვითარებისა და API-ების გაკვეთილი დასრულდა!")

"""
Practice Tasks / პრაქტიკული დავალებები:

1. დავალება 1: შექმენით Weather API client-ი async requests-ით
Task 1: Create a Weather API client with async requests

2. დავალება 2: შექმენით Web Scraper-ი news websites-ისთვის
Task 2: Create a Web Scraper for news websites

3. დავალება 3: შექმენით REST API Flask-ით და SQLite database-ით
Task 3: Create a REST API with Flask and SQLite database

4. დავალება 4: შექმენით API rate limiter middleware
Task 4: Create an API rate limiter middleware

5. დავალება 5: შექმენით OAuth authentication system
Task 5: Create an OAuth authentication system
""" 