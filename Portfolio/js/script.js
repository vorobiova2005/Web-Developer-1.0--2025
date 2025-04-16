const hamburger = document.querySelector('.hamburger'), 
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu-close');

hamburger.addEventListener('click', () => {
      menu.classList .add('active');
});        

closeElem.addEventListener('click', () => {
        menu.classList .remove('active');
});        