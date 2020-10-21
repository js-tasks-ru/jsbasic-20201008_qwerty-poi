/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arrFromStr = str.split('-');
  let newStr;
  
  for (let i = 0; i < arrFromStr.length; i++) {
    if (i == 0) {
      continue;
    }
    arrFromStr[i] = arrFromStr[i][0].toUpperCase() + arrFromStr[i].slice(1);
  }
  
  newStr = arrFromStr.join('');
  
  return newStr; 
}
