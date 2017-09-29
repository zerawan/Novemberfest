

//---------Slideshow----------//

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
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");


    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 1; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//-----Hide and show------//

function ScheduleShow(id) {
    var x = document.getElementById(id);

    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}


//-----Google maps-----//

function loadMap() {
    var mapOptions = {center:new google.maps.LatLng(52.219883, 6.877594), zoom:15};
    var map = new google.maps.Map(document.getElementById("plaats"), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(52.219883, 6.877594),
        map: map,
        draggable:true,
        animation:google.maps.Animation.BOUNCE
    });
}

//-----Responsive-----//

function responsiveMenu() {
    var x = document.getElementById("responseMenu");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}








