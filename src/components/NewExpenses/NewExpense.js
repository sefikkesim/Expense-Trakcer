import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"

const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false)
   const SaveExpenseDataHandler =(enteredExpenseData)=>{
       const expenseData = {
         ...enteredExpenseData,
         id : Math.random().toString()
       };
       props.onAddExpense(expenseData);
   }
   const clickHandler =()=>{
     setIsEditing(true);
   }
   const closeClickHandler =()=>{
     setIsEditing(false);
   }
    return (
      <div className="new-expense">
        {!isEditing && <button onClick={clickHandler}> Add New Expense</button>}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={SaveExpenseDataHandler}
            closeClickHandler={closeClickHandler}
          />
        )}
      </div>
    );
}

export default NewExpense
