const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-section > .project-grid .project-card');
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
}));

const dialog = document.querySelector('#video-dialog');
const player = dialog.querySelector('video');
const title = dialog.querySelector('#dialog-title');
const note = dialog.querySelector('#preview-note');
document.querySelectorAll('[data-video]').forEach(button => button.addEventListener('click', () => {
  title.textContent = button.dataset.title;
  note.textContent = button.dataset.audio === 'none' ? 'Source clip has no audio' : 'Preview with sound';
  player.src = button.dataset.video;
  dialog.showModal();
  player.play().catch(() => {});
}));
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { player.pause(); player.removeAttribute('src'); player.load(); });
document.querySelector('#year').textContent = new Date().getFullYear();
