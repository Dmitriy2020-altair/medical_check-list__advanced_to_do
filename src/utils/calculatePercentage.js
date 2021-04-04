export const calcPercentage = (firstValue, secondValue) => {
  let part = 100 / (firstValue + secondValue);

  if (part === Infinity) part = 0;

  return [firstValue * part, secondValue * part];
};
