document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('closeBtn');

  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('show');
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('show');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('show');
    }
  });
});
