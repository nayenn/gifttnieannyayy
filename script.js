var titleVisible = false;
var paperVisible = false;
var heartClicked = false;

function toggleTitle() {
    var title = document.getElementById("title");
    var heart = document.querySelector('.heart');
    var body = document.querySelector('body');
    var paper = document.querySelector('.paper');
    var loveLetter = document.getElementById("loveLetter");
    var imageContainer = document.querySelector('.image-container');

    if (!heartClicked) {
        heart.style.display = "none";
        heartClicked = true;
    }

    titleVisible = true;

    title.style.opacity = "1";
    body.style.backgroundColor = "#e8d4bb";
    paper.style.display = "block";
    imageContainer.style.display = "flex";
}

function togglePaper() {
    var paper = document.querySelector('.paper');
    paperVisible = !paperVisible;
    paper.style.display = paperVisible ? 'block' : 'none';
}
