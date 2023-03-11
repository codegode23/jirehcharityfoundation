//Menu toggle
const menu = document.querySelector("#menu-bar");
    const navbar = document.querySelector(".navigation");

    menu.addEventListener('click', () =>{
        menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    });

    
//for the video slider

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){

    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

   slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    btns[manual].classList.add("active");
   slides[manual].classList.add("active");
   contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
btn.addEventListener("click", () =>{
    sliderNav(i);
});
});

 

//Reveal on Scroll

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealtop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    } 
}


