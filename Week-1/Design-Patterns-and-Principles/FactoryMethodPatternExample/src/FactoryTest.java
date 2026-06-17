/**
 * Main class to test the Factory Method Pattern implementation.
 */
public class FactoryTest {
    public static void main(String[] args) {
        System.out.println("--- Testing Factory Method Pattern ---");

        // Use WordDocumentFactory to create a Word document
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document doc1 = wordFactory.createDocument();
        doc1.open();
        doc1.close();

        // Use PdfDocumentFactory to create a PDF document
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document doc2 = pdfFactory.createDocument();
        doc2.open();
        doc2.close();

        // Use ExcelDocumentFactory to create an Excel document
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document doc3 = excelFactory.createDocument();
        doc3.open();
        doc3.close();
    }
}
