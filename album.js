const photoGallery = document.getElementById('photoGallery');

// Array of image URLs
const images = [
  'https://picsum.photos/seed/photo1/500/300',
  'https://picsum.photos/seed/photo2/500/300',
  'https://picsum.photos/seed/photo3/500/300',
  'https://picsum.photos/seed/photo4/500/300',
  'https://picsum.photos/seed/photo5/500/300',
  'https://picsum.photos/seed/photo6/500/300'
];

// Dynamically create photo elements
images.forEach(url => {
  const div = document.createElement('div');
  div.className = 'photo';
  const img = document.createElement('img');
  img.src = url;
  div.appendChild(img);
  photoGallery.appendChild(div);
});
