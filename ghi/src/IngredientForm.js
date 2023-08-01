import { useState, useEffect } from "react";
import { useCreateIngredientMutation } from "./app/apiSlice";
import AlertMessage from "./AlertMessage";
import SuccessMessage from "./SuccessMessage";

function IngredientForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [ingredient, ingredientResult] = useCreateIngredientMutation();
  const [alertMessage, setAlertMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (ingredientResult.error) {
      if (ingredientResult.error.status === 422) {
        setAlertMessage(ingredientResult.error.data.detail[0].msg);
      }
    }
    if (ingredientResult.isSuccess) {
      setName("");
      setAmount("");
      setUnit("");
      setAlertMessage("");
      setSuccessMessage("Ingredient added successfully.");
    }
  }, [ingredientResult]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      amount: amount,
      unit: unit,
    };
    ingredient(body);
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          {alertMessage && <AlertMessage>{alertMessage}</AlertMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
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

export default IngredientForm;
