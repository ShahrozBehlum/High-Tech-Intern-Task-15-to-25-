// Modal logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const viewBtns = document.querySelectorAll('.view-btn');
const closeBtn = document.querySelector('.close');

viewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const imgSrc = btn.getAttribute('data-img');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Scroll to top logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
