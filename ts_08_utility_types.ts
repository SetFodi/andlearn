/*
TypeScript Lesson 8: Utility Types
TypeScript გაკვეთილი 8: საყოველთაო ტიპები

This lesson covers TypeScript's built-in utility types and conditional types
ეს გაკვეთილი მოიცავს TypeScript-ის ჩაშენებულ საყოველთაო ტიპებს და პირობით ტიპებს
*/

// === BASE INTERFACE FOR EXAMPLES | მაგალითებისთვის ძირითადი ინტერფეისი ===

interface UserProfile {
    id: number;
    username: string;
    email: string;
    age: number;
    isActive: boolean;
    preferences: {
        theme: string;
        language: string;
        notifications: boolean;
    };
    lastLogin?: Date;
}

// === PARTIAL<T> | ნაწილობრივი ===

// Makes all properties optional
// ყველა თვისებას აქცევს ოფციონალურად
type PartialUser = Partial<UserProfile>;

function updateUserProfile(userId: number, updates: PartialUser): void {
    // Can update any subset of user properties
    // შეუძლია ნებისმიერი ქვენაკრების განახლება მომხმარებლის თვისებებისა
    console.log(`Updating user ${userId} with:`, updates);
}

// Usage example
// გამოყენების მაგალითი
updateUserProfile(1, { username: "newUsername" });
updateUserProfile(2, { age: 25, isActive: false });

// === REQUIRED<T> | საჭირო ===

// Makes all properties required (opposite of Partial)
// ყველა თვისებას აქცევს საჭიროდ (Partial-ის საპირისპირო)
type RequiredUser = Required<UserProfile>;

// Now lastLogin is required, not optional
// ახლა lastLogin საჭიროა, არა ოფციონალური
function createCompleteUser(user: RequiredUser): void {
    console.log("Creating complete user:", user);
}

// === READONLY<T> | მხოლოდ წაკითხვადი ===

// Makes all properties readonly
// ყველა თვისებას აქცევს მხოლოდ წასაკითხავად
type ReadonlyUser = Readonly<UserProfile>;

function displayUser(user: ReadonlyUser): void {
    console.log(user.username);
    // user.username = "new"; // Error: Cannot assign to 'username' because it is a read-only property
}

// === PICK<T, K> | არჩევა ===

// Pick specific properties from a type
// კონკრეტული თვისებების არჩევა ტიპიდან
type UserBasicInfo = Pick<UserProfile, "id" | "username" | "email">;

function displayBasicInfo(user: UserBasicInfo): string {
    return `${user.username} (${user.email})`;
}

// Using Pick for form data
// Pick-ის გამოყენება ფორმის მონაცემებისთვის
type UserRegistration = Pick<UserProfile, "username" | "email" | "age">;

function registerUser(userData: UserRegistration): void {
    console.log("Registering user:", userData);
}

// === OMIT<T, K> | გამორიცხვა ===

// Omit specific properties from a type
// კონკრეტული თვისებების გამორიცხვა ტიპიდან
type UserWithoutId = Omit<UserProfile, "id">;

function createUser(userData: UserWithoutId): UserProfile {
    return {
        ...userData,
        id: Math.floor(Math.random() * 1000)
    };
}

// Omit multiple properties
// მრავალი თვისების გამორიცხვა
type PublicUserInfo = Omit<UserProfile, "id" | "email" | "lastLogin">;

function getPublicProfile(user: UserProfile): PublicUserInfo {
    return {
        username: user.username,
        age: user.age,
        isActive: user.isActive,
        preferences: user.preferences
    };
}

// === RECORD<K, T> | ჩანაწერი ===

// Create an object type with specific keys and value types
// ობიექტის ტიპის შექმნა კონკრეტული გასაღებებითა და მნიშვნელობების ტიპებით
type UserRole = "admin" | "user" | "moderator";
type RolePermissions = Record<UserRole, string[]>;

const permissions: RolePermissions = {
    admin: ["read", "write", "delete", "manage"],
    user: ["read"],
    moderator: ["read", "write", "moderate"]
};

// Using Record with number keys
// Record-ის გამოყენება რიცხვითი გასაღებებით
type UserCache = Record<number, UserProfile>;

const userCache: UserCache = {
    1: { id: 1, username: "user1", email: "user1@email.com", age: 25, isActive: true, preferences: { theme: "dark", language: "en", notifications: true } },
    2: { id: 2, username: "user2", email: "user2@email.com", age: 30, isActive: false, preferences: { theme: "light", language: "ka", notifications: false } }
};

// === EXCLUDE<T, U> | გამორიცხვა ===

// Exclude types from a union
// ტიპების გამორიცხვა გაერთიანებიდან
type AllColors = "red" | "green" | "blue" | "yellow";
type PrimaryColors = Exclude<AllColors, "yellow">; // "red" | "green" | "blue"

function setPrimaryColor(color: PrimaryColors): void {
    console.log(`Setting primary color: ${color}`);
}

// === EXTRACT<T, U> | ამოღება ===

// Extract types from a union
// ტიპების ამოღება გაერთიანებიდან
type StringOrNumber = string | number | boolean;
type OnlyStringOrNumber = Extract<StringOrNumber, string | number>; // string | number

function processValue(value: OnlyStringOrNumber): void {
    console.log("Processing:", value);
}

// === NONNULLABLE<T> | არა-ნულოვანი ===

// Remove null and undefined from a type
// null და undefined-ის წაშლა ტიპიდან
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>; // string

function processString(str: DefinitelyString): number {
    return str.length; // Safe to use .length
}

// === RETURNTYPE<T> | დაბრუნების ტიპი ===

