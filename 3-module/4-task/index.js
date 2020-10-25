/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let newUsers = users.filter(item => item.age <= age);
  let str = '';
  
  for (let i = 0; i < newUsers.length; i++) {
    
    if (i != newUsers.length - 1) {
      str += `${newUsers[i].name}, ${newUsers[i].balance}\n`;
    } else {
      str += `${newUsers[i].name}, ${newUsers[i].balance}`;
    }
    
  }
  return str;
}
