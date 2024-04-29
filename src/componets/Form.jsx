import React, { useState } from "react";

function Form({ transactions, setTransactions }) {
    const [formEntry, setFormEntry] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        setTransactions([...transactions, formEntry]);
        
        setFormEntry({
            date: "",
            description: "",
            category: "",
            amount: ""
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormEntry(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row border m-4 p-4">
                    <div className="col-3 mx-auto">
                        <input
                            className="form-control col-2"
                            onChange={handleChange}
                            name="date"
                            type="date"
                            value={formEntry.date}
                            placeholder="Date"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <div className="col-3 mx-auto">
                        <input
                            className="form-control col-2"
                            onChange={handleChange}
                            name="description"
                            type="text"
                            value={formEntry.description}
                            placeholder="Description"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <div className="col-3 mx-auto">
                        <input
                            className="form-control col-2"
                            onChange={handleChange}
                            name="category"
                            type="text"
                            value={formEntry.category}
                            placeholder="Category"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <div className="col-3 mx-auto">
                        <input
                            className="form-control col-2"
                            onChange={handleChange}
                            name="amount"
                            type="number"
                            value={formEntry.amount}
                            placeholder="Amount"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <div className="col-3 mx-auto m-2 p-2">
                        <button type="submit" className="mx-auto btn btn-warning">
                            Add Transaction
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Form;