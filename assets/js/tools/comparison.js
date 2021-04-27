let comparison = document.querySelector('.js-comparison'),
  divisor = document.querySelector('.js-comparison__after'),
  handle = document.querySelector('.js-comparison__handle'),
  slider = document.querySelector('.js-comparison__range');

if (comparison) {
  function moveDivisor() {
    handle.style.left = `calc(${slider.value}% - 1px)`;
    divisor.style.width = slider.value + '%';
  }

  slider.addEventListener('input', () => {
    moveDivisor();
  });

  window.onload = function() {
    moveDivisor();
  };
}