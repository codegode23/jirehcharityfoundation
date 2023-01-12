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
