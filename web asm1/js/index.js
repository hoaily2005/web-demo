
//Slide
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.scention-slide .slide-show img');
    let dots = document.querySelectorAll('.dot');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    let slideShow = document.querySelector('.scention-slide .slide-show');
    slideShow.style.transform = `translateX(${-slideIndex * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === slideIndex) {
            dot.classList.add('active');
        }
    });
}
function toggleNavbar() {
    var navbarCollapse = document.getElementById('header_main');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.style.maxHeight = "0"; // Slide up
        navbarCollapse.style.transform = "scaleY(0)";
        setTimeout(function() {
            navbarCollapse.classList.remove('show');
        }, 300); 
    } else {
        navbarCollapse.style.maxHeight = "500px"; 
        navbarCollapse.style.transform = "scaleY(1)";
        navbarCollapse.classList.add('show');
    }
}



