/**
 * Generates a random ID
 * @param {number} length  - Length of the desired ID (Default: 6)
 * @returns {string}
 */
export const generateRandomId = (length = 6) =>
  Math.random()
    .toString(36)
    .substring(2, length + 2)
