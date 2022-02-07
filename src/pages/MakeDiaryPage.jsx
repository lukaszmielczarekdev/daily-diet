import React, { useState, useContext } from "react";
import SearchBar from "../components/Form/SearchBar";
import Ingredients from "../data/ingredients.json";
import DiaryMaker from "../components/Content/DiaryMaker";
import SelectedProducts from "../components/Content/SelectedProducts";
import { Section, SectionText } from "../styles/globalComponentsStyles";
import { v4 as uuidv4 } from "uuid";
import UserDataContext from "../contexts/UserDataContext";

const MakeDiary = (props) => {
  const userData = useContext(UserDataContext);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const ingredientsCopy = JSON.parse(JSON.stringify(Ingredients));

  const handleAddProduct = (item) => {
    item.id = uuidv4();
    setSelectedProducts((selectedProducts) => [...selectedProducts, item]);
    document.getElementById("ingredientInput").value = "";
  };

  const handleDeleteProduct = (index) => {
    const filtered = [...selectedProducts];
    filtered.splice(index, 1);
    setSelectedProducts((selectedProducts) => (selectedProducts = filtered));
  };

  const handleAddMeal = (items) => {
    if (document.getElementById("name").value) {
      setSelectedMeals((selectedMeals) => [
        ...selectedMeals,
        {
          id: uuidv4(),
          name: document.getElementById("name").value,
          items: items,
          totalMacros: userData.calculateMacrosForProducts(selectedProducts),
        },
      ]);
      setSelectedProducts([]);
    }
  };

  const calculateAmount = (multiplier, index) => {
    const selectedCopy = [...selectedProducts];
    const calculated = selectedProducts[index];
    const initialProductData = Ingredients.find((value) => {
      return value.name === calculated.name;
    });

    for (let elem of ["protein", "carbs", "fat", "kcal", "amount"]) {
      calculated[elem] = initialProductData[elem] * multiplier;
    }

    selectedCopy[index] = calculated;
    setSelectedProducts(
      (selectedProducts) => (selectedProducts = selectedCopy)
    );
  };

  return (
    <Section id="diarybuilder" column>
      <SectionText smaller>
        <DiaryMaker
          selectedMeals={selectedMeals}
          mealTotalMacros={userData.calculateMacrosForMeals(selectedMeals)}
          clean={setSelectedMeals}
        />
        <SelectedProducts
          calculateAmount={calculateAmount}
          selectedProducts={selectedProducts}
          selectedProductsTotalMacros={userData.calculateMacrosForProducts(
            selectedProducts
          )}
          addMeal={handleAddMeal}
          deleteProduct={handleDeleteProduct}
        />
        <SearchBar
          addProduct={handleAddProduct}
          placeholder="Find a product..."
          original={Ingredients}
          data={ingredientsCopy}
        />
      </SectionText>
    </Section>
  );
};

export default MakeDiary;
