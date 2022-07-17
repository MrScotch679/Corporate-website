function menuTrigger(menuSelector, buttonSelector, activeClass = '') {
  const menu = document.querySelector(menuSelector),
        button = document.querySelector(buttonSelector);

  button.addEventListener('click', () => {
    menu.classList.toggle(activeClass);
  });
}

export default menuTrigger;