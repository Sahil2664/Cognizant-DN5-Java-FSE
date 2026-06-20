/**
 * Service class for predicting financial values using recursion.
 */
public class FinancialForecasting {

    /**
     * Calculates the future value recursively based on a constant growth rate.
     * Formula used: FV = PV * (1 + growthRate)^years
     * 
     * @param presentValue The current value.
     * @param growthRate The expected annual growth rate (e.g., 0.05 for 5%).
     * @param years The number of years into the future.
     * @return The predicted future value.
     */
    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        // Base Case: If years is 0, the future value is just the present value
        if (years == 0) {
            return presentValue;
        }
        
        // Recursive Case: Calculate the value for (years - 1), then grow it by the rate for the current year
        return calculateFutureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }
}
