import { cloneDeep, round } from "lodash";
import Ingredients from "../data/ingredients.json";

export const calculatePercentage = (number1, number2) => {
  const result = (number1 / number2) * 100;

  return result >= 0 && isFinite(result) && typeof result === "number"
    ? parseFloat(result)
    : 0;
};

export const calculateMacrosPercentage = (
  demandAmount,
  currentAmount,
  template
) => {
  if (!demandAmount) {
    demandAmount = 0;
  }
  const completed = cloneDeep(template);
  for (let key of Object.keys(demandAmount)) {
    completed[key].completed = round(
      calculatePercentage(currentAmount[key], demandAmount[key])
    );
  }
  return completed;
};

export const calculateMacrosAmount = (
  totalKcal,
  proteinPercentage,
  carbsPercentage,
  fatPercentage
) => {
  if (
    totalKcal &&
    proteinPercentage + carbsPercentage + fatPercentage === 100
  ) {
    const amount = { kcal: 0, protein: 0, carbs: 0, fat: 0 };
    amount.kcal = parseInt(totalKcal);
    amount.protein = Math.round(((proteinPercentage / 100) * totalKcal) / 4);
    amount.carbs = Math.round(((carbsPercentage / 100) * totalKcal) / 4);
    amount.fat = Math.round(((fatPercentage / 100) * totalKcal) / 9);
    return amount;
  }
  return { kcal: 0, protein: 0, carbs: 0, fat: 0 };
};

export const calculateMacrosForProducts = (products) => {
  return products.reduce(
    (acc, elem) => {
      return {
        kcal: round(acc.kcal + elem.kcal, 2),
        protein: round(acc.protein + elem.protein, 2),
        carbs: round(acc.carbs + elem.carbs, 2),
        fat: round(acc.fat + elem.fat, 2),
      };
    },
    { kcal: 0, protein: 0, carbs: 0, fat: 0 }
  );
};

export const calculateMacrosForMeals = (meals) => {
  return meals.reduce(
    (acc, elem) => {
      return {
        kcal: round(acc.kcal + elem.nutrients.kcal, 2),
        protein: round(acc.protein + elem.nutrients.protein, 2),
        carbs: round(acc.carbs + elem.nutrients.carbs, 2),
        fat: round(acc.fat + elem.nutrients.fat, 2),
      };
    },
    { kcal: 0, protein: 0, carbs: 0, fat: 0 }
  );
};

export const calculateProductAmount = (products, productId, amount) => {
  const productsCopy = cloneDeep(products);
  const ingredients = Ingredients;
  const selectedProduct = productsCopy.find((item) => item.id === productId);

  const templateProduct = ingredients.find(
    (product) => product.name === selectedProduct.name
  );

  for (let elem of ["kcal", "protein", "carbs", "fat", "amount"]) {
    selectedProduct[elem] = templateProduct[elem] * amount;
  }
  return productsCopy;
};
