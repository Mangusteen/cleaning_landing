let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');


// проверяем темная тема включена
// если да - то выключаем
// если нет - то выключаем


// включение темной темы
const enableDarkMode = () => {
  // добавляем класс к боди
  document.body.classList.add('darkmode')
  // апдейт в localStorage
  localStorage.setItem('darkMode', 'enabled')
}

// выключение темной темы
const disableDarkMode = () => {
  // убираем класс к боди
  document.body.classList.remove('darkmode')
  // апдейт в localStorage - обнуляем
  localStorage.setItem('darkMode', null)
}


darkModeToggle.addEventListener('click', function () {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
    document.querySelector('.dark-mode-moon').style.display = 'flex';
    document.querySelector('.dark-mode-sun').style.display = 'none';
  } else {
    disableDarkMode();
    document.querySelector('.dark-mode-moon').style.display = 'none';
    document.querySelector('.dark-mode-sun').style.display = 'flex';
  }
})