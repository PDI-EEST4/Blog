export const generateRandomId = (length: number = 6): string =>
  Math.random()
    .toString(36)
    .substring(2, length + 2)
