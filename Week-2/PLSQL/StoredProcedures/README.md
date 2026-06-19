# PL/SQL Stored Procedures

## Objective
To write reusable Stored Procedures in PL/SQL that handle complex business scenarios like processing interest, updating salaries, and transferring funds safely.

## Explanation
- **Stored Procedures:** Named PL/SQL blocks stored in the database. They can accept parameters, perform complex logic, and can be called repeatedly.
- **FOR UPDATE Clause:** Locks the specific row we are selecting so that no other transaction can modify it until we are done (crucial for financial transfers).
- **Transaction Control:** Using `COMMIT` to save changes permanently, and `ROLLBACK` to undo changes if an error occurs.

## Folder Structure
```
/Week-2
  /PLSQL
    /StoredProcedures
      Scenario1_ProcessMonthlyInterest.sql
      Scenario2_UpdateEmployeeBonus.sql
      Scenario3_TransferFunds.sql
    README.md
```
