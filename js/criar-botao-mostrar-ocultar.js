let container = document.querySelector('div');
let input = document.querySelector('input');
let icon = document.querySelector('img');

icon.addEventListener('click', function() {
  container.classList.toggle('visible');
  if(container.classList.contains('visible')) {
    icon.src = 'assets/eye-off.svg';
    input.type = 'text';
  } else {
    icon.src = 'assets/eye.svg';
    input.type = 'password';
  }
});