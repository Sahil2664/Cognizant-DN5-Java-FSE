-- Scenario 3: Fetch all loans due in the next 30 days and print a reminder message.

DECLARE
    -- Cursor to fetch loans due within the next 30 days
    CURSOR c_loans_due IS
        SELECT l.loan_id, c.customer_name, l.due_date 
        FROM Loans l
        JOIN Customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    -- Loop through loans that are due soon
    FOR loan_rec IN c_loans_due LOOP
        -- Print a reminder message for the customer
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || loan_rec.customer_name || 
                             ' has Loan ID ' || loan_rec.loan_id || 
                             ' due on ' || TO_CHAR(loan_rec.due_date, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/
