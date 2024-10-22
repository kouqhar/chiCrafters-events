const CURRENT_DATE = new Date(2024, 10 + 1, 18, 23, 33); // year, month - 1, day, hours, minutes, seconds
const [START_YEAR, START_MONTH] = [2022, 8];
const [CURRENT_YEAR, CURRENT_MONTH] = [
  CURRENT_DATE.getFullYear(),
  CURRENT_DATE.getMonth() + 1,
];
const YEARS_OF_EXISTENCE = CURRENT_YEAR - START_YEAR;
const Existence =
  CURRENT_MONTH >= START_MONTH
    ? YEARS_OF_EXISTENCE
    : `${YEARS_OF_EXISTENCE - 1}+`;

const capitalizeWord = (word) => {
  const splitWord = word.split(" ");
  let capitalizedWord = "";

  splitWord.forEach((word) => {
    const firstChar = word[0].toUpperCase();
    const remainingChar = word.slice(1);

    capitalizedWord += ` ${firstChar}${remainingChar}`;
  });

  return capitalizedWord.trim();
};

export { Existence, START_YEAR, capitalizeWord };
