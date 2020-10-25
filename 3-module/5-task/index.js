/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let replacedStr = str.replaceAll(',', ' ');
  
  let arrFromString = replacedStr.split(' ');
  
  let numbers = arrFromString.map(num => parseFloat(num) || false);
  
  let numMin = Math.min(...numbers);
  let numMax = Math.max(...numbers);
  
  let minMax = {
   min: numMin, max: numMax
  }
  
  return minMax;
}
