import React from "react";

const SelectedProducts = (props) => {
  const handleSubmit = (e, index) => {
    e.preventDefault();
    const amount = Number(document.getElementById(index).value);
    props.calculateAmount(amount, index);
  };

  return (
    <div>
      <p>Selected</p>
      {props.selectedProducts.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Protein</th>
              <th>Carbs</th>
              <th>Fat</th>
              <th>Kcal</th>
              <th>Amount</th>
              <th>Amount change</th>
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
                <td>{value.amount.toFixed(0)}</td>
                <td>
                  <form onSubmit={(e) => handleSubmit(e, index)}>
                    <input id={index} type="text" placeholder={"Amount"} />
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
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SelectedProducts;
