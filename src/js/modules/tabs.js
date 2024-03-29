export default function tabs(headerSelector, tabsSelector, contentSelector, tabActiveSelector, contentActiveSelector) {
  const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);

  try {
    header.addEventListener('click', (e) => {
      const target = e.target,
            isClassName = target.classList.contains(tabsSelector.replace(/\./gi, ''));
  
      if (target && isClassName) {
        tabs.forEach((tab, i) => {
          if (tab == target) {
            hideContent();
            showContent(i);
          }
        });
      }
    });
  } catch (error) {}

  function showContent(i) {
    tabs[i].classList.toggle(tabActiveSelector);
    content[i].classList.toggle(contentActiveSelector);
  }

  function hideContent() {
    tabs.forEach(tab => {
      tab.classList.remove(tabActiveSelector);
    });

    content.forEach(item => {
      item.classList.remove(contentActiveSelector);
    });
  }
}