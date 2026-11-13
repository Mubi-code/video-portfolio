/* This file adds behaviour: animations, menu, and YouTube videos. */

// 1) SCROLL REVEAL: fade elements in when they enter the screen
const items = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.15 });
items.forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.1 + 's'; // small stagger between neighbours
  observer.observe(el);
});

// 2) NAV: progress bar + background after scrolling
const progress = document.getElementById('progress');
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (window.scrollY / max) * 100 + '%';
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// 3) MOBILE MENU
const links = document.getElementById('links');
document.getElementById('menuBtn').addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', () => links.classList.remove('open')); // close after choosing

// 4) YOUTUBE: turn each card's link into a thumbnail + pop-up player
function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : null; // null = placeholder / not a valid link yet
}
const modal = document.getElementById('modal');
const frame = document.getElementById('frame');

document.querySelectorAll('.card').forEach((card) => {
  const id = getYouTubeId(card.dataset.video);
  const thumb = card.querySelector('.thumb');
  if (!id) { thumb.classList.add('empty'); return; } // still a placeholder
  thumb.style.backgroundImage = `url(https://img.youtube.com/vi/${id}/hqdefault.jpg)`;
  card.addEventListener('click', () => {
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
    modal.classList.add('open');
  });
});
function closeModal() { modal.classList.remove('open'); frame.innerHTML = ''; } // emptying stops the video
document.getElementById('close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// 5) TIMECODE: counts up like an editing timeline (hours:minutes:seconds:frames)
const tc = document.getElementById('timecode');
let frames = 0;
setInterval(() => {
  frames++;
  const f = frames % 24, s = Math.floor(frames / 24) % 60, m = Math.floor(frames / 1440) % 60, h = Math.floor(frames / 86400);
  tc.textContent = [h, m, s, f].map((n) => String(n).padStart(2, '0')).join(':');
}, 1000 / 24);

// 6) FOOTER YEAR
document.getElementById('year').textContent = new Date().getFullYear();
