import { gerRandomNumber } from "./random-number";
const colors = ["Orange", "Blue", "Violet", "Pink"];

export const getRandomColor = () => {
  return colors[gerRandomNumber(-1, 3)];
};
