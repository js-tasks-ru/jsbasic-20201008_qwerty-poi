function hideSelf() {
  document.addEventListener('click', function(event) {
    let id = event.target.className = 'hide-self-button';
    if (!id) return;

    let elem = document.querySelector('.hide-self-button');
    elem.hidden = "true";
  });
}
