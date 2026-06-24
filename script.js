const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobileMenu');

function closeMenu(){
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden','true');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.textContent = 'Menu';
}

menuButton.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'Fechar' : 'Menu';
});

document.querySelectorAll('.mobile-panel a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('keydown', event => {
  if(event.key === 'Escape') closeMenu();
});

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.fromTo(el, { y: 34, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: .85,
      ease: 'power3.out',
      delay: Math.min(i * .035, .18),
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });
}
