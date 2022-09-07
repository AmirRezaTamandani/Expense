import React, { useState } from "react";
import Card from "../UIElements/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filterHandler = (selectedYear) => {
    // console.log("expences has :" , selectedYear)
    setSelectedYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeHandler={filterHandler}
          selectedYear={selectedYear}
        />
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
