-- Scenario 2: Promote customers to VIP status if their balance > $10,000.

DECLARE
    -- Cursor to fetch customers with high balances
    CURSOR c_high_balance IS
        SELECT customer_id, balance FROM Customers WHERE balance > 10000;
BEGIN
    -- Loop through high-balance customers
    FOR customer_rec IN c_high_balance LOOP
        -- Set their status to VIP (assuming IsVIP is a boolean or char column like 'Y')
        UPDATE Customers
        SET IsVIP = 'Y'
        WHERE customer_id = customer_rec.customer_id;
    END LOOP;
    
    -- Save the changes
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Customers promoted to VIP status successfully.');
END;
/
