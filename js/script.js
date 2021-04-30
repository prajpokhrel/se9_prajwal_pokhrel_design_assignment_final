// Navigation for small devices
function open_navigation() {
    document.getElementById("overlay-nav").style.height = "100%";
}

function close_navigation() {
    document.getElementById("overlay-nav").style.height = "0%";
}


// Testimonials
let testimonialIndex = 1;
nextTestimonial(testimonialIndex);

function plusSlides(n) {
    nextTestimonial(testimonialIndex += n);
}

function nextTestimonial(n) {
    let i;
    let testimonialContainer = document.getElementsByClassName("testimonial-details");
    if (n > testimonialContainer.length) {testimonialIndex = 1}
    if (n < 1) {testimonialIndex = testimonialContainer.length}
    for (i = 0; i < testimonialContainer.length; i++) {
        testimonialContainer[i].style.display = "none";
    }
    testimonialContainer[testimonialIndex-1].style.display = "block";
}

