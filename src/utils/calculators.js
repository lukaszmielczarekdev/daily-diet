import { cloneDeep } from "lodash";

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
  const completed = cloneDeep(template);
  for (let key of Object.keys(demandAmount)) {
    completed[key].completed = calculatePercentage(
      currentAmount[key],
      demandAmount[key]
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
};

export const calculateMacrosForProducts = (products) => {
  return products.reduce(
    (acc, elem) => {
      return {
        kcal: acc.kcal + elem.kcal,
        protein: acc.protein + elem.protein,
        carbs: acc.carbs + elem.carbs,
        fat: acc.fat + elem.fat,
      };
    },
    { protein: 0, carbs: 0, fat: 0, kcal: 0 }
  );
};

export const calculateMacrosForMeals = (meals) => {
  return meals.reduce(
    (acc, elem) => {
      return {
        kcal: acc.kcal + elem.nutrients.kcal,
        protein: acc.protein + elem.nutrients.protein,
        carbs: acc.carbs + elem.nutrients.carbs,
        fat: acc.fat + elem.nutrients.fat,
      };
    },
    { protein: 0, carbs: 0, fat: 0, kcal: 0 }
  );
};
