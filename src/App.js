import { useState } from 'react';
import Search from './componets/Search';
import Table from './componets/Table';
import './App.css';
import Form from './componets/Form';

function App() {
  const arr =[
    {
        
        Date: "24/march/2024",
        Description: "Deposit",
        Category: "income",
        Amount: "2500"

},
{
    
    Date: "25/march/2024",
    Description: "Business",
    Category: "expenses",
    Amount: "3500"

},
{
    
Date: "26/march/2024",
Description: "Personal use",
Category: "shopping",
Amount: "4500"

},  {
    
Date: "27/march/2024",
Description: "Business",
Category: "loss",
Amount: "5500"

},
{
    
Date: "28/march/2024",
Description: "Deposit",
Category: "income",
Amount: "6500"

},

]

const [transactions,setTransactions] = useState(arr)



  return (
    <div className='container'>
      <Search transactions={transactions} setTransactions={setTransactions} arr={arr}/>
        <Form transactions={transactions} setTransactions={setTransactions}/>  
  <Table transactions={transactions} setTransactions={setTransactions}/>
  </div>
  );

  }
export default App;
