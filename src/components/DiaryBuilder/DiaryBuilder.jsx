import React, { useState, useContext } from "react";
import SearchBar from "../Form/SearchBar";
import Ingredients from "../../data/ingredients.json";
import DiaryMaker from "../Content/DiaryMaker";
import SelectedProducts from "../SelectedProducts/SelectedProducts";
import {
  Section,
  SectionInnerContainer,
  SectionText,
  Button,
} from "../../styles/globalComponentsStyles";
import { v4 as uuidv4 } from "uuid";
import UserDataContext from "../../contexts/UserDataContext";

const DiaryBuilder = (props) => {
  const userData = useContext(UserDataContext);
  const [diaryBuilderToggle, setDiaryBuilderToggle] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [key, setKey] = useState(Math.random());

  const ingredientsCopy = [
    ...JSON.parse(JSON.stringify(Ingredients)),
    ...JSON.parse(JSON.stringify(userData.userData.meals)),
  ];

  const onDiaryBuilderToggle = () => {
    setDiaryBuilderToggle(!diaryBuilderToggle);
  };

  const forceRerender = () => {
    setSelectedMeals([]);
    setKey(Math.random());
  };

  const handleAddProduct = (item) => {
    if (item.name.startsWith("[Template]")) {
      setSelectedProducts((selectedProducts) => [
        ...selectedProducts,
        ...item.items,
      ]);
    } else {
      item.id = uuidv4();
      setSelectedProducts((selectedProducts) => [...selectedProducts, item]);
    }
    document.getElementById("ingredientInput").value = "";
  };

  const handleDeleteProduct = (index) => {
    const filtered = [...selectedProducts];
    filtered.splice(index, 1);
    setSelectedProducts((selectedProducts) => (selectedProducts = filtered));
  };

  const handleClearProducts = () => {
    setSelectedProducts([]);
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
    setSelectedProducts((prevState) => (prevState = selectedCopy));
  };

  return (
    <Section id="diarybuilder" column>
      <hr />
      <SectionInnerContainer>
        Diary Builder
        {!diaryBuilderToggle && (
          <Button onClick={() => onDiaryBuilderToggle()}>Add diary</Button>
        )}
        {diaryBuilderToggle && (
          <SectionText smaller>
            <DiaryMaker
              key={key}
              selectedMeals={selectedMeals}
              diaryTotalMacros={userData.calculateMacrosForMeals(selectedMeals)}
              clean={forceRerender}
            />
            <SelectedProducts
              calculateAmount={calculateAmount}
              selectedProducts={selectedProducts}
              selectedProductsTotalMacros={userData.calculateMacrosForProducts(
                selectedProducts
              )}
              addMeal={handleAddMeal}
              deleteProduct={handleDeleteProduct}
              clearProducts={handleClearProducts}
            />
            <SearchBar
              addProduct={handleAddProduct}
              placeholder="Find a product ..."
              data={ingredientsCopy}
            />
          </SectionText>
        )}
      </SectionInnerContainer>
    </Section>
  );
};

export default DiaryBuilder;
