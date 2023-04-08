const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenuElement = document.getElementById('mobile-menu');

function toggleMobileMenu() {
  /*
  const mobileMenuDisplay = mobileMenuElement.style.display;

  if (mobileMenuDisplay === 'none') {
    return mobileMenuElement.style.display = 'flex';
  }
  return mobileMenuElement.style.display = 'none';
  */

  mobileMenuElement.classList.toggle('open');
}

mobileMenuBtnElement.addEventListener('click', toggleMobileMenu);
