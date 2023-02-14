let slide = document.querySelectorAll('.images');
let currentSlide = 0;

showSlide(currentSlide);

function showSlide (n) {
    let slide = document.querySelectorAll('.images');
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    
    slide[n].style.display = "block";
}

function nextSlide() {
    currentSlide++;

    if (currentSlide == slide.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;

    if (currentSlide == 0) {
        currentSlide = slide.length - 1;
    }    
    showSlide(currentSlide);
}

