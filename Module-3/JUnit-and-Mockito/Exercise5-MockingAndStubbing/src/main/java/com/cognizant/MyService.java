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
     * Fetches data from the external API.
     * @return the data string from the API
     */
    public String fetchData() {
        return api.getData();
    }
}
