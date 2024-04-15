console.log("Your index.js file is loaded correctly!");


// Activate scrollspy on your sidebar navigation
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#sidemenu', // ID of your sidebar element
  offset: 200, // Offset from the top to trigger the change
});



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

