function hideSelf() {
  document.addEventListener('click', function(event) {
    let button = event.target;
    if (!button.classList.contains('hide-self-button')) return;

    let elem = document.querySelector('.hide-self-button');
    elem.hidden = "true";
  });
}
