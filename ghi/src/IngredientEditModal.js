import { useState, useEffect } from "react";
import { useUpdateIngredientMutation } from "./app/apiSlice";
import AlertMessage from "./AlertMessage";

function IngredientEditModal({ ingredient }) {
  const [name, setName] = useState(ingredient.name);
  const [amount, setAmount] = useState(ingredient.amount);
  const [unit, setUnit] = useState(ingredient.unit);
  const [updateIngredient, ingredientResult] = useUpdateIngredientMutation();
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (ingredientResult.error) {
      if (ingredientResult.error.status == 422) {
        setAlertMessage(ingredientResult.error.data.detail[0].msg);
      }
    }
    if (ingredientResult.isSuccess) {
      setAlertMessage("");
      alert("Ingredient updated successfully.");
    }
  }, [ingredientResult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      amount: amount,
      unit: unit,
    };

    updateIngredient({
      body,
      ingredient_id: ingredient.id,
    });
  };

  return (
    <div
      className="modal fade"
      id={`editIngredientModal${ingredient.id}`}
      tabIndex="-1"
      aria-labelledby={`editIngredientModalLabel${ingredient.id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id={`editIngredientModalLabel${ingredient.id}`}
            >
              Edit Ingredient
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {alertMessage && <AlertMessage>{alertMessage}</AlertMessage>}
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                  type="text"
                  id={`editIngredientName${ingredient.id}`}
                  className="form-control"
                  name="name"
                />
                <label htmlFor={`editIngredientName${ingredient.id}`}>
                  Name
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  required
                  type="number"
                  id={`editIngredientAmount${ingredient.id}`}
                  className="form-control"
                  name="amount"
                />
                <label htmlFor={`editIngredientAmount${ingredient.id}`}>
                  Amount
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder="Unit"
                  type="text"
                  id={`editIngredientUnit${ingredient.id}`}
                  className="form-control"
                  name="unit"
                />
                <label htmlFor={`editIngredientUnit${ingredient.id}`}>
                  Unit
                </label>
              </div>
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngredientEditModal;
