/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rows = table[0].tBodies[0].rows;
    
    for (let row of rows) {
      switch(row.cells[3].dataset.available) {
        case 'true':
          row.className = "available";
          break;
        case 'false':
          row.className = "unavailable";
          break;
        default:
          row.setAttribute('hidden', true) = "unavailable";
      }
  
      switch(row.cells[2].innerHTML) {
        case 'm':
          row.classList.add('male');
          break;
        case 'f':
          row.classList.add('female');
      }
      
      if (+row.cells[1].innerHTML < 18) {
        row.style.textDecoration = 'line-through'
      }
    }
  }
