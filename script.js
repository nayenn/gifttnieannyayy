document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.querySelector('button.learn-more');
  const largePolaroidContainers = document.querySelectorAll('.large-polaroid-container .large-polaroid');
  const largeCaption = document.getElementById('large-caption-1');
  const smallPolaroidContainer = document.querySelector('.small-polaroid-container');
  const smallPolaroids = document.querySelectorAll('.small-polaroid-container .polaroid');
  const smallPolaroidButtons = document.querySelectorAll('button.small-polaroid-button');

  largeCaption.textContent = '';

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

      setTimeout(() => {
        typeEffect(largeCaption, "Look Bebuu");

        setTimeout(() => {
          transitionImages();
          typeEffect(largeCaption, "This is literally us..");

          setTimeout(() => {
            typeEffect(largeCaption, "Anyways....");

            setTimeout(() => {
              transitionImages(true);
              typeEffect(largeCaption, "Press one of the Polaroid Images bebu, and dw it doesn't matter which one u press it's gonna have the same result hihi");
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
        smallPolaroidButtons.forEach(button => {
        button.style.display = 'block'; // Show the new buttons
        });

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
        images[0].classList.add('visible');
        images[1].classList.remove('visible');
        images[1].classList.add('hidden');
      } else {
        images[0].classList.remove('visible');
        images[0].classList.add('hidden');
        images[1].classList.remove('hidden');
        images[1].classList.add('visible');
      }
    });
  }
});

