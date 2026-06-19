-- Scenario 2: Update employee bonus based on department and bonus percentage.

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department_id IN NUMBER,
    p_bonus_percentage IN NUMBER
) IS
BEGIN
    -- Update the salary of employees in the given department
    UPDATE Employees
    SET salary = salary + (salary * (p_bonus_percentage / 100))
    WHERE department_id = p_department_id;
    
    -- Save the changes
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Employee bonuses updated successfully for department ' || p_department_id);
END UpdateEmployeeBonus;
/
