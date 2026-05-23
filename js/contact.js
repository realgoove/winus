'use strict';

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '送信しました ✓';
  btn.disabled = true;
  btn.style.background = '#2d7a45';
  e.target.reset();
});
