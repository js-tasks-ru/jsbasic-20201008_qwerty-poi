function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', function(event) {
    toggle = event.target;

    if (!toggle.classList.contains('toggle-text-button')) return;
    
    let elem = document.getElementById('text');
    elem.hidden = !elem.hidden;
  });
}
