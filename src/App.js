
import Expenses from './Components/Expenses/Expenses';

import logo from './logo.svg';
import './App.css';

const  App = () => {
  const expenses = [
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
      
}
  ];
  return (
    <div>
      <h2> Let's get started ! </h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
