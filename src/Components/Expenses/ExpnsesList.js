import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    // let expensesContent = <p>No expenses found.</p>;

    if(props.items.length ===0){
        return <h2  className='expenses-list_fallback'>Found no expenses.</h2>;
    }

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
   


return (
<ul className="expenses-list">
{props.items && props.items.map((expense) => (
    <ExpenseItem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
))}
</ul>
);
};

export default ExpensesList;