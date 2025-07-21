function showPopup(type) {
  const popup = document.getElementById('popup');
  const title = document.getElementById('popup-title');
  const desc = document.getElementById('popup-description');

  popup.style.display = 'flex';

  if (type === 'call') {
    title.textContent = 'Book a Free Strategy Call';
    desc.textContent = 'Speak 1-on-1 with our Amazon PPC experts. Ask questions, get feedback, and explore custom strategies for your brand.';
  } else {
    title.textContent = 'Request a Free Audit';
    desc.textContent = 'We’ll review your current Amazon ad setup and send back a short report with key optimizations and missed opportunities.';
  }
}


function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

window.onclick = (e) => {
  if (e.target.id === 'popup') closePopup();
};

// Slider functionality
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showSlide(index) {
  const offset = index * 100;
  slides.style.transform = `translateX(-${offset}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Slide every 5 seconds
