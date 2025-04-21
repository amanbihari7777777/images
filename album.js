const photoGallery = document.getElementById('photoGallery');

// Array of image file names
const images = ['1.jpg', '2.jpg', '3.jpg'];

// Dynamically create photo elements
images.forEach(url => {
  const div = document.createElement('div');
  div.className = 'photo';
  const img = document.createElement('img');
  img.src = url;
  img.alt = "Photo Album Image";
  div.appendChild(img);
  photoGallery.appendChild(div);
});
