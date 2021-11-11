let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];

/**
 * @param {number[]} array
 * @param {number} target
 */
const binarySearch = (array, target) => {
  return binarySearchHelper(array, target, 0, array.length - 1);
};
/**
 * @param {number[]} array
 * @param {number} target
 * @param {number} left
 * @param {number} right
 *
 */
const binarySearchHelper = (array, target, left, right) => {
  if (left > right) return false;

  let mid = Math.floor((left + right) / 2);

  if (target === array[mid]) return mid;
  else if (target < array[mid])
    return binarySearchHelper(array, target, left, mid - 1);
  else return binarySearchHelper(array, target, left, mid + 1);
};

// const _binarySearch = (array, target) => {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (target === array[mid]) {
//       return mid;
//     } else if (target < array[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return false;
// };

console.log(binarySearch(nums, 7));
console.log(binarySearch(nums, 15));
