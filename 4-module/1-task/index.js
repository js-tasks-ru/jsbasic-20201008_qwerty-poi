/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  
  let ul = document.createElement('ul');
  
  for (let elem of friends) {
    ul.innerHTML += `<li>${elem.firstName} ${elem.lastName}</li>`;
  }

  return ul;
}