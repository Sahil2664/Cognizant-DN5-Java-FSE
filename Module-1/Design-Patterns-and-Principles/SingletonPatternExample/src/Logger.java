public class Logger {
    // 1. Private static instance of the same class
    private static Logger instance;

    // 2. Private constructor prevents creating objects from outside this class
    private Logger() {
        System.out.println("Logger is initialized.");
    }

    // 3. Public static method to get the single instance
    public static Logger getInstance() {
        // If the instance doesn't exist, create it
        if (instance == null) {
            instance = new Logger();
        }
        // Return the existing instance
        return instance;
    }

    // A simple logging method
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}
