import React, { useState } from "react";
import Card from "../UIElements/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  let expensesContent = <p1>there is no saved expense :/</p1>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeHandler={filterHandler}
          selectedYear={selectedYear}
        />

        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
