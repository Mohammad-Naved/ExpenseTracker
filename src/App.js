import { React, useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import Form from "./component/Form";
import List from "./component/List";
import { v4 as uuidv4 } from "uuid";

const initialExpense = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "groceries", amount: 2600 },
  { id: uuidv4(), charge: "credit bill", amount: 4500 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpense);
  return (
    <>
      <Alert />
      <h1>Expense Tracker</h1>
      <main className="App">
        <Form />
        <List expenses={expenses} />
      </main>
      <h1>
        Total Spending :{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
