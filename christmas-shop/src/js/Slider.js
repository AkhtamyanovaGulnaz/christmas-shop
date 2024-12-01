export function Slider() {
  let shift = 0;
  const sliderWidth = 1989;

  const slider = document.getElementById('slider');
  const buttonRight = document.getElementById('move-right');
  const buttonLeft = document.getElementById('move-left');
  const sliderContainer = document.querySelector('.slider-section__container');

  function getMaxShift() {
    const sliderContainerWidth = sliderContainer.offsetWidth;
    return sliderWidth - sliderContainerWidth;
  }

  let maxShift = getMaxShift();
  let shiftSize = window.innerWidth > 768 ? (maxShift / 3) : (maxShift / 6);

  const updateButtons = () => {
    (shift >= maxShift - 1) ? buttonRight.disabled = true : buttonRight.disabled = false;
    (shift <= 0) ? buttonLeft.disabled = true : buttonLeft.disabled = false;
  };

  updateButtons();

  buttonRight.addEventListener('click', () => {
    if (shift < maxShift - 1) {
      let moveDistance = shiftSize;
      if (shift + moveDistance > maxShift) {
        moveDistance = maxShift - shift;
      }
      
      shift += moveDistance;
      slider.style.left = -shift + 'px'; 
      updateButtons();
    }
  });

  buttonLeft.addEventListener('click', () => {
    if (shift > 0) {
      shift -= shiftSize;
      if (shift < 0) {
        shift = 0;
      }
      slider.style.left = -shift + 'px';
      updateButtons();
    }
  });

  const resize = () => {
    maxShift = getMaxShift(); 
    shiftSize = window.innerWidth > 768 ? Math.round(maxShift / 3) : Math.round(maxShift / 6);

    shift = 0;
    slider.style.left = -shift + 'px';
    updateButtons();
  };

  window.addEventListener('resize', resize);
}