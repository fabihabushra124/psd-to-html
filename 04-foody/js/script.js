const counts = document.querySelectorAll('.count');
document.addEventListener('DOMContentLoaded', () => {
  counts.forEach((count) => {
    count.textContent = '0';
    const num = 700;
    const incrementFunc = () => {
      const countNum = +count.textContent;
      const targetNum = +count.getAttribute('data-count');
      const increment = targetNum / num;

      if (countNum < targetNum) {
        count.textContent = Math.ceil(countNum + increment);
        setTimeout(incrementFunc, 10);
      } else {
        count.textContent = targetNum;
      }
    };

    incrementFunc();
  });
});

$(document).ready(function () {
  $('.slider').bxSlider();
  $('#nav').meanmenu({
    meanMenueContainer: '#mobileNav',
    meanScreenWidth: 991,
  });
});
