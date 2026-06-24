# Mocking and Stubbing in Mockito

## Objective
To test a service that depends on an external API by using Mockito to create a "mock" of the external API and "stub" its methods.

## Explanation

### What is Mocking?
In the real world, your code often depends on other classes, databases, or external APIs. When you are writing a **Unit Test**, you only want to test *your* code, not the external systems it depends on. 
**Mocking** is the process of creating a "fake" or "dummy" object that simulates the behavior of a real object. This fake object is called a "Mock".

### What is Stubbing?
Once you have a Mock, it doesn't know what to do when its methods are called. 
**Stubbing** is when you give the Mock specific instructions. You are telling it: *"When this specific method is called, return this exact predefined value."*

### Steps taken in our code:
1. **Create the Mock:** 
   `ExternalApi mockApi = Mockito.mock(ExternalApi.class);` 
   We created a fake `ExternalApi`.
2. **Stub the Method:** 
   `when(mockApi.getData()).thenReturn("Mock Data");`
   We told the fake API to always return `"Mock Data"` when `getData()` is called.
3. **Use the Mock:** 
   `MyService service = new MyService(mockApi);`
   We injected the fake API into our `MyService`. Now, `MyService` thinks it's talking to the real API, but it's actually talking to our Mock!

## How to Run the Tests
You can run this test via Maven using the terminal:
```bash
mvn test
```
Or you can run `MyServiceTest.java` directly from your IDE.
