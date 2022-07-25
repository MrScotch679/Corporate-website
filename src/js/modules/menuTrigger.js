export default function menuTrigger(menuSelector, buttonSelector, activeClass, closeSelector) {
  const menu = document.querySelector(menuSelector),
        button = document.querySelector(buttonSelector),
        close = document.querySelector(closeSelector);

  close.addEventListener('click', () => {
    if (menu.classList.contains(activeClass)) {
      menu.classList.remove(activeClass);
      document.body.style.overflow = '';
    } else {
      menu.classList.add(activeClass);
    }
  });

  button.addEventListener('click', () => {
    menu.classList.toggle(activeClass);
    if (window.screen.availWidth <= 426) {
      document.body.style.overflow = 'hidden';
    }
  });
}