function form(formSelector, inputSelectors) {
  const form = document.querySelector(formSelector),
        inputs = document.querySelectorAll(inputSelectors);

  const submitMessedges = {
    uselName : 'Ваше меня',
    userPhoneNumber : 'Ваш номер телефона',
    userEmail : 'Ваша электронная почта',
    notWorkNow : 'С сожалению сайт сейчас не работает'
  };

  function cleatInputs() {
    inputs.forEach(input => {
      input.value = '';
    });
  }

  function addMiniTextOverInput() {
    inputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
        
      });
    });
  }
}