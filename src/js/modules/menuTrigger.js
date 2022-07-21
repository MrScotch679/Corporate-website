export default function menuTrigger(menuSelector, buttonSelector, activeClass, closeSelector) {
  const menu = document.querySelector(menuSelector),
        button = document.querySelector(buttonSelector),
        close = document.querySelector(closeSelector);

  close.addEventListener('click', () => {
    menu.classList.toggle(activeClass);
  });

  button.addEventListener('click', () => {
    menu.classList.toggle(activeClass);
  });
}