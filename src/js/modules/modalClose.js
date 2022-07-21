function modalClose(buttonSelector, modalSelector = '.modal') {
  const buttons = document.querySelectorAll(buttonSelector),
        modal = document.querySelector(modalSelector);

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
      if (e.target && (e.target === modal || e.target.classList.contains('container'))) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  try {
    closeByButton();
    closeByModal();
  } catch (error) {}
}

export default modalClose;