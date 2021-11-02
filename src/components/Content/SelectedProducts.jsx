import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";

const SelectedProducts = (props) => {
  const userData = useContext(UserDataContext);

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const amount = Number(document.getElementById(index).value);
    props.calculateAmount(amount, index);
  };

  return (
    <div>
      <p>Selected products</p>
      {props.selectedProducts.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>
                <input id={"name"} type="text" placeholder={"Name"} />
              </th>
              <th>Protein</th>
              <th>Carbs</th>
              <th>Fat</th>
              <th>Kcal</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {props.selectedProducts.map((value, index) => (
              <tr key={Math.random()}>
                <td>{value.name}</td>
                <td>{value.protein.toFixed(1)}</td>
                <td>{value.carbs.toFixed(1)}</td>
                <td>{value.fat.toFixed(1)}</td>
                <td>{value.kcal.toFixed(1)}</td>
                <td>
                  <form onSubmit={(e) => handleSubmit(e, index)}>
                    <input
                      id={index}
                      type="text"
                      placeholder={value.amount + "g"}
                    />
                    <button type="submit">Submit</button>
                  </form>
                </td>
                {/* <td>
                  <button

                  onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
            <tr>
              <td>Total:</td>
              <td>{props.selectedProductsTotalMacros.protein.toFixed(1)}</td>
              <td>{props.selectedProductsTotalMacros.carbs.toFixed(1)}</td>
              <td>{props.selectedProductsTotalMacros.fat.toFixed(1)}</td>
              <td>{props.selectedProductsTotalMacros.kcal.toFixed(1)}</td>
              <td>
                <button
                  onClick={() => userData.addDiary(props.selectedProducts)}
                >
                  Save Dairy
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SelectedProducts;
