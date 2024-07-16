document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.querySelector('button.learn-more');
  const largePolaroidContainers = document.querySelectorAll('.large-polaroid-container .large-polaroid');
  const largeCaption = document.getElementById('large-caption-1');
  const smallPolaroidContainer = document.querySelector('.small-polaroid-container');
  const smallPolaroids = document.querySelectorAll('.small-polaroid-container .polaroid');

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
          largePolaroidContainers.forEach(polaroid => {
            const imgs = polaroid.querySelectorAll('.large-img');
            imgs[0].classList.add('hidden');
            imgs[1].classList.remove('hidden');
          });
          typeEffect(largeCaption, "This is literally us..");

          setTimeout(() => {
            typeEffect(largeCaption, "Anyways....");

            setTimeout(() => {
              largePolaroidContainers.forEach(polaroid => {
                const imgs = polaroid.querySelectorAll('.large-img');
                imgs[1].classList.add('hidden');
                imgs[0].classList.remove('hidden');
              });
              typeEffect(largeCaption, "Press one of the polaroids, it'll have the same result dww");
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
    // Clear existing text
    element.textContent = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < newText.length) {
        element.textContent += newText[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); 
  }
});
