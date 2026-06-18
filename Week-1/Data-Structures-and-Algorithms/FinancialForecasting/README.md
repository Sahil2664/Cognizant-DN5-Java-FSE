# Financial Forecasting Tool

## Objective
To develop a financial forecasting tool that predicts future values based on past data using recursive algorithms.

## Explanation
Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem. 
In this case, the future value after `N` years is calculated as the future value after `N-1` years multiplied by `(1 + growthRate)`.
- **Time Complexity:** The time complexity is O(N) where N is the number of years, because the recursive function calls itself N times.
- **Optimization:** To avoid excessive computation in complex scenarios (though simple in this formula), we could use "Memoization" (storing previously calculated results) to prevent redundant calculations, though it isn't strictly necessary for a straightforward exponential calculation like this.

## Folder Structure
```
/Week-1
  /Data-Structures-and-Algorithms
    /FinancialForecasting
      /src
        FinancialForecasting.java
        ForecastingTest.java
      README.md
```

## How to Run
1. Open terminal in the `FinancialForecasting` folder.
2. Compile the files: `javac src/*.java`
3. Run the test: `java -cp src ForecastingTest`
