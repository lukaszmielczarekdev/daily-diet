import { cloneDeep, round } from "lodash";

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
    { protein: 0, carbs: 0, fat: 0, kcal: 0 }
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
    { protein: 0, carbs: 0, fat: 0, kcal: 0 }
  );
};