// Get the return type of a function
// ფუნქციის დაბრუნების ტიპის მიღება
function fetchUser(): Promise<UserProfile> {
    return Promise.resolve({
        id: 1,
        username: "testuser",
        email: "test@email.com",
        age: 25,
        isActive: true,
        preferences: { theme: "dark", language: "en", notifications: true }
    });
}

type FetchUserReturn = ReturnType<typeof fetchUser>; // Promise<UserProfile>

async function handleUserFetch(): Promise<void> {
    const userPromise: FetchUserReturn = fetchUser();
    const user = await userPromise;
    console.log(user);
}

// === PARAMETERS<T> | პარამეტრები ===

// Get the parameter types of a function
// ფუნქციის პარამეტრების ტიპების მიღება
function updateUser(id: number, updates: Partial<UserProfile>, notify: boolean = true): void {
    console.log(`Updating user ${id}`, updates, notify);
}

type UpdateUserParams = Parameters<typeof updateUser>; // [number, Partial<UserProfile>, boolean?]

function logUserUpdate(...args: UpdateUserParams): void {
    console.log("User update called with:", args);
    updateUser(...args);
}

// === CONSTRUCTORPARAMETERS<T> | კონსტრუქტორის პარამეტრები ===

// Get the parameter types of a constructor
// კონსტრუქტორის პარამეტრების ტიპების მიღება
class DatabaseConnection {
    constructor(
        public host: string,
        public port: number,
        public database: string,
        public ssl: boolean = false
    ) {}
}

type DbConnectionParams = ConstructorParameters<typeof DatabaseConnection>;
// [string, number, string, boolean?]

function createConnection(...params: DbConnectionParams): DatabaseConnection {
    return new DatabaseConnection(...params);
}

// === INSTANCETYPE<T> | ინსტანსის ტიპი ===

// Get the instance type of a constructor
// კონსტრუქტორის ინსტანსის ტიპის მიღება
type DbConnectionInstance = InstanceType<typeof DatabaseConnection>;

function handleConnection(connection: DbConnectionInstance): void {
    console.log(`Connected to ${connection.host}:${connection.port}`);
}

// === CONDITIONAL TYPES | პირობითი ტიპები ===

// Basic conditional type
// ძირითადი პირობითი ტიპი
type IsString<T> = T extends string ? true : false;

type TestString = IsString<string>; // true
type TestNumber = IsString<number>; // false

// More complex conditional type
// უფრო რთული პირობითი ტიპი
type ApiResponse<T> = T extends string 
    ? { message: T } 
    : T extends number 
    ? { count: T } 
    : { data: T };

type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { count: number }
type ObjectResponse = ApiResponse<UserProfile>; // { data: UserProfile }

// === MAPPED TYPES | მოძებნილი ტიპები ===

// Custom mapped type to make properties optional
// მორგებული მოძებნილი ტიპი თვისებების ოფციონალურად გასაქცევად
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type UserWithOptionalEmail = Optional<UserProfile, "email" | "lastLogin">;

// Making specific fields readonly
// კონკრეტული ველების მხოლოდ წასაკითხავად გადაქცევა
type ReadonlyFields<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

type UserWithReadonlyId = ReadonlyFields<UserProfile, "id">;

// === TEMPLATE LITERAL TYPES | შაბლონური ლიტერალური ტიპები ===

// Template literal types for creating dynamic string types
// შაბლონური ლიტერალური ტიპები დინამიური სტრინგ ტიპების შესაქმნელად
type EventName = "click" | "hover" | "focus";
type EventHandler<T extends EventName> = `on${Capitalize<T>}`;

type ClickHandler = EventHandler<"click">; // "onClick"
type HoverHandler = EventHandler<"hover">; // "onHover"

// Creating API endpoint types
// API endpoint ტიპების შექმნა
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = "/users" | "/posts" | "/comments";
type APIRoute = `${HTTPMethod} ${Endpoint}`;

const routes: APIRoute[] = [
    "GET /users",
    "POST /users", 
    "PUT /posts",
    "DELETE /comments"
];

// === ADVANCED UTILITY COMBINATIONS | მოწინავე საყოველთაო კომბინაციები ===

// Combining multiple utility types
// მრავალი საყოველთაო ტიპის კომბინირება
type CreateUserRequest = Partial<Pick<UserProfile, "username" | "email" | "age">> & 
                        Required<Pick<UserProfile, "username" | "email">>;

function handleCreateUser(request: CreateUserRequest): void {
    // username and email are required, age is optional
    // username და email საჭიროა, age ოფციონალურია
    console.log("Creating user:", request);
}

// Deep readonly type
// ღრმა მხოლოდ წასაკითხავი ტიპი
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type DeepReadonlyUser = DeepReadonly<UserProfile>;

/*
🎯 PRACTICE TASKS | პრაქტიკული დავალებები:

1. Create a utility type that makes specific fields required while keeping others optional
   შექმენით საყოველთაო ტიპი, რომელიც კონკრეტულ ველებს აქცევს საჭიროდ, სხვებს კი ტოვებს ოფციონალურად

2. Build a type that extracts all string properties from an interface
   ააგეთ ტიპი, რომელიც ამოიღებს ყველა სტრინგ თვისებას ინტერფეისიდან

3. Implement a conditional type that determines if a type is an array
   განახორციელეთ პირობითი ტიპი, რომელიც განსაზღვრავს არის თუ არა ტიპი მასივი

4. Create a mapped type that prefixes all property names with a given string
   შექმენით მოძებნილი ტიპი, რომელიც ყველა თვისების სახელს უწყვეტს მოცემულ სტრინგს

5. Design a utility type for API responses that wraps data with metadata
   დააპროექტეთ საყოველთაო ტიპი API პასუხებისთვის, რომელიც მონაცემებს ახვევს მეტამონაცემებით
*/ 