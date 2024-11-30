export function Scroll() {
  const buttonUp = document.getElementById('move-up');

  addEventListener('scroll', () => {
    window.scrollY > 300 ? buttonUp.classList.add('active') : buttonUp.classList.remove('active');
  })
}