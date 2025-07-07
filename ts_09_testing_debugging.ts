// TypeScript Tutorial 09: Testing and Debugging
// TypeScript-ის გაკვეთილი 09: ტესტირება და ბაგების მოძებნა

/*
ეს გაკვეთილი მოიცავს:
- Unit Testing with Jest and TypeScript
- Test-Driven Development (TDD)
- Debugging techniques
- Error handling strategies
- Type assertions and guards
- Performance testing

This lesson covers:
- Unit Testing with Jest and TypeScript
- Test-Driven Development (TDD)
- Debugging techniques
- Error handling strategies
- Type assertions and guards
- Performance testing
*/

// 1. Type Guards and Assertions / ტიპების შემოწმება და დაძლევა
type NetworkResponse = {
    status: 'success' | 'error';
    data?: any;
    errorMessage?: string;
};

function isSuccessResponse(response: NetworkResponse): response is NetworkResponse & { status: 'success' } {
    return response.status === 'success';
}

function isErrorResponse(response: NetworkResponse): response is NetworkResponse & { status: 'error' } {
    return response.status === 'error';
}

// 2. Debug Helper Functions / დებაგინგის დამხმარე ფუნქციები
function debugLog<T>(value: T, label?: string): T {
    // Check if in development mode
    const isDev = typeof window !== 'undefined' && (window as any).DEBUG_MODE;
    if (isDev) {
        console.log(`[DEBUG]${label ? ` ${label}:` : ''}`, value);
    }
    return value;
}

function typeCheck<T>(value: T, expectedType: string): boolean {
    const actualType = typeof value;
    const isCorrectType = actualType === expectedType;
    
    if (!isCorrectType) {
        console.warn(`Type mismatch: expected ${expectedType}, got ${actualType}`);
    }
    
    return isCorrectType;
}

// 3. Testing Utilities / ტესტირების უტილიტები
interface TestResult {
    passed: boolean;
    message: string;
    actual?: any;
    expected?: any;
}

class SimpleTestRunner {
    private testResults: TestResult[] = [];
    
    // Assert functions / შემოწმების ფუნქციები
    assertEqual<T>(actual: T, expected: T, message: string): void {
        const passed = actual === expected;
        this.testResults.push({
            passed,
            message,
            actual,
            expected
        });
        
        if (!passed) {
            console.error(`❌ ${message}: Expected ${expected}, got ${actual}`);
        } else {
            console.log(`✅ ${message}`);
        }
    }
    
    assertTrue(condition: boolean, message: string): void {
        this.testResults.push({
            passed: condition,
            message,
            actual: condition,
            expected: true
        });
        
        if (!condition) {
            console.error(`❌ ${message}: Condition was false`);
        } else {
            console.log(`✅ ${message}`);
        }
    }
    
    assertThrows(fn: () => void, message: string): void {
        let threw = false;
        try {
            fn();
        } catch {
            threw = true;
        }
        
        this.assertTrue(threw, message);
    }
    
    // Get test summary / ტესტების შეჯამება
    getSummary(): { passed: number; failed: number; total: number } {
        const passed = this.testResults.filter(r => r.passed).length;
        const total = this.testResults.length;
        return {
            passed,
            failed: total - passed,
            total
        };
    }
}

// 4. Error Handling with Custom Errors / ცდომილებების მართვა
class TestValidationError extends Error {
    constructor(public field: string, message: string) {
        super(message);
        this.name = 'TestValidationError';
    }
}

class TestNetworkError extends Error {
    constructor(public statusCode: number, message: string) {
        super(message);
        this.name = 'TestNetworkError';
    }
}

// 5. Data Validation with Error Handling / მონაცემების ვალიდაცია
interface TestUserRegistration {
    username: string;
    email: string;
    password: string;
    age: number;
}

