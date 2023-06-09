const selects = document.querySelectorAll('.form-select select');

selects?.forEach((select) => {
  const form = select.closest('form');

  initSelects();

  if (form) {
    form.addEventListener('reset', (e) => {
      const isOptionWithPlaceholder =  Array.from(select.options).some(option => option.dataset.placeholder);

      if (isOptionWithPlaceholder) {
        select.classList.add('is-placeholder');
      }
    })
  }

  select.addEventListener('change', (e) => {
    const selected = e.target.options[e.target.selectedIndex];

    if (selected.dataset.placeholder) {
      select.classList.add('is-placeholder');
    } else {
      select.classList.remove('is-placeholder');
    }
  });

  function initSelects() {
    const selected = select[select.selectedIndex];

    if (selected.dataset.placeholder) {
      select.classList.add('is-placeholder');
    } else {
      select.classList.remove('is-placeholder');
    }
  }
});
