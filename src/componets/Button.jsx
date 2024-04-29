

export default function Button ({children,setTransactions,transactions,index}){
function handleClick(){
    //console.log(transactions)
    const filter =transactions.filter((transaction,i)=>{
        return i !== index
    })
    setTransactions([...filter])
}
  
    return (
        <button onClick={()=>handleClick()} className="btn btn-sm btn-primary">{children}</button>
    )

}