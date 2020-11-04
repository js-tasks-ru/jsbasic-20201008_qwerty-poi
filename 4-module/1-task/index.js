/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  document.body.innerHTML = '<ul></ul>';
  let ul = document.querySelector('ul');
  
  for (let elem of friends) {
    ul.innerHTML += `<li>${elem.firstName} ${elem.lastName}</li>`;
  }
}