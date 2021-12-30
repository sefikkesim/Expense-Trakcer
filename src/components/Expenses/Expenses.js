import React, { useState } from "react";
import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const expenseContetnt = <p> There is no expense</p>;

  const [filteredYear, setFilteredYear] = useState("2020");
  const changeFilterHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
    console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={changeFilterHandler}
          filteredYear={filteredYear}
        />

        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expense;
