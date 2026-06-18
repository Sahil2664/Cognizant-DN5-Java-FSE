import java.util.Arrays;

/**
 * Contains different search algorithms for finding products.
 */
public class SearchAlgorithms {

    /**
     * Performs a Linear Search on an array of products.
     * Time Complexity: O(N) where N is the number of elements.
     * 
     * @param products Array of products (doesn't need to be sorted).
     * @param targetId The product ID to search for.
     * @return The Product if found, or null if not found.
     */
    public static Product linearSearch(Product[] products, String targetId) {
        // Iterate through each product one by one
        for (Product product : products) {
            // Check if the current product matches the target ID
            if (product.getProductId().equals(targetId)) {
                return product; // Found the product
            }
        }
        return null; // Product not found after checking all elements
    }

    /**
     * Performs a Binary Search on an array of products.
     * Time Complexity: O(log N) where N is the number of elements.
     * 
     * @param products Array of products (MUST be sorted by ID).
     * @param targetId The product ID to search for.
     * @return The Product if found, or null if not found.
     */
    public static Product binarySearch(Product[] products, String targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2; // Find the middle index
            int comparisonResult = products[mid].getProductId().compareTo(targetId);

            if (comparisonResult == 0) {
                // The middle element is the target
                return products[mid];
            } else if (comparisonResult < 0) {
                // The target is strictly greater than the middle element
                left = mid + 1; // Search in the right half
            } else {
                // The target is strictly less than the middle element
                right = mid - 1; // Search in the left half
            }
        }
        return null; // Product not found in the array
    }
}
