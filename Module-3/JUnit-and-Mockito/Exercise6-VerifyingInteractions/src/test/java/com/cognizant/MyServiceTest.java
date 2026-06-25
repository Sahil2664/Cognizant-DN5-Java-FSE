package com.cognizant;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

/**
 * Test class demonstrating verifying interactions with Mockito.
 */
public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // 1. Create a mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        
        // Inject the mock into the service
        MyService service = new MyService(mockApi);
        
        // 2. Call the method that should trigger the interaction
        service.fetchData();
        
        // 3. Verify the interaction (ensure getData() was called exactly once on the mock)
        verify(mockApi, times(1)).getData();
    }
}
