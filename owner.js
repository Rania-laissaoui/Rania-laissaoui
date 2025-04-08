
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
document.getElementById("nextBtn").addEventListener("click", function () {
    document.getElementById("personalPage").style.display = "none";
    document.getElementById("storePage").style.display = "block";
});

document.getElementById("backBtn").addEventListener("click", function () {
    document.getElementById("storePage").style.display = "none";
    document.getElementById("personalPage").style.display = "block";
});

document.getElementById("storeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("storePage").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
});
const fileInput = document.getElementById("idUpload");
const fileNameDisplay = document.getElementById("file-name");

// Update the file name when a file is selected
fileInput.addEventListener("change", function() {
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
    } else {
        fileNameDisplay.textContent = "No file chosen";
    }
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