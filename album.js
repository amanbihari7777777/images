const photoGallery = document.getElementById('photoGallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Image sources from Img/ folder
const images = ['Img/1.jpg', 'Img/2.jpg', 'Img/3.jpg'];

images.forEach(src => {
  const div = document.createElement('div');
  div.className = 'photo';
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Photo Album";
  div.appendChild(img);
  photoGallery.appendChild(div);

  // Lightbox trigger
  div.addEventListener('click', () => {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
