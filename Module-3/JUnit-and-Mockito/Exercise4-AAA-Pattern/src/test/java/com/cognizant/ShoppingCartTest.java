package com.cognizant;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Test class demonstrating the Arrange-Act-Assert (AAA) pattern 
 * and Test Fixtures (Setup and Teardown methods).
 */
public class ShoppingCartTest {

    // The object we are going to test (also called the "system under test" or SUT)
    private ShoppingCart cart;

    /**
     * Setup method (Test Fixture).
     * The @BeforeEach annotation (JUnit 5's version of @Before) tells JUnit to run this 
     * method BEFORE EVERY SINGLE TEST. This ensures each test starts with a fresh, empty cart.
     */
    @BeforeEach
    public void setUp() {
        System.out.println("Setting up a fresh Shopping Cart before the test...");
        cart = new ShoppingCart();
    }

    /**
     * Teardown method (Test Fixture).
     * The @AfterEach annotation (JUnit 5's version of @After) tells JUnit to run this 
     * method AFTER EVERY SINGLE TEST. This is used to clean up resources.
     */
    @AfterEach
    public void tearDown() {
        System.out.println("Cleaning up after the test...");
        cart.clearCart();
        cart = null;
    }

    @Test
    public void testAddItem() {
        // 1. ARRANGE: Set up the specific conditions for this test
        String item = "Laptop";

        // 2. ACT: Perform the action you want to test
        cart.addItem(item);

        // 3. ASSERT: Verify the result is exactly what you expected
        assertEquals(1, cart.getItemCount(), "Cart should have exactly 1 item after adding");
    }

    @Test
    public void testRemoveItem() {
        // 1. ARRANGE: We need an item in the cart before we can test removing it
        String item = "Headphones";
        cart.addItem(item);

        // 2. ACT: Perform the removal action
        boolean wasRemoved = cart.removeItem(item);

        // 3. ASSERT: Verify it returned true and the cart is now empty
        assertTrue(wasRemoved, "removeItem() should return true when an item is successfully removed");
        assertEquals(0, cart.getItemCount(), "Cart should be empty after removing the only item");
    }
}
