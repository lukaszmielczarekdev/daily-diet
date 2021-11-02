import React, { useState } from "react";
import SearchBar from "../components/Form/SearchBar";
import Ingredients from "../data/ingredients.json";
import SelectedProducts from "../components/Content/SelectedProducts";

const MakeDiary = (props) => {
  const [selected, setSelected] = useState([]);
  const ingredientsCopy = JSON.parse(JSON.stringify(Ingredients));
  const handleAddProduct = (item) => {
    setSelected((selected) => [...selected, item]);
  };

  const setTotalMacros = (arr) => {
    return arr.reduce(
      (acc, elem) => {
        return {
          protein: acc.protein + elem.protein,
          carbs: acc.carbs + elem.carbs,
          fat: acc.fat + elem.fat,
          kcal: acc.kcal + elem.kcal,
        };
      },
      { protein: 0, carbs: 0, fat: 0, kcal: 0 }
    );
  };

  const calculateAmount = (multiplier, index) => {
    const selectedCopy = [...selected];
    const calculated = selected[index];
    const initialProductData = Ingredients.find((value) => {
      return value.name === calculated.name;
    });

    for (let elem of ["protein", "carbs", "fat", "kcal", "amount"]) {
      calculated[elem] = initialProductData[elem] * multiplier;
    }

    selectedCopy[index] = calculated;
    setSelected((selected) => (selected = selectedCopy));
  };

  return (
    <div>
      <SelectedProducts
        calculateAmount={calculateAmount}
        selectedProducts={selected}
        selectedProductsTotalMacros={setTotalMacros(selected)}
      />
      <SearchBar
        addProduct={handleAddProduct}
        placeholder="Search..."
        data={ingredientsCopy}
      />
    </div>
  );
};

export default MakeDiary;