class UserValidator {
    static validateUser(userData: Partial<TestUserRegistration>): TestUserRegistration {
        const errors: string[] = [];
        
        // Username validation / მომხმარებლის სახელის ვალიდაცია
        if (!userData.username || userData.username.length < 3) {
            errors.push('Username must be at least 3 characters');
        }
        
        // Email validation / ელ.ფოსტის ვალიდაცია
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!userData.email || !emailRegex.test(userData.email)) {
            errors.push('Valid email is required');
        }
        
        // Password validation / პაროლის ვალიდაცია
        const password = userData.password;
        if (!password || password.length < 8) {
            errors.push('Password must be at least 8 characters');
        }
        
        // Age validation / ასაკის ვალიდაცია
        if (!userData.age || userData.age < 13 || userData.age > 120) {
            errors.push('Age must be between 13 and 120');
        }
        
        if (errors.length > 0) {
            throw new TestValidationError('user_data', errors.join(', '));
        }
        
        return userData as TestUserRegistration;
    }
}

// 6. Performance Testing / წარმადობის ტესტირება
class PerformanceTester {
    static measureTime<T>(fn: () => T, description: string): T {
        const startTime = performance.now();
        const result = fn();
        const endTime = performance.now();
        
        console.log(`⏱️ ${description}: ${(endTime - startTime).toFixed(2)}ms`);
        return result;
    }
    
    static async measureAsyncTime<T>(fn: () => Promise<T>, description: string): Promise<T> {
        const startTime = performance.now();
        const result = await fn();
        const endTime = performance.now();
        
        console.log(`⏱️ ${description}: ${(endTime - startTime).toFixed(2)}ms`);
        return result;
    }
    
    static benchmarkFunction<T>(fn: () => T, iterations: number = 1000): void {
        const times: number[] = [];
        
        for (let i = 0; i < iterations; i++) {
            const start = performance.now();
            fn();
            const end = performance.now();
            times.push(end - start);
        }
        
        const average = times.reduce((sum, time) => sum + time, 0) / times.length;
        const min = Math.min(...times);
        const max = Math.max(...times);
        
        console.log(`📊 Benchmark Results (${iterations} iterations):`);
        console.log(`   Average: ${average.toFixed(3)}ms`);
        console.log(`   Min: ${min.toFixed(3)}ms`);
        console.log(`   Max: ${max.toFixed(3)}ms`);
    }
}

// 7. Mock Objects for Testing / მოკ ობიექტები ტესტირებისთვის
interface TestDatabaseConnection {
    query(sql: string): Promise<any[]>;
    insert(table: string, data: object): Promise<number>;
}

class MockDatabase implements TestDatabaseConnection {
    private mockData: { [table: string]: any[] } = {
        users: [
            { id: 1, username: 'john', email: 'john@example.com' },
            { id: 2, username: 'jane', email: 'jane@example.com' }
        ]
    };
    
    async query(sql: string): Promise<any[]> {
        console.log(`Mock query executed: ${sql}`);
        
        if (sql.includes('SELECT * FROM users')) {
            return this.mockData.users;
        }
        
        return [];
    }
    
    async insert(table: string, data: object): Promise<number> {
        console.log(`Mock insert into ${table}:`, data);
        
        if (this.mockData[table]) {
            const newId = Math.max(...this.mockData[table].map(item => item.id || 0)) + 1;
            this.mockData[table].push({ id: newId, ...data });
            return newId;
        }
        
        return -1;
    }
}

// 8. Integration Testing Example / ინტეგრაციული ტესტირების მაგალითი
class AuthenticationService {
    constructor(private db: TestDatabaseConnection) {}
    
    async loginUser(username: string, password: string): Promise<{ success: boolean; user?: any; error?: string }> {
        try {
            const users = await this.db.query(`SELECT * FROM users WHERE username = '${username}'`);
            
            if (users.length === 0) {
                return { success: false, error: 'User not found' };
            }
            
            // In real app, you would hash and compare password
            // რეალურ აპლიკაციაში პაროლს ჰეშირებდით და ადარებდით
            if (password === 'correctpassword') {
                return { success: true, user: users[0] };
            } else {
                return { success: false, error: 'Invalid password' };
            }
        } catch (error) {
            return { success: false, error: 'Database error' };
        }
    }
}

