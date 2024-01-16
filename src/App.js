import ExpenseItem from './Components/ExpenseItem';
import logo from './logo.svg';
import './App.css';

function App() {
  const expenses = [
    {
      id: "e1",
      title:'Toilet Paper',
        amount:94.12,
      date: new Date(2021,2,28),
      LocationOfExpenditure: "New Delhi",
},
    {
      id: "e2",
      title:'NewTV',
        amount:799.49,
      date: new Date(2020,5,29),
      LocationOfExpenditure: "London",
},
    {
      id: "e3",
      title:'CarInsurance',
        amount:294.67,
      date: new Date(2022,8,13),
      LocationOfExpenditure: "Bangalore",
},
    {
      id: "e4",
      title:'NewDesk(Wooden)',
        amount:450,
      date: new Date(2022,12,26),
      LocationOfExpenditure: "Chennai",
}
  ];
  return (
    <div className="App">
      <h2> Let's get started ! </h2>
      {/* <ExpenseItem
        title = {expenses[0].title}
        amount ={expenses[0].amount}
        date ={expenses[0].date}
        LocationOfExpenditure ={expenses[0].LocationOfExpenditure}>
      </ExpenseItem>
      <ExpenseItem
        title = {expenses[1].title}
        amount ={expenses[1].amount}
        date ={expenses[1].date}
         LocationOfExpenditure ={expenses[0].LocationOfExpenditure}>
      </ExpenseItem>
      <ExpenseItem
        title = {expenses[2].title}
        amount ={expenses[2].amount}
        date ={expenses[2].date}
         LocationOfExpenditure ={expenses[0].LocationOfExpenditure}>
      </ExpenseItem>
      <ExpenseItem
        title = {expenses[3].title}
        amount ={expenses[3].amount}
        date ={expenses[3].date}
         LocationOfExpenditure ={expenses[0].LocationOfExpenditure}>
      </ExpenseItem> */}
      {expenses && expenses.map((expense)=>{return (
        <ExpenseItem title = {expense.title}
        amount ={expense.amount}
        date ={expense.date}
        LocationOfExpenditure ={expense.LocationOfExpenditure}>
        
      </ExpenseItem>
      )})}
    </div>
  );
}

export default App;
