const hero = document.querySelector('.hero');
if (!hero) return;

// 마우스 시차(parallax) + 커서 글로우
hero.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 16;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  hero.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;

  const rect = hero.getBoundingClientRect();
  hero.style.setProperty('--cx', `${e.clientX - rect.left}px`);
  hero.style.setProperty('--cy', `${e.clientY - rect.top}px`);
});

hero.addEventListener('mouseleave', () => {
  hero.style.backgroundPosition = 'center center';
  hero.style.setProperty('--cx', '50%');
  hero.style.setProperty('--cy', '50%');
});
