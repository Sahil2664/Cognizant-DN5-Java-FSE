/**
 * Represents a generic Document in the system.
 * All concrete document types must implement this interface.
 */
public interface Document {
    void open();
    void close();
}
