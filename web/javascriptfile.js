var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    // get css classes
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");


    if (n > slides.length) {slideIndex = 1}

    //
    if (n < 1) {slideIndex = slides.length}

    // get only one image
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // go through each slide?
    for (i = 1; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//-----Hide and show------//

function ScheduleShow(id) {
    var x = document.getElementById(id);

    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

