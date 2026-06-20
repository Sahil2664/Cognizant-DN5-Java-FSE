# JUnit Setup Exercise

## Objective
To configure a Java Maven project for testing and set up the JUnit framework.

## Explanation
- **pom.xml:** This file manages our project dependencies. We added `junit-jupiter-api` and `junit-jupiter-engine` which brings the JUnit 5 framework into our project without manually downloading JAR files.
- **`@Test` Annotation:** This tells the JUnit runner that the method right beneath it is a test case.
- **Assertions:** `assertEquals(expected, actual)` verifies that our code behaves correctly. If the values don't match, the test fails.

## Folder Structure
```
/Week-3
  /JUnit-and-Mockito
    /Exercise1-Setup
      /src
        /main/java/com/cognizant/Calculator.java
        /test/java/com/cognizant/CalculatorTest.java
      pom.xml
      README.md
```

## How to Run (if you have Maven installed)
1. Open terminal in the `Exercise1-Setup` folder.
2. Run tests: `mvn test`
