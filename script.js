document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.querySelector('button.learn-more');
  const largePolaroidContainers = document.querySelectorAll('.large-polaroid-container .large-polaroid');
  const largeCaption = document.getElementById('large-caption-1');
  const smallPolaroidContainer = document.querySelector('.small-polaroid-container');
  const smallPolaroids = document.querySelectorAll('.small-polaroid-container .polaroid');

  button.addEventListener('click', function() {
    this.style.transform = 'scale(0)';
    this.style.opacity = '0';

    setTimeout(() => {
      this.style.display = 'none';
      largePolaroidContainers.forEach(polaroid => {
        polaroid.parentNode.style.display = 'flex';
        setTimeout(() => {
          polaroid.style.opacity = '1';
        }, 10);
      });
      largeCaption.style.opacity = '1';
    }, 500);
  });

  largePolaroidContainers.forEach(polaroid => {
    polaroid.addEventListener('click', function() {
      polaroid.style.opacity = '0';
      largeCaption.style.opacity = '0';

      setTimeout(() => {
        polaroid.parentNode.style.display = 'none';
        smallPolaroidContainer.style.display = 'flex';

        setTimeout(() => {
          smallPolaroids.forEach(smallPolaroid => {
            smallPolaroid.style.width = '300px';
            smallPolaroid.style.height = 'auto';
            smallPolaroid.style.opacity = '1';
          });
        }, 10);
      }, 500);
    });
  });
});
