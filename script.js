var titleVisible = false;
var paperVisible = false;

function toggleTitle() {
    var title = document.getElementById("title");
    var heart = document.querySelector('.heart');
    var body = document.querySelector('body');
    var paper = document.querySelector('.paper');
    var loveLetter = document.getElementById("loveLetter");
    var imageContainer = document.querySelector('.image-container');

    titleVisible = !titleVisible;

    if (titleVisible) {
        title.style.opacity = "1";
        body.style.backgroundColor = "#e8d4bb";
        paper.style.display = "none"; // Hide paper when title is shown
        imageContainer.style.display = "flex"; // Show image container
    } else {
        title.style.opacity = "0";
        body.style.backgroundColor = "transparent";
        if (!paperVisible) {
            paper.style.display = "block"; // Show paper only if it was initially hidden
            imageContainer.style.display = "none"; // Hide image container
        }
    }

    heart.style.opacity = "0";
    togglePaper(); // Toggle the love letter visibility along with the title
}

function togglePaper() {
    var paper = document.querySelector('.paper');
    paperVisible = !paperVisible;
    paper.style.display = paperVisible ? 'block' : 'none';
}
