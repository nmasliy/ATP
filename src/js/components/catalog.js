const catalogMenu = document.querySelector('.catalog-menu');

catalogMenu?.addEventListener('click', (e) => {
  const link = e.target.closest('.submenu > a');

  if (link) {
    e.preventDefault();
    link.closest('.submenu').classList.toggle('is-active');
    console.log(link);
  }
})
