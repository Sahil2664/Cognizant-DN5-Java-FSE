# Builder Pattern Example

## Objective
To develop a system to create complex objects (such as a Computer with multiple optional parts) step-by-step using the Builder Pattern.

## Explanation
The Builder Pattern is a creational design pattern that lets you construct complex objects step by step. It allows you to produce different types and representations of an object using the same construction code. 
Instead of having a giant constructor with 10 parameters (many of which might be optional/null), we use a `Builder` class. The builder takes the mandatory parameters in its constructor, and uses flexible setter methods for optional parameters. Finally, calling `.build()` constructs the actual object.

## Folder Structure
```
/Week-1
  /Design-Patterns-and-Principles
    /BuilderPatternExample
      /src
        Computer.java
        BuilderTest.java
      README.md
```

## How to Run
1. Open terminal in the `BuilderPatternExample` folder.
2. Compile the files: `javac src/*.java`
3. Run the test: `java -cp src BuilderTest`
