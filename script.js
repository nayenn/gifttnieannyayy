document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.querySelector('button.learn-more');
  const largePolaroidContainers = document.querySelectorAll('.large-polaroid-container .large-polaroid');
  const largeCaption = document.getElementById('large-caption-1');
  const smallPolaroidContainer = document.querySelector('.small-polaroid-container');
  const smallPolaroids = document.querySelectorAll('.small-polaroid-container .polaroid');

  // Ensure the large caption is empty initially
  largeCaption.textContent = '';

  button.addEventListener('click', function() {
    this.style.transform = 'scale(0)';
    this.style.opacity = '0';

    setTimeout(() => {
      this.style.display = 'none';

      // Display the large polaroid container
      largePolaroidContainers.forEach(polaroid => {
        polaroid.parentNode.style.display = 'flex';
        setTimeout(() => {
          polaroid.style.opacity = '1';
        }, 10);
      });

      // Display the "Look Bebuu" caption
      setTimeout(() => {
        typeEffect(largeCaption, "Look Bebuu");

        // Transition the images after 4 seconds
        setTimeout(() => {
          transitionImages();
          typeEffect(largeCaption, "This is literally us..");

          // Transition the caption after another 4 seconds
          setTimeout(() => {
            typeEffect(largeCaption, "Anyways....");

            // Transition back to the original images after another 4 seconds
            setTimeout(() => {
              transitionImages(true);
              typeEffect(largeCaption, "Large Caption");
            }, 4000);
          }, 4000);
        }, 4000);
      }, 1200); 
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

  function typeEffect(element, newText) {
    element.textContent = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < newText.length) {
        element.textContent += newText.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  function transitionImages(reverse = false) {
    largePolaroidContainers.forEach(polaroid => {
      const images = polaroid.querySelectorAll('img');
      if (reverse) {
        images[0].classList.remove('hidden');
        images[1].classList.add('hidden');
      } else {
        images[0].classList.add('hidden');
        images[1].classList.remove('hidden');
      }
    });
  }
});
