import { useState } from "react"
import Row from "./Row"
export default function Table({transactions,handleChange,setTransactions,search}){ 
    console.log(transactions);
   
return (
        <>
        <div className="m-4 p-4">
            <input  onChange={(e)=>handleChange(e.target.value)} className="form-control form-control-sm" type="text" placeholder="Type of transaction" value={search}/>
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