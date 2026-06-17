public class SingletonTest {
    public static void main(String[] args) {
        System.out.println("--- Testing Singleton Pattern ---");

        // Try to get the logger instance for the first time
        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log message.");

        // Try to get the logger instance again
        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log message.");

        // Check if both references point to the exact same object in memory
        if (logger1 == logger2) {
            System.out.println("Success: logger1 and logger2 are the same instance.");
        } else {
            System.out.println("Error: Different instances were created.");
        }
    }
}
