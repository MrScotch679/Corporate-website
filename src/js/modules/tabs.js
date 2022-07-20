export default function tabs(headerSelector, tabsSelector, contentSelector) {
  const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);

  try {
    header.addEventListener('click', (e) => {
      const target = e.target;
  
      if (target && (target.classList.contains(tabsSelector.replace(/\./gi, '')) || target.parentNode.classList.contains(tabsSelector.replace(/\./gi, '')))) {
        tabs.forEach((tab, i) => {
          if (tab == target || tab.parentNode == target) {
            hideContent();
            showContent(i);
          }
        });
      }
    });
  } catch (error) {}

  function showContent(i) {
    tabs[i].classList.toggle('tabs__item_active');
    content[i].classList.toggle('tabs__content_active');
  }

  function hideContent() {
    tabs.forEach(tab => {
      tab.classList.remove('tabs__item_active');
    });

    content.forEach(item => {
      item.classList.remove('tabs__content_active');
    });
  }
}