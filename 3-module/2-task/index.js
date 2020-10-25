/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let newArr = [];
  for (let element of arr) {
    if (element >= a && element <= b) {
      newArr.push(element);
    }
  }
  return newArr;
}
