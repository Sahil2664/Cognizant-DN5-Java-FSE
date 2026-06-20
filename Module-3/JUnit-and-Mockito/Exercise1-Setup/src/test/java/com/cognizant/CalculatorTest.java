package com.cognizant;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Test class for Calculator using JUnit 5.
 */
public class CalculatorTest {

    @Test
    public void testAdd() {
        // Arrange
        Calculator calculator = new Calculator();
        
        // Act
        int result = calculator.add(10, 20);
        
        // Assert
        assertEquals(30, result, "10 + 20 should equal 30");
        System.out.println("testAdd passed successfully!");
    }
}
