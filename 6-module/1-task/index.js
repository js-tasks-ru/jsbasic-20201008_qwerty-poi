/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    
    this.elem.innerHTML = `
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    `;
    
    for (let i = 0; i < rows.length; i++) {
      let template = `
      <tr>
        <td>${rows[i].name}</td>
        <td>${rows[i].age}</td>
        <td>${rows[i].salary}</td>
        <td>${rows[i].city}</td>
        <td><button>X</button></td>
      </td>
      `;
      
      this.elem.insertAdjacentHTML('beforeend', template);      
    }    
    
    let buttons = this.elem.querySelectorAll('button');
    
    for (let button of buttons) {
      button.addEventListener('click', (event) => {
      let target = event.target;
      let row = target.closest('tr');
      row.remove();
      });
    }
    
  }   
}
