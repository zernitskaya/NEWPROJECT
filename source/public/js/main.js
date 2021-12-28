 const aside = document.querySelector('.aside');

aside.addEventListener('click', (e) => {
  e.stopPropagation()
  const thisEl = e.target;

  if (thisEl.classList.contains('nav__open-sub-menu')) {
    thisEl.parentElement.classList.toggle('nav__item--active');
  }

  if (thisEl.classList.contains('burger-btn') || thisEl.classList.parentElement.contains('burger-btn')) {
    aside.classList.toggle('active');
  }
});

