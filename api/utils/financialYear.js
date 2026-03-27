export const getFinancialYear = () => {

  const now = new Date();
  const month = now.getMonth() + 1; 
  const year = now.getFullYear();

  let startYear;
  let endYear;

  if (month < 4) {
    startYear = year - 1;
    endYear = year;
  } else {
    startYear = year;
    endYear = year + 1;
  }

  return `${startYear}-${String(endYear).slice(-2)}`;
};