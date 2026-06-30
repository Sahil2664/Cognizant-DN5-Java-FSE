package com.cognizant.mavenproject;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class AppTest {

    @Test
    public void testGetGreeting() {
        App app = new App();
        assertEquals("Hello from Maven!", app.getGreeting());
    }
}
