-- Scenario 3: Transfer funds between accounts checking for sufficient balance.

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account_id IN NUMBER,
    p_to_account_id IN NUMBER,
    p_amount IN NUMBER
) IS
    v_current_balance NUMBER;
BEGIN
    -- Check the balance of the source account
    -- FOR UPDATE locks the row so no one else can modify it while we check
    SELECT balance INTO v_current_balance
    FROM Accounts
    WHERE account_id = p_from_account_id
    FOR UPDATE; 
    
    -- Verify sufficient funds
    IF v_current_balance >= p_amount THEN
        -- Deduct from source account
        UPDATE Accounts
        SET balance = balance - p_amount
        WHERE account_id = p_from_account_id;
        
        -- Add to destination account
        UPDATE Accounts
        SET balance = balance + p_amount
        WHERE account_id = p_to_account_id;
        
        -- Save the changes
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer of ' || p_amount || ' completed successfully.');
    ELSE
        -- Not enough money
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in source account.');
        ROLLBACK;
    END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: One or both account IDs do not exist.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('An unexpected error occurred: ' || SQLERRM);
        ROLLBACK;
END TransferFunds;
/
