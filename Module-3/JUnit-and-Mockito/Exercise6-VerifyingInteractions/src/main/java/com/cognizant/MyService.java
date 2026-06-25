package com.cognizant;

/**
 * A service class that depends on the ExternalApi.
 */
public class MyService {
    private ExternalApi api;

    // Constructor injection for the dependency
    public MyService(ExternalApi api) {
        this.api = api;
    }

    /**
     * Method that fetches data from the API.
     * We want to verify that this method actually calls the API.
     */
    public void fetchData() {
        api.getData();
    }
}
