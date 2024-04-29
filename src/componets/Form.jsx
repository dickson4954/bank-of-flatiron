import { useState } from "react"

export default function Form({transactions,setTransactions}){
   const today = new Date();
   const [formdata, setformdata] = useState({
        date:"",
        description:"",
        category:"",
        amount:""
})


    function handleSubmit(event){
        event.preventdefault()
       setTransactions([
        ...transactions,formdata
       ])
    }
  function handleChange(event){
    
    setformdata(
        {
            ...formdata,
            [event.target.name] : event.target.value
        }
    )
    console.log(formdata)

  }

  return(
    <>
    <form onSubmit={handleSubmit}>
        <div className="row border p-4 m-4">
        <div className="col-3 mx-auto">
        <input className="form-control" onChange={handleChange} name="date" value={formdata.date} type="date" placeholder="date"/>
        </div>
    <div className="col-3 mx-auto">
    <input className="form-control form-control-sm col-3" onChange={handleChange} name="description" value={formdata.description} placeholder="Enter description" type="text"/>
    </div>
    <div className="col-3 mx-auto">
    <input className="form-control form-control-sm col-3" onChange={handleChange} name="category" value={formdata.category} placeholder="Enter category" type="text"/>
    </div>

   <div className="col-3 mx-auto">
   <input className="form-control form-control-sm col=3" onChange={handleChange} name="amount" value={formdata.amount} placeholder="Enter amount" type="number"/>
   </div>
   
    <div className="col-4 mx-auto">
        <button type="submit" className=" mx-auto btn btn-danger">Add Transaction</button>

    </div>
   </div>
   
    
        </form>
    </>
  )

}