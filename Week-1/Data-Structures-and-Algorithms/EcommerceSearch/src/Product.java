/**
 * Represents a product in the E-commerce platform.
 */
public class Product implements Comparable<Product> {
    private String productId;
    private String productName;
    private String category;

    public Product(String productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String getProductId() { return productId; }
    public String getProductName() { return productName; }
    public String getCategory() { return category; }

    @Override
    public String toString() {
        return "Product [ID=" + productId + ", Name=" + productName + ", Category=" + category + "]";
    }

    /**
     * Compares products based on their productId.
     * This is required for Binary Search which works on sorted arrays.
     */
    @Override
    public int compareTo(Product other) {
        return this.productId.compareTo(other.productId);
    }
}
