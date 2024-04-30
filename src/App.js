import { useState } from 'react';
import Header from './componets/Header';
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

}

]

const [transactions,setTransactions] = useState(arr)
const [search,setSearch]=useState("")

function addTransaction(formData){
  setTransactions(prevState=>([...prevState,formData]))
}

function handleChange(searchTerm){
  setSearch(searchTerm)
}
const filter=transactions.filter((transaction)=> {
  if (search.length>0){
  return transaction.Description.toLowerCase().includes(search.toLowerCase())
  
 }else{
  return true
 }})
  return (
    <div className='container'>
      <Header/>
      {/* <Search transactions={transactions} setTransactions={setTransactions} arr={arr}/> */}
      <Form transactions={filter} addTransaction={addTransaction}/>  
      <Table transactions={filter} setTransactions={setTransactions} search={search} handleChange={handleChange}/>
      
  </div>
  );

  }
export default App;
