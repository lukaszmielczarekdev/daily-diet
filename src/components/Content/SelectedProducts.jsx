import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import "./selectedProducts.css";

const SelectedProducts = (props) => {
  const userData = useContext(UserDataContext);

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const amount = Number(document.getElementById(index).value);
    props.calculateAmount(amount, index);
  };

  return (
    <>
      {props.selectedProducts.length !== 0 && (
        <div id="product-select">
          <input id={"name"} type="text" placeholder={"Name"} />
          <ul>
            {props.selectedProducts.map((value, index) => (
              <li key={index}>
                <div className="amount-side-left">
                  <form onSubmit={(e) => handleSubmit(e, index)}>
                    <input
                      className="amount-form"
                      id={index}
                      type="text"
                      placeholder={value.amount + "g"}
                    />
                    <button type="submit">Submit</button>
                  </form>
                </div>
                <div>
                  <span>{value.name}</span>
                  <div className="summary-bar">
                    <span>Kcal: {value.kcal.toFixed(1)} / </span>
                    <span>Protein: {value.protein.toFixed(1)} / </span>
                    <span>Carbs: {value.carbs.toFixed(1)} / </span>
                    <span>Fat: {value.fat.toFixed(1)} </span>
                  </div>
                </div>
                <div>
                  <button onClick={() => props.deleteProduct(index)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="summary-bar-total">
            <span className="amount-side-left">
              Kcal: {props.selectedProductsTotalMacros.kcal.toFixed(1)}
            </span>
            <div>
              <span>
                Protein: {props.selectedProductsTotalMacros.protein.toFixed(1)}{" "}
                /{" "}
              </span>
              <span>
                Carbs: {props.selectedProductsTotalMacros.carbs.toFixed(1)} /{" "}
              </span>
              <span>
                Fat: {props.selectedProductsTotalMacros.fat.toFixed(1)}{" "}
              </span>
            </div>
          </div>
          <div>
            <button onClick={() => props.addMeal(props.selectedProducts)}>
              Add to diary
            </button>
            <button
              // onClick={() => userData.addDiary(props.selectedProducts)}
              onClick={() => userData.saveMeal(props.selectedProducts)}
            >
              Save as a template
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedProducts;
