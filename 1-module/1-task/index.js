/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let product = 1;
  
  for (; n ;) {
    product *= n--;
  }
  
  return product; 
}
