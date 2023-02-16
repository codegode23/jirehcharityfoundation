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




//Script for the story section

$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "0%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "15%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "30%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "45%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "60%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});

$(".step06").click( function() {
	$("#line-progress").css("width", "75%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});

$(".step07").click( function() {
	$("#line-progress").css("width", "90%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});

$(".step08").click( function() {
	$("#line-progress").css("width", "105%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});

 

 //gallery section starts

//  let fullimgBox = document.getElementById("fullimgBox");
//  let fullimg = document.getElementById("fullimg");


// function openFullimg(pick){
//     fullimgBox.style.display = "flex";
//     fullimg.src = pick;
// }

// function closeFullimg(pick){
//     fullimgBox.style.display = "none";
// }

//gallery section ends