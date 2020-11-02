function toggleText() {
  document.addEventListener('click', function(event) {
    let button = event.target;

    if (!button.classList.contains('toggle-text-button')) return;
    
    let elem = document.getElementById('text');
    elem.hidden = !elem.hidden;
  });
}
