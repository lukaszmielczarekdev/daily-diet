// general percentage
export const calculatePercentage = (number1, number2) => {
  return ((number1 / number2) * 100).toFixed();
};

// macroelements percentage
export const calculateMacroPercentage = (
  totalKcal,
  proteinPercentage,
  carbsPercentage,
  fatPercentage
) => {
  if (
    totalKcal &&
    proteinPercentage + carbsPercentage + fatPercentage === 100
  ) {
    const amount = { protein: 0, carbs: 0, fat: 0 };
    amount.kcal = parseInt(totalKcal);
    amount.protein = parseInt(((proteinPercentage / 100) * totalKcal) / 4);
    amount.carbs = parseInt(((carbsPercentage / 100) * totalKcal) / 4);
    amount.fat = parseInt(((fatPercentage / 100) * totalKcal) / 9);
    return amount;
  }
};
