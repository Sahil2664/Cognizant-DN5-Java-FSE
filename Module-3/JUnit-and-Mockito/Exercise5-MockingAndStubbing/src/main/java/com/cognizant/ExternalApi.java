package com.cognizant;

/**
 * An interface representing an external API that we will mock.
 */
public interface ExternalApi {
    /**
     * Fetches some data from an external source.
     * @return the data string
     */
    String getData();
}
