const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('ul');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

galleryImages.forEach(img => { 
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    caption.textContent = img.dataset.title || img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


