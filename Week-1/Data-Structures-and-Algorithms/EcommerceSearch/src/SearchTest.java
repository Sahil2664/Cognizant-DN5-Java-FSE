import java.util.Arrays;

/**
 * Test class to demonstrate Linear and Binary search on Products.
 */
public class SearchTest {
    public static void main(String[] args) {
        System.out.println("--- E-commerce Search Platform ---");

        // 1. Create an array of products (Unsorted)
        Product[] products = {
            new Product("P103", "Wireless Mouse", "Electronics"),
            new Product("P101", "Gaming Keyboard", "Electronics"),
            new Product("P105", "Desk Lamp", "Furniture"),
            new Product("P102", "Office Chair", "Furniture"),
            new Product("P104", "USB-C Cable", "Accessories")
        };

        String targetId = "P105";

        // 2. Demonstrate Linear Search
        System.out.println("\n--- Linear Search ---");
        Product foundLinear = SearchAlgorithms.linearSearch(products, targetId);
        if (foundLinear != null) {
            System.out.println("Linear Search Found: " + foundLinear);
        } else {
            System.out.println("Linear Search: Product not found.");
        }

        // 3. Demonstrate Binary Search
        System.out.println("\n--- Binary Search ---");
        // NOTE: Binary search REQUIRES a sorted array!
        Arrays.sort(products); // Sorts the array based on compareTo method (by productId)
        
        System.out.println("Array sorted by Product ID.");
        
        Product foundBinary = SearchAlgorithms.binarySearch(products, targetId);
        if (foundBinary != null) {
            System.out.println("Binary Search Found: " + foundBinary);
        } else {
            System.out.println("Binary Search: Product not found.");
        }
    }
}
