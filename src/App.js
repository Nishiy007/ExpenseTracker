import React, { useState }  from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

import logo from './logo.svg';
import './App.css';

const DUMMY_EXPENSES = [
  {
    id: "e1",
      title:'Toilet Paper',
      amount:94.12,
      date: new Date(2021,2,28),
     
},
    {
      id: "e2",
      title:'NewTV',
      amount:799.49,
      date: new Date(2020,5,29),
      
},
    {
      id: "e3",
      title:'CarInsurance',
      amount:294.67,
      date: new Date(2022,8,13),
    },
    {
      id: "e4",
      title:'NewDesk(Wooden)',
      amount:450,
      date: new Date(2022,12,26),
      
},
  
];

const  App = () => {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });

    

  };
  return (
    <div>
      <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
