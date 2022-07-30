function modalComponent(openTriggerSelector, closeTriggerSelector, modalSelector = '.modal') {
  const openButton = document.querySelector(openTriggerSelector),
        closeButtons = document.querySelectorAll(closeTriggerSelector),
        modal = document.querySelector(modalSelector);

  function modalTrigger() {
      openButton.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
  }

  function closeByButton() {
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }

  function closeByModal() {
    modal.addEventListener('click', (e) => {
      const target = e.target;

      if (target && (target === modal || target.classList.contains('container'))) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  try {
    modalTrigger();
    closeByButton();
    closeByModal();
  } catch (error) {}
}

export default modalComponent;