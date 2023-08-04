const cartCheckbox = document.querySelector('.cart__checkbox');
const formBoxItems = document.querySelectorAll('.form-box');

if (cartCheckbox) {
  const cartItemCheckboxes = document.querySelectorAll('.cart-item__checkbox');

  cartCheckbox.addEventListener('click', function() {
    const cartCheckboxInput = cartCheckbox.querySelector('input');

    cartItemCheckboxes.forEach(el => {
      const input = el.querySelector('input');

      input.checked = cartCheckboxInput.checked;
    })
  })
}

if (formBoxItems.length > 0) {
  formBoxItems.forEach(el => {
    const input = el.querySelector('input');

    input.addEventListener('change', (e) => {
      const parent = input.closest('.form-boxes');
      const active = parent.querySelector('.form-box.is-active');

      if (active) {
        active.classList.remove('is-active');
      }

      if (input.closest('.form-box--expand')) {
        input.closest('.form-box').classList.add('is-active');
      }
    })
  })
}
