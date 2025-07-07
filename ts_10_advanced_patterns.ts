// TypeScript Tutorial 10: Advanced Patterns and Best Practices
// TypeScript-ის გაკვეთილი 10: გაღრმავებული პატერნები და საუკეთესო პრაქტიკები

/*
ეს გაკვეთილი მოიცავს:
- Design Patterns in TypeScript
- Advanced Type Manipulation
- Dependency Injection
- Builder Pattern
- Observer Pattern
- Strategy Pattern
- Factory Pattern
- Singleton Pattern

This lesson covers:
- Design Patterns in TypeScript
- Advanced Type Manipulation
- Dependency Injection
- Builder Pattern
- Observer Pattern
- Strategy Pattern
- Factory Pattern
- Singleton Pattern
*/

// 1. Advanced Type Manipulation / ტიპების გაღრმავებული მანიპულაცია

// Conditional types for complex logic / პირობითი ტიპები რთული ლოგიკისთვის
type IsArray<T> = T extends readonly unknown[] ? true : false;
type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

// Template literal types for API endpoints / ტემპლეიტ ლიტერალების ტიპები API endpoint-ებისთვის
type ApiEndpoint<T extends string> = `/api/v1/${T}`;
type UserEndpoint = ApiEndpoint<'users'>;
type PostEndpoint = ApiEndpoint<'posts'>;

// Recursive types / რეკურსიული ტიპები
type DeepReadonlyType<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonlyType<T[P]> : T[P];
};

// 2. Singleton Pattern / სინგლტონ პატერნი
class ConfigurationManager {
    private static instance: ConfigurationManager;
    private config: Record<string, any> = {};
    
    private constructor() {
        // Load default configuration / ნაგულისხმევი კონფიგურაციის ჩატვირთვა
        this.config = {
            apiUrl: 'https://api.example.com',
            timeout: 5000,
            retryAttempts: 3
        };
    }
    
    static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }
    
    get<T>(key: string): T | undefined {
        return this.config[key] as T;
    }
    
    set<T>(key: string, value: T): void {
        this.config[key] = value;
    }
    
    getAll(): Record<string, any> {
        return { ...this.config };
    }
}

// 3. Factory Pattern / ფაქტორი პატერნი
interface Logger {
    log(message: string): void;
    error(message: string): void;
    warn(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }
    
    error(message: string): void {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }
    
    warn(message: string): void {
        console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
    }
}

class FileLogger implements Logger {
    constructor(private filename: string) {}
    
    log(message: string): void {
        this.writeToFile(`[LOG] ${new Date().toISOString()}: ${message}`);
    }
    
    error(message: string): void {
        this.writeToFile(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }
    
    warn(message: string): void {
        this.writeToFile(`[WARN] ${new Date().toISOString()}: ${message}`);
    }
    
    private writeToFile(message: string): void {
        // In real implementation, write to file
        // რეალურ განხორციელებაში, ფაილში ჩაწერა
        console.log(`Writing to ${this.filename}: ${message}`);
    }
}

class LoggerFactory {
    static createLogger(type: 'console' | 'file', options?: { filename?: string }): Logger {
        switch (type) {
            case 'console':
                return new ConsoleLogger();
            case 'file':
                return new FileLogger(options?.filename || 'app.log');
            default:
                throw new Error(`Unknown logger type: ${type}`);
        }
    }
}

// 4. Builder Pattern / ბილდერ პატერნი
class QueryBuilder {
    private query: string = '';
    private conditions: string[] = [];
    private sortFields: string[] = [];
    private limitValue?: number;
    
    select(fields: string[]): QueryBuilder {
        this.query = `SELECT ${fields.join(', ')}`;
        return this;
    }
    
    from(table: string): QueryBuilder {
        this.query += ` FROM ${table}`;
        return this;
    }
    
    where(condition: string): QueryBuilder {
        this.conditions.push(condition);
        return this;
    }
    
    orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
        this.sortFields.push(`${field} ${direction}`);
        return this;
    }
    
    limit(count: number): QueryBuilder {
        this.limitValue = count;
        return this;
    }
    
    build(): string {
        let finalQuery = this.query;
        
        if (this.conditions.length > 0) {
            finalQuery += ` WHERE ${this.conditions.join(' AND ')}`;
        }
        
        if (this.sortFields.length > 0) {
            finalQuery += ` ORDER BY ${this.sortFields.join(', ')}`;
        }
        
        if (this.limitValue) {
            finalQuery += ` LIMIT ${this.limitValue}`;
        }
        
        return finalQuery;
    }
}

