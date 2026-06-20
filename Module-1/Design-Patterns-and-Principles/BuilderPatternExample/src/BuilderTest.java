/**
 * Main class to test the Builder Pattern.
 */
public class BuilderTest {
    public static void main(String[] args) {
        System.out.println("--- Testing Builder Pattern ---");

        // Building a basic computer with just RAM and HDD
        Computer basicComputer = new Computer.ComputerBuilder("500 GB", "8 GB").build();
        System.out.println("Basic Computer: " + basicComputer);

        // Building a high-end gaming computer with all optional features enabled
        Computer gamingComputer = new Computer.ComputerBuilder("2 TB", "32 GB")
                .setGraphicsCardEnabled(true)
                .setBluetoothEnabled(true)
                .build();
        System.out.println("Gaming Computer: " + gamingComputer);
    }
}
