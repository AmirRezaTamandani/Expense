import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMY_DATA = [
  {
    id: 1,
    title: "pirated games",
    amount: "0 :)",
    date: new Date(2022, 5, 3),
  },
  {
    id: 2,
    title: "Helping the poor",
    amount: 79,
    date: new Date(2022, 5, 4),
  },

  {
    id: 3,
    title: "Milk",
    amount: 3.99,
    date: new Date(2021, 5, 5),
  },

  {
    id: 4,
    title: "Serial",
    amount: 2.33,
    date: new Date(2019, 5, 5),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenceHandler = (expense) => {
    console.log("first", expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpenses={addExpenceHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
