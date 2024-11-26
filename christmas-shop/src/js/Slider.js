export function Slider() {
  let shift = 0;
  const sliderWidth = 1993;
  let offset = 0;

  const slider = document.getElementById('slider');
  const buttonRight = document.getElementById('move-right');
  const buttonLeft = document.getElementById('move-left');

  function getMaxShift() {
    const windowWidth = window.innerWidth > 1440 ? 1440 : window.innerWidth;
    offset = window.innerWidth >= 1440 ? 164 : window.innerWidth > 768 ? 136 : 16;
    return sliderWidth - windowWidth + offset;
  }

  let maxShift = getMaxShift();
  let shifSize = window.innerWidth >= 768 ? Math.round(maxShift / 3) : Math.round(maxShift / 6);

  const updateButtons = () => {
    (shift >= maxShift - 1) ? buttonRight.disabled = true : buttonRight.disabled = false;
    (shift <= 0) ? buttonLeft.disabled = true : buttonLeft.disabled = false;
  };

  updateButtons();
  console.log(maxShift)
  buttonRight.addEventListener('click', () => {
    if (shift < maxShift - 1) {

      let moveDistance = shifSize;
      
      if (shift + moveDistance > maxShift + 1) {
        offset = window.innerWidth >= 768 && window.innerWidth < 1440 ? 124 : 0;
        moveDistance = maxShift - shift - offset;
      }

      shift += moveDistance;
      console.log(shift)
      slider.style.left = -shift + 'px'; 
      updateButtons();
    }
  });

  buttonLeft.addEventListener('click', () => {
    if (shift > 0) {
      shift -= shifSize;
      if (shift < 0) {
        shift = 0;
      }
      slider.style.left = -shift + 'px';
      console.log(shift)
      updateButtons();
    }
  });
}