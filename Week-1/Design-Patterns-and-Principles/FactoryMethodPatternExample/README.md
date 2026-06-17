# Factory Method Pattern Example

## Objective
To develop a document management system that creates different types of documents (e.g., Word, PDF, Excel) without specifying the exact class of the document that will be created.

## Explanation
The Factory Method Pattern defines an interface for creating an object, but lets subclasses alter the type of objects that will be created. 
- `DocumentFactory` is the abstract creator.
- `WordDocumentFactory`, `PdfDocumentFactory`, etc., are concrete creators that decide which object to instantiate.
- This promotes loose coupling and adheres to the Open/Closed Principle (OCP), as we can introduce new document types without changing existing client code.

## Folder Structure
```
/Week-1
  /Design-Patterns-and-Principles
    /FactoryMethodPatternExample
      /src
        Document.java
        DocumentFactory.java
        ExcelDocument.java
        ExcelDocumentFactory.java
        FactoryTest.java
        PdfDocument.java
        PdfDocumentFactory.java
        WordDocument.java
        WordDocumentFactory.java
      README.md
```

## How to Run
1. Open terminal in the `FactoryMethodPatternExample` folder.
2. Compile the files: `javac src/*.java`
3. Run the test: `java -cp src FactoryTest`
