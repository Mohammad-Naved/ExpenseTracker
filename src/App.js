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
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "Item added" });
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Charge can't be empty and amount must be greator than 0",
      });
    }
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Expense Tracker</h1>
      <main className="App">
        <Form
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
        />
        <List expenses={expenses} />
      </main>
      <h1>
        Total Spending :{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
