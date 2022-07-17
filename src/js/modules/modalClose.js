function modalClose(buttonSelector, modalSelector = '.modal') {
  const buttons = document.querySelectorAll(buttonSelector),
        modal = document.querySelector(modalSelector),
        container = document.querySelector('.modal .container');

  function closeByButton() {
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }

  function closeByModal() {
    modal.addEventListener('click', (e) => {
      if (e.target && (e.target === modal || e.target === container)) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  closeByButton();
  closeByModal();
}

export default modalClose;