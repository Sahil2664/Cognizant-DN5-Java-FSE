/**
 * Abstract factory class for creating Document objects.
 * Subclasses will implement the factory method to instantiate specific document types.
 */
public abstract class DocumentFactory {
    
    /**
     * The Factory Method.
     * 
     * @return A newly created Document object.
     */
    public abstract Document createDocument();
}
