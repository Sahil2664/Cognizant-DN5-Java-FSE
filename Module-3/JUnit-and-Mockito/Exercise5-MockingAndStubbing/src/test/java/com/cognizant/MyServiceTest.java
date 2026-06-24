package com.cognizant;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

/**
 * Test class demonstrating Mocking and Stubbing with Mockito.
 */
public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Step 1: Create a mock object for the external API.
        // We use Mockito.mock() to create a fake version of ExternalApi
        // so we don't have to connect to a real external system during the test.
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Stub the methods to return predefined values.
        // We tell Mockito: "When the getData() method is called on this mock, return 'Mock Data'."
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Write a test case that uses the mock object.
        // We pass the mock object into our service class (Dependency Injection)
        MyService service = new MyService(mockApi);
        
        // Act: We call the fetchData method, which internally calls mockApi.getData()
        String result = service.fetchData();

        // Assert: We verify that the result matches our stubbed predefined value.
        assertEquals("Mock Data", result, "The service should return the stubbed data from the mock.");
    }
}
