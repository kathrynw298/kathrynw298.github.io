console.log("Your index.js file is loaded correctly!");




// Activate scrollspy on your sidebar navigation
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#sidemenu', // ID of your sidebar element
  offset: 200, // Offset from the top to trigger the change
});

AOS.init({
  duration: 1200,
})

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#BA441B';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '#FE5D26';
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
