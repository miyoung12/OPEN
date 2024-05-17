// date.ts

export const getDate = (): string => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
