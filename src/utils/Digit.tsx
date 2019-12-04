export const getRandomNumber = (min?: number, max?: number): string => {
  //Get a randomnumber. Create utils and send it to it.
  min = min === undefined ? 1 : min;
  max = max === undefined ? 100 : max;
  let randomNumber: string | number =
    min + Math.floor(Math.random() * (max - min));
  randomNumber = randomNumber.toString();
  randomNumber =
    randomNumber.length == 2
      ? "0" + randomNumber
      : randomNumber.length == 1
      ? "00" + randomNumber
      : randomNumber;
  return randomNumber;
};
