export const generateId = (): number => {
  return Math.floor(Math.random() * (10000000 - 100000000 + 1)) + 10000000;
};
