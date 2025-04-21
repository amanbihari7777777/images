const photoGallery = document.getElementById('photoGallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('closeLightbox');

// Array of image objects with captions
const images = [
  { src: 'Img/1.jpg', caption: 'Beautifull Mountains' },
  { src: 'Img/2.jpg', caption: 'Dam in Mountains' },
  { src: 'Img/3.jpg', caption: 'Mountains' }
];

// Generate gallery
images.forEach(({ src, caption: imgCaption }) => {
  const div = document.createElement('div');
  div.className = 'photo';
  const img = document.createElement('img');
  img.src = src;
  img.alt = imgCaption;

  // Append to gallery
  div.appendChild(img);
  photoGallery.appendChild(div);

  // Lightbox click
  div.addEventListener('click', () => {
    lightboxImg.src = src;
    caption.textContent = imgCaption;
    lightbox.style.display = 'flex';
  });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