// 9. Example Tests / ტესტების მაგალითები
const testRunner = new SimpleTestRunner();

// Test user validation / მომხმარებლის ვალიდაციის ტესტი
try {
    const validUserData: Partial<TestUserRegistration> = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'securepassword123',
        age: 25
    };
    const validUser = UserValidator.validateUser(validUserData);
    testRunner.assertTrue(!!validUser, 'Valid user should pass validation');
} catch (error) {
    console.error('Unexpected validation error:', error);
}

// Test invalid user / არასწორი მომხმარებლის ტესტი
testRunner.assertThrows(
    () => UserValidator.validateUser({ username: 'ab' }),
    'Invalid user should throw ValidationError'
);

// Test type guards / ტიპების შემოწმების ტესტი
const successResponse: NetworkResponse = { status: 'success', data: { message: 'OK' } };
const errorResponse: NetworkResponse = { status: 'error', errorMessage: 'Failed' };

testRunner.assertTrue(isSuccessResponse(successResponse), 'Success response should be identified correctly');
testRunner.assertTrue(isErrorResponse(errorResponse), 'Error response should be identified correctly');

// Test authentication service / ავთენტიფიკაციის სერვისის ტესტი
async function testAuthService() {
    const mockDb = new MockDatabase();
    const authService = new AuthenticationService(mockDb);
    
    // Test successful login / წარმატებული შესვლის ტესტი
    const loginResult = await authService.loginUser('john', 'correctpassword');
    testRunner.assertTrue(loginResult.success, 'Login should succeed with correct credentials');
    
    // Test failed login / წარუმატებელი შესვლის ტესტი
    const failedLogin = await authService.loginUser('john', 'wrongpassword');
    testRunner.assertTrue(!failedLogin.success, 'Login should fail with incorrect password');
}

// Performance testing example / წარმადობის ტესტირების მაგალითი
const largeArray = Array.from({ length: 100000 }, (_, i) => i);

PerformanceTester.measureTime(
    () => largeArray.filter(n => n % 2 === 0),
    'Filter even numbers'
);

PerformanceTester.benchmarkFunction(
    () => Math.random() * 1000,
    100
);

// 10. Practice Tasks / პრაქტიკული დავალებები

/*
დავალება 1: შექმენით ტესტი რთული ობიექტისთვის
Task 1: Create a test for a complex object

შექმენით Calculator კლასი add, subtract, multiply, divide მეთოდებით
და დაწერეთ ტესტები ყველა მეთოდისთვის, ასევე error cases-ებისთვის
*/

/*
დავალება 2: შექმენით Mock API Service
Task 2: Create a Mock API Service

შექმენით MockApiService კლასი რომელიც იმიტირებს HTTP მოთხოვნებს
და დაწერეთ ტესტები სხვადასხვა response scenarios-ისთვის
*/

/*
დავალება 3: Performance Comparison
Task 3: Performance Comparison

შეადარეთ for loop, forEach, map და filter მეთოდების წარმადობა
დიდ მასივზე და ჩაწერეთ შედეგები
*/

// Run async tests / ასინქრონული ტესტების გაშვება
testAuthService().then(() => {
    console.log('\n📋 Test Summary:');
    const summary = testRunner.getSummary();
    console.log(`Passed: ${summary.passed}/${summary.total}`);
    console.log(`Failed: ${summary.failed}/${summary.total}`);
    
    if (summary.failed === 0) {
        console.log('🎉 All tests passed!');
    } else {
        console.log('❌ Some tests failed. Check the output above.');
    }
});

console.log('📚 TypeScript Testing & Debugging lesson completed!');
console.log('📚 TypeScript-ის ტესტირებისა და ბაგების მოძებნის გაკვეთილი დასრულდა!'); 