/**
 * Represents a complex object (Computer) that requires a builder for its construction.
 */
public class Computer {
    // Required parameters
    private String hdd;
    private String ram;

    // Optional parameters
    private boolean isGraphicsCardEnabled;
    private boolean isBluetoothEnabled;

    // Private constructor so objects can only be created via the Builder
    private Computer(ComputerBuilder builder) {
        this.hdd = builder.hdd;
        this.ram = builder.ram;
        this.isGraphicsCardEnabled = builder.isGraphicsCardEnabled;
        this.isBluetoothEnabled = builder.isBluetoothEnabled;
    }

    public String getHdd() { return hdd; }
    public String getRam() { return ram; }
    public boolean isGraphicsCardEnabled() { return isGraphicsCardEnabled; }
    public boolean isBluetoothEnabled() { return isBluetoothEnabled; }

    @Override
    public String toString() {
        return "Computer [RAM=" + ram + ", HDD=" + hdd + 
               ", GraphicsCard=" + isGraphicsCardEnabled + 
               ", Bluetooth=" + isBluetoothEnabled + "]";
    }

    /**
     * Static nested Builder class.
     */
    public static class ComputerBuilder {
        // Required parameters
        private String hdd;
        private String ram;

        // Optional parameters (initialized to defaults)
        private boolean isGraphicsCardEnabled = false;
        private boolean isBluetoothEnabled = false;

        // Constructor for required parameters
        public ComputerBuilder(String hdd, String ram) {
            this.hdd = hdd;
            this.ram = ram;
        }

        // Setter methods for optional parameters (Returning the builder itself)
        public ComputerBuilder setGraphicsCardEnabled(boolean isGraphicsCardEnabled) {
            this.isGraphicsCardEnabled = isGraphicsCardEnabled;
            return this;
        }

        public ComputerBuilder setBluetoothEnabled(boolean isBluetoothEnabled) {
            this.isBluetoothEnabled = isBluetoothEnabled;
            return this;
        }

        // Build method to create the final Computer object
        public Computer build() {
            return new Computer(this);
        }
    }
}
