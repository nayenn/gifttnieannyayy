var titleVisible = false;
var imagesVisible = false;

function toggleTitle() {
    var title = document.getElementById("title");
    var heart = document.querySelector('.heart');
    var body = document.querySelector('body');
    var imageContainer = document.getElementById("imageContainer");

    titleVisible = !titleVisible;

    if (titleVisible) {
        title.style.opacity = "1";
        body.style.backgroundColor = "#e8d4bb";
    } else {
        title.style.opacity = "0";
        body.style.backgroundColor = "transparent";
        if (!imagesVisible) {
            imageContainer.style.display = "flex"; // Show images only if they were initially hidden
        }
    }

    heart.style.opacity = "0";
    toggleImages(); // Toggle the image visibility along with the title
}

function toggleImages() {
    var imageContainer = document.getElementById("imageContainer");
    imagesVisible = !imagesVisible;
    imageContainer.style.display = imagesVisible ? 'flex' : 'none';
}
