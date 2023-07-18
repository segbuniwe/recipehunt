import { useState } from "react";
import {
    useUpdateIngredientMutation,
    useGetIngredientByAccountQuery,
} from "./app/apiSlice";

function IngredientEdit() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [unit, setUnit] = useState("");
    const [ingredient] = useUpdateIngredientMutation();
    const { data: ingredients } = useGetIngredientByAccountQuery();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            name: name,
            amount: amount,
            unit: unit,
        };

        ingredient(body);
        setName("");
        setAmount("");
        setUnit("");
        alert("Ingredient added successfully.");
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add an Ingredient</h1>
                    <form onSubmit={handleSubmit} id="create-hat-form">
                        <div className="form-floating mb-3">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                required
                                type="text"
                                id="name"
                                className="form-control"
                                name="name"
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Amount"
                                required
                                type="number"
                                id="amount"
                                className="form-control"
                                name="amount"
                            />
                            <label htmlFor="amount">Amount</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                placeholder="Unit"
                                type="text"
                                id="unit"
                                className="form-control"
                                name="unit"
                            />
                            <label htmlFor="unit">Unit</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default IngredientEdit;
