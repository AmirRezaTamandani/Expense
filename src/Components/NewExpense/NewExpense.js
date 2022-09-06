import React from "react";
import ExpenceForm from "./ExpenceForm";
import "./NewExpense.css";
function NewExpense(props) {
  const saveExpenseDataHandler = (enterdData) => {
    const expenseData = {
      ...enterdData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenceForm onSaveExpensesData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
