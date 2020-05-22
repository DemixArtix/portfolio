const button = document.querySelector('#button');
const buttonClose = document.querySelector("#buttonClose");
const modal = document.querySelector('#modal');

button.addEventListener('click', (e) => {
  modal.classList.add('modal_active');
  setTimeout(function () {
      modal.classList.remove('modal_active');
  },5000);
});

buttonClose.addEventListener('click', (e) => {
  modal.classList.remove('modal_active');
});