// 5. Observer Pattern / დამკვირვებელი პატერნი
interface EventObserver<T> {
    update(data: T): void;
}

class EventEmitter<T> {
    private observers: EventObserver<T>[] = [];
    
    subscribe(observer: EventObserver<T>): void {
        this.observers.push(observer);
    }
    
    unsubscribe(observer: EventObserver<T>): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    
    emit(data: T): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

// User activity tracking example / მომხმარებლის აქტივობის თვალყურის დევნების მაგალითი
interface UserActivity {
    userId: string;
    action: string;
    timestamp: Date;
}

class ActivityLogger implements EventObserver<UserActivity> {
    update(activity: UserActivity): void {
        console.log(`Logging activity: ${activity.action} by user ${activity.userId}`);
    }
}

class ActivityAnalytics implements EventObserver<UserActivity> {
    private activities: UserActivity[] = [];
    
    update(activity: UserActivity): void {
        this.activities.push(activity);
        console.log(`Analytics: Total activities recorded: ${this.activities.length}`);
    }
    
    getActivitiesByUser(userId: string): UserActivity[] {
        return this.activities.filter(activity => activity.userId === userId);
    }
}

// 6. Strategy Pattern / სტრატეგიის პატერნი
interface PaymentStrategy {
    processPayment(amount: number): Promise<{ success: boolean; transactionId: string }>;
}

class CreditCardPayment implements PaymentStrategy {
    constructor(private cardNumber: string, private cvv: string) {}
    
    async processPayment(amount: number): Promise<{ success: boolean; transactionId: string }> {
        // Simulate credit card processing / საკრედიტო ბარათის დამუშავების იმიტაცია
        console.log(`Processing $${amount} via Credit Card ending in ${this.cardNumber.slice(-4)}`);
        
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    success: Math.random() > 0.1, // 90% success rate
                    transactionId: `cc_${Date.now()}`
                });
            }, 1000);
        });
    }
}

class PayPalPayment implements PaymentStrategy {
    constructor(private email: string) {}
    
    async processPayment(amount: number): Promise<{ success: boolean; transactionId: string }> {
        // Simulate PayPal processing / PayPal-ის დამუშავების იმიტაცია
        console.log(`Processing $${amount} via PayPal account ${this.email}`);
        
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    success: Math.random() > 0.05, // 95% success rate
                    transactionId: `pp_${Date.now()}`
                });
            }, 800);
        });
    }
}

class PaymentProcessor {
    constructor(private strategy: PaymentStrategy) {}
    
    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }
    
    async processPayment(amount: number): Promise<{ success: boolean; transactionId: string }> {
        return await this.strategy.processPayment(amount);
    }
}

// 7. Dependency Injection / დამოკიდებულების ინექცია
interface DatabaseService {
    save<T>(entity: T): Promise<T>;
    findById<T>(id: string): Promise<T | null>;
}

interface EmailService {
    sendEmail(to: string, subject: string, body: string): Promise<boolean>;
}

class MockDatabaseService implements DatabaseService {
    private storage = new Map<string, any>();
    
    async save<T>(entity: T & { id: string }): Promise<T> {
        this.storage.set(entity.id, entity);
        console.log(`Saved entity with ID: ${entity.id}`);
        return entity;
    }
    
    async findById<T>(id: string): Promise<T | null> {
        return this.storage.get(id) || null;
    }
}

class MockEmailService implements EmailService {
    async sendEmail(to: string, subject: string, body: string): Promise<boolean> {
        console.log(`Sending email to ${to}: ${subject}`);
        return true;
    }
}

class UserService {
    constructor(
        private database: DatabaseService,
        private emailService: EmailService,
        private logger: Logger
    ) {}
    
    async createUser(userData: { id: string; email: string; name: string }): Promise<void> {
        try {
            // Save user to database / მომხმარებლის მონაცემთა ბაზაში შენახვა
            await this.database.save(userData);
            this.logger.log(`User created: ${userData.id}`);
            
            // Send welcome email / მისალმების ელ.ფოსტის გაგზავნა
            await this.emailService.sendEmail(
                userData.email,
                'Welcome!',
                `Hello ${userData.name}, welcome to our platform!`
            );
            this.logger.log(`Welcome email sent to: ${userData.email}`);
            
        } catch (error) {
            this.logger.error(`Failed to create user: ${error}`);
            throw error;
        }
    }
}

// 8. Advanced Generic Constraints / გენერიკების გაღრმავებული შეზღუდვები
interface Timestamped {
    createdAt: Date;
    updatedAt: Date;
}

