# Singleton Pattern Example

## Objective
To develop a logging utility where **only one instance** of the logger exists throughout the entire application.

## Explanation
The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it. We achieved this by:
1. Creating a `private constructor` so no other class can instantiate it.
2. Creating a `private static` variable to hold the single instance.
3. Creating a `public static getInstance()` method to return the instance (creating it if it doesn't exist yet).

## Folder Structure
```
/Week-1
  /Design-Patterns-and-Principles
    /SingletonPatternExample
      /src
        Logger.java
        SingletonTest.java
      README.md
```

## How to Run
1. Open terminal in the `SingletonPatternExample` folder.
2. Compile the files: `javac src/*.java`
3. Run the test: `java -cp src SingletonTest`
