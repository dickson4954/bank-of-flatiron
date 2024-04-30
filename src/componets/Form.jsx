import React, { useState } from "react";

function Form({ addTransaction }) {
    const [formEntry, setFormEntry] = useState({
        Date: "",
        Description: "",
        Category: "",
        Amount: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        addTransaction(formEntry)
        setFormEntry({
            Date: "",
            Description: "",
            Category: "",
            Amount: ""
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormEntry(prevState => ({...prevState,[name]: value}));
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row border m-4 p-4 mx-auto">
                    <div className="col-3 mx-auto">
                        <input
                            className="form-control col-2"
                            onChange={handleChange}
                            name="Date"
                            type="date"
                            value={formEntry.Date}
                            placeholder="Date"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <div className="col-3 mx-auto">
                        <input
                            className="form-control col-2"
                            onChange={handleChange}
                            name="Description"
                            type="text"
                            value={formEntry.Description}
                            placeholder="Description"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <div className="col-3 mx-auto">
                        <input
                            className="form-control col-2"
                            onChange={handleChange}
                            name="Category"
                            type="text"
                            value={formEntry.Category}
                            placeholder="Category"
                            aria-label=".form-control-sm example"
                        />
                    </div>
                    <div className="col-3 mx-auto">
                        <input
                            className="form-control col-2"
                            onChange={handleChange}
                            name="Amount"
                            type="number"
                            value={formEntry.Amount}
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