interface Identifiable {
    id: string;
}

// Generic repository pattern / გენერიკული რეპოზიტორიის პატერნი
class Repository<T extends Identifiable & Timestamped> {
    private items: T[] = [];
    
    create(item: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T {
        const newItem = {
            ...item,
            id: Math.random().toString(36).substring(7),
            createdAt: new Date(),
            updatedAt: new Date()
        } as T;
        
        this.items.push(newItem);
        return newItem;
    }
    
    findById(id: string): T | undefined {
        return this.items.find(item => item.id === id);
    }
    
    update(id: string, updates: Partial<Omit<T, 'id' | 'createdAt'>>): T | undefined {
        const item = this.findById(id);
        if (item) {
            Object.assign(item, updates, { updatedAt: new Date() });
            return item;
        }
        return undefined;
    }
    
    delete(id: string): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index > -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
    
    findAll(): T[] {
        return [...this.items];
    }
}

// 9. Example Usage / გამოყენების მაგალითები

// Using Singleton / სინგლტონის გამოყენება
const config = ConfigurationManager.getInstance();
config.set('apiUrl', 'https://new-api.example.com');
console.log('API URL:', config.get<string>('apiUrl'));

// Using Factory / ფაქტორის გამოყენება
const consoleLogger = LoggerFactory.createLogger('console');
const fileLogger = LoggerFactory.createLogger('file', { filename: 'app.log' });

consoleLogger.log('Application started');
fileLogger.error('Something went wrong');

// Using Builder / ბილდერის გამოყენება
const query = new QueryBuilder()
    .select(['name', 'email', 'age'])
    .from('users')
    .where('age > 18')
    .where('status = "active"')
    .orderBy('name', 'ASC')
    .limit(10)
    .build();

console.log('Generated Query:', query);

// Using Observer / დამკვირვებლის გამოყენება
const activityEmitter = new EventEmitter<UserActivity>();
const logger = new ActivityLogger();
const analytics = new ActivityAnalytics();

activityEmitter.subscribe(logger);
activityEmitter.subscribe(analytics);

activityEmitter.emit({
    userId: 'user123',
    action: 'login',
    timestamp: new Date()
});

// Using Strategy / სტრატეგიის გამოყენება
async function demonstratePaymentStrategies() {
    const processor = new PaymentProcessor(
        new CreditCardPayment('1234567890123456', '123')
    );
    
    let result = await processor.processPayment(100);
    console.log('Credit Card Result:', result);
    
    // Switch strategy / სტრატეგიის შეცვლა
    processor.setStrategy(new PayPalPayment('user@example.com'));
    result = await processor.processPayment(50);
    console.log('PayPal Result:', result);
}

// Using Dependency Injection / დამოკიდებულების ინექციის გამოყენება
const database = new MockDatabaseService();
const emailService = new MockEmailService();
const userService = new UserService(database, emailService, consoleLogger);

userService.createUser({
    id: 'user456',
    email: 'user@example.com',
    name: 'John Doe'
});

// Using Generic Repository / გენერიკული რეპოზიტორიის გამოყენება
interface BlogPost extends Identifiable, Timestamped {
    title: string;
    content: string;
    author: string;
}

const postRepository = new Repository<BlogPost>();

const newPost = postRepository.create({
    title: 'Advanced TypeScript Patterns',
    content: 'This post covers advanced patterns...',
    author: 'Jane Developer'
});

console.log('Created post:', newPost);

// 10. Practice Tasks / პრაქტიკული დავალებები

/*
დავალება 1: შექმენით Command Pattern
Task 1: Implement Command Pattern

შექმენით Command interface და კონკრეტული commands
undo/redo ფუნქციონალობით
*/

/*
დავალება 2: შექმენით Decorator Pattern
Task 2: Implement Decorator Pattern

შექმენით ობიექტის ფუნქციონალობის გაფართოების სისტემა
decorators-ების გამოყენებით
*/

/*
დავალება 3: შექმენით Pub/Sub System
Task 3: Create a Pub/Sub System

შექმენით publish-subscribe სისტემა TypeScript-ით
type-safe event handling-ით
*/

// Run async demonstration / ასინქრონული დემონსტრაციის გაშვება
demonstratePaymentStrategies().then(() => {
    console.log('📚 TypeScript Advanced Patterns lesson completed!');
    console.log('📚 TypeScript-ის გაღრმავებული პატერნების გაკვეთილი დასრულდა!');
}); 