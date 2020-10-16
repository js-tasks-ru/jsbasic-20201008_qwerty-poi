/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let total = 0;
  
  for (let key in salaries) {
    if (typeof(salaries[key]) == 'number') {
      total += salaries[key];
    }    
  }
  
  return total;
}
