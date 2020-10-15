/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lowerCaseStr = str.toLowerCase();
  
  if (lowerCaseStr.indexOf('1xbet') != -1) {
    return true;
  } else if (lowerCaseStr.indexOf('xxxx') != -1) {
    return true;
  } else {
    return false;
  }
}
