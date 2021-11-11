const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

// /**
//  * @param {number[]} array
//  */
// const sum = (array) => {
//   if (array.length === 0) return 0;
//   const firstValue = array[0];
// 	const rest = array.slice(1)
//   return firstValue + sum(rest);
// };

/**
 * @param {number[]} array
 */
const sum = (array) => {
  return _sum(array, 0);
};

/**
 * @param {number[]} array
 * @param {number} idx
 */
const _sum = (array, idx) => {
  if (idx === array.length) return 0;
  return array[idx] + _sum(array, idx + 1);
};

console.log(sum([1, 5, 7, -2]));
