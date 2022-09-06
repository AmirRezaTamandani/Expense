import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const mockExpenses = [
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
      date: new Date(2022, 5, 5),
    },

    {
      id: 4,
      title: "Serial",
      amount: 2.33,
      date: new Date(2022, 5, 5),
    },
  ];
  const addExpenceHandler = (expense) => {
    console.log("first", expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpenses={addExpenceHandler} />

      <Expenses items={mockExpenses} />
    </div>
  );
}

export default App;
