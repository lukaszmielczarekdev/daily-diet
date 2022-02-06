import React, { useState } from "react";
import SearchBar from "../components/Form/SearchBar";
import Ingredients from "../data/ingredients.json";
import DiaryMaker from "../components/Content/DiaryMaker";
import SelectedProducts from "../components/Content/SelectedProducts";
import { Section, SectionText } from "../styles/globalComponentsStyles";

const MakeDiary = (props) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const ingredientsCopy = JSON.parse(JSON.stringify(Ingredients));

  const handleAddProduct = (item) => {
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
          name: document.getElementById("name").value,
          items: items,
          totalMacros: setTotalMacrosForProducts(selectedProducts),
        },
      ]);
      setSelectedProducts([]);
    }
  };

  const setTotalMacrosForProducts = (arr) => {
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

  const setTotalMacrosForMeals = (arr) => {
    return arr.reduce(
      (acc, elem) => {
        return {
          protein: acc.protein + elem.totalMacros.protein,
          carbs: acc.carbs + elem.totalMacros.carbs,
          fat: acc.fat + elem.totalMacros.fat,
          kcal: acc.kcal + elem.totalMacros.kcal,
        };
      },
      { protein: 0, carbs: 0, fat: 0, kcal: 0 }
    );
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
          mealTotalMacros={setTotalMacrosForMeals(selectedMeals)}
          clean={setSelectedMeals}
        />
        <SelectedProducts
          calculateAmount={calculateAmount}
          selectedProducts={selectedProducts}
          selectedProductsTotalMacros={setTotalMacrosForProducts(
            selectedProducts
          )}
          addMeal={handleAddMeal}
          deleteProduct={handleDeleteProduct}
        />
        <SearchBar
          addProduct={handleAddProduct}
          placeholder="Find a product..."
          data={ingredientsCopy}
        />
      </SectionText>
    </Section>
  );
};

export default MakeDiary;
