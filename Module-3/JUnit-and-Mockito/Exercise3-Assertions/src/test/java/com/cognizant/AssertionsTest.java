package com.cognizant;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Test class to demonstrate different types of JUnit 5 Assertions.
 * Assertions are used to validate that the expected results match the actual results.
 */
public class AssertionsTest {

    @Test
    public void testAssertions() {
        // 1. Assert Equals: Checks if two values are exactly the same
        assertEquals(5, 2 + 3, "2 + 3 should equal 5");

        // 2. Assert True: Checks if a condition is true
        assertTrue(5 > 3, "5 is greater than 3, so this should be true");

        // 3. Assert False: Checks if a condition is false
        assertFalse(5 < 3, "5 is not less than 3, so this should be false");

        // 4. Assert Null: Checks if an object is null
        String nullString = null;
        assertNull(nullString, "The string should be null");

        // 5. Assert Not Null: Checks if an object is NOT null
        String validString = "Cognizant";
        assertNotNull(validString, "The string should not be null");
    }
}
