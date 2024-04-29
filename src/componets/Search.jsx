export default function Search({transactions, setTransactions, arr}){

    function handleChange(event){
        const cont = event.target.value
        const arr =[...transactions]
        if (cont.length > 0){
        const filter=transactions.filter((transaction)=> {
            return transaction.description.toLowerCase().includes(cont.toLowerCase())
           })
           setTransactions([...filter])
        }
        else{
      
         setTransactions([...arr])
        
          }
      
    return(

     <div className="m-4 p-4">
            <input  onChange={handleChange} className="form-control form-control-sm" type="text" placeholder="Type of transaction"/>
        </div>
    
)
    }

}