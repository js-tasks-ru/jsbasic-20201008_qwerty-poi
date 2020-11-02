/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  document.body.innerHTML = '<ul></ul>';
  let ul = document.querySelector('ul');
  
  for (let elem of friends) {
    console.log(`${elem.firstName} ${elem.lastName}`);
    ul.innerHTML += `<li>${elem.firstName} ${elem.lastName}</li>`;
  }
}