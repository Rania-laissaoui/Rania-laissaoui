// start header
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeSearch = document.querySelector('#close');

searchIcon.onclick = () => {
    searchForm.style.top = "0";  // Show the search form
};

closeSearch.onclick = () => {
    searchForm.style.top = "-110%"; // Hide the search form
};

// end header 

// start content 

let slides = document.querySelectorAll('.Stores-slider .slide');
let index = 0;

slides[index].classList.add('active');
function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length; 
    slides[index].classList.add('active');
}
function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// 

document.addEventListener("DOMContentLoaded", function () {
    const showButtons = document.querySelectorAll(".ll"); // Show Form Buttons
    const hideButton = document.querySelector(".xx"); // Close Button
    const section = document.querySelector(".sectionn");

    // Show Form when clicking "Show" buttons
    showButtons.forEach(button => {
        button.addEventListener("click", function () {
            section.style.visibility = "visible";
            section.style.opacity = "1";
            document.body.style.overflow = "hidden"; // Prevents background scrolling
        });
    });

    // Hide Form when clicking "Close" button
    hideButton.addEventListener("click", function () {
        section.style.opacity = "0";
        setTimeout(() => {
            section.style.visibility = "hidden";
            document.body.style.overflow = "auto"; // Restore scrolling
        }, 300);
    });
});

// 
let buyButton = document.querySelector(".buttonn");  
let cartCounter = document.querySelector(".fa-shopping-cart");  
let count = 0;  

function updateCartCounter() {  
    cartCounter.textContent = count;  
}  

buyButton.addEventListener("click", function() {  
    count++;  
    updateCartCounter();  
});  

let favs = document.querySelectorAll(".add-fav");  
let favCounter = document.querySelector(".fa-heart");  
let favCount = 0;  

function updateFavCounter() {  
    favCounter.textContent = favCount;  
}  

favs.forEach(fav => {  
    fav.addEventListener("click", function() {  
        favCount++;  
        updateFavCounter();  
    });  
});
document.addEventListener('DOMContentLoaded', function () {
    const link = document.querySelector('.us');
    const footer = document.getElementById('footer');
  
    if (link && footer) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        footer.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
