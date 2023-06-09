import AnimateElement from './AnimateElement';

export function initAccordion(triggerSelector, parentSelector) {
  const triggerNodes = document.querySelectorAll(triggerSelector);

  if (!triggerNodes.length > 0) return;

  triggerNodes.forEach((el) => {
    el.addEventListener('click', function () {
      const parentNode = el.closest(parentSelector);

      parentNode.classList.toggle('is-active');
    });
  });
}

export function initAccordionAnimated(triggerSelector, parentSelector, contentSelector) {
  const triggerNodes = document.querySelectorAll(triggerSelector);

  if (!triggerNodes.length > 0) return;

  triggerNodes.forEach((el) => {
    el.addEventListener('click', function () {
      const parentNode = el.closest(parentSelector);

      AnimateElement.toggle(
        parentNode.querySelector(contentSelector),
        { opacity: 0, height: 0 },
        { opacity: 1, height: 'auto' },
        0.3
      );

      parentNode.classList.toggle('is-active');
    });
  });
}
