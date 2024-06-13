/* const arrayIntersection = (arr1, arr2) =>
  arr1.reduce((acc, curr) => (arr2.includes(curr) ? [...acc, curr] : acc), []);
 */

const arrayIntersection = (arr1, arr2) => arr1.filter(el => arr2.includes(el));

module.exports = arrayIntersection;
