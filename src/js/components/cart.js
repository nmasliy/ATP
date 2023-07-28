const cartCheckbox = document.querySelector('.cart__checkbox');

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
