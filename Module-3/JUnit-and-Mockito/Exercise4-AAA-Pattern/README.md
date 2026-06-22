# Arrange-Act-Assert (AAA) Pattern & Test Fixtures

## Objective
To write well-organized unit tests using the industry standard AAA pattern, and to manage test data using setup and teardown methods (Test Fixtures).

## Explanation

### 1. The AAA Pattern
Professional developers structure their tests into three distinct sections to make them easy to read:
- **Arrange:** Set up the initial state (e.g., create objects, define variables).
- **Act:** Execute the specific method or action you want to test.
- **Assert:** Verify that the action produced the expected result.

### 2. Test Fixtures (@BeforeEach and @AfterEach)
When testing, we don't want tests to interfere with each other. If Test A adds an item to a cart, Test B shouldn't randomly fail because the cart already has an item in it!
- **`@BeforeEach` (Setup):** Runs *before* every single test. We use it to create a fresh, empty object (like a new `ShoppingCart`).
- **`@AfterEach` (Teardown):** Runs *after* every single test. We use it to clean up memory or close connections.

*Note: In JUnit 4, these were called `@Before` and `@After`. In JUnit 5, they are called `@BeforeEach` and `@AfterEach` to be more explicit.*
