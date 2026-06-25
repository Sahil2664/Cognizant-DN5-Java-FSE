# Verifying Interactions in Mockito

## Objective
To test a service that depends on an external API by using Mockito to create a "mock" of the external API and using `verify()` to ensure methods were called on the mock.

## Explanation

### What is Interaction Verification?
In unit testing, sometimes a method doesn't return a value (like a `void` method), or its primary purpose is to trigger an action in a dependency. To test this, you need to verify that your class successfully interacted with its dependency by calling the correct method. Mockito provides the `verify()` method precisely for this use case.

## Steps to Verify Interactions
1. **Create a mock object:** Just like with stubbing, you need a mock dependency.
2. **Call the method:** Execute the method on your class under test.
3. **Verify:** Use `verify(mockObject).methodName()` to check if the mocked object's method was called.

## How to Run
Navigate to this directory in your terminal and run:
```bash
mvn clean test
```
This will run the tests using Maven and JUnit 5, and the output will display whether the interaction verification was successful.
