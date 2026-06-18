/**
 * Test class to demonstrate recursive financial forecasting.
 */
public class ForecastingTest {
    public static void main(String[] args) {
        System.out.println("--- Financial Forecasting Tool ---");

        double presentValue = 1000.0; // $1000 initial investment
        double expectedGrowthRate = 0.05; // 5% annual growth
        int yearsToForecast = 10; // 10 years in the future

        double futureValue = FinancialForecasting.calculateFutureValue(presentValue, expectedGrowthRate, yearsToForecast);

        System.out.printf("Present Value: $%.2f%n", presentValue);
        System.out.printf("Growth Rate: %.2f%%%n", expectedGrowthRate * 100);
        System.out.printf("Forecasted Value after %d years: $%.2f%n", yearsToForecast, futureValue);
    }
}
