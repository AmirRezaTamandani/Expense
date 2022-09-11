import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "pirated games",
    amount: "0 :)",
    date: new Date(2022, 5, 3),
  },

  {
    id: "e6",
    title: "Helping the poor",
    amount: 79,
    date: new Date(2022, 5, 4),
  },

  {
    id: "e7",
    title: "Milk",
    amount: 3.99,
    date: new Date(2019, 5, 1),
  },

  {
    id: "e8",
    title: "Serial",
    amount: 2.33,
    date: new Date(2019, 5, 3),
  },
  {
    id: "e9",
    title: "pirated games",
    amount: "0 :)",
    date: new Date(2022, 6, 3),
  },
  {
    id: "e10",
    title: "Milk",
    amount: 3.99,
    date: new Date(2019, 1, 1),
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
