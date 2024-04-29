import { useState } from "react"
import Row from "./Row"
export default function Table(){ 

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

       
    
    
 function handleChange(event){
   const cont = event.target.value
   const arr =[...transactions]
   if (cont.length>0){
    const filter=transactions.filter((transaction)=> {
        return transaction.Description.toLowerCase().includes(cont.toLowerCase())
       })
       if(filter.length> 0){
       setTransactions([...filter])}
   }else{
    console.log(arr)
    setTransactions([...arr])
   
 }

    
      
 }


    return (
        <>
        <div className="m-4 p-4">
            <input  onChange={handleChange} className="form-control form-control-sm" type="text" placeholder="Type of transaction"/>
        </div>
        <table className="table ">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <Row transactions={transactions} setTransactions={setTransactions}/>
        
            </tbody>
        </table>
        </>
    )
}