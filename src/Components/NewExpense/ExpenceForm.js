import React, { useState } from "react";
import "./ExpenceForm.css";

function ExpenceForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpensesData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={(event) => {
              setEnteredTitle(event.target.value);
            }}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => {
              setEnteredAmount(event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="Date"
            min="2022-8-31"
            max="2024-8-31"
            onChange={(event) => {
              setEnteredDate(event.target.value);
            }}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenceForm;
