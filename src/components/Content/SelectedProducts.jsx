import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import { Button } from "../../styles/globalComponentsStyles";
import Product from "../Product/Product";
import "./selectedProducts.css";

const SelectedProducts = (props) => {
  const userData = useContext(UserDataContext);

  return (
    <>
      {props.selectedProducts.length !== 0 && (
        <div id="product-select">
          <input id={"name"} type="text" placeholder={"Meal name"} /> *
          <ul>
            {props.selectedProducts.map((elem, index) => (
              <li key={elem.id}>
                <Product
                  key={elem.id}
                  product={elem}
                  index={index}
                  calculateAmount={props.calculateAmount}
                  deleteProduct={props.deleteProduct}
                />
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
            <Button onClick={() => props.addMeal(props.selectedProducts)}>
              Add to diary
            </Button>
            <Button
              // onClick={() => userData.addDiary(props.selectedProducts)}
              onClick={() => userData.saveMeal(props.selectedProducts)}
            >
              Save as a template
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedProducts;
