// Handle file upload for both Remove Background and Change Background
document.getElementById('file-upload').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const output = document.getElementById('output');
    output.innerHTML = '';

    if (file.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.style.maxWidth = '100%';
      output.appendChild(img);
    } else if (file.type.startsWith('video/')) {
      const video = document.createElement('video');
      video.src = URL.createObjectURL(file);
      video.controls = true;
      video.style.maxWidth = '100%';
      output.appendChild(video);
    } else {
      output.innerHTML = '<p>Unsupported file type. Please upload an image or video.</p>';
    }
  }
});

// Change background functionality
function changeBackground(background) {
  const output = document.getElementById('output');
  const media = output.querySelector('img, video');
  if (media) {
    media.style.backgroundColor = background === 'beach' ? '#87CEEB' :
                                  background === 'city' ? '#A9A9A9' :
                                  background === 'forest' ? '#228B22' : 'transparent';
  }
}
