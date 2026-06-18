# E-commerce Platform Search Function

## Objective
To implement and compare Linear Search and Binary Search algorithms for an E-commerce platform to efficiently find products.

## Explanation
- **Linear Search**: Iterates through each product one by one. It does not require the array to be sorted. Time complexity is O(N).
- **Binary Search**: Divides the search interval in half. It is much faster but **requires** the array to be sorted beforehand. Time complexity is O(log N).

In a real e-commerce platform with millions of products, Binary Search (or similar log-time tree/hash-based searches) is strictly necessary for performance.

## Folder Structure
```
/Week-1
  /Data-Structures-and-Algorithms
    /EcommerceSearch
      /src
        Product.java
        SearchAlgorithms.java
        SearchTest.java
      README.md
```

## How to Run
1. Open terminal in the `EcommerceSearch` folder.
2. Compile the files: `javac src/*.java`
3. Run the test: `java -cp src SearchTest`
