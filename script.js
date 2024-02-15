var titleVisible = false;

function toggleTitle() {
    var title = document.getElementById("title");
    var heart = document.querySelector('.heart');
    var body = document.querySelector('body');
    var paper = document.querySelector('.paper');
  
    titleVisible = !titleVisible;

    if (titleVisible) {
        title.style.opacity = "1";
        body.style.backgroundColor = "#e8d4bb";
    } else {
        title.style.opacity = "0";
        body.style.backgroundColor = "transparent";
    }
  
    heart.style.opacity = "0";
    paper.style.display = "block";
}

function togglePaper() {
    var paper = document.querySelector('.paper');
    paper.style.display = (paper.style.display === 'block') ? 'none' : 'block';
}