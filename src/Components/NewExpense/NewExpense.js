import React, { useState } from "react";
import ExpenceForm from "./ExpenceForm";
import "./NewExpense.css";
function NewExpense(props) {
  const saveExpenseDataHandler = (enterdData) => {
    const expenseData = {
      ...enterdData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expenseData);
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  const editingHandler = () => {
    setIsEditing(true);
  };
  const stopEdititngHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}> Add New Expense</button>}
      {isEditing && (
        <ExpenceForm
          onSaveExpensesData={saveExpenseDataHandler}
          onCancel={stopEdititngHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
