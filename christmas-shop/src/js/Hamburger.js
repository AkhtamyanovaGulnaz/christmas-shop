export function Hamburger() {
  const hamburgerButton = document.querySelector('.hamburger');
  const mobileNavigation = document.querySelector('.mobile-navigation');
  const mobileNavigationLink = document.querySelectorAll('.mobile-navigation__link');

  hamburgerButton.addEventListener('click', () => {
    if (!hamburgerButton.classList.contains('close')) {
      mobileNavigation.style.left = 0
      hamburgerButton.classList.add('close');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNavigation.style.left = '769px';
      hamburgerButton.classList.remove('close');
      document.body.style.overflow = 'visible';
    }
  })

  mobileNavigationLink.forEach(nav => {
    nav.addEventListener('click', () => {
      mobileNavigation.style.left = '769px';
      hamburgerButton.classList.remove('close');
      document.body.style.overflow = 'visible';
    })
  })
}