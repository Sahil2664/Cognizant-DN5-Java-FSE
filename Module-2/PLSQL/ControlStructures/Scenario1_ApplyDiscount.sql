-- Scenario 1: Apply a 1% discount to loan interest rates for customers over 60 years old.

DECLARE
    -- Using a cursor to fetch customers over 60 who have loans
    CURSOR c_customers IS
        SELECT customer_id, age FROM Customers WHERE age > 60;
BEGIN
    -- Loop through each eligible customer
    FOR customer_rec IN c_customers LOOP
        -- Apply a 1% discount to their loan interest rates
        UPDATE Loans
        SET interest_rate = interest_rate - 1
        WHERE customer_id = customer_rec.customer_id;
    END LOOP;
    
    -- Save the changes
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Discount applied to eligible customers.');
END;
/
