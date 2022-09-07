import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const changeHandler = (event) => {
    props.onChangeHandler(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter the year you want</label>
        <select onChange={changeHandler} value={props.selectedYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
